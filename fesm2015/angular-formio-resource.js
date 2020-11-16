import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵinject, ApplicationRef, Optional, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵtemplate, ɵɵadvance, ɵɵproperty, Component, ɵɵlistener, ɵɵnextContext, ɵɵtextInterpolate1, ChangeDetectorRef, NgZone, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { FormioAlerts, FormioPromiseService, FormioAppConfig, FormioComponent, FormioAlertsComponent, extendRouter, FormioModule } from 'angular-formio';
import Promise from 'native-promise-only';
import { Formio, Utils } from 'formiojs';
import _, { each } from 'lodash';
import { ActivatedRoute, RouterLinkWithHref, RouterLinkActive, RouterOutlet, Router, RouterModule } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { FormioGridComponent, FormioGrid } from 'angular-formio/grid';

class FormioResourceConfig {
    constructor() {
        this.name = '';
        this.form = '';
        this.parents = [];
    }
}
FormioResourceConfig.ɵfac = function FormioResourceConfig_Factory(t) { return new (t || FormioResourceConfig)(); };
FormioResourceConfig.ɵprov = ɵɵdefineInjectable({ token: FormioResourceConfig, factory: FormioResourceConfig.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceConfig, [{
        type: Injectable
    }], null, null); })();

class FormioResources {
    constructor(auth) {
        this.auth = auth;
        this.resources = {};
        this.error = new EventEmitter();
        this.onError = this.error;
        this.resources = {
            currentUser: {
                resourceLoaded: this.auth.userReady
            }
        };
    }
}
FormioResources.ɵfac = function FormioResources_Factory(t) { return new (t || FormioResources)(ɵɵinject(FormioAuthService)); };
FormioResources.ɵprov = ɵɵdefineInjectable({ token: FormioResources, factory: FormioResources.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResources, [{
        type: Injectable
    }], function () { return [{ type: FormioAuthService }]; }, null); })();

class FormioResourceService {
    constructor(appConfig, config, resourcesService, appRef) {
        this.appConfig = appConfig;
        this.config = config;
        this.resourcesService = resourcesService;
        this.appRef = appRef;
        this.initialized = false;
        this.isLoading = true;
        this.alerts = new FormioAlerts();
        this.refresh = new EventEmitter();
        this.formLoaded = new Promise((resolve, reject) => {
            this.formResolve = resolve;
            this.formReject = reject;
        });
        this.init();
    }
    initialize() {
        console.warn('FormioResourceService.initialize() has been deprecated.');
    }
    init() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
            Formio.formOnly = this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        // Create the form url and load the resources.
        this.formUrl = this.appConfig.appUrl + '/' + this.config.form;
        this.resource = { data: {} };
        // Add this resource service to the list of all resources in context.
        if (this.resourcesService) {
            this.resources = this.resourcesService.resources;
            this.resources[this.config.name] = this;
        }
        return this.loadForm();
    }
    onError(error) {
        this.alerts.setAlert({
            type: 'danger',
            message: error.message || error
        });
        if (this.resourcesService) {
            this.resourcesService.error.emit(error);
        }
        throw error;
    }
    onFormError(err) {
        this.formReject(err);
        this.onError(err);
    }
    setContext(route) {
        this.resourceId = route.snapshot.params['id'];
        this.resource = { data: {} };
        this.resourceUrl = this.appConfig.appUrl + '/' + this.config.form;
        if (this.resourceId) {
            this.resourceUrl += '/submission/' + this.resourceId;
        }
        this.formio = new FormioPromiseService(this.resourceUrl);
        if (this.resourcesService) {
            this.resources[this.config.name] = this;
        }
        this.loadParents();
    }
    loadForm() {
        this.formFormio = new FormioPromiseService(this.formUrl);
        this.isLoading = true;
        this.formLoading = this.formFormio
            .loadForm()
            .then((form) => {
            this.form = form;
            this.formResolve(form);
            this.isLoading = false;
            this.loadParents();
            return form;
        }, (err) => this.onFormError(err))
            .catch((err) => this.onFormError(err));
        return this.formLoading;
    }
    loadParents() {
        if (!this.config.parents || !this.config.parents.length) {
            return Promise.resolve([]);
        }
        if (!this.resourcesService) {
            console.warn('You must provide the FormioResources within your application to use nested resources.');
            return Promise.resolve([]);
        }
        return this.formLoading.then((form) => {
            // Iterate through the list of parents.
            const _parentsLoaded = [];
            this.config.parents.forEach((parent) => {
                const resourceName = parent.resource || parent;
                const resourceField = parent.field || parent;
                const filterResource = parent.hasOwnProperty('filter') ? parent.filter : true;
                if (this.resources.hasOwnProperty(resourceName) && this.resources[resourceName].resourceLoaded) {
                    _parentsLoaded.push(this.resources[resourceName].resourceLoaded.then((resource) => {
                        let parentPath = '';
                        Utils.eachComponent(form.components, (component, path) => {
                            if (component.key === resourceField) {
                                component.hidden = true;
                                component.clearOnHide = false;
                                _.set(this.resource.data, path, resource);
                                parentPath = path;
                                return true;
                            }
                        });
                        return {
                            name: parentPath,
                            filter: filterResource,
                            resource
                        };
                    }));
                }
            });
            // When all the parents have loaded, emit that to the onParents emitter.
            return Promise.all(_parentsLoaded).then((parents) => {
                this.refresh.emit({
                    form: form,
                    submission: this.resource
                });
                return parents;
            });
        });
    }
    onSubmissionError(err) {
        this.onError(err);
    }
    loadResource(route) {
        this.setContext(route);
        this.isLoading = true;
        this.resourceLoading = this.resourceLoaded = this.formio
            .loadSubmission(null, { ignoreCache: true })
            .then((resource) => {
            this.resource = resource;
            this.isLoading = false;
            this.refresh.emit({
                property: 'submission',
                value: this.resource
            });
            return resource;
        }, (err) => this.onSubmissionError(err))
            .catch((err) => this.onSubmissionError(err));
        return this.resourceLoading;
    }
    save(resource) {
        const formio = resource._id ? this.formio : this.formFormio;
        return formio
            .saveSubmission(resource)
            .then((saved) => {
            this.resource = saved;
            return saved;
        }, (err) => this.onError(err))
            .catch((err) => this.onError(err));
    }
    remove() {
        return this.formio
            .deleteSubmission()
            .then(() => {
            this.resource = null;
        }, (err) => this.onError(err))
            .catch((err) => this.onError(err));
    }
}
FormioResourceService.ɵfac = function FormioResourceService_Factory(t) { return new (t || FormioResourceService)(ɵɵinject(FormioAppConfig), ɵɵinject(FormioResourceConfig), ɵɵinject(FormioResources, 8), ɵɵinject(ApplicationRef)); };
FormioResourceService.ɵprov = ɵɵdefineInjectable({ token: FormioResourceService, factory: FormioResourceService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceService, [{
        type: Injectable
    }], function () { return [{ type: FormioAppConfig }, { type: FormioResourceConfig }, { type: FormioResources, decorators: [{
                type: Optional
            }] }, { type: ApplicationRef }]; }, null); })();

function FormioResourceComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵelementStart(1, "a", 7);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function FormioResourceComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵelementStart(1, "a", 8);
    ɵɵelement(2, "span", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class FormioResourceComponent {
    constructor(service, route, auth) {
        this.service = service;
        this.route = route;
        this.auth = auth;
        this.perms = { delete: false, edit: false };
        // subscribe to the route param changes, so that we could re-load the submission if navigation happens from one submission to another
        this.paramsSubscription = this.route.params.subscribe((params) => {
            this.init();
        });
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.service.loadResource(this.route);
        this.service.formLoaded.then((form) => {
            this.auth.ready.then(() => {
                this.service.resourceLoaded.then((resource) => {
                    this.service.formFormio.userPermissions(this.auth.user, form, resource).then((perms) => {
                        this.perms.delete = perms.delete;
                        this.perms.edit = perms.edit;
                    });
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
}
FormioResourceComponent.ɵfac = function FormioResourceComponent_Factory(t) { return new (t || FormioResourceComponent)(ɵɵdirectiveInject(FormioResourceService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormioAuthService)); };
FormioResourceComponent.ɵcmp = ɵɵdefineComponent({ type: FormioResourceComponent, selectors: [["ng-component"]], decls: 10, vars: 2, consts: [[1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function FormioResourceComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ul", 0);
        ɵɵelementStart(1, "li", 1);
        ɵɵelementStart(2, "a", 2);
        ɵɵelement(3, "i", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "li", 4);
        ɵɵelementStart(5, "a", 5);
        ɵɵtext(6, "View");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, FormioResourceComponent_li_7_Template, 3, 0, "li", 6);
        ɵɵtemplate(8, FormioResourceComponent_li_8_Template, 3, 0, "li", 6);
        ɵɵelementEnd();
        ɵɵelement(9, "router-outlet");
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("ngIf", ctx.perms.edit);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.perms.delete);
    } }, directives: [RouterLinkWithHref, RouterLinkActive, NgIf, RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceComponent, [{
        type: Component,
        args: [{
                templateUrl: './resource.component.html'
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ActivatedRoute }, { type: FormioAuthService }]; }, null); })();

class FormioResourceViewComponent {
    constructor(service, config) {
        this.service = service;
        this.config = config;
    }
}
FormioResourceViewComponent.ɵfac = function FormioResourceViewComponent_Factory(t) { return new (t || FormioResourceViewComponent)(ɵɵdirectiveInject(FormioResourceService), ɵɵdirectiveInject(FormioResourceConfig)); };
FormioResourceViewComponent.ɵcmp = ɵɵdefineComponent({ type: FormioResourceViewComponent, selectors: [["ng-component"]], decls: 1, vars: 5, consts: [[3, "form", "submission", "refresh", "hideComponents", "readOnly"]], template: function FormioResourceViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "formio", 0);
    } if (rf & 2) {
        ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("hideComponents", ctx.config.parents)("readOnly", true);
    } }, directives: [FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceViewComponent, [{
        type: Component,
        args: [{
                templateUrl: './view.component.html'
            }]
    }], function () { return [{ type: FormioResourceService }, { type: FormioResourceConfig }]; }, null); })();

class FormioResourceEditComponent {
    constructor(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.triggerError = new EventEmitter();
    }
    onSubmit(submission) {
        const edit = this.service.resource;
        edit.data = submission.data;
        this.service.save(edit)
            .then(() => {
            this.router.navigate(['../', 'view'], { relativeTo: this.route });
        })
            .catch((err) => this.triggerError.emit(err));
    }
}
FormioResourceEditComponent.ɵfac = function FormioResourceEditComponent_Factory(t) { return new (t || FormioResourceEditComponent)(ɵɵdirectiveInject(FormioResourceService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(FormioResourceConfig)); };
FormioResourceEditComponent.ɵcmp = ɵɵdefineComponent({ type: FormioResourceEditComponent, selectors: [["ng-component"]], decls: 1, vars: 4, consts: [[3, "form", "submission", "error", "refresh", "submit"]], template: function FormioResourceEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "formio", 0);
        ɵɵlistener("submit", function FormioResourceEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("error", ctx.triggerError)("refresh", ctx.service.refresh);
    } }, directives: [FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceEditComponent, [{
        type: Component,
        args: [{
                templateUrl: './edit.component.html'
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ActivatedRoute }, { type: Router }, { type: FormioResourceConfig }]; }, null); })();

class FormioResourceDeleteComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    onDelete() {
        this.service.remove().then(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        });
    }
    onCancel() {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    }
}
FormioResourceDeleteComponent.ɵfac = function FormioResourceDeleteComponent_Factory(t) { return new (t || FormioResourceDeleteComponent)(ɵɵdirectiveInject(FormioResourceService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
FormioResourceDeleteComponent.ɵcmp = ɵɵdefineComponent({ type: FormioResourceDeleteComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function FormioResourceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h3");
        ɵɵtext(1, "Are you sure you wish to delete this record?");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 0);
        ɵɵelementStart(3, "button", 1);
        ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_3_listener() { return ctx.onDelete(); });
        ɵɵtext(4, "Yes");
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 2);
        ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
        ɵɵtext(6, "No");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceDeleteComponent, [{
        type: Component,
        args: [{
                templateUrl: './delete.component.html'
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ActivatedRoute }, { type: Router }]; }, null); })();

function FormioResourceCreateComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h3", 2);
    ɵɵelementStart(1, "a", 3);
    ɵɵelement(2, "i", 4);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" | New ", ctx_r0.service.form.title, "\n");
} }
class FormioResourceCreateComponent {
    constructor(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.onError = new EventEmitter();
        this.onSuccess = new EventEmitter();
    }
    ngOnInit() {
        this.service.setContext(this.route);
    }
    onSubmit(submission) {
        this.service
            .save(submission)
            .then(() => {
            this.router.navigate(['../', this.service.resource._id, 'view'], {
                relativeTo: this.route
            });
        })
            .catch((err) => this.onError.emit(err));
    }
}
FormioResourceCreateComponent.ɵfac = function FormioResourceCreateComponent_Factory(t) { return new (t || FormioResourceCreateComponent)(ɵɵdirectiveInject(FormioResourceService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(FormioResourceConfig)); };
FormioResourceCreateComponent.ɵcmp = ɵɵdefineComponent({ type: FormioResourceCreateComponent, selectors: [["ng-component"]], decls: 2, vars: 6, consts: [["style", "margin-top:0;", 4, "ngIf"], [3, "form", "submission", "refresh", "error", "success", "submit"], [2, "margin-top", "0"], ["routerLink", "../", 1, "back-button"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"]], template: function FormioResourceCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormioResourceCreateComponent_h3_0_Template, 4, 1, "h3", 0);
        ɵɵelementStart(1, "formio", 1);
        ɵɵlistener("submit", function FormioResourceCreateComponent_Template_formio_submit_1_listener($event) { return ctx.onSubmit($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.service.form);
        ɵɵadvance(1);
        ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("error", ctx.onError)("success", ctx.onSuccess);
    } }, directives: [NgIf, FormioComponent, RouterLinkWithHref], styles: [".back-button[_ngcontent-%COMP%]{font-size:.8em}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceCreateComponent, [{
        type: Component,
        args: [{
                styleUrls: ['./create.component.scss'],
                templateUrl: './create.component.html'
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ActivatedRoute }, { type: Router }, { type: FormioResourceConfig }]; }, null); })();

class FormioResourceIndexComponent {
    constructor(service, route, router, config, cdr, ngZone) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.cdr = cdr;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.gridQuery = {};
        this.service.setContext(this.route);
        this.service.formLoaded.then(() => {
            if (this.service &&
                this.config.parents &&
                this.config.parents.length) {
                this.service.loadParents().then((parents) => {
                    each(parents, (parent) => {
                        if (parent && parent.filter) {
                            this.gridQuery['data.' + parent.name + '._id'] =
                                parent.resource._id;
                        }
                    });
                    // Set the source to load the grid.
                    this.gridSrc = this.service.formUrl;
                    this.createText = `New ${this.service.form.title}`;
                });
            }
            else if (this.service.formUrl) {
                this.gridSrc = this.service.formUrl;
                this.createText = `New ${this.service.form.title}`;
            }
            this.cdr.detectChanges();
        });
    }
    onSelect(row) {
        this.ngZone.run(() => {
            this.router.navigate([row._id, 'view'], { relativeTo: this.route });
        });
    }
    onCreateItem() {
        this.ngZone.run(() => {
            this.router.navigate(['new'], { relativeTo: this.route });
        });
    }
}
FormioResourceIndexComponent.ɵfac = function FormioResourceIndexComponent_Factory(t) { return new (t || FormioResourceIndexComponent)(ɵɵdirectiveInject(FormioResourceService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(FormioResourceConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
FormioResourceIndexComponent.ɵcmp = ɵɵdefineComponent({ type: FormioResourceIndexComponent, selectors: [["ng-component"]], decls: 2, vars: 5, consts: [[3, "alerts"], [3, "src", "query", "onForm", "createText", "rowSelect", "error", "createItem"]], template: function FormioResourceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "formio-alerts", 0);
        ɵɵelementStart(1, "formio-grid", 1);
        ɵɵlistener("rowSelect", function FormioResourceIndexComponent_Template_formio_grid_rowSelect_1_listener($event) { return ctx.onSelect($event); })("error", function FormioResourceIndexComponent_Template_formio_grid_error_1_listener($event) { return ctx.service.onError($event); })("createItem", function FormioResourceIndexComponent_Template_formio_grid_createItem_1_listener() { return ctx.onCreateItem(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("alerts", ctx.service.alerts);
        ɵɵadvance(1);
        ɵɵproperty("src", ctx.gridSrc)("query", ctx.gridQuery)("onForm", ctx.service.formLoaded)("createText", ctx.createText);
    } }, directives: [FormioAlertsComponent, FormioGridComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResourceIndexComponent, [{
        type: Component,
        args: [{
                templateUrl: './index.component.html'
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ActivatedRoute }, { type: Router }, { type: FormioResourceConfig }, { type: ChangeDetectorRef }, { type: NgZone }]; }, null); })();

function FormioResourceRoutes(config) {
    return [
        {
            path: '',
            component: config && config.index ? config.index : FormioResourceIndexComponent
        },
        {
            path: 'new',
            component: config && config.create ? config.create : FormioResourceCreateComponent
        },
        {
            path: ':id',
            component: config && config.resource ? config.resource : FormioResourceComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: config && config.view ? config.view : FormioResourceViewComponent
                },
                {
                    path: 'edit',
                    component: config && config.edit ? config.edit : FormioResourceEditComponent
                },
                {
                    path: 'delete',
                    component: config && config.delete ? config.delete : FormioResourceDeleteComponent
                }
            ]
        }
    ];
}

class FormioResource {
    static forChild(config) {
        return extendRouter(FormioResource, config, FormioResourceRoutes);
    }
    static forRoot(config) {
        return extendRouter(FormioResource, config, FormioResourceRoutes);
    }
}
FormioResource.ɵmod = ɵɵdefineNgModule({ type: FormioResource });
FormioResource.ɵinj = ɵɵdefineInjector({ factory: function FormioResource_Factory(t) { return new (t || FormioResource)(); }, providers: [
        FormioAlerts
    ], imports: [[
            CommonModule,
            FormioModule,
            FormioGrid,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormioResource, { declarations: [FormioResourceComponent,
        FormioResourceCreateComponent,
        FormioResourceIndexComponent,
        FormioResourceViewComponent,
        FormioResourceEditComponent,
        FormioResourceDeleteComponent], imports: [CommonModule,
        FormioModule,
        FormioGrid,
        RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioResource, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    FormioGrid,
                    RouterModule
                ],
                declarations: [
                    FormioResourceComponent,
                    FormioResourceCreateComponent,
                    FormioResourceIndexComponent,
                    FormioResourceViewComponent,
                    FormioResourceEditComponent,
                    FormioResourceDeleteComponent
                ],
                providers: [
                    FormioAlerts
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-formio
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormioResource, FormioResourceComponent, FormioResourceConfig, FormioResourceCreateComponent, FormioResourceDeleteComponent, FormioResourceEditComponent, FormioResourceIndexComponent, FormioResourceRoutes, FormioResourceService, FormioResourceViewComponent, FormioResources };
//# sourceMappingURL=angular-formio-resource.js.map
