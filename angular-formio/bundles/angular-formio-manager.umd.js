(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('formiojs'), require('lodash/each'), require('lodash/intersection'), require('angular-formio'), require('angular-formio/auth'), require('angular-formio/grid'), require('lodash'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('ngx-bootstrap/modal'), require('ngx-bootstrap/pagination')) :
    typeof define === 'function' && define.amd ? define('angular-formio/manager', ['exports', '@angular/core', 'formiojs', 'lodash/each', 'lodash/intersection', 'angular-formio', 'angular-formio/auth', 'angular-formio/grid', 'lodash', '@angular/router', '@angular/common', '@angular/forms', 'ngx-bootstrap/modal', 'ngx-bootstrap/pagination'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['angular-formio'] = global['angular-formio'] || {}, global['angular-formio'].manager = {}), global.ng.core, global.formiojs, global._each, global._intersection, global['angular-formio'], global['angular-formio'].auth, global['angular-formio'].grid, global._, global.ng.router, global.ng.common, global.ng.forms, global['ngx-bootstrap/modal'], global['ngx-bootstrap/pagination']));
}(this, (function (exports, i0, formiojs, _each, _intersection, i3, i3$1, i6, _, i2, i6$1, i5, i5$1, i2$1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var _each__default = /*#__PURE__*/_interopDefaultLegacy(_each);
    var _intersection__default = /*#__PURE__*/_interopDefaultLegacy(_intersection);
    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

    var FormManagerConfig = /** @class */ (function () {
        function FormManagerConfig() {
            this.tag = '';
            this.includeSearch = false;
            this.saveDraft = false;
        }
        return FormManagerConfig;
    }());
    FormManagerConfig.ɵfac = function FormManagerConfig_Factory(t) { return new (t || FormManagerConfig)(); };
    FormManagerConfig.ɵprov = i0.ɵɵdefineInjectable({ token: FormManagerConfig, factory: FormManagerConfig.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerConfig, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FormManagerService = /** @class */ (function () {
        function FormManagerService(appConfig, config, auth) {
            var _this = this;
            this.appConfig = appConfig;
            this.config = config;
            this.auth = auth;
            this.form = null;
            this.perms = { delete: false, edit: false };
            if (this.appConfig && this.appConfig.appUrl) {
                formiojs.Formio.setBaseUrl(this.appConfig.apiUrl);
                formiojs.Formio.setProjectUrl(this.appConfig.appUrl);
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
            this.actionAllowed = function (action) { return _this.isActionAllowed(action); };
            this.reset();
        }
        FormManagerService.prototype.isActionAllowed = function (action) {
            return this.access[action];
        };
        FormManagerService.prototype.setAccess = function () {
            var _this = this;
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
                this.ready = this.auth.ready.then(function () {
                    var adminRoles = [];
                    _each__default['default'](_this.auth.roles, function (role, name) {
                        if (role.admin) {
                            adminRoles.push(role._id);
                        }
                    });
                    if (_this.auth.user && _this.auth.user.roles) {
                        _this.auth.user.roles.forEach(function (roleId) {
                            if (adminRoles.indexOf(roleId) !== -1) {
                                _this.access.formCreate = true;
                                _this.access.formView = true;
                                _this.access.formEdit = true;
                                _this.access.formDelete = true;
                                _this.access.submissionIndex = true;
                            }
                            if (!_this.access.formCreate) {
                                _this.access.formCreate = (_this.auth.formAccess.create_all.indexOf(roleId) !== -1);
                            }
                            if (!_this.access.formView) {
                                _this.access.formView = (_this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                            }
                            if (!_this.access.formEdit) {
                                _this.access.formEdit = (_this.auth.formAccess.update_all.indexOf(roleId) !== -1);
                            }
                            if (!_this.access.formDelete) {
                                _this.access.formDelete = (_this.auth.formAccess.delete_all.indexOf(roleId) !== -1);
                            }
                            if (!_this.access.submissionIndex) {
                                _this.access.submissionIndex = (_this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                            }
                        });
                    }
                });
            }
            else {
                this.ready = Promise.resolve(false);
            }
        };
        FormManagerService.prototype.reset = function (route) {
            var _this = this;
            if (route) {
                route.params.subscribe(function (params) {
                    if (params.id) {
                        _this.formio = new formiojs.Formio(_this.formio.formsUrl + "/" + params.id);
                    }
                    else {
                        _this.reset();
                    }
                });
            }
            else {
                this.formio = new formiojs.Formio(this.appConfig.appUrl);
                this.setAccess();
            }
        };
        FormManagerService.prototype.hasAccess = function (roles) {
            if (!this.auth.user) {
                return false;
            }
            return !!_intersection__default['default'](roles, this.auth.user.roles).length;
        };
        FormManagerService.prototype.setForm = function (form) {
            var _this = this;
            this.form = form;
            if (form.access) {
                // Check if they have access here.
                form.access.forEach(function (access) {
                    // Check for all access.
                    if (_this.allAccessMap[access.type] && !_this.access[_this.allAccessMap[access.type]]) {
                        _this.access[_this.allAccessMap[access.type]] = _this.hasAccess(access.roles);
                    }
                    // Check for own access.
                    if (_this.auth && _this.auth.user &&
                        (form._id === _this.auth.user._id) &&
                        _this.ownAccessMap[access.type] &&
                        !_this.access[_this.ownAccessMap[access.type]]) {
                        _this.access[_this.ownAccessMap[access.type]] = _this.hasAccess(access.roles);
                    }
                });
            }
            return form;
        };
        FormManagerService.prototype.loadForm = function () {
            var _this = this;
            return this.formio.loadForm().then(function (form) { return _this.setForm(form); });
        };
        FormManagerService.prototype.setSubmission = function (route) {
            var _this = this;
            return new Promise(function (resolve) {
                route.params.subscribe(function (params) {
                    _this.formio = new formiojs.Formio(_this.formio.submissionsUrl + "/" + params.id);
                    resolve(_this.formio);
                });
            });
        };
        FormManagerService.prototype.submissionLoaded = function (submission) {
            var _this = this;
            this.auth.ready.then(function () {
                _this.formio.userPermissions(_this.auth.user, _this.form, submission).then(function (perms) {
                    _this.perms.delete = perms.delete;
                    _this.perms.edit = perms.edit;
                });
            });
        };
        FormManagerService.prototype.loadForms = function () {
            return this.formio.loadForms({ params: {
                    tags: this.config.tag
                } });
        };
        FormManagerService.prototype.createForm = function (form) {
            return this.formio.createform(form);
        };
        return FormManagerService;
    }());
    FormManagerService.ɵfac = function FormManagerService_Factory(t) { return new (t || FormManagerService)(i0.ɵɵinject(i3.FormioAppConfig), i0.ɵɵinject(FormManagerConfig), i0.ɵɵinject(i3$1.FormioAuthService)); };
    FormManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: FormManagerService, factory: FormManagerService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerService, [{
                type: i0.Injectable
            }], function () { return [{ type: i3.FormioAppConfig }, { type: FormManagerConfig }, { type: i3$1.FormioAuthService }]; }, null);
    })();

    function FormManagerIndexComponent_div_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 5);
            i0.ɵɵlistener("click", function FormManagerIndexComponent_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.clearSearch(); });
            i0.ɵɵelement(1, "span", 6);
            i0.ɵɵelementEnd();
        }
    }
    function FormManagerIndexComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵelementStart(1, "input", 3);
            i0.ɵɵlistener("keyup", function FormManagerIndexComponent_div_0_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSearch(); })("ngModelChange", function FormManagerIndexComponent_div_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.search = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, FormManagerIndexComponent_div_0_span_2_Template, 2, 0, "span", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r0.search);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.search && ctx_r0.search !== "");
        }
    }
    function FormManagerIndexComponent_formio_grid_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "formio-grid", 7);
            i0.ɵɵlistener("rowAction", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_rowAction_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onAction($event); })("rowSelect", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_rowSelect_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onSelect($event); })("createItem", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_createItem_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onCreateItem(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formio", ctx_r1.service.formio)("gridType", "form")("query", ctx_r1.gridQuery)("refresh", ctx_r1.refreshGrid)("isActionAllowed", ctx_r1.service.actionAllowed);
        }
    }
    var FormManagerIndexComponent = /** @class */ (function () {
        function FormManagerIndexComponent(service, route, router, config) {
            this.service = service;
            this.route = route;
            this.router = router;
            this.config = config;
            this.search = '';
            this.gridQuery = { tags: this.config.tag, type: 'form' };
            this.refreshGrid = new i0.EventEmitter();
            this.onSearch = _.debounce(this.onSearch, 300);
        }
        FormManagerIndexComponent.prototype.loadGrid = function () {
            var _this = this;
            this.search = localStorage.getItem('searchInput');
            this.gridQuery = JSON.parse(localStorage.getItem('query')) || this.gridQuery;
            var currentPage = +localStorage.getItem('currentPage') || 0;
            this.formGrid
                .refreshGrid(this.gridQuery)
                .then(function () { return _this.formGrid.setPage(currentPage - 1); });
        };
        FormManagerIndexComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.gridQuery = { tags: this.config.tag, type: 'form' };
            this.service.reset();
            this.service.ready.then(function () {
                _this.loadGrid();
                _this.formGrid.footer.pageChanged.subscribe(function (page) {
                    localStorage.setItem('currentPage', page.page);
                });
            });
        };
        FormManagerIndexComponent.prototype.onSearch = function () {
            var searchInput = this.search;
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
        };
        FormManagerIndexComponent.prototype.clearSearch = function () {
            this.gridQuery = { tags: this.config.tag, type: 'form' };
            localStorage.removeItem('query');
            localStorage.removeItem('searchInput');
            localStorage.removeItem('currentPage');
            this.search = '';
            this.formGrid.pageChanged({ page: 1 });
            this.formGrid.query = {};
            this.formGrid.refreshGrid({ tags: this.config.tag, type: 'form' });
        };
        FormManagerIndexComponent.prototype.onAction = function (action) {
            this.router.navigate([action.row._id, action.action], { relativeTo: this.route });
        };
        FormManagerIndexComponent.prototype.onSelect = function (row) {
            this.router.navigate([row._id, 'view'], { relativeTo: this.route });
        };
        FormManagerIndexComponent.prototype.onCreateItem = function () {
            this.router.navigate(['create'], { relativeTo: this.route });
        };
        return FormManagerIndexComponent;
    }());
    FormManagerIndexComponent.ɵfac = function FormManagerIndexComponent_Factory(t) { return new (t || FormManagerIndexComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(FormManagerConfig)); };
    FormManagerIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerIndexComponent, selectors: [["ng-component"]], viewQuery: function FormManagerIndexComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i6.FormioGridComponent, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formGrid = _t.first);
            }
        }, decls: 2, vars: 2, consts: [["class", "input-group mb-3", 4, "ngIf"], [3, "formio", "gridType", "query", "refresh", "isActionAllowed", "rowAction", "rowSelect", "createItem", 4, "ngIf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Forms", "aria-label", "Search Forms", "aria-describedby", "button-search", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["class", "form-clear input-group-addon", 3, "click", 4, "ngIf"], [1, "form-clear", "input-group-addon", 3, "click"], [1, "fa", "fa-times"], [3, "formio", "gridType", "query", "refresh", "isActionAllowed", "rowAction", "rowSelect", "createItem"]], template: function FormManagerIndexComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormManagerIndexComponent_div_0_Template, 3, 2, "div", 0);
                i0.ɵɵtemplate(1, FormManagerIndexComponent_formio_grid_1_Template, 1, 5, "formio-grid", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.config.includeSearch);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.service.ready);
            }
        }, directives: [i6$1.NgIf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.FormioGridComponent], styles: [".form-clear[_ngcontent-%COMP%]{align-items:center;background:#cecece;border-radius:50%;bottom:8px;color:rgba(0,0,0,.3);cursor:pointer;display:flex;height:24px;justify-content:center;position:absolute;right:10px;top:6px;width:24px;z-index:10}.form-clear[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:16px;font-weight:500}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerIndexComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './index.component.html',
                        styleUrls: ['./index.component.scss']
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: FormManagerConfig }]; }, { formGrid: [{
                    type: i0.ViewChild,
                    args: [i6.FormioGridComponent, { static: false }]
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["title"];
    var _c1 = ["type"];
    function FormManagerEditComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 15);
        }
    }
    function FormManagerEditComponent_form_builder_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "form-builder", 16, 17);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formbuilder", ctx_r3.config.builder)("form", ctx_r3.form);
        }
    }
    var FormManagerEditComponent = /** @class */ (function () {
        function FormManagerEditComponent(service, router, route, config, ref, alerts) {
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
        FormManagerEditComponent.prototype.initBuilder = function (editing) {
            var _this = this;
            if (editing) {
                this.loading = true;
                this.editMode = true;
                return this.service.loadForm().then(function (form) {
                    _this.form = form;
                    _this.formTitle.nativeElement.value = form.title;
                    _this.formType.nativeElement.value = form.display || 'form';
                    _this.loading = false;
                    _this.formReady = true;
                    _this.ref.detectChanges();
                    return true;
                }).catch(function (err) {
                    _this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
                    _this.loading = false;
                    _this.formReady = true;
                });
            }
            else {
                this.formReady = true;
                return Promise.resolve(true);
            }
        };
        FormManagerEditComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.route.url.subscribe(function (url) {
                _this.initBuilder((url[0].path === 'edit'));
            });
        };
        FormManagerEditComponent.prototype.onDisplaySelect = function (event) {
            this.builder.setDisplay(event.target.value);
        };
        FormManagerEditComponent.prototype.saveForm = function () {
            var _this = this;
            this.loading = true;
            this.form.title = this.formTitle.nativeElement.value;
            this.form.display = this.formType.nativeElement.value;
            this.form.components = this.builder.formio.schema.components;
            if (this.config.tag) {
                this.form.tags = this.form.tags || [];
                this.form.tags.push(this.config.tag);
                this.form.tags = ___default['default'].uniq(this.form.tags);
            }
            if (!this.form._id) {
                this.form.name = ___default['default'].camelCase(this.form.title).toLowerCase();
                this.form.path = this.form.name;
            }
            return this.service.formio.saveForm(this.form).then(function (form) {
                _this.form = _this.service.setForm(form);
                _this.loading = false;
                return _this.form;
            }).catch(function (err) {
                _this.loading = false;
                // Catch if a form is returned as an error. This is a conflict.
                if (err._id && err.type) {
                    throw err;
                }
                _this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
            });
        };
        FormManagerEditComponent.prototype.onSave = function () {
            var _this = this;
            return this.saveForm().then(function (form) {
                if (_this.editMode) {
                    _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
                }
                else {
                    _this.router.navigate(['../', form._id, 'view'], { relativeTo: _this.route });
                }
            });
        };
        return FormManagerEditComponent;
    }());
    FormManagerEditComponent.ɵfac = function FormManagerEditComponent_Factory(t) { return new (t || FormManagerEditComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(FormManagerConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.FormioAlerts)); };
    FormManagerEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerEditComponent, selectors: [["ng-component"]], viewQuery: function FormManagerEditComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i3.FormBuilderComponent, true);
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.builder = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formTitle = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formType = _t.first);
            }
        }, decls: 21, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-8"], ["type", "text", "id", "formTitle", "placeholder", "Enter a Title", 1, "form-control"], ["title", ""], [1, "col-sm-2"], ["id", "formSelect", 1, "form-control", 3, "change"], ["type", ""], ["value", "form"], ["value", "wizard"], ["value", "pdf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [3, "alerts"], [3, "formbuilder", "form", 4, "ngIf"], [1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"], [1, "loader"], [3, "formbuilder", "form"], ["builder", ""]], template: function FormManagerEditComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormManagerEditComponent_div_0_Template, 1, 0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelement(3, "input", 3, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelementStart(6, "select", 6, 7);
                i0.ɵɵlistener("change", function FormManagerEditComponent_Template_select_change_6_listener($event) { return ctx.onDisplaySelect($event); });
                i0.ɵɵelementStart(8, "option", 8);
                i0.ɵɵtext(9, "Form");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "option", 9);
                i0.ɵɵtext(11, "Wizard");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "option", 10);
                i0.ɵɵtext(13, "PDF");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 5);
                i0.ɵɵelementStart(15, "button", 11);
                i0.ɵɵlistener("click", function FormManagerEditComponent_Template_button_click_15_listener() { return ctx.onSave(); });
                i0.ɵɵtext(16, "Save Form");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(17, "formio-alerts", 12);
                i0.ɵɵtemplate(18, FormManagerEditComponent_form_builder_18_Template, 2, 2, "form-builder", 13);
                i0.ɵɵelementStart(19, "button", 14);
                i0.ɵɵlistener("click", function FormManagerEditComponent_Template_button_click_19_listener() { return ctx.onSave(); });
                i0.ɵɵtext(20, "Save Form");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.loading);
                i0.ɵɵadvance(17);
                i0.ɵɵproperty("alerts", ctx.alerts);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.formReady);
            }
        }, directives: [i6$1.NgIf, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i3.FormioAlertsComponent, i3.FormBuilderComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerEditComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './edit.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: FormManagerConfig }, { type: i0.ChangeDetectorRef }, { type: i3.FormioAlerts }]; }, { builder: [{
                    type: i0.ViewChild,
                    args: [i3.FormBuilderComponent, { static: false }]
                }], formTitle: [{
                    type: i0.ViewChild,
                    args: ['title', { static: false }]
                }], formType: [{
                    type: i0.ViewChild,
                    args: ['type', { static: false }]
                }] });
    })();

    function FormManagerCreateComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 15);
        }
    }
    function FormManagerCreateComponent_form_builder_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "form-builder", 16, 17);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formbuilder", ctx_r3.config.builder)("form", ctx_r3.form);
        }
    }
    var FormManagerCreateComponent = /** @class */ (function (_super) {
        __extends(FormManagerCreateComponent, _super);
        function FormManagerCreateComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormManagerCreateComponent.prototype.ngOnInit = function () {
            this.service.reset();
        };
        return FormManagerCreateComponent;
    }(FormManagerEditComponent));
    FormManagerCreateComponent.ɵfac = function FormManagerCreateComponent_Factory(t) { return ɵFormManagerCreateComponent_BaseFactory(t || FormManagerCreateComponent); };
    FormManagerCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerCreateComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 21, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-8"], ["type", "text", "id", "formTitle", "placeholder", "Enter a Title", 1, "form-control"], ["title", ""], [1, "col-sm-2"], ["id", "formSelect", 1, "form-control", 3, "change"], ["type", ""], ["value", "form"], ["value", "wizard"], ["value", "pdf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [3, "alerts"], [3, "formbuilder", "form", 4, "ngIf"], [1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"], [1, "loader"], [3, "formbuilder", "form"], ["builder", ""]], template: function FormManagerCreateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormManagerCreateComponent_div_0_Template, 1, 0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelement(3, "input", 3, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelementStart(6, "select", 6, 7);
                i0.ɵɵlistener("change", function FormManagerCreateComponent_Template_select_change_6_listener($event) { return ctx.onDisplaySelect($event); });
                i0.ɵɵelementStart(8, "option", 8);
                i0.ɵɵtext(9, "Form");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "option", 9);
                i0.ɵɵtext(11, "Wizard");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "option", 10);
                i0.ɵɵtext(13, "PDF");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 5);
                i0.ɵɵelementStart(15, "button", 11);
                i0.ɵɵlistener("click", function FormManagerCreateComponent_Template_button_click_15_listener() { return ctx.onSave(); });
                i0.ɵɵtext(16, "Save Form");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(17, "formio-alerts", 12);
                i0.ɵɵtemplate(18, FormManagerCreateComponent_form_builder_18_Template, 2, 2, "form-builder", 13);
                i0.ɵɵelementStart(19, "button", 14);
                i0.ɵɵlistener("click", function FormManagerCreateComponent_Template_button_click_19_listener() { return ctx.onSave(); });
                i0.ɵɵtext(20, "Save Form");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.loading);
                i0.ɵɵadvance(17);
                i0.ɵɵproperty("alerts", ctx.alerts);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.formReady);
            }
        }, directives: [i6$1.NgIf, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i3.FormioAlertsComponent, i3.FormBuilderComponent], encapsulation: 2 });
    var ɵFormManagerCreateComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(FormManagerCreateComponent);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerCreateComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: '../edit/edit.component.html'
                    }]
            }], null, null);
    })();

    function FormManagerFormComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function FormManagerFormComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); var _r3 = i0.ɵɵreference(17); return ctx_r5.openEmbed(_r3); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵtext(2, " Share");
            i0.ɵɵelementEnd();
        }
    }
    function FormManagerFormComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵelementStart(1, "a", 14);
            i0.ɵɵelement(2, "i", 15);
            i0.ɵɵtext(3, " Edit Form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function FormManagerFormComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵelementStart(1, "a", 16);
            i0.ɵɵelement(2, "span", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function FormManagerFormComponent_ng_template_16_pre_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "pre");
            i0.ɵɵelement(1, "textarea", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r7.embedCode);
        }
    }
    function FormManagerFormComponent_ng_template_16_input_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "input", 32);
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngModel", ctx_r8.shareUrl);
        }
    }
    var _c0$1 = function (a0) { return { "active": a0 }; };
    function FormManagerFormComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵelementStart(1, "h4", 19);
            i0.ɵɵtext(2, "Share or Embed this form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 20);
            i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.modalRef.hide(); });
            i0.ɵɵelementStart(4, "span", 21);
            i0.ɵɵtext(5, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 22);
            i0.ɵɵelementStart(7, "ul", 23);
            i0.ɵɵelementStart(8, "li", 2);
            i0.ɵɵelementStart(9, "a", 24);
            i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.choices("isUrl"); });
            i0.ɵɵelement(10, "i", 25);
            i0.ɵɵtext(11, " URL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "li", 2);
            i0.ɵɵelementStart(13, "a", 24);
            i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.choices("isEmbed"); });
            i0.ɵɵelement(14, "i", 26);
            i0.ɵɵtext(15, " Embed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, FormManagerFormComponent_ng_template_16_pre_16_Template, 2, 1, "pre", 27);
            i0.ɵɵtemplate(17, FormManagerFormComponent_ng_template_16_input_17_Template, 1, 1, "input", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 29);
            i0.ɵɵelementStart(19, "button", 30);
            i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.modalRef.hide(); });
            i0.ɵɵtext(20, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$1, ctx_r4.choice === "isUrl"));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$1, ctx_r4.choice === "isEmbed"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r4.choice === "isEmbed");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.choice === "isUrl");
        }
    }
    var FormManagerFormComponent = /** @class */ (function () {
        function FormManagerFormComponent(service, route, appConfig, options, modalService) {
            this.service = service;
            this.route = route;
            this.appConfig = appConfig;
            this.options = options;
            this.modalService = modalService;
            this.choice = 'isUrl';
            this.goTo = '';
        }
        FormManagerFormComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.params.subscribe(function (params) {
                _this.formio = new formiojs.Formio(_this.appConfig.appUrl + "/form/" + params.id);
                _this.formio.loadForm().then(function (form) {
                    _this.projectId = form.project;
                    _this.pathName = form.path;
                    _this.getShareUrl();
                });
                _this.service.reset(_this.route);
            });
        };
        FormManagerFormComponent.prototype.getShareUrl = function () {
            var src = this.appConfig.appUrl + '/' + this.pathName;
            this.shareUrl = this.options.viewer + "/#/?src=" + encodeURIComponent(src);
            return this.shareUrl;
        };
        FormManagerFormComponent.prototype.openEmbed = function (content) {
            var goto = '';
            if (this.goTo) {
                goto += "if (d && d.formSubmission && d.formSubmission._id) { window.location.href = \"" + this.goTo + "\";}";
            }
            var embedCode = '<script type="text/javascript">';
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
        };
        FormManagerFormComponent.prototype.choices = function (string) {
            this.choice = string;
        };
        return FormManagerFormComponent;
    }());
    FormManagerFormComponent.ɵfac = function FormManagerFormComponent_Factory(t) { return new (t || FormManagerFormComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAppConfig), i0.ɵɵdirectiveInject(FormManagerConfig), i0.ɵɵdirectiveInject(i5$1.BsModalService)); };
    FormManagerFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerFormComponent, selectors: [["ng-component"]], decls: 18, vars: 3, consts: [["class", "pull-right btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-2"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-pencil", "glyphicon", "glyphicon-pencil"], ["routerLink", "submission", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-list-alt", "glyphicon", "glyphicon-list-alt"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["content", ""], [1, "pull-right", "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-share-alt", "glyphicon", "glyphicon-share"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-edit", "glyphicon", "glyphicon-edit"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "nav", "nav-tabs", "mr-auto", "mb-2"], [1, "nav-link", 3, "ngClass", "click"], [1, "fa", "fa-link"], [1, "fa", "fa-code"], [4, "ngIf"], ["type", "text", "onclick", "this.focus();this.select()", "readonly", "readonly", "class", "form-control", "placeholder", "https://examples.form.io/example", 3, "ngModel", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["onclick", "this.focus();this.select()", "readonly", "readonly", "rows", "8", 2, "width", "100%", 3, "ngModel"], ["type", "text", "onclick", "this.focus();this.select()", "readonly", "readonly", "placeholder", "https://examples.form.io/example", 1, "form-control", 3, "ngModel"]], template: function FormManagerFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormManagerFormComponent_button_0_Template, 3, 0, "button", 0);
                i0.ɵɵelementStart(1, "ul", 1);
                i0.ɵɵelementStart(2, "li", 2);
                i0.ɵɵelementStart(3, "a", 3);
                i0.ɵɵelement(4, "i", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "li", 5);
                i0.ɵɵelementStart(6, "a", 6);
                i0.ɵɵelement(7, "i", 7);
                i0.ɵɵtext(8, " Enter Data");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "li", 5);
                i0.ɵɵelementStart(10, "a", 8);
                i0.ɵɵelement(11, "i", 9);
                i0.ɵɵtext(12, " View Data");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(13, FormManagerFormComponent_li_13_Template, 4, 0, "li", 10);
                i0.ɵɵtemplate(14, FormManagerFormComponent_li_14_Template, 3, 0, "li", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "router-outlet");
                i0.ɵɵtemplate(16, FormManagerFormComponent_ng_template_16_Template, 21, 8, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.options.viewer);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("ngIf", ctx.service.actionAllowed("formEdit"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.service.actionAllowed("formDelete"));
            }
        }, directives: [i6$1.NgIf, i2.RouterLinkWithHref, i2.RouterLinkActive, i2.RouterOutlet, i6$1.NgClass, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerFormComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './form.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.ActivatedRoute }, { type: i3.FormioAppConfig }, { type: FormManagerConfig }, { type: i5$1.BsModalService }]; }, null);
    })();

    function FormManagerViewComponent_formio_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "formio", 1);
            i0.ɵɵlistener("submit", function FormManagerViewComponent_formio_0_Template_formio_submit_0_listener($event) { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onSubmit($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("renderer", ctx_r0.config.renderer)("renderOptions", ctx_r0.renderOptions)("url", ctx_r0.service.formio.formUrl)("form", ctx_r0.currentForm)("submission", ctx_r0.submission)("success", ctx_r0.onSuccess)("error", ctx_r0.onError);
        }
    }
    var FormManagerViewComponent = /** @class */ (function () {
        function FormManagerViewComponent(service, router, route, config, auth) {
            this.service = service;
            this.router = router;
            this.route = route;
            this.config = config;
            this.auth = auth;
            this.onSuccess = new i0.EventEmitter();
            this.onError = new i0.EventEmitter();
            this.renderOptions = {
                saveDraft: this.config.saveDraft
            };
            this.currentForm = null;
            this.submission = { data: {} };
        }
        FormManagerViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Reset the formio service to this form only.
            this.service.formio = new formiojs.Formio(this.service.formio.formUrl);
            this.service.loadForm().then(function (form) {
                _this.currentForm = form;
            });
        };
        FormManagerViewComponent.prototype.onSubmit = function (submission) {
            var _this = this;
            this.submission.data = submission.data;
            this.submission.state = 'complete';
            this.service.formio.saveSubmission(this.submission).then(function (saved) {
                _this.onSuccess.emit();
                _this.router.navigate(['../', 'submission', saved._id], { relativeTo: _this.route });
            }).catch(function (err) { return _this.onError.emit(err); });
        };
        return FormManagerViewComponent;
    }());
    FormManagerViewComponent.ɵfac = function FormManagerViewComponent_Factory(t) { return new (t || FormManagerViewComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(FormManagerConfig), i0.ɵɵdirectiveInject(i3$1.FormioAuthService)); };
    FormManagerViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerViewComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "renderer", "renderOptions", "url", "form", "submission", "success", "error", "submit", 4, "ngIf"], [3, "renderer", "renderOptions", "url", "form", "submission", "success", "error", "submit"]], template: function FormManagerViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormManagerViewComponent_formio_0_Template, 1, 7, "formio", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.currentForm);
            }
        }, directives: [i6$1.NgIf, i3.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerViewComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './view.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: FormManagerConfig }, { type: i3$1.FormioAuthService }]; }, null);
    })();

    var FormManagerDeleteComponent = /** @class */ (function () {
        function FormManagerDeleteComponent(service, router, route, alerts) {
            this.service = service;
            this.router = router;
            this.route = route;
            this.alerts = alerts;
        }
        FormManagerDeleteComponent.prototype.onDelete = function () {
            var _this = this;
            this.service.formio.deleteForm().then(function () {
                _this.router.navigate(['../../'], { relativeTo: _this.route });
            }).catch(function (err) { return _this.alerts.setAlert({ type: 'danger', message: (err.message || err) }); });
        };
        FormManagerDeleteComponent.prototype.onCancel = function () {
            this.router.navigate(['../', 'view'], { relativeTo: this.route });
        };
        return FormManagerDeleteComponent;
    }());
    FormManagerDeleteComponent.ɵfac = function FormManagerDeleteComponent_Factory(t) { return new (t || FormManagerDeleteComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAlerts)); };
    FormManagerDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerDeleteComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[3, "alerts"], [1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function FormManagerDeleteComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "formio-alerts", 0);
                i0.ɵɵelementStart(1, "h3");
                i0.ɵɵtext(2, "Are you sure you wish to delete this form?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1);
                i0.ɵɵelementStart(4, "button", 2);
                i0.ɵɵlistener("click", function FormManagerDeleteComponent_Template_button_click_4_listener() { return ctx.onDelete(); });
                i0.ɵɵtext(5, "Yes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 3);
                i0.ɵɵlistener("click", function FormManagerDeleteComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
                i0.ɵɵtext(7, "No");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("alerts", ctx.alerts);
            }
        }, directives: [i3.FormioAlertsComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerDeleteComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './delete.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormioAlerts }]; }, null);
    })();

    var SubmissionEditComponent = /** @class */ (function () {
        function SubmissionEditComponent(service, router, route) {
            this.service = service;
            this.router = router;
            this.route = route;
        }
        SubmissionEditComponent.prototype.onSubmit = function (submission) {
            this.router.navigate(['../../'], { relativeTo: this.route });
        };
        return SubmissionEditComponent;
    }());
    SubmissionEditComponent.ɵfac = function SubmissionEditComponent_Factory(t) { return new (t || SubmissionEditComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
    SubmissionEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionEditComponent, selectors: [["ng-component"]], decls: 1, vars: 2, consts: [[3, "renderer", "src", "submit", "formLoad", "submissionLoad"]], template: function SubmissionEditComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "formio", 0);
                i0.ɵɵlistener("submit", function SubmissionEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); })("formLoad", function SubmissionEditComponent_Template_formio_formLoad_0_listener($event) { return ctx.service.setForm($event); })("submissionLoad", function SubmissionEditComponent_Template_formio_submissionLoad_0_listener($event) { return ctx.service.submissionLoaded($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("renderer", ctx.service.config.renderer)("src", ctx.service.formio.submissionUrl);
            }
        }, directives: [i3.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionEditComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './edit.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null);
    })();

    var SubmissionDeleteComponent = /** @class */ (function () {
        function SubmissionDeleteComponent(service, router, route, alerts) {
            this.service = service;
            this.router = router;
            this.route = route;
            this.alerts = alerts;
        }
        SubmissionDeleteComponent.prototype.onDelete = function () {
            var _this = this;
            this.service.formio.deleteSubmission().then(function () {
                _this.router.navigate(['../../'], { relativeTo: _this.route });
            }).catch(function (err) { return _this.alerts.setAlert({ type: 'danger', message: (err.message || err) }); });
        };
        SubmissionDeleteComponent.prototype.onCancel = function () {
            this.router.navigate(['../', 'view'], { relativeTo: this.route });
        };
        return SubmissionDeleteComponent;
    }());
    SubmissionDeleteComponent.ɵfac = function SubmissionDeleteComponent_Factory(t) { return new (t || SubmissionDeleteComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAlerts)); };
    SubmissionDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionDeleteComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[3, "alerts"], [1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function SubmissionDeleteComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "formio-alerts", 0);
                i0.ɵɵelementStart(1, "h3");
                i0.ɵɵtext(2, "Are you sure you wish to delete this record?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1);
                i0.ɵɵelementStart(4, "button", 2);
                i0.ɵɵlistener("click", function SubmissionDeleteComponent_Template_button_click_4_listener() { return ctx.onDelete(); });
                i0.ɵɵtext(5, "Yes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 3);
                i0.ɵɵlistener("click", function SubmissionDeleteComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
                i0.ɵɵtext(7, "No");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("alerts", ctx.alerts);
            }
        }, directives: [i3.FormioAlertsComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionDeleteComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './delete.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormioAlerts }]; }, null);
    })();

    var SubmissionViewComponent = /** @class */ (function () {
        function SubmissionViewComponent(service) {
            this.service = service;
        }
        return SubmissionViewComponent;
    }());
    SubmissionViewComponent.ɵfac = function SubmissionViewComponent_Factory(t) { return new (t || SubmissionViewComponent)(i0.ɵɵdirectiveInject(FormManagerService)); };
    SubmissionViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionViewComponent, selectors: [["ng-component"]], decls: 1, vars: 3, consts: [[3, "renderer", "src", "readOnly", "formLoad", "submissionLoad"]], template: function SubmissionViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "formio", 0);
                i0.ɵɵlistener("formLoad", function SubmissionViewComponent_Template_formio_formLoad_0_listener($event) { return ctx.service.setForm($event); })("submissionLoad", function SubmissionViewComponent_Template_formio_submissionLoad_0_listener($event) { return ctx.service.submissionLoaded($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("renderer", ctx.service.config.renderer)("src", ctx.service.formio.submissionUrl)("readOnly", true);
            }
        }, directives: [i3.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionViewComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './view.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }]; }, null);
    })();

    var SubmissionIndexComponent = /** @class */ (function () {
        function SubmissionIndexComponent(service, route, router) {
            this.service = service;
            this.route = route;
            this.router = router;
        }
        SubmissionIndexComponent.prototype.onSelect = function (row) {
            this.router.navigate([row._id, 'view'], { relativeTo: this.route });
        };
        return SubmissionIndexComponent;
    }());
    SubmissionIndexComponent.ɵfac = function SubmissionIndexComponent_Factory(t) { return new (t || SubmissionIndexComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); };
    SubmissionIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionIndexComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "formio", "rowSelect"]], template: function SubmissionIndexComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "formio-grid", 0);
                i0.ɵɵlistener("rowSelect", function SubmissionIndexComponent_Template_formio_grid_rowSelect_0_listener($event) { return ctx.onSelect($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formio", ctx.service.formio);
            }
        }, directives: [i6.FormioGridComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionIndexComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './index.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, null);
    })();

    function SubmissionComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 9);
            i0.ɵɵelement(1, "img", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("href", ctx_r0.downloadUrl, i0.ɵɵsanitizeUrl);
        }
    }
    function SubmissionComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵelementStart(1, "a", 11);
            i0.ɵɵelement(2, "i", 12);
            i0.ɵɵtext(3, " Edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function SubmissionComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵelementStart(1, "a", 13);
            i0.ɵɵelement(2, "span", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var SubmissionComponent = /** @class */ (function () {
        function SubmissionComponent(service, route) {
            this.service = service;
            this.route = route;
        }
        SubmissionComponent.prototype.setDownloadUrl = function (url) {
            this.downloadUrl = url;
        };
        SubmissionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.service.setSubmission(this.route).then(function (formio) {
                formio.getDownloadUrl().then(function (url) { return _this.setDownloadUrl(url); });
            });
        };
        return SubmissionComponent;
    }());
    SubmissionComponent.ɵfac = function SubmissionComponent_Factory(t) { return new (t || SubmissionComponent)(i0.ɵɵdirectiveInject(FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
    SubmissionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionComponent, selectors: [["ng-component"]], decls: 12, vars: 3, consts: [["target", "_blank", "class", "pull-right", 3, "href", 4, "ngIf"], [1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-eye", "glyphicon", "glyphicon-eye"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["target", "_blank", 1, "pull-right", 3, "href"], ["src", "https://pro.formview.io/assets/pdf.png", 2, "height", "2em"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-edit", "glyphicon", "glyphicon-edit"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function SubmissionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SubmissionComponent_a_0_Template, 2, 1, "a", 0);
                i0.ɵɵelementStart(1, "ul", 1);
                i0.ɵɵelementStart(2, "li", 2);
                i0.ɵɵelementStart(3, "a", 3);
                i0.ɵɵelement(4, "i", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "li", 5);
                i0.ɵɵelementStart(6, "a", 6);
                i0.ɵɵelement(7, "i", 7);
                i0.ɵɵtext(8, " View");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, SubmissionComponent_li_9_Template, 4, 0, "li", 8);
                i0.ɵɵtemplate(10, SubmissionComponent_li_10_Template, 3, 0, "li", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(11, "router-outlet");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.downloadUrl);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("ngIf", ctx.service.perms.edit);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.service.perms.delete);
            }
        }, directives: [i6$1.NgIf, i2.RouterLinkWithHref, i2.RouterLinkActive, i2.RouterOutlet], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './submission.component.html'
                    }]
            }], function () { return [{ type: FormManagerService }, { type: i2.ActivatedRoute }]; }, null);
    })();

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

    var FormManagerModule = /** @class */ (function () {
        function FormManagerModule() {
        }
        FormManagerModule.forChild = function (config) {
            return i3.extendRouter(FormManagerModule, config, FormManagerRoutes);
        };
        FormManagerModule.forRoot = function (config) {
            return i3.extendRouter(FormManagerModule, config, FormManagerRoutes);
        };
        return FormManagerModule;
    }());
    FormManagerModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormManagerModule });
    FormManagerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormManagerModule_Factory(t) { return new (t || FormManagerModule)(); }, imports: [[
                i6$1.CommonModule,
                i3.FormioModule,
                i2.RouterModule,
                i5.FormsModule,
                i6.FormioGrid,
                i5$1.ModalModule.forRoot(),
                i2$1.PaginationModule.forRoot()
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormManagerModule, { declarations: [FormManagerIndexComponent,
                FormManagerCreateComponent,
                FormManagerFormComponent,
                FormManagerViewComponent,
                FormManagerEditComponent,
                FormManagerDeleteComponent,
                SubmissionComponent,
                SubmissionEditComponent,
                SubmissionDeleteComponent,
                SubmissionViewComponent,
                SubmissionIndexComponent], imports: [i6$1.CommonModule,
                i3.FormioModule,
                i2.RouterModule,
                i5.FormsModule,
                i6.FormioGrid, i5$1.ModalModule, i2$1.PaginationModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormManagerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i6$1.CommonModule,
                            i3.FormioModule,
                            i2.RouterModule,
                            i5.FormsModule,
                            i6.FormioGrid,
                            i5$1.ModalModule.forRoot(),
                            i2$1.PaginationModule.forRoot()
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
            }], null, null);
    })();

    /*
     * Public API Surface of angular-formio
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormManagerConfig = FormManagerConfig;
    exports.FormManagerCreateComponent = FormManagerCreateComponent;
    exports.FormManagerDeleteComponent = FormManagerDeleteComponent;
    exports.FormManagerEditComponent = FormManagerEditComponent;
    exports.FormManagerFormComponent = FormManagerFormComponent;
    exports.FormManagerIndexComponent = FormManagerIndexComponent;
    exports.FormManagerModule = FormManagerModule;
    exports.FormManagerRoutes = FormManagerRoutes;
    exports.FormManagerService = FormManagerService;
    exports.FormManagerViewComponent = FormManagerViewComponent;
    exports.SubmissionComponent = SubmissionComponent;
    exports.SubmissionDeleteComponent = SubmissionDeleteComponent;
    exports.SubmissionEditComponent = SubmissionEditComponent;
    exports.SubmissionIndexComponent = SubmissionIndexComponent;
    exports.SubmissionViewComponent = SubmissionViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-formio-manager.umd.js.map
