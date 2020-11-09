(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angular-formio/auth'), require('angular-formio'), require('native-promise-only'), require('formiojs'), require('lodash'), require('@angular/router'), require('@angular/common'), require('angular-formio/grid')) :
    typeof define === 'function' && define.amd ? define('angular-formio/resource', ['exports', '@angular/core', 'angular-formio/auth', 'angular-formio', 'native-promise-only', 'formiojs', 'lodash', '@angular/router', '@angular/common', 'angular-formio/grid'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['angular-formio'] = global['angular-formio'] || {}, global['angular-formio'].resource = {}), global.ng.core, global['angular-formio'].auth, global['angular-formio'], global.Promise, global.formiojs, global._, global.ng.router, global.ng.common, global['angular-formio'].grid));
}(this, (function (exports, i0, i1, i1$1, Promise, formiojs, _, i2, i4, i5) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Promise__default = /*#__PURE__*/_interopDefaultLegacy(Promise);
    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

    var FormioResourceConfig = /** @class */ (function () {
        function FormioResourceConfig() {
            this.name = '';
            this.form = '';
            this.parents = [];
        }
        return FormioResourceConfig;
    }());
    FormioResourceConfig.ɵfac = function FormioResourceConfig_Factory(t) { return new (t || FormioResourceConfig)(); };
    FormioResourceConfig.ɵprov = i0.ɵɵdefineInjectable({ token: FormioResourceConfig, factory: FormioResourceConfig.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceConfig, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FormioResources = /** @class */ (function () {
        function FormioResources(auth) {
            this.auth = auth;
            this.resources = {};
            this.error = new i0.EventEmitter();
            this.onError = this.error;
            this.resources = {
                currentUser: {
                    resourceLoaded: this.auth.userReady
                }
            };
        }
        return FormioResources;
    }());
    FormioResources.ɵfac = function FormioResources_Factory(t) { return new (t || FormioResources)(i0.ɵɵinject(i1.FormioAuthService)); };
    FormioResources.ɵprov = i0.ɵɵdefineInjectable({ token: FormioResources, factory: FormioResources.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResources, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.FormioAuthService }]; }, null);
    })();

    var FormioResourceService = /** @class */ (function () {
        function FormioResourceService(appConfig, config, resourcesService, appRef) {
            var _this = this;
            this.appConfig = appConfig;
            this.config = config;
            this.resourcesService = resourcesService;
            this.appRef = appRef;
            this.initialized = false;
            this.isLoading = true;
            this.alerts = new i1$1.FormioAlerts();
            this.refresh = new i0.EventEmitter();
            this.formLoaded = new Promise__default['default'](function (resolve, reject) {
                _this.formResolve = resolve;
                _this.formReject = reject;
            });
            this.init();
        }
        FormioResourceService.prototype.initialize = function () {
            console.warn('FormioResourceService.initialize() has been deprecated.');
        };
        FormioResourceService.prototype.init = function () {
            if (this.initialized) {
                return;
            }
            this.initialized = true;
            if (this.appConfig && this.appConfig.appUrl) {
                formiojs.Formio.setBaseUrl(this.appConfig.apiUrl);
                formiojs.Formio.setProjectUrl(this.appConfig.appUrl);
                formiojs.Formio.formOnly = this.appConfig.formOnly;
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
        };
        FormioResourceService.prototype.onError = function (error) {
            this.alerts.setAlert({
                type: 'danger',
                message: error.message || error
            });
            if (this.resourcesService) {
                this.resourcesService.error.emit(error);
            }
            throw error;
        };
        FormioResourceService.prototype.onFormError = function (err) {
            this.formReject(err);
            this.onError(err);
        };
        FormioResourceService.prototype.setContext = function (route) {
            this.resourceId = route.snapshot.params['id'];
            this.resource = { data: {} };
            this.resourceUrl = this.appConfig.appUrl + '/' + this.config.form;
            if (this.resourceId) {
                this.resourceUrl += '/submission/' + this.resourceId;
            }
            this.formio = new i1$1.FormioPromiseService(this.resourceUrl);
            if (this.resourcesService) {
                this.resources[this.config.name] = this;
            }
            this.loadParents();
        };
        FormioResourceService.prototype.loadForm = function () {
            var _this = this;
            this.formFormio = new i1$1.FormioPromiseService(this.formUrl);
            this.isLoading = true;
            this.formLoading = this.formFormio
                .loadForm()
                .then(function (form) {
                _this.form = form;
                _this.formResolve(form);
                _this.isLoading = false;
                _this.loadParents();
                return form;
            }, function (err) { return _this.onFormError(err); })
                .catch(function (err) { return _this.onFormError(err); });
            return this.formLoading;
        };
        FormioResourceService.prototype.loadParents = function () {
            var _this = this;
            if (!this.config.parents || !this.config.parents.length) {
                return Promise__default['default'].resolve([]);
            }
            if (!this.resourcesService) {
                console.warn('You must provide the FormioResources within your application to use nested resources.');
                return Promise__default['default'].resolve([]);
            }
            return this.formLoading.then(function (form) {
                // Iterate through the list of parents.
                var _parentsLoaded = [];
                _this.config.parents.forEach(function (parent) {
                    var resourceName = parent.resource || parent;
                    var resourceField = parent.field || parent;
                    var filterResource = parent.hasOwnProperty('filter') ? parent.filter : true;
                    if (_this.resources.hasOwnProperty(resourceName) && _this.resources[resourceName].resourceLoaded) {
                        _parentsLoaded.push(_this.resources[resourceName].resourceLoaded.then(function (resource) {
                            var parentPath = '';
                            formiojs.Utils.eachComponent(form.components, function (component, path) {
                                if (component.key === resourceField) {
                                    component.hidden = true;
                                    component.clearOnHide = false;
                                    ___default['default'].set(_this.resource.data, path, resource);
                                    parentPath = path;
                                    return true;
                                }
                            });
                            return {
                                name: parentPath,
                                filter: filterResource,
                                resource: resource
                            };
                        }));
                    }
                });
                // When all the parents have loaded, emit that to the onParents emitter.
                return Promise__default['default'].all(_parentsLoaded).then(function (parents) {
                    _this.refresh.emit({
                        form: form,
                        submission: _this.resource
                    });
                    return parents;
                });
            });
        };
        FormioResourceService.prototype.onSubmissionError = function (err) {
            this.onError(err);
        };
        FormioResourceService.prototype.loadResource = function (route) {
            var _this = this;
            this.setContext(route);
            this.isLoading = true;
            this.resourceLoading = this.resourceLoaded = this.formio
                .loadSubmission(null, { ignoreCache: true })
                .then(function (resource) {
                _this.resource = resource;
                _this.isLoading = false;
                _this.refresh.emit({
                    property: 'submission',
                    value: _this.resource
                });
                return resource;
            }, function (err) { return _this.onSubmissionError(err); })
                .catch(function (err) { return _this.onSubmissionError(err); });
            return this.resourceLoading;
        };
        FormioResourceService.prototype.save = function (resource) {
            var _this = this;
            var formio = resource._id ? this.formio : this.formFormio;
            return formio
                .saveSubmission(resource)
                .then(function (saved) {
                _this.resource = saved;
                return saved;
            }, function (err) { return _this.onError(err); })
                .catch(function (err) { return _this.onError(err); });
        };
        FormioResourceService.prototype.remove = function () {
            var _this = this;
            return this.formio
                .deleteSubmission()
                .then(function () {
                _this.resource = null;
            }, function (err) { return _this.onError(err); })
                .catch(function (err) { return _this.onError(err); });
        };
        return FormioResourceService;
    }());
    FormioResourceService.ɵfac = function FormioResourceService_Factory(t) { return new (t || FormioResourceService)(i0.ɵɵinject(i1$1.FormioAppConfig), i0.ɵɵinject(FormioResourceConfig), i0.ɵɵinject(FormioResources, 8), i0.ɵɵinject(i0.ApplicationRef)); };
    FormioResourceService.ɵprov = i0.ɵɵdefineInjectable({ token: FormioResourceService, factory: FormioResourceService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i1$1.FormioAppConfig }, { type: FormioResourceConfig }, { type: FormioResources, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ApplicationRef }];
        }, null);
    })();

    function FormioResourceComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 4);
            i0.ɵɵelementStart(1, "a", 7);
            i0.ɵɵtext(2, "Edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function FormioResourceComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 4);
            i0.ɵɵelementStart(1, "a", 8);
            i0.ɵɵelement(2, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var FormioResourceComponent = /** @class */ (function () {
        function FormioResourceComponent(service, route, auth) {
            var _this = this;
            this.service = service;
            this.route = route;
            this.auth = auth;
            this.perms = { delete: false, edit: false };
            // subscribe to the route param changes, so that we could re-load the submission if navigation happens from one submission to another
            this.paramsSubscription = this.route.params.subscribe(function (params) {
                _this.init();
            });
        }
        FormioResourceComponent.prototype.ngOnInit = function () {
            this.init();
        };
        FormioResourceComponent.prototype.init = function () {
            var _this = this;
            this.service.loadResource(this.route);
            this.service.formLoaded.then(function (form) {
                _this.auth.ready.then(function () {
                    _this.service.resourceLoaded.then(function (resource) {
                        _this.service.formFormio.userPermissions(_this.auth.user, form, resource).then(function (perms) {
                            _this.perms.delete = perms.delete;
                            _this.perms.edit = perms.edit;
                        });
                    });
                });
            });
        };
        FormioResourceComponent.prototype.ngOnDestroy = function () {
            if (this.paramsSubscription) {
                this.paramsSubscription.unsubscribe();
            }
        };
        return FormioResourceComponent;
    }());
    FormioResourceComponent.ɵfac = function FormioResourceComponent_Factory(t) { return new (t || FormioResourceComponent)(i0.ɵɵdirectiveInject(FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i1.FormioAuthService)); };
    FormioResourceComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceComponent, selectors: [["ng-component"]], decls: 10, vars: 2, consts: [[1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function FormioResourceComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵelementStart(1, "li", 1);
                i0.ɵɵelementStart(2, "a", 2);
                i0.ɵɵelement(3, "i", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "li", 4);
                i0.ɵɵelementStart(5, "a", 5);
                i0.ɵɵtext(6, "View");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, FormioResourceComponent_li_7_Template, 3, 0, "li", 6);
                i0.ɵɵtemplate(8, FormioResourceComponent_li_8_Template, 3, 0, "li", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(9, "router-outlet");
            }
            if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngIf", ctx.perms.edit);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.perms.delete);
            }
        }, directives: [i2.RouterLinkWithHref, i2.RouterLinkActive, i4.NgIf, i2.RouterOutlet], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './resource.component.html'
                    }]
            }], function () { return [{ type: FormioResourceService }, { type: i2.ActivatedRoute }, { type: i1.FormioAuthService }]; }, null);
    })();

    var FormioResourceViewComponent = /** @class */ (function () {
        function FormioResourceViewComponent(service, config) {
            this.service = service;
            this.config = config;
        }
        return FormioResourceViewComponent;
    }());
    FormioResourceViewComponent.ɵfac = function FormioResourceViewComponent_Factory(t) { return new (t || FormioResourceViewComponent)(i0.ɵɵdirectiveInject(FormioResourceService), i0.ɵɵdirectiveInject(FormioResourceConfig)); };
    FormioResourceViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceViewComponent, selectors: [["ng-component"]], decls: 1, vars: 5, consts: [[3, "form", "submission", "refresh", "hideComponents", "readOnly"]], template: function FormioResourceViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "formio", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("hideComponents", ctx.config.parents)("readOnly", true);
            }
        }, directives: [i1$1.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceViewComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './view.component.html'
                    }]
            }], function () { return [{ type: FormioResourceService }, { type: FormioResourceConfig }]; }, null);
    })();

    var FormioResourceEditComponent = /** @class */ (function () {
        function FormioResourceEditComponent(service, route, router, config) {
            this.service = service;
            this.route = route;
            this.router = router;
            this.config = config;
            this.triggerError = new i0.EventEmitter();
        }
        FormioResourceEditComponent.prototype.onSubmit = function (submission) {
            var _this = this;
            var edit = this.service.resource;
            edit.data = submission.data;
            this.service.save(edit)
                .then(function () {
                _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
            })
                .catch(function (err) { return _this.triggerError.emit(err); });
        };
        return FormioResourceEditComponent;
    }());
    FormioResourceEditComponent.ɵfac = function FormioResourceEditComponent_Factory(t) { return new (t || FormioResourceEditComponent)(i0.ɵɵdirectiveInject(FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(FormioResourceConfig)); };
    FormioResourceEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceEditComponent, selectors: [["ng-component"]], decls: 1, vars: 4, consts: [[3, "form", "submission", "error", "refresh", "submit"]], template: function FormioResourceEditComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "formio", 0);
                i0.ɵɵlistener("submit", function FormioResourceEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("error", ctx.triggerError)("refresh", ctx.service.refresh);
            }
        }, directives: [i1$1.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceEditComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './edit.component.html'
                    }]
            }], function () { return [{ type: FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: FormioResourceConfig }]; }, null);
    })();

    var FormioResourceDeleteComponent = /** @class */ (function () {
        function FormioResourceDeleteComponent(service, route, router) {
            this.service = service;
            this.route = route;
            this.router = router;
        }
        FormioResourceDeleteComponent.prototype.onDelete = function () {
            var _this = this;
            this.service.remove().then(function () {
                _this.router.navigate(['../../'], { relativeTo: _this.route });
            });
        };
        FormioResourceDeleteComponent.prototype.onCancel = function () {
            this.router.navigate(['../', 'view'], { relativeTo: this.route });
        };
        return FormioResourceDeleteComponent;
    }());
    FormioResourceDeleteComponent.ɵfac = function FormioResourceDeleteComponent_Factory(t) { return new (t || FormioResourceDeleteComponent)(i0.ɵɵdirectiveInject(FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); };
    FormioResourceDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceDeleteComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function FormioResourceDeleteComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h3");
                i0.ɵɵtext(1, "Are you sure you wish to delete this record?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 0);
                i0.ɵɵelementStart(3, "button", 1);
                i0.ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_3_listener() { return ctx.onDelete(); });
                i0.ɵɵtext(4, "Yes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 2);
                i0.ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
                i0.ɵɵtext(6, "No");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceDeleteComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './delete.component.html'
                    }]
            }], function () { return [{ type: FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, null);
    })();

    function FormioResourceCreateComponent_h3_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h3", 2);
            i0.ɵɵelementStart(1, "a", 3);
            i0.ɵɵelement(2, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" | New ", ctx_r0.service.form.title, "\n");
        }
    }
    var FormioResourceCreateComponent = /** @class */ (function () {
        function FormioResourceCreateComponent(service, route, router, config) {
            this.service = service;
            this.route = route;
            this.router = router;
            this.config = config;
            this.onError = new i0.EventEmitter();
            this.onSuccess = new i0.EventEmitter();
        }
        FormioResourceCreateComponent.prototype.ngOnInit = function () {
            this.service.setContext(this.route);
        };
        FormioResourceCreateComponent.prototype.onSubmit = function (submission) {
            var _this = this;
            this.service
                .save(submission)
                .then(function () {
                _this.router.navigate(['../', _this.service.resource._id, 'view'], {
                    relativeTo: _this.route
                });
            })
                .catch(function (err) { return _this.onError.emit(err); });
        };
        return FormioResourceCreateComponent;
    }());
    FormioResourceCreateComponent.ɵfac = function FormioResourceCreateComponent_Factory(t) { return new (t || FormioResourceCreateComponent)(i0.ɵɵdirectiveInject(FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(FormioResourceConfig)); };
    FormioResourceCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceCreateComponent, selectors: [["ng-component"]], decls: 2, vars: 6, consts: [["style", "margin-top:0;", 4, "ngIf"], [3, "form", "submission", "refresh", "error", "success", "submit"], [2, "margin-top", "0"], ["routerLink", "../", 1, "back-button"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"]], template: function FormioResourceCreateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormioResourceCreateComponent_h3_0_Template, 4, 1, "h3", 0);
                i0.ɵɵelementStart(1, "formio", 1);
                i0.ɵɵlistener("submit", function FormioResourceCreateComponent_Template_formio_submit_1_listener($event) { return ctx.onSubmit($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.service.form);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("error", ctx.onError)("success", ctx.onSuccess);
            }
        }, directives: [i4.NgIf, i1$1.FormioComponent, i2.RouterLinkWithHref], styles: [".back-button[_ngcontent-%COMP%]{font-size:.8em}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceCreateComponent, [{
                type: i0.Component,
                args: [{
                        styleUrls: ['./create.component.scss'],
                        templateUrl: './create.component.html'
                    }]
            }], function () { return [{ type: FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: FormioResourceConfig }]; }, null);
    })();

    var FormioResourceIndexComponent = /** @class */ (function () {
        function FormioResourceIndexComponent(service, route, router, config, cdr, ngZone) {
            this.service = service;
            this.route = route;
            this.router = router;
            this.config = config;
            this.cdr = cdr;
            this.ngZone = ngZone;
        }
        FormioResourceIndexComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.gridQuery = {};
            this.service.setContext(this.route);
            this.service.formLoaded.then(function () {
                if (_this.service &&
                    _this.config.parents &&
                    _this.config.parents.length) {
                    _this.service.loadParents().then(function (parents) {
                        _.each(parents, function (parent) {
                            if (parent && parent.filter) {
                                _this.gridQuery['data.' + parent.name + '._id'] =
                                    parent.resource._id;
                            }
                        });
                        // Set the source to load the grid.
                        _this.gridSrc = _this.service.formUrl;
                        _this.createText = "New " + _this.service.form.title;
                    });
                }
                else if (_this.service.formUrl) {
                    _this.gridSrc = _this.service.formUrl;
                    _this.createText = "New " + _this.service.form.title;
                }
                _this.cdr.detectChanges();
            });
        };
        FormioResourceIndexComponent.prototype.onSelect = function (row) {
            var _this = this;
            this.ngZone.run(function () {
                _this.router.navigate([row._id, 'view'], { relativeTo: _this.route });
            });
        };
        FormioResourceIndexComponent.prototype.onCreateItem = function () {
            var _this = this;
            this.ngZone.run(function () {
                _this.router.navigate(['new'], { relativeTo: _this.route });
            });
        };
        return FormioResourceIndexComponent;
    }());
    FormioResourceIndexComponent.ɵfac = function FormioResourceIndexComponent_Factory(t) { return new (t || FormioResourceIndexComponent)(i0.ɵɵdirectiveInject(FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(FormioResourceConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    FormioResourceIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceIndexComponent, selectors: [["ng-component"]], decls: 2, vars: 5, consts: [[3, "alerts"], [3, "src", "query", "onForm", "createText", "rowSelect", "error", "createItem"]], template: function FormioResourceIndexComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "formio-alerts", 0);
                i0.ɵɵelementStart(1, "formio-grid", 1);
                i0.ɵɵlistener("rowSelect", function FormioResourceIndexComponent_Template_formio_grid_rowSelect_1_listener($event) { return ctx.onSelect($event); })("error", function FormioResourceIndexComponent_Template_formio_grid_error_1_listener($event) { return ctx.service.onError($event); })("createItem", function FormioResourceIndexComponent_Template_formio_grid_createItem_1_listener() { return ctx.onCreateItem(); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("alerts", ctx.service.alerts);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("src", ctx.gridSrc)("query", ctx.gridQuery)("onForm", ctx.service.formLoaded)("createText", ctx.createText);
            }
        }, directives: [i1$1.FormioAlertsComponent, i5.FormioGridComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResourceIndexComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './index.component.html'
                    }]
            }], function () { return [{ type: FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: FormioResourceConfig }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, null);
    })();

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

    var FormioResource = /** @class */ (function () {
        function FormioResource() {
        }
        FormioResource.forChild = function (config) {
            return i1$1.extendRouter(FormioResource, config, FormioResourceRoutes);
        };
        FormioResource.forRoot = function (config) {
            return i1$1.extendRouter(FormioResource, config, FormioResourceRoutes);
        };
        return FormioResource;
    }());
    FormioResource.ɵmod = i0.ɵɵdefineNgModule({ type: FormioResource });
    FormioResource.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioResource_Factory(t) { return new (t || FormioResource)(); }, providers: [
            i1$1.FormioAlerts
        ], imports: [[
                i4.CommonModule,
                i1$1.FormioModule,
                i5.FormioGrid,
                i2.RouterModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioResource, { declarations: [FormioResourceComponent,
                FormioResourceCreateComponent,
                FormioResourceIndexComponent,
                FormioResourceViewComponent,
                FormioResourceEditComponent,
                FormioResourceDeleteComponent], imports: [i4.CommonModule,
                i1$1.FormioModule,
                i5.FormioGrid,
                i2.RouterModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioResource, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1$1.FormioModule,
                            i5.FormioGrid,
                            i2.RouterModule
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
                            i1$1.FormioAlerts
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of angular-formio
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormioResource = FormioResource;
    exports.FormioResourceComponent = FormioResourceComponent;
    exports.FormioResourceConfig = FormioResourceConfig;
    exports.FormioResourceCreateComponent = FormioResourceCreateComponent;
    exports.FormioResourceDeleteComponent = FormioResourceDeleteComponent;
    exports.FormioResourceEditComponent = FormioResourceEditComponent;
    exports.FormioResourceIndexComponent = FormioResourceIndexComponent;
    exports.FormioResourceRoutes = FormioResourceRoutes;
    exports.FormioResourceService = FormioResourceService;
    exports.FormioResourceViewComponent = FormioResourceViewComponent;
    exports.FormioResources = FormioResources;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-formio-resource.umd.js.map
