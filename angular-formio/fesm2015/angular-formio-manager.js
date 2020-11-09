import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, ɵɵtemplate, ɵɵadvance, ɵɵproperty, EventEmitter, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, Component, ViewChild, ChangeDetectorRef, ɵɵtext, ɵɵInheritDefinitionFeature, ɵɵgetInheritedFactory, ɵɵreference, ɵɵpureFunction1, ɵɵtemplateRefExtractor, ɵɵsanitizeUrl, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Formio } from 'formiojs';
import _each from 'lodash/each';
import _intersection from 'lodash/intersection';
import { FormioAppConfig, FormioAlerts, FormBuilderComponent, FormioAlertsComponent, FormioComponent, extendRouter, FormioModule } from 'angular-formio';
import { FormioAuthService } from 'angular-formio/auth';
import { FormioGridComponent, FormioGrid } from 'angular-formio/grid';
import _, { debounce } from 'lodash';
import { ActivatedRoute, Router, RouterLinkWithHref, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { DefaultValueAccessor, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

class FormManagerConfig {
    constructor() {
        this.tag = '';
        this.includeSearch = false;
        this.saveDraft = false;
    }
}
FormManagerConfig.ɵfac = function FormManagerConfig_Factory(t) { return new (t || FormManagerConfig)(); };
FormManagerConfig.ɵprov = ɵɵdefineInjectable({ token: FormManagerConfig, factory: FormManagerConfig.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerConfig, [{
        type: Injectable
    }], null, null); })();

class FormManagerService {
    constructor(appConfig, config, auth) {
        this.appConfig = appConfig;
        this.config = config;
        this.auth = auth;
        this.form = null;
        this.perms = { delete: false, edit: false };
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        this.allAccessMap = {
            'update_all': 'formEdit',
            'delete_all': 'formDelete'
        };
        this.ownAccessMap = {
            'update_own': 'formEdit',
            'delete_own': 'formDelete'
        };
        this.actionAllowed = (action) => this.isActionAllowed(action);
        this.reset();
    }
    isActionAllowed(action) {
        return this.access[action];
    }
    setAccess() {
        this.access = {
            formCreate: true,
            formView: true,
            formEdit: true,
            formDelete: true,
            submissionIndex: true
        };
        if (this.auth) {
            this.access = {
                formCreate: false,
                formView: false,
                formEdit: false,
                formDelete: false,
                submissionIndex: false
            };
            this.ready = this.auth.ready.then(() => {
                const adminRoles = [];
                _each(this.auth.roles, (role, name) => {
                    if (role.admin) {
                        adminRoles.push(role._id);
                    }
                });
                if (this.auth.user && this.auth.user.roles) {
                    this.auth.user.roles.forEach(roleId => {
                        if (adminRoles.indexOf(roleId) !== -1) {
                            this.access.formCreate = true;
                            this.access.formView = true;
                            this.access.formEdit = true;
                            this.access.formDelete = true;
                            this.access.submissionIndex = true;
                        }
                        if (!this.access.formCreate) {
                            this.access.formCreate = (this.auth.formAccess.create_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.formView) {
                            this.access.formView = (this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.formEdit) {
                            this.access.formEdit = (this.auth.formAccess.update_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.formDelete) {
                            this.access.formDelete = (this.auth.formAccess.delete_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.submissionIndex) {
                            this.access.submissionIndex = (this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                        }
                    });
                }
            });
        }
        else {
            this.ready = Promise.resolve(false);
        }
    }
    reset(route) {
        if (route) {
            route.params.subscribe(params => {
                if (params.id) {
                    this.formio = new Formio(`${this.formio.formsUrl}/${params.id}`);
                }
                else {
                    this.reset();
                }
            });
        }
        else {
            this.formio = new Formio(this.appConfig.appUrl);
            this.setAccess();
        }
    }
    hasAccess(roles) {
        if (!this.auth.user) {
            return false;
        }
        return !!_intersection(roles, this.auth.user.roles).length;
    }
    setForm(form) {
        this.form = form;
        if (form.access) {
            // Check if they have access here.
            form.access.forEach(access => {
                // Check for all access.
                if (this.allAccessMap[access.type] && !this.access[this.allAccessMap[access.type]]) {
                    this.access[this.allAccessMap[access.type]] = this.hasAccess(access.roles);
                }
                // Check for own access.
                if (this.auth && this.auth.user &&
                    (form._id === this.auth.user._id) &&
                    this.ownAccessMap[access.type] &&
                    !this.access[this.ownAccessMap[access.type]]) {
                    this.access[this.ownAccessMap[access.type]] = this.hasAccess(access.roles);
                }
            });
        }
        return form;
    }
    loadForm() {
        return this.formio.loadForm().then(form => this.setForm(form));
    }
    setSubmission(route) {
        return new Promise((resolve) => {
            route.params.subscribe(params => {
                this.formio = new Formio(`${this.formio.submissionsUrl}/${params.id}`);
                resolve(this.formio);
            });
        });
    }
    submissionLoaded(submission) {
        this.auth.ready.then(() => {
            this.formio.userPermissions(this.auth.user, this.form, submission).then((perms) => {
                this.perms.delete = perms.delete;
                this.perms.edit = perms.edit;
            });
        });
    }
    loadForms() {
        return this.formio.loadForms({ params: {
                tags: this.config.tag
            } });
    }
    createForm(form) {
        return this.formio.createform(form);
    }
}
FormManagerService.ɵfac = function FormManagerService_Factory(t) { return new (t || FormManagerService)(ɵɵinject(FormioAppConfig), ɵɵinject(FormManagerConfig), ɵɵinject(FormioAuthService)); };
FormManagerService.ɵprov = ɵɵdefineInjectable({ token: FormManagerService, factory: FormManagerService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerService, [{
        type: Injectable
    }], function () { return [{ type: FormioAppConfig }, { type: FormManagerConfig }, { type: FormioAuthService }]; }, null); })();

function FormManagerIndexComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5);
    ɵɵlistener("click", function FormManagerIndexComponent_div_0_span_2_Template_span_click_0_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(2); return ctx_r3.clearSearch(); });
    ɵɵelement(1, "span", 6);
    ɵɵelementEnd();
} }
function FormManagerIndexComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "input", 3);
    ɵɵlistener("keyup", function FormManagerIndexComponent_div_0_Template_input_keyup_1_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.onSearch(); })("ngModelChange", function FormManagerIndexComponent_div_0_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.search = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(2, FormManagerIndexComponent_div_0_span_2_Template, 2, 0, "span", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r0.search);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.search && ctx_r0.search !== "");
} }
function FormManagerIndexComponent_formio_grid_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "formio-grid", 7);
    ɵɵlistener("rowAction", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_rowAction_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.onAction($event); })("rowSelect", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_rowSelect_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(); return ctx_r10.onSelect($event); })("createItem", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_createItem_0_listener() { ɵɵrestoreView(_r9); const ctx_r11 = ɵɵnextContext(); return ctx_r11.onCreateItem(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formio", ctx_r1.service.formio)("gridType", "form")("query", ctx_r1.gridQuery)("refresh", ctx_r1.refreshGrid)("isActionAllowed", ctx_r1.service.actionAllowed);
} }
class FormManagerIndexComponent {
    constructor(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.search = '';
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        this.refreshGrid = new EventEmitter();
        this.onSearch = debounce(this.onSearch, 300);
    }
    loadGrid() {
        this.search = localStorage.getItem('searchInput');
        this.gridQuery = JSON.parse(localStorage.getItem('query')) || this.gridQuery;
        const currentPage = +localStorage.getItem('currentPage') || 0;
        this.formGrid
            .refreshGrid(this.gridQuery)
            .then(() => this.formGrid.setPage(currentPage - 1));
    }
    ngOnInit() {
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        this.service.reset();
        this.service.ready.then(() => {
            this.loadGrid();
            this.formGrid.footer.pageChanged.subscribe(page => {
                localStorage.setItem('currentPage', page.page);
            });
        });
    }
    onSearch() {
        const searchInput = this.search;
        if (searchInput.length > 0) {
            this.gridQuery.skip = 0;
            this.gridQuery.title__regex = '/' + searchInput + '/i';
        }
        else {
            delete this.gridQuery.title__regex;
        }
        localStorage.setItem('query', JSON.stringify(this.gridQuery));
        localStorage.setItem('searchInput', this.search);
        this.formGrid.pageChanged({ page: 1, itemPerPage: this.gridQuery.limit });
        this.refreshGrid.emit(this.gridQuery);
    }
    clearSearch() {
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        localStorage.removeItem('query');
        localStorage.removeItem('searchInput');
        localStorage.removeItem('currentPage');
        this.search = '';
        this.formGrid.pageChanged({ page: 1 });
        this.formGrid.query = {};
        this.formGrid.refreshGrid({ tags: this.config.tag, type: 'form' });
    }
    onAction(action) {
        this.router.navigate([action.row._id, action.action], { relativeTo: this.route });
    }
    onSelect(row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    }
    onCreateItem() {
        this.router.navigate(['create'], { relativeTo: this.route });
    }
}
FormManagerIndexComponent.ɵfac = function FormManagerIndexComponent_Factory(t) { return new (t || FormManagerIndexComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(FormManagerConfig)); };
FormManagerIndexComponent.ɵcmp = ɵɵdefineComponent({ type: FormManagerIndexComponent, selectors: [["ng-component"]], viewQuery: function FormManagerIndexComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(FormioGridComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formGrid = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "input-group mb-3", 4, "ngIf"], [3, "formio", "gridType", "query", "refresh", "isActionAllowed", "rowAction", "rowSelect", "createItem", 4, "ngIf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Forms", "aria-label", "Search Forms", "aria-describedby", "button-search", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["class", "form-clear input-group-addon", 3, "click", 4, "ngIf"], [1, "form-clear", "input-group-addon", 3, "click"], [1, "fa", "fa-times"], [3, "formio", "gridType", "query", "refresh", "isActionAllowed", "rowAction", "rowSelect", "createItem"]], template: function FormManagerIndexComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormManagerIndexComponent_div_0_Template, 3, 2, "div", 0);
        ɵɵtemplate(1, FormManagerIndexComponent_formio_grid_1_Template, 1, 5, "formio-grid", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.config.includeSearch);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.service.ready);
    } }, directives: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, FormioGridComponent], styles: [".form-clear[_ngcontent-%COMP%]{align-items:center;background:#cecece;border-radius:50%;bottom:8px;color:rgba(0,0,0,.3);cursor:pointer;display:flex;height:24px;justify-content:center;position:absolute;right:10px;top:6px;width:24px;z-index:10}.form-clear[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:16px;font-weight:500}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerIndexComponent, [{
        type: Component,
        args: [{
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return [{ type: FormManagerService }, { type: ActivatedRoute }, { type: Router }, { type: FormManagerConfig }]; }, { formGrid: [{
            type: ViewChild,
            args: [FormioGridComponent, { static: false }]
        }] }); })();

const _c0 = ["title"];
const _c1 = ["type"];
function FormManagerEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 15);
} }
function FormManagerEditComponent_form_builder_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "form-builder", 16, 17);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("formbuilder", ctx_r3.config.builder)("form", ctx_r3.form);
} }
class FormManagerEditComponent {
    constructor(service, router, route, config, ref, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.config = config;
        this.ref = ref;
        this.alerts = alerts;
        this.form = { components: [] };
        this.formReady = false;
        this.loading = false;
        this.editMode = false;
    }
    initBuilder(editing) {
        if (editing) {
            this.loading = true;
            this.editMode = true;
            return this.service.loadForm().then(form => {
                this.form = form;
                this.formTitle.nativeElement.value = form.title;
                this.formType.nativeElement.value = form.display || 'form';
                this.loading = false;
                this.formReady = true;
                this.ref.detectChanges();
                return true;
            }).catch(err => {
                this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
                this.loading = false;
                this.formReady = true;
            });
        }
        else {
            this.formReady = true;
            return Promise.resolve(true);
        }
    }
    ngAfterViewInit() {
        this.route.url.subscribe(url => {
            this.initBuilder((url[0].path === 'edit'));
        });
    }
    onDisplaySelect(event) {
        this.builder.setDisplay(event.target.value);
    }
    saveForm() {
        this.loading = true;
        this.form.title = this.formTitle.nativeElement.value;
        this.form.display = this.formType.nativeElement.value;
        this.form.components = this.builder.formio.schema.components;
        if (this.config.tag) {
            this.form.tags = this.form.tags || [];
            this.form.tags.push(this.config.tag);
            this.form.tags = _.uniq(this.form.tags);
        }
        if (!this.form._id) {
            this.form.name = _.camelCase(this.form.title).toLowerCase();
            this.form.path = this.form.name;
        }
        return this.service.formio.saveForm(this.form).then(form => {
            this.form = this.service.setForm(form);
            this.loading = false;
            return this.form;
        }).catch(err => {
            this.loading = false;
            // Catch if a form is returned as an error. This is a conflict.
            if (err._id && err.type) {
                throw err;
            }
            this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
        });
    }
    onSave() {
        return this.saveForm().then((form) => {
            if (this.editMode) {
                this.router.navigate(['../', 'view'], { relativeTo: this.route });
            }
            else {
                this.router.navigate(['../', form._id, 'view'], { relativeTo: this.route });
            }
        });
    }
}
FormManagerEditComponent.ɵfac = function FormManagerEditComponent_Factory(t) { return new (t || FormManagerEditComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormManagerConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FormioAlerts)); };
FormManagerEditComponent.ɵcmp = ɵɵdefineComponent({ type: FormManagerEditComponent, selectors: [["ng-component"]], viewQuery: function FormManagerEditComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(FormBuilderComponent, true);
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.builder = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formTitle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formType = _t.first);
    } }, decls: 21, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-8"], ["type", "text", "id", "formTitle", "placeholder", "Enter a Title", 1, "form-control"], ["title", ""], [1, "col-sm-2"], ["id", "formSelect", 1, "form-control", 3, "change"], ["type", ""], ["value", "form"], ["value", "wizard"], ["value", "pdf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [3, "alerts"], [3, "formbuilder", "form", 4, "ngIf"], [1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"], [1, "loader"], [3, "formbuilder", "form"], ["builder", ""]], template: function FormManagerEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormManagerEditComponent_div_0_Template, 1, 0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "input", 3, 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "select", 6, 7);
        ɵɵlistener("change", function FormManagerEditComponent_Template_select_change_6_listener($event) { return ctx.onDisplaySelect($event); });
        ɵɵelementStart(8, "option", 8);
        ɵɵtext(9, "Form");
        ɵɵelementEnd();
        ɵɵelementStart(10, "option", 9);
        ɵɵtext(11, "Wizard");
        ɵɵelementEnd();
        ɵɵelementStart(12, "option", 10);
        ɵɵtext(13, "PDF");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 5);
        ɵɵelementStart(15, "button", 11);
        ɵɵlistener("click", function FormManagerEditComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        ɵɵtext(16, "Save Form");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(17, "formio-alerts", 12);
        ɵɵtemplate(18, FormManagerEditComponent_form_builder_18_Template, 2, 2, "form-builder", 13);
        ɵɵelementStart(19, "button", 14);
        ɵɵlistener("click", function FormManagerEditComponent_Template_button_click_19_listener() { return ctx.onSave(); });
        ɵɵtext(20, "Save Form");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.loading);
        ɵɵadvance(17);
        ɵɵproperty("alerts", ctx.alerts);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.formReady);
    } }, directives: [NgIf, NgSelectOption, ɵangular_packages_forms_forms_x, FormioAlertsComponent, FormBuilderComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerEditComponent, [{
        type: Component,
        args: [{
                templateUrl: './edit.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: Router }, { type: ActivatedRoute }, { type: FormManagerConfig }, { type: ChangeDetectorRef }, { type: FormioAlerts }]; }, { builder: [{
            type: ViewChild,
            args: [FormBuilderComponent, { static: false }]
        }], formTitle: [{
            type: ViewChild,
            args: ['title', { static: false }]
        }], formType: [{
            type: ViewChild,
            args: ['type', { static: false }]
        }] }); })();

function FormManagerCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 15);
} }
function FormManagerCreateComponent_form_builder_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "form-builder", 16, 17);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("formbuilder", ctx_r3.config.builder)("form", ctx_r3.form);
} }
class FormManagerCreateComponent extends FormManagerEditComponent {
    ngOnInit() {
        this.service.reset();
    }
}
FormManagerCreateComponent.ɵfac = function FormManagerCreateComponent_Factory(t) { return ɵFormManagerCreateComponent_BaseFactory(t || FormManagerCreateComponent); };
FormManagerCreateComponent.ɵcmp = ɵɵdefineComponent({ type: FormManagerCreateComponent, selectors: [["ng-component"]], features: [ɵɵInheritDefinitionFeature], decls: 21, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-8"], ["type", "text", "id", "formTitle", "placeholder", "Enter a Title", 1, "form-control"], ["title", ""], [1, "col-sm-2"], ["id", "formSelect", 1, "form-control", 3, "change"], ["type", ""], ["value", "form"], ["value", "wizard"], ["value", "pdf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [3, "alerts"], [3, "formbuilder", "form", 4, "ngIf"], [1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"], [1, "loader"], [3, "formbuilder", "form"], ["builder", ""]], template: function FormManagerCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormManagerCreateComponent_div_0_Template, 1, 0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "input", 3, 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "select", 6, 7);
        ɵɵlistener("change", function FormManagerCreateComponent_Template_select_change_6_listener($event) { return ctx.onDisplaySelect($event); });
        ɵɵelementStart(8, "option", 8);
        ɵɵtext(9, "Form");
        ɵɵelementEnd();
        ɵɵelementStart(10, "option", 9);
        ɵɵtext(11, "Wizard");
        ɵɵelementEnd();
        ɵɵelementStart(12, "option", 10);
        ɵɵtext(13, "PDF");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 5);
        ɵɵelementStart(15, "button", 11);
        ɵɵlistener("click", function FormManagerCreateComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        ɵɵtext(16, "Save Form");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(17, "formio-alerts", 12);
        ɵɵtemplate(18, FormManagerCreateComponent_form_builder_18_Template, 2, 2, "form-builder", 13);
        ɵɵelementStart(19, "button", 14);
        ɵɵlistener("click", function FormManagerCreateComponent_Template_button_click_19_listener() { return ctx.onSave(); });
        ɵɵtext(20, "Save Form");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.loading);
        ɵɵadvance(17);
        ɵɵproperty("alerts", ctx.alerts);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.formReady);
    } }, directives: [NgIf, NgSelectOption, ɵangular_packages_forms_forms_x, FormioAlertsComponent, FormBuilderComponent], encapsulation: 2 });
const ɵFormManagerCreateComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(FormManagerCreateComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerCreateComponent, [{
        type: Component,
        args: [{
                templateUrl: '../edit/edit.component.html'
            }]
    }], null, null); })();

function FormManagerFormComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function FormManagerFormComponent_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); const _r3 = ɵɵreference(17); return ctx_r5.openEmbed(_r3); });
    ɵɵelement(1, "i", 13);
    ɵɵtext(2, " Share");
    ɵɵelementEnd();
} }
function FormManagerFormComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵelementStart(1, "a", 14);
    ɵɵelement(2, "i", 15);
    ɵɵtext(3, " Edit Form");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function FormManagerFormComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵelementStart(1, "a", 16);
    ɵɵelement(2, "span", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function FormManagerFormComponent_ng_template_16_pre_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "pre");
    ɵɵelement(1, "textarea", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r7.embedCode);
} }
function FormManagerFormComponent_ng_template_16_input_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 32);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r8.shareUrl);
} }
const _c0$1 = function (a0) { return { "active": a0 }; };
function FormManagerFormComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵelementStart(1, "h4", 19);
    ɵɵtext(2, "Share or Embed this form");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 20);
    ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_button_click_3_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.modalRef.hide(); });
    ɵɵelementStart(4, "span", 21);
    ɵɵtext(5, "\u00D7");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 22);
    ɵɵelementStart(7, "ul", 23);
    ɵɵelementStart(8, "li", 2);
    ɵɵelementStart(9, "a", 24);
    ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_a_click_9_listener() { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.choices("isUrl"); });
    ɵɵelement(10, "i", 25);
    ɵɵtext(11, " URL");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "li", 2);
    ɵɵelementStart(13, "a", 24);
    ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_a_click_13_listener() { ɵɵrestoreView(_r10); const ctx_r12 = ɵɵnextContext(); return ctx_r12.choices("isEmbed"); });
    ɵɵelement(14, "i", 26);
    ɵɵtext(15, " Embed");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(16, FormManagerFormComponent_ng_template_16_pre_16_Template, 2, 1, "pre", 27);
    ɵɵtemplate(17, FormManagerFormComponent_ng_template_16_input_17_Template, 1, 1, "input", 28);
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 29);
    ɵɵelementStart(19, "button", 30);
    ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_button_click_19_listener() { ɵɵrestoreView(_r10); const ctx_r13 = ɵɵnextContext(); return ctx_r13.modalRef.hide(); });
    ɵɵtext(20, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(9);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c0$1, ctx_r4.choice === "isUrl"));
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c0$1, ctx_r4.choice === "isEmbed"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.choice === "isEmbed");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.choice === "isUrl");
} }
class FormManagerFormComponent {
    constructor(service, route, appConfig, options, modalService) {
        this.service = service;
        this.route = route;
        this.appConfig = appConfig;
        this.options = options;
        this.modalService = modalService;
        this.choice = 'isUrl';
        this.goTo = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.formio = new Formio(`${this.appConfig.appUrl}/form/${params.id}`);
            this.formio.loadForm().then(form => {
                this.projectId = form.project;
                this.pathName = form.path;
                this.getShareUrl();
            });
            this.service.reset(this.route);
        });
    }
    getShareUrl() {
        const src = this.appConfig.appUrl + '/' + this.pathName;
        this.shareUrl = `${this.options.viewer}/#/?src=${encodeURIComponent(src)}`;
        return this.shareUrl;
    }
    openEmbed(content) {
        let goto = '';
        if (this.goTo) {
            goto += `if (d && d.formSubmission && d.formSubmission._id) { window.location.href = "${this.goTo}";}`;
        }
        let embedCode = '<script type="text/javascript">';
        embedCode += '(function a(d, w, u) {';
        embedCode += 'var h = d.getElementsByTagName("head")[0];';
        embedCode += 'var s = d.createElement("script");';
        embedCode += 's.type = "text/javascript";';
        embedCode += 's.src = "' + this.options.viewer + '/assets/lib/seamless/seamless.parent.min.js";';
        embedCode += 's.onload = function b() {';
        embedCode += 'var f = d.getElementById("formio-form-' + this.formio.formId + '");';
        embedCode += 'if (!f || (typeof w.seamless === u)) {';
        embedCode += 'return setTimeout(b, 100);';
        embedCode += '}';
        embedCode += 'w.seamless(f, {fallback:false}).receive(function(d, e) {' + goto + '});';
        embedCode += '};';
        embedCode += 'h.appendChild(s);';
        embedCode += '})(document, window);';
        embedCode += '</script>';
        embedCode += '<iframe id="formio-form-' + this.formio.formId + '" ';
        embedCode += 'style="width:100%;border:none;" height="800px" src="' + this.shareUrl + '&iframe=1"></iframe>';
        this.embedCode = embedCode;
        this.modalRef = this.modalService.show(content, { class: 'modal-lg' });
    }
    choices(string) {
        this.choice = string;
    }
}
FormManagerFormComponent.ɵfac = function FormManagerFormComponent_Factory(t) { return new (t || FormManagerFormComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormioAppConfig), ɵɵdirectiveInject(FormManagerConfig), ɵɵdirectiveInject(BsModalService)); };
FormManagerFormComponent.ɵcmp = ɵɵdefineComponent({ type: FormManagerFormComponent, selectors: [["ng-component"]], decls: 18, vars: 3, consts: [["class", "pull-right btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-2"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-pencil", "glyphicon", "glyphicon-pencil"], ["routerLink", "submission", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-list-alt", "glyphicon", "glyphicon-list-alt"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["content", ""], [1, "pull-right", "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-share-alt", "glyphicon", "glyphicon-share"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-edit", "glyphicon", "glyphicon-edit"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "nav", "nav-tabs", "mr-auto", "mb-2"], [1, "nav-link", 3, "ngClass", "click"], [1, "fa", "fa-link"], [1, "fa", "fa-code"], [4, "ngIf"], ["type", "text", "onclick", "this.focus();this.select()", "readonly", "readonly", "class", "form-control", "placeholder", "https://examples.form.io/example", 3, "ngModel", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["onclick", "this.focus();this.select()", "readonly", "readonly", "rows", "8", 2, "width", "100%", 3, "ngModel"], ["type", "text", "onclick", "this.focus();this.select()", "readonly", "readonly", "placeholder", "https://examples.form.io/example", 1, "form-control", 3, "ngModel"]], template: function FormManagerFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormManagerFormComponent_button_0_Template, 3, 0, "button", 0);
        ɵɵelementStart(1, "ul", 1);
        ɵɵelementStart(2, "li", 2);
        ɵɵelementStart(3, "a", 3);
        ɵɵelement(4, "i", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "li", 5);
        ɵɵelementStart(6, "a", 6);
        ɵɵelement(7, "i", 7);
        ɵɵtext(8, " Enter Data");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "li", 5);
        ɵɵelementStart(10, "a", 8);
        ɵɵelement(11, "i", 9);
        ɵɵtext(12, " View Data");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(13, FormManagerFormComponent_li_13_Template, 4, 0, "li", 10);
        ɵɵtemplate(14, FormManagerFormComponent_li_14_Template, 3, 0, "li", 10);
        ɵɵelementEnd();
        ɵɵelement(15, "router-outlet");
        ɵɵtemplate(16, FormManagerFormComponent_ng_template_16_Template, 21, 8, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.options.viewer);
        ɵɵadvance(13);
        ɵɵproperty("ngIf", ctx.service.actionAllowed("formEdit"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.service.actionAllowed("formDelete"));
    } }, directives: [NgIf, RouterLinkWithHref, RouterLinkActive, RouterOutlet, NgClass, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerFormComponent, [{
        type: Component,
        args: [{
                templateUrl: './form.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: ActivatedRoute }, { type: FormioAppConfig }, { type: FormManagerConfig }, { type: BsModalService }]; }, null); })();

function FormManagerViewComponent_formio_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "formio", 1);
    ɵɵlistener("submit", function FormManagerViewComponent_formio_0_Template_formio_submit_0_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.onSubmit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("renderer", ctx_r0.config.renderer)("renderOptions", ctx_r0.renderOptions)("url", ctx_r0.service.formio.formUrl)("form", ctx_r0.currentForm)("submission", ctx_r0.submission)("success", ctx_r0.onSuccess)("error", ctx_r0.onError);
} }
class FormManagerViewComponent {
    constructor(service, router, route, config, auth) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.config = config;
        this.auth = auth;
        this.onSuccess = new EventEmitter();
        this.onError = new EventEmitter();
        this.renderOptions = {
            saveDraft: this.config.saveDraft
        };
        this.currentForm = null;
        this.submission = { data: {} };
    }
    ngOnInit() {
        // Reset the formio service to this form only.
        this.service.formio = new Formio(this.service.formio.formUrl);
        this.service.loadForm().then((form) => {
            this.currentForm = form;
        });
    }
    onSubmit(submission) {
        this.submission.data = submission.data;
        this.submission.state = 'complete';
        this.service.formio.saveSubmission(this.submission).then(saved => {
            this.onSuccess.emit();
            this.router.navigate(['../', 'submission', saved._id], { relativeTo: this.route });
        }).catch((err) => this.onError.emit(err));
    }
}
FormManagerViewComponent.ɵfac = function FormManagerViewComponent_Factory(t) { return new (t || FormManagerViewComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormManagerConfig), ɵɵdirectiveInject(FormioAuthService)); };
FormManagerViewComponent.ɵcmp = ɵɵdefineComponent({ type: FormManagerViewComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "renderer", "renderOptions", "url", "form", "submission", "success", "error", "submit", 4, "ngIf"], [3, "renderer", "renderOptions", "url", "form", "submission", "success", "error", "submit"]], template: function FormManagerViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormManagerViewComponent_formio_0_Template, 1, 7, "formio", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.currentForm);
    } }, directives: [NgIf, FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerViewComponent, [{
        type: Component,
        args: [{
                templateUrl: './view.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: Router }, { type: ActivatedRoute }, { type: FormManagerConfig }, { type: FormioAuthService }]; }, null); })();

class FormManagerDeleteComponent {
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onDelete() {
        this.service.formio.deleteForm().then(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        }).catch(err => this.alerts.setAlert({ type: 'danger', message: (err.message || err) }));
    }
    onCancel() {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    }
}
FormManagerDeleteComponent.ɵfac = function FormManagerDeleteComponent_Factory(t) { return new (t || FormManagerDeleteComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormioAlerts)); };
FormManagerDeleteComponent.ɵcmp = ɵɵdefineComponent({ type: FormManagerDeleteComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[3, "alerts"], [1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function FormManagerDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "formio-alerts", 0);
        ɵɵelementStart(1, "h3");
        ɵɵtext(2, "Are you sure you wish to delete this form?");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵelementStart(4, "button", 2);
        ɵɵlistener("click", function FormManagerDeleteComponent_Template_button_click_4_listener() { return ctx.onDelete(); });
        ɵɵtext(5, "Yes");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function FormManagerDeleteComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        ɵɵtext(7, "No");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("alerts", ctx.alerts);
    } }, directives: [FormioAlertsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerDeleteComponent, [{
        type: Component,
        args: [{
                templateUrl: './delete.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: Router }, { type: ActivatedRoute }, { type: FormioAlerts }]; }, null); })();

class SubmissionEditComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    onSubmit(submission) {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
}
SubmissionEditComponent.ɵfac = function SubmissionEditComponent_Factory(t) { return new (t || SubmissionEditComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute)); };
SubmissionEditComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionEditComponent, selectors: [["ng-component"]], decls: 1, vars: 2, consts: [[3, "renderer", "src", "submit", "formLoad", "submissionLoad"]], template: function SubmissionEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "formio", 0);
        ɵɵlistener("submit", function SubmissionEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); })("formLoad", function SubmissionEditComponent_Template_formio_formLoad_0_listener($event) { return ctx.service.setForm($event); })("submissionLoad", function SubmissionEditComponent_Template_formio_submissionLoad_0_listener($event) { return ctx.service.submissionLoaded($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("renderer", ctx.service.config.renderer)("src", ctx.service.formio.submissionUrl);
    } }, directives: [FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionEditComponent, [{
        type: Component,
        args: [{
                templateUrl: './edit.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: Router }, { type: ActivatedRoute }]; }, null); })();

class SubmissionDeleteComponent {
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onDelete() {
        this.service.formio.deleteSubmission().then(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        }).catch(err => this.alerts.setAlert({ type: 'danger', message: (err.message || err) }));
    }
    onCancel() {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    }
}
SubmissionDeleteComponent.ɵfac = function SubmissionDeleteComponent_Factory(t) { return new (t || SubmissionDeleteComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormioAlerts)); };
SubmissionDeleteComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionDeleteComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[3, "alerts"], [1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function SubmissionDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "formio-alerts", 0);
        ɵɵelementStart(1, "h3");
        ɵɵtext(2, "Are you sure you wish to delete this record?");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵelementStart(4, "button", 2);
        ɵɵlistener("click", function SubmissionDeleteComponent_Template_button_click_4_listener() { return ctx.onDelete(); });
        ɵɵtext(5, "Yes");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function SubmissionDeleteComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        ɵɵtext(7, "No");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("alerts", ctx.alerts);
    } }, directives: [FormioAlertsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionDeleteComponent, [{
        type: Component,
        args: [{
                templateUrl: './delete.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: Router }, { type: ActivatedRoute }, { type: FormioAlerts }]; }, null); })();

class SubmissionViewComponent {
    constructor(service) {
        this.service = service;
    }
}
SubmissionViewComponent.ɵfac = function SubmissionViewComponent_Factory(t) { return new (t || SubmissionViewComponent)(ɵɵdirectiveInject(FormManagerService)); };
SubmissionViewComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionViewComponent, selectors: [["ng-component"]], decls: 1, vars: 3, consts: [[3, "renderer", "src", "readOnly", "formLoad", "submissionLoad"]], template: function SubmissionViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "formio", 0);
        ɵɵlistener("formLoad", function SubmissionViewComponent_Template_formio_formLoad_0_listener($event) { return ctx.service.setForm($event); })("submissionLoad", function SubmissionViewComponent_Template_formio_submissionLoad_0_listener($event) { return ctx.service.submissionLoaded($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("renderer", ctx.service.config.renderer)("src", ctx.service.formio.submissionUrl)("readOnly", true);
    } }, directives: [FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionViewComponent, [{
        type: Component,
        args: [{
                templateUrl: './view.component.html'
            }]
    }], function () { return [{ type: FormManagerService }]; }, null); })();

class SubmissionIndexComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    onSelect(row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    }
}
SubmissionIndexComponent.ɵfac = function SubmissionIndexComponent_Factory(t) { return new (t || SubmissionIndexComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
SubmissionIndexComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionIndexComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "formio", "rowSelect"]], template: function SubmissionIndexComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "formio-grid", 0);
        ɵɵlistener("rowSelect", function SubmissionIndexComponent_Template_formio_grid_rowSelect_0_listener($event) { return ctx.onSelect($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formio", ctx.service.formio);
    } }, directives: [FormioGridComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionIndexComponent, [{
        type: Component,
        args: [{
                templateUrl: './index.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: ActivatedRoute }, { type: Router }]; }, null); })();

function SubmissionComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵelement(1, "img", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("href", ctx_r0.downloadUrl, ɵɵsanitizeUrl);
} }
function SubmissionComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵelementStart(1, "a", 11);
    ɵɵelement(2, "i", 12);
    ɵɵtext(3, " Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function SubmissionComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵelementStart(1, "a", 13);
    ɵɵelement(2, "span", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class SubmissionComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    setDownloadUrl(url) {
        this.downloadUrl = url;
    }
    ngOnInit() {
        this.service.setSubmission(this.route).then((formio) => {
            formio.getDownloadUrl().then((url) => this.setDownloadUrl(url));
        });
    }
}
SubmissionComponent.ɵfac = function SubmissionComponent_Factory(t) { return new (t || SubmissionComponent)(ɵɵdirectiveInject(FormManagerService), ɵɵdirectiveInject(ActivatedRoute)); };
SubmissionComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionComponent, selectors: [["ng-component"]], decls: 12, vars: 3, consts: [["target", "_blank", "class", "pull-right", 3, "href", 4, "ngIf"], [1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-eye", "glyphicon", "glyphicon-eye"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["target", "_blank", 1, "pull-right", 3, "href"], ["src", "https://pro.formview.io/assets/pdf.png", 2, "height", "2em"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-edit", "glyphicon", "glyphicon-edit"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function SubmissionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SubmissionComponent_a_0_Template, 2, 1, "a", 0);
        ɵɵelementStart(1, "ul", 1);
        ɵɵelementStart(2, "li", 2);
        ɵɵelementStart(3, "a", 3);
        ɵɵelement(4, "i", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "li", 5);
        ɵɵelementStart(6, "a", 6);
        ɵɵelement(7, "i", 7);
        ɵɵtext(8, " View");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, SubmissionComponent_li_9_Template, 4, 0, "li", 8);
        ɵɵtemplate(10, SubmissionComponent_li_10_Template, 3, 0, "li", 8);
        ɵɵelementEnd();
        ɵɵelement(11, "router-outlet");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.downloadUrl);
        ɵɵadvance(9);
        ɵɵproperty("ngIf", ctx.service.perms.edit);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.service.perms.delete);
    } }, directives: [NgIf, RouterLinkWithHref, RouterLinkActive, RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionComponent, [{
        type: Component,
        args: [{
                templateUrl: './submission.component.html'
            }]
    }], function () { return [{ type: FormManagerService }, { type: ActivatedRoute }]; }, null); })();

function FormManagerRoutes(config) {
    return [
        {
            path: '',
            component: config && config.formIndex ? config.formIndex : FormManagerIndexComponent
        },
        {
            path: 'create',
            component: config && config.formCreate ? config.formCreate : FormManagerCreateComponent
        },
        {
            path: ':id',
            component: config && config.form ? config.form : FormManagerFormComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: config && config.formView ? config.formView : FormManagerViewComponent
                },
                {
                    path: 'edit',
                    component: config && config.formEdit ? config.formEdit : FormManagerEditComponent
                },
                {
                    path: 'delete',
                    component: config && config.formDelete ? config.formDelete : FormManagerDeleteComponent
                },
                {
                    path: 'submission',
                    component: config && config.submissionIndex ? config.submissionIndex : SubmissionIndexComponent
                },
                {
                    path: 'submission/:id',
                    component: config && config.submission ? config.submission : SubmissionComponent,
                    children: [
                        {
                            path: '',
                            redirectTo: 'view',
                            pathMatch: 'full'
                        },
                        {
                            path: 'view',
                            component: config && config.submissionView ? config.submissionView : SubmissionViewComponent
                        },
                        {
                            path: 'edit',
                            component: config && config.submissionEdit ? config.submissionEdit : SubmissionEditComponent
                        },
                        {
                            path: 'delete',
                            component: config && config.submissionDelete ? config.submissionDelete : SubmissionDeleteComponent
                        }
                    ]
                }
            ]
        }
    ];
}

class FormManagerModule {
    static forChild(config) {
        return extendRouter(FormManagerModule, config, FormManagerRoutes);
    }
    static forRoot(config) {
        return extendRouter(FormManagerModule, config, FormManagerRoutes);
    }
}
FormManagerModule.ɵmod = ɵɵdefineNgModule({ type: FormManagerModule });
FormManagerModule.ɵinj = ɵɵdefineInjector({ factory: function FormManagerModule_Factory(t) { return new (t || FormManagerModule)(); }, imports: [[
            CommonModule,
            FormioModule,
            RouterModule,
            FormsModule,
            FormioGrid,
            ModalModule.forRoot(),
            PaginationModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormManagerModule, { declarations: [FormManagerIndexComponent,
        FormManagerCreateComponent,
        FormManagerFormComponent,
        FormManagerViewComponent,
        FormManagerEditComponent,
        FormManagerDeleteComponent,
        SubmissionComponent,
        SubmissionEditComponent,
        SubmissionDeleteComponent,
        SubmissionViewComponent,
        SubmissionIndexComponent], imports: [CommonModule,
        FormioModule,
        RouterModule,
        FormsModule,
        FormioGrid, ModalModule, PaginationModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormManagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    RouterModule,
                    FormsModule,
                    FormioGrid,
                    ModalModule.forRoot(),
                    PaginationModule.forRoot()
                ],
                declarations: [
                    FormManagerIndexComponent,
                    FormManagerCreateComponent,
                    FormManagerFormComponent,
                    FormManagerViewComponent,
                    FormManagerEditComponent,
                    FormManagerDeleteComponent,
                    SubmissionComponent,
                    SubmissionEditComponent,
                    SubmissionDeleteComponent,
                    SubmissionViewComponent,
                    SubmissionIndexComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-formio
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormManagerConfig, FormManagerCreateComponent, FormManagerDeleteComponent, FormManagerEditComponent, FormManagerFormComponent, FormManagerIndexComponent, FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerViewComponent, SubmissionComponent, SubmissionDeleteComponent, SubmissionEditComponent, SubmissionIndexComponent, SubmissionViewComponent };
//# sourceMappingURL=angular-formio-manager.js.map
