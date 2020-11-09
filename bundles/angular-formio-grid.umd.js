(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/router'), require('angular-formio'), require('lodash'), require('formiojs'), require('ngx-bootstrap/pagination')) :
    typeof define === 'function' && define.amd ? define('angular-formio/grid', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/router', 'angular-formio', 'lodash', 'formiojs', 'ngx-bootstrap/pagination'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['angular-formio'] = global['angular-formio'] || {}, global['angular-formio'].grid = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.router, global['angular-formio'], global._, global.formiojs, global['ngx-bootstrap/pagination']));
}(this, (function (exports, i0, i1, i3, i2, i1$1, lodash, formiojs, i2$1) { 'use strict';

    var GridFooterPositions;
    (function (GridFooterPositions) {
        GridFooterPositions[GridFooterPositions["bottom"] = 0] = "bottom";
        GridFooterPositions[GridFooterPositions["top"] = 1] = "top";
        GridFooterPositions[GridFooterPositions["both"] = 2] = "both";
    })(GridFooterPositions || (GridFooterPositions = {}));

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

    var GridHeaderComponent = /** @class */ (function () {
        function GridHeaderComponent() {
            this.headers = [];
            this.sort = new i0.EventEmitter();
        }
        Object.defineProperty(GridHeaderComponent.prototype, "numHeaders", {
            get: function () {
                return this.headers.length;
            },
            enumerable: false,
            configurable: true
        });
        GridHeaderComponent.prototype.load = function (formio, query, columns) {
            return Promise.resolve([]);
        };
        return GridHeaderComponent;
    }());
    GridHeaderComponent.ɵfac = function GridHeaderComponent_Factory(t) { return new (t || GridHeaderComponent)(); };
    GridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridHeaderComponent, selectors: [["ng-component"]], viewQuery: function GridHeaderComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(i0.TemplateRef, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            }
        }, inputs: { actionAllowed: "actionAllowed" }, outputs: { sort: "sort" }, decls: 0, vars: 0, template: function GridHeaderComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridHeaderComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], function () { return []; }, { actionAllowed: [{
                    type: i0.Input
                }], sort: [{
                    type: i0.Output
                }], template: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef, { static: true }]
                }] });
    })();

    var SortType;
    (function (SortType) {
        SortType["ASC"] = "asc";
        SortType["DESC"] = "desc";
    })(SortType || (SortType = {}));

    var _c0 = function (a0, a1) { return { "glyphicon-triangle-top fa-caret-up": a0, "glyphicon-triangle-bottom fa-caret-down": a1 }; };
    function FormGridHeaderComponent_ng_template_0_span_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 5);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, ctx_r1.header.sort === "asc", ctx_r1.header.sort === "desc"));
        }
    }
    function FormGridHeaderComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "thead");
            i0.ɵɵelementStart(1, "tr");
            i0.ɵɵelementStart(2, "th");
            i0.ɵɵelementStart(3, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "a", 2);
            i0.ɵɵlistener("click", function FormGridHeaderComponent_ng_template_0_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.sort.emit(ctx_r2.header); });
            i0.ɵɵtext(6);
            i0.ɵɵtemplate(7, FormGridHeaderComponent_ng_template_0_span_7_Template, 1, 4, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtext(9, " Operations ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx_r0.header.label, "\u00A0");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.header.sort);
        }
    }
    var FormGridHeaderComponent = /** @class */ (function (_super) {
        __extends(FormGridHeaderComponent, _super);
        function FormGridHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormGridHeaderComponent.prototype.load = function (formio) {
            this.header = {
                label: 'Title',
                key: 'title',
                sort: SortType.ASC
            };
            this.headers = [this.header];
            return Promise.resolve(this.headers);
        };
        Object.defineProperty(FormGridHeaderComponent.prototype, "numHeaders", {
            get: function () {
                return 2;
            },
            enumerable: false,
            configurable: true
        });
        return FormGridHeaderComponent;
    }(GridHeaderComponent));
    FormGridHeaderComponent.ɵfac = function FormGridHeaderComponent_Factory(t) { return ɵFormGridHeaderComponent_BaseFactory(t || FormGridHeaderComponent); };
    FormGridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormGridHeaderComponent, selectors: [["form-grid-header"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "row"], [1, "col-sm-8"], [3, "click"], ["class", "glyphicon fa", 3, "ngClass", 4, "ngIf"], [1, "col-sm-4"], [1, "glyphicon", "fa", 3, "ngClass"]], template: function FormGridHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormGridHeaderComponent_ng_template_0_Template, 10, 2, "ng-template");
            }
        }, directives: [i1.NgIf, i1.NgClass], encapsulation: 2 });
    var ɵFormGridHeaderComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(FormGridHeaderComponent);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormGridHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'form-grid-header',
                        templateUrl: './FormGridHeader.component.html'
                    }]
            }], null, null);
    })();

    var GridBodyComponent = /** @class */ (function () {
        function GridBodyComponent() {
            this.firstItem = 0;
            this.lastItem = 0;
            this.skip = 0;
            this.limit = 0;
            this.total = 0;
            this.rowSelect = new i0.EventEmitter();
            this.rowAction = new i0.EventEmitter();
            this.loading = true;
        }
        GridBodyComponent.prototype.load = function (formio, query) {
            return formio.loadForm(query);
        };
        GridBodyComponent.prototype.onRowSelect = function (event, row) {
            event.preventDefault();
            this.rowSelect.emit(row);
        };
        GridBodyComponent.prototype.onRowAction = function (event, row, action) {
            event.preventDefault();
            this.rowAction.emit({ row: row, action: action });
        };
        /**
         * Set the rows for this Grid body.
         *
         * @param query
         * @param items
         * @return any
         */
        GridBodyComponent.prototype.setRows = function (query, items) {
            var _this = this;
            this.rows = [];
            if (typeof items !== 'object') {
                this.firstItem = 0;
                this.lastItem = 0;
                this.total = 0;
                this.skip = 0;
                this.loading = false;
                return this.rows;
            }
            this.firstItem = query.skip + 1;
            this.lastItem = this.firstItem + items.length - 1;
            this.total = items.serverCount;
            this.limit = query.limit;
            this.skip = Math.floor(items.skip / query.limit) + 1;
            this.loading = false;
            lodash.each(items, function (item) {
                _this.rows.push(lodash.clone(item));
            });
            return this.rows;
        };
        return GridBodyComponent;
    }());
    GridBodyComponent.ɵfac = function GridBodyComponent_Factory(t) { return new (t || GridBodyComponent)(); };
    GridBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridBodyComponent, selectors: [["ng-component"]], viewQuery: function GridBodyComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(i0.TemplateRef, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            }
        }, inputs: { header: "header", actionAllowed: "actionAllowed" }, outputs: { rowSelect: "rowSelect", rowAction: "rowAction" }, decls: 0, vars: 0, template: function GridBodyComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridBodyComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], function () { return []; }, { header: [{
                    type: i0.Input
                }], actionAllowed: [{
                    type: i0.Input
                }], rowSelect: [{
                    type: i0.Output
                }], rowAction: [{
                    type: i0.Output
                }], template: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef, { static: true }]
                }] });
    })();

    function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var form_r3 = i0.ɵɵnextContext().$implicit; var ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.onRowAction($event, form_r3, "view"); });
            i0.ɵɵelement(1, "span", 8);
            i0.ɵɵtext(2, " Enter Data");
            i0.ɵɵelementEnd();
        }
    }
    function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var form_r3 = i0.ɵɵnextContext().$implicit; var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.onRowAction($event, form_r3, "submission"); });
            i0.ɵɵelement(1, "span", 9);
            i0.ɵɵtext(2, " View Data");
            i0.ɵɵelementEnd();
        }
    }
    function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var form_r3 = i0.ɵɵnextContext().$implicit; var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onRowAction($event, form_r3, "edit"); });
            i0.ɵɵelement(1, "span", 10);
            i0.ɵɵtext(2, " Edit Form");
            i0.ɵɵelementEnd();
        }
    }
    function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var form_r3 = i0.ɵɵnextContext().$implicit; var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.onRowAction($event, form_r3, "delete"); });
            i0.ɵɵelement(1, "span", 11);
            i0.ɵɵelementEnd();
        }
    }
    function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "a", 4);
            i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template_a_click_4_listener($event) { i0.ɵɵrestoreView(_r21_1); var form_r3 = ctx.$implicit; var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.onRowSelect($event, form_r3); });
            i0.ɵɵelementStart(5, "h5");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtemplate(8, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template, 3, 0, "button", 6);
            i0.ɵɵtext(9, "\u00A0 ");
            i0.ɵɵtemplate(10, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template, 3, 0, "button", 6);
            i0.ɵɵtext(11, "\u00A0 ");
            i0.ɵɵtemplate(12, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template, 3, 0, "button", 6);
            i0.ɵɵtext(13, "\u00A0 ");
            i0.ɵɵtemplate(14, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template, 2, 0, "button", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var form_r3 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate1("routerLink", "", form_r3._id, "/view");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(form_r3.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.actionAllowed("formView"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.actionAllowed("submissionIndex"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.actionAllowed("formEdit"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.actionAllowed("formDelete"));
        }
    }
    function FormGridBodyComponent_ng_template_0_tbody_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tbody");
            i0.ɵɵtemplate(1, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template, 15, 6, "tr", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.rows);
        }
    }
    function FormGridBodyComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, FormGridBodyComponent_ng_template_0_tbody_0_Template, 2, 1, "tbody", 0);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", ctx_r0.rows);
        }
    }
    var FormGridBodyComponent = /** @class */ (function (_super) {
        __extends(FormGridBodyComponent, _super);
        function FormGridBodyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormGridBodyComponent.prototype.load = function (formio, query) {
            var _this = this;
            query = query || {};
            return formio.loadForms({ params: query }).then(function (forms) { return _this.setRows(query, forms); });
        };
        return FormGridBodyComponent;
    }(GridBodyComponent));
    FormGridBodyComponent.ɵfac = function FormGridBodyComponent_Factory(t) { return ɵFormGridBodyComponent_BaseFactory(t || FormGridBodyComponent); };
    FormGridBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormGridBodyComponent, selectors: [["form-grid-body"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-sm-8"], [3, "routerLink", "click"], [1, "col-sm-4"], ["class", "btn btn-secondary btn-sm form-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-sm", "form-btn", 3, "click"], [1, "fa", "fa-pencil"], [1, "fa", "fa-list-alt"], [1, "fa", "fa-edit"], [1, "fa", "fa-trash"]], template: function FormGridBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormGridBodyComponent_ng_template_0_Template, 1, 1, "ng-template");
            }
        }, directives: [i1.NgIf, i1.NgForOf, i2.RouterLinkWithHref], styles: [".form-btn[_ngcontent-%COMP%]{font-size:.75rem}"] });
    var ɵFormGridBodyComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(FormGridBodyComponent);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormGridBodyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'form-grid-body',
                        styleUrls: ['./FormGridBody.component.scss'],
                        templateUrl: './FormGridBody.component.html'
                    }]
            }], null, null);
    })();

    var GridFooterComponent = /** @class */ (function () {
        function GridFooterComponent() {
            this.footerPositions = GridFooterPositions;
            this.pageChanged = new i0.EventEmitter();
            this.createItem = new i0.EventEmitter();
        }
        return GridFooterComponent;
    }());
    GridFooterComponent.ɵfac = function GridFooterComponent_Factory(t) { return new (t || GridFooterComponent)(); };
    GridFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridFooterComponent, selectors: [["ng-component"]], viewQuery: function GridFooterComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(i0.TemplateRef, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            }
        }, inputs: { header: "header", body: "body", createText: "createText", size: "size", actionAllowed: "actionAllowed" }, outputs: { pageChanged: "pageChanged", createItem: "createItem" }, decls: 0, vars: 0, template: function GridFooterComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridFooterComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], function () { return []; }, { header: [{
                    type: i0.Input
                }], body: [{
                    type: i0.Input
                }], createText: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], actionAllowed: [{
                    type: i0.Input
                }], pageChanged: [{
                    type: i0.Output
                }], createItem: [{
                    type: i0.Output
                }], template: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef, { static: true }]
                }] });
    })();

    function FormGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "thead", 3);
            i0.ɵɵelementContainer(1, 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function FormGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tfoot", 3);
            i0.ɵɵelementContainer(1, 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function FormGridFooterComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
            i0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
        }
        if (rf & 2) {
            var position_r4 = ctx.position;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
        }
    }
    function FormGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 11);
            i0.ɵɵlistener("click", function FormGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
            i0.ɵɵelement(1, "i", 12);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
        }
    }
    function FormGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 6);
            i0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
            i0.ɵɵelementStart(2, "span", 8);
            i0.ɵɵelementStart(3, "span", 9);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "pagination", 10);
            i0.ɵɵlistener("ngModelChange", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.actionAllowed("formCreate"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
        }
    }
    function FormGridFooterComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.header);
        }
    }
    var FormGridFooterComponent = /** @class */ (function (_super) {
        __extends(FormGridFooterComponent, _super);
        function FormGridFooterComponent() {
            return _super.call(this) || this;
        }
        FormGridFooterComponent.prototype.ngOnInit = function () {
            if (!this.createText) {
                this.createText = 'Create Form';
            }
            if (!this.size) {
                this.size = 7;
            }
        };
        return FormGridFooterComponent;
    }(GridFooterComponent));
    FormGridFooterComponent.ɵfac = function FormGridFooterComponent_Factory(t) { return new (t || FormGridFooterComponent)(); };
    FormGridFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormGridFooterComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function FormGridFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, FormGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
        }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2$1.PaginationComponent, i3.NgControlStatus, i3.NgModel], styles: ["tfoot.formio-grid-footer td{padding:.3rem}tfoot.formio-grid-footer .page-num{font-size:1.4em}tfoot.formio-grid-footer ul.pagination{margin-bottom:0;margin-top:5px}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormGridFooterComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './FormGridFooter.component.html',
                        styleUrls: ['../grid.footer.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return []; }, null);
    })();

    var FormComponents = {
        header: FormGridHeaderComponent,
        body: FormGridBodyComponent,
        footer: FormGridFooterComponent
    };

    var _c0$1 = function (a0, a1) { return { "glyphicon-triangle-top": a0, "glyphicon-triangle-bottom": a1 }; };
    function SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 3);
        }
        if (rf & 2) {
            var header_r2 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0$1, header_r2.sort === "asc", header_r2.sort === "desc"));
        }
    }
    function SubmissionGridHeaderComponent_ng_template_0_th_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "th");
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function SubmissionGridHeaderComponent_ng_template_0_th_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r6_1); var header_r2 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.sort.emit(header_r2); });
            i0.ɵɵtext(2);
            i0.ɵɵtemplate(3, SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template, 1, 4, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var header_r2 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", header_r2.label, "\u00A0");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", header_r2.sort);
        }
    }
    function SubmissionGridHeaderComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "thead");
            i0.ɵɵelementStart(1, "tr");
            i0.ɵɵtemplate(2, SubmissionGridHeaderComponent_ng_template_0_th_2_Template, 4, 2, "th", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r0.headers);
        }
    }
    var SubmissionGridHeaderComponent = /** @class */ (function (_super) {
        __extends(SubmissionGridHeaderComponent, _super);
        function SubmissionGridHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubmissionGridHeaderComponent.prototype.load = function (formio, query, columns) {
            var _this = this;
            query = query || {};
            return formio.loadForm({ params: query }).then(function (form) {
                _this.headers = [];
                _this.formComponents = new Map();
                _this.setComponents(form.components);
                columns ? columns.forEach(function (column) {
                    _this.setHeader(_this.getHeaderForColumn(column, _this.formComponents.get(column.path)));
                }) : _this.setComponentsHeaders(_this.formComponents);
                return _this.headers;
            });
        };
        SubmissionGridHeaderComponent.prototype.setHeader = function (header) {
            this.headers.push(header);
        };
        SubmissionGridHeaderComponent.prototype.getHeaderForColumn = function (column, component, sort) {
            return {
                label: column.label,
                key: column.path,
                sort: sort,
                component: component ? formiojs.Components.create(component, null, null, true) : undefined,
                renderCell: column ? column.renderCell : undefined
            };
        };
        SubmissionGridHeaderComponent.prototype.getHeaderForComponent = function (component, path, sort) {
            return {
                label: component.label,
                key: path,
                sort: sort,
                component: component ? formiojs.Components.create(component, null, null, true) : undefined,
            };
        };
        // Set headers from components in case if columns are not provided
        SubmissionGridHeaderComponent.prototype.setComponentsHeaders = function (components, sort) {
            var _this = this;
            components.forEach(function (component, path) {
                if (component.input &&
                    (!component.hasOwnProperty('tableView') || component.tableView)) {
                    _this.setHeader(_this.getHeaderForComponent(component, path, sort));
                }
            });
        };
        // Map components
        SubmissionGridHeaderComponent.prototype.setComponents = function (components) {
            var _this = this;
            formiojs.Utils.eachComponent(components, function (component, newPath) {
                _this.formComponents.set("data." + newPath, component);
            });
        };
        return SubmissionGridHeaderComponent;
    }(GridHeaderComponent));
    SubmissionGridHeaderComponent.ɵfac = function SubmissionGridHeaderComponent_Factory(t) { return ɵSubmissionGridHeaderComponent_BaseFactory(t || SubmissionGridHeaderComponent); };
    SubmissionGridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionGridHeaderComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["class", "glyphicon", 3, "ngClass", 4, "ngIf"], [1, "glyphicon", 3, "ngClass"]], template: function SubmissionGridHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SubmissionGridHeaderComponent_ng_template_0_Template, 3, 1, "ng-template");
            }
        }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass], encapsulation: 2 });
    var ɵSubmissionGridHeaderComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(SubmissionGridHeaderComponent);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionGridHeaderComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './SubmissionGridHeader.component.html'
                    }]
            }], null, null);
    })();

    function SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "td", 3);
        }
        if (rf & 2) {
            var rowHeader_r4 = ctx.$implicit;
            var row_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("innerHTML", ctx_r3.view(row_r2, rowHeader_r4), i0.ɵɵsanitizeHtml);
        }
    }
    function SubmissionGridBodyComponent_ng_template_0_tr_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr", 1);
            i0.ɵɵlistener("click", function SubmissionGridBodyComponent_ng_template_0_tr_1_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var row_r2 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onRowSelect($event, row_r2); });
            i0.ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template, 1, 1, "td", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.header.headers);
        }
    }
    function SubmissionGridBodyComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tbody");
            i0.ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_Template, 2, 1, "tr", 0);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.rows);
        }
    }
    var SubmissionGridBodyComponent = /** @class */ (function (_super) {
        __extends(SubmissionGridBodyComponent, _super);
        function SubmissionGridBodyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubmissionGridBodyComponent.prototype.load = function (formio, query) {
            var _this = this;
            query = query || {};
            return formio.loadSubmissions({ params: query })
                .then(function (submissions) { return _this.setRows(query, submissions); });
        };
        /**
         * Render the cell data.
         *
         * @param submission
         * @param header
         * @return any
         */
        SubmissionGridBodyComponent.prototype.view = function (submission, header) {
            var cellValue = lodash.get(submission, header.key);
            if (header.renderCell) {
                return header.renderCell(cellValue, header.component);
            }
            else {
                if (header.component) {
                    if (header.component.getView) {
                        return header.component.getView(cellValue);
                    }
                    return header.component.asString(cellValue);
                }
                else {
                    return cellValue.toString();
                }
            }
        };
        return SubmissionGridBodyComponent;
    }(GridBodyComponent));
    SubmissionGridBodyComponent.ɵfac = function SubmissionGridBodyComponent_Factory(t) { return ɵSubmissionGridBodyComponent_BaseFactory(t || SubmissionGridBodyComponent); };
    SubmissionGridBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionGridBodyComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function SubmissionGridBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SubmissionGridBodyComponent_ng_template_0_Template, 2, 1, "ng-template");
            }
        }, directives: [i1.NgForOf], encapsulation: 2 });
    var ɵSubmissionGridBodyComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(SubmissionGridBodyComponent);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionGridBodyComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './SubmissionGridBody.component.html'
                    }]
            }], null, null);
    })();

    function SubmissionGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "thead", 3);
            i0.ɵɵelementContainer(1, 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function SubmissionGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tfoot", 3);
            i0.ɵɵelementContainer(1, 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function SubmissionGridFooterComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, SubmissionGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
            i0.ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
        }
        if (rf & 2) {
            var position_r4 = ctx.position;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
        }
    }
    function SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 11);
            i0.ɵɵlistener("click", function SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
            i0.ɵɵelement(1, "i", 12);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
        }
    }
    function SubmissionGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 6);
            i0.ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
            i0.ɵɵelementStart(2, "span", 8);
            i0.ɵɵelementStart(3, "span", 9);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "pagination", 10);
            i0.ɵɵlistener("ngModelChange", function SubmissionGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function SubmissionGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.actionAllowed("submissionCreate") && ctx_r7.createText);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
        }
    }
    function SubmissionGridFooterComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.header);
        }
    }
    var SubmissionGridFooterComponent = /** @class */ (function (_super) {
        __extends(SubmissionGridFooterComponent, _super);
        function SubmissionGridFooterComponent() {
            return _super.call(this) || this;
        }
        SubmissionGridFooterComponent.prototype.ngOnInit = function () {
            if (!this.size) {
                this.size = 7;
            }
        };
        return SubmissionGridFooterComponent;
    }(GridFooterComponent));
    SubmissionGridFooterComponent.ɵfac = function SubmissionGridFooterComponent_Factory(t) { return new (t || SubmissionGridFooterComponent)(); };
    SubmissionGridFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionGridFooterComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function SubmissionGridFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SubmissionGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, SubmissionGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
        }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2$1.PaginationComponent, i3.NgControlStatus, i3.NgModel], styles: ["tfoot.formio-grid-footer td{padding:.3rem}tfoot.formio-grid-footer .page-num{font-size:1.4em}tfoot.formio-grid-footer ul.pagination{margin-bottom:0;margin-top:5px}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubmissionGridFooterComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './SubmissionGridFooter.component.html',
                        styleUrls: ['../grid.footer.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return []; }, null);
    })();

    var SubmissionComponents = {
        header: SubmissionGridHeaderComponent,
        body: SubmissionGridBodyComponent,
        footer: SubmissionGridFooterComponent
    };

    var _c0$2 = ["headerTemplate"];
    var _c1 = ["bodyTemplate"];
    var _c2 = ["footerTemplate"];
    function FormioGridComponent_ng_template_0_Template(rf, ctx) { }
    function FormioGridComponent_ng_template_2_Template(rf, ctx) { }
    function FormioGridComponent_ng_template_4_Template(rf, ctx) { }
    var _c3 = function (a0) { return { position: a0 }; };
    function FormioGridComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 9);
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footer.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r6.footerPositions.top));
        }
    }
    function FormioGridComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 10);
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.header.template);
        }
    }
    function FormioGridComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 10);
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.body.template);
        }
    }
    function FormioGridComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 9);
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.footer.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r9.footerPositions.bottom));
        }
    }
    var _c4 = function (a0, a1) { return [a0, a1]; };
    var FormioGridComponent = /** @class */ (function () {
        function FormioGridComponent(alerts, resolver, ref) {
            this.alerts = alerts;
            this.resolver = resolver;
            this.ref = ref;
            this.footerPosition = GridFooterPositions.bottom;
            this.page = 0;
            this.isLoading = false;
            this.initialized = false;
            this.footerPositions = GridFooterPositions;
            this.select = this.rowSelect = new i0.EventEmitter();
            this.rowAction = new i0.EventEmitter();
            this.createItem = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
            this.isLoading = true;
        }
        FormioGridComponent.prototype.createComponent = function (property, component) {
            var factory = this.resolver.resolveComponentFactory(component);
            var componentRef = property.createComponent(factory);
            return componentRef.instance;
        };
        FormioGridComponent.prototype.loadGrid = function (src) {
            var _this = this;
            // If no source is provided, then skip.
            if (!src && !this.formio) {
                return;
            }
            // Do not double load.
            if (this.formio && this.src && (src === this.src)) {
                return;
            }
            if (src) {
                this.src = src;
                this.formio = new i1$1.FormioPromiseService(this.src, { formOnly: true });
            }
            // Load the header.
            this.header.load(this.formio, {}, this.columns)
                .then(function () { return _this.setPage(0); })
                .catch(function (error) { return _this.onError(error); });
        };
        FormioGridComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Create our components.
            var comps = this.components || ((this.gridType === 'form') ? FormComponents : SubmissionComponents);
            this.header = this.createComponent(this.headerElement, comps.header);
            this.header.actionAllowed = this.actionAllowed.bind(this);
            this.header.sort.subscribe(function (header) { return _this.sortColumn(header); });
            this.body = this.createComponent(this.bodyElement, comps.body);
            this.body.header = this.header;
            this.body.actionAllowed = this.actionAllowed.bind(this);
            this.body.rowSelect.subscribe(function (row) { return _this.rowSelect.emit(row); });
            this.body.rowAction.subscribe(function (action) { return _this.rowAction.emit(action); });
            this.footer = this.createComponent(this.footerElement, comps.footer);
            this.footer.header = this.header;
            this.footer.body = this.body;
            this.footer.actionAllowed = this.actionAllowed.bind(this);
            this.footer.createText = this.createText;
            this.footer.size = this.size;
            this.footer.pageChanged.subscribe(function (page) { return _this.pageChanged(page); });
            this.footer.createItem.subscribe(function (item) { return _this.createItem.emit(item); });
        };
        FormioGridComponent.prototype.ngOnChanges = function (changes) {
            if (this.initialized) {
                if ((changes.src && changes.src.currentValue) ||
                    (changes.formio && changes.formio.currentValue)) {
                    this.loadGrid(changes.src.currentValue);
                }
                if (changes.items && changes.items.currentValue) {
                    this.refreshGrid();
                }
            }
            if (this.footer &&
                (changes.createText && changes.createText.currentValue)) {
                this.footer.createText = changes.createText.currentValue;
            }
        };
        FormioGridComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.alerts.setAlerts([]);
            this.query = this.query || {};
            if (this.refresh) {
                this.refresh.subscribe(function (query) { return _this.refreshGrid(query); });
            }
            this.loadGrid(this.src);
            this.initialized = true;
            this.ref.detectChanges();
        };
        FormioGridComponent.prototype.actionAllowed = function (action) {
            if (this.isActionAllowed) {
                return this.isActionAllowed(action);
            }
            else {
                return true;
            }
        };
        FormioGridComponent.prototype.onError = function (error) {
            this.isLoading = false;
            this.error.emit(error);
            this.alerts.setAlert({
                type: 'danger',
                message: error
            });
        };
        FormioGridComponent.prototype.refreshGrid = function (query) {
            var _this = this;
            this.alerts.setAlerts([]);
            this.query = query || this.query;
            if (!this.query.hasOwnProperty('limit')) {
                this.query.limit = 10;
            }
            if (!this.query.hasOwnProperty('skip')) {
                this.query.skip = 0;
            }
            this.isLoading = true;
            this.ref.detectChanges();
            formiojs.Formio.cache = {};
            var loader = null;
            if (this.items) {
                loader = Promise.resolve(this.body.setRows(this.query, this.items));
            }
            else {
                loader = this.body.load(this.formio, this.query);
            }
            return loader.then(function (info) {
                _this.isLoading = false;
                _this.initialized = true;
                _this.ref.detectChanges();
            }).catch(function (error) { return _this.onError(error); });
        };
        FormioGridComponent.prototype.setPage = function (num) {
            if (num === void 0) { num = -1; }
            this.page = num !== -1 ? num : this.page;
            if (!this.query.hasOwnProperty('limit')) {
                this.query.limit = 10;
            }
            if (!this.query.hasOwnProperty('skip')) {
                this.query.skip = 0;
            }
            this.query.skip = this.page * this.query.limit;
            this.refreshGrid();
        };
        FormioGridComponent.prototype.sortColumn = function (header) {
            // Reset all other column sorts.
            lodash.each(this.header.headers, function (col) {
                if (col.key !== header.key) {
                    col.sort = '';
                }
            });
            switch (header.sort) {
                case 'asc':
                    header.sort = SortType.DESC;
                    this.query.sort = '-' + header.key;
                    break;
                case 'desc':
                    header.sort = undefined;
                    delete this.query.sort;
                    break;
                case undefined:
                    header.sort = SortType.ASC;
                    this.query.sort = header.key;
                    break;
            }
            this.refreshGrid();
        };
        FormioGridComponent.prototype.pageChanged = function (page) {
            this.setPage(page.page - 1);
        };
        return FormioGridComponent;
    }());
    FormioGridComponent.ɵfac = function FormioGridComponent_Factory(t) { return new (t || FormioGridComponent)(i0.ɵɵdirectiveInject(i1$1.FormioAlerts), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    FormioGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioGridComponent, selectors: [["formio-grid"]], viewQuery: function FormioGridComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$2, true, i0.ViewContainerRef);
                i0.ɵɵstaticViewQuery(_c1, true, i0.ViewContainerRef);
                i0.ɵɵstaticViewQuery(_c2, true, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.footerElement = _t.first);
            }
        }, inputs: { footerPosition: "footerPosition", src: "src", items: "items", onForm: "onForm", query: "query", refresh: "refresh", columns: "columns", gridType: "gridType", size: "size", components: "components", formio: "formio", createText: "createText", isActionAllowed: "isActionAllowed" }, outputs: { select: "select", rowSelect: "rowSelect", rowAction: "rowAction", createItem: "createItem", error: "error" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 12, consts: [["headerTemplate", ""], ["bodyTemplate", ""], ["footerTemplate", ""], [1, "formio-grid"], [3, "alerts"], [1, "table", "table-bordered", "table-striped", "table-hover"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "isLoading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"]], template: function FormioGridComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormioGridComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, FormioGridComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, FormioGridComponent_ng_template_4_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(6, "div", 3);
                i0.ɵɵelement(7, "formio-alerts", 4);
                i0.ɵɵelementStart(8, "table", 5);
                i0.ɵɵtemplate(9, FormioGridComponent_ng_container_9_Template, 1, 4, "ng-container", 6);
                i0.ɵɵtemplate(10, FormioGridComponent_ng_container_10_Template, 1, 1, "ng-container", 7);
                i0.ɵɵelement(11, "formio-loader", 8);
                i0.ɵɵtemplate(12, FormioGridComponent_ng_container_12_Template, 1, 1, "ng-container", 7);
                i0.ɵɵtemplate(13, FormioGridComponent_ng_container_13_Template, 1, 4, "ng-container", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("alerts", ctx.alerts);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.initialized && i0.ɵɵpureFunction2(6, _c4, ctx.footerPositions.top, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== -1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.initialized);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("isLoading", ctx.isLoading);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.initialized);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.initialized && i0.ɵɵpureFunction2(9, _c4, ctx.footerPositions.bottom, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== -1);
            }
        }, directives: [i1$1.FormioAlertsComponent, i1.NgIf, i1$1.FormioLoaderComponent, i1.NgTemplateOutlet], styles: [".formio-grid[_ngcontent-%COMP%]{position:relative;width:100%}.grid-refresh[_ngcontent-%COMP%]{height:400px;width:100%}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioGridComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'formio-grid',
                        styleUrls: ['./grid.component.scss'],
                        templateUrl: './grid.component.html'
                    }]
            }], function () { return [{ type: i1$1.FormioAlerts }, { type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }]; }, { footerPosition: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], items: [{
                    type: i0.Input
                }], onForm: [{
                    type: i0.Input
                }], query: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], columns: [{
                    type: i0.Input
                }], gridType: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], components: [{
                    type: i0.Input
                }], formio: [{
                    type: i0.Input
                }], createText: [{
                    type: i0.Input
                }], isActionAllowed: [{
                    type: i0.Input
                }], select: [{
                    type: i0.Output
                }], rowSelect: [{
                    type: i0.Output
                }], rowAction: [{
                    type: i0.Output
                }], createItem: [{
                    type: i0.Output
                }], error: [{
                    type: i0.Output
                }], headerElement: [{
                    type: i0.ViewChild,
                    args: ['headerTemplate', { read: i0.ViewContainerRef, static: true }]
                }], bodyElement: [{
                    type: i0.ViewChild,
                    args: ['bodyTemplate', { read: i0.ViewContainerRef, static: true }]
                }], footerElement: [{
                    type: i0.ViewChild,
                    args: ['footerTemplate', { read: i0.ViewContainerRef, static: true }]
                }] });
    })();

    var FormioGrid = /** @class */ (function () {
        function FormioGrid() {
        }
        return FormioGrid;
    }());
    FormioGrid.ɵmod = i0.ɵɵdefineNgModule({ type: FormioGrid });
    FormioGrid.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioGrid_Factory(t) { return new (t || FormioGrid)(); }, providers: [
            i1$1.FormioAlerts
        ], imports: [[
                i1.CommonModule,
                i3.FormsModule,
                i1$1.FormioModule,
                i2.RouterModule,
                i2$1.PaginationModule.forRoot()
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioGrid, { declarations: [FormioGridComponent,
                FormGridHeaderComponent,
                FormGridBodyComponent,
                FormGridFooterComponent,
                SubmissionGridHeaderComponent,
                SubmissionGridBodyComponent,
                SubmissionGridFooterComponent], imports: [i1.CommonModule,
                i3.FormsModule,
                i1$1.FormioModule,
                i2.RouterModule, i2$1.PaginationModule], exports: [FormioGridComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioGrid, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            i3.FormsModule,
                            i1$1.FormioModule,
                            i2.RouterModule,
                            i2$1.PaginationModule.forRoot()
                        ],
                        declarations: [
                            FormioGridComponent,
                            FormGridHeaderComponent,
                            FormGridBodyComponent,
                            FormGridFooterComponent,
                            SubmissionGridHeaderComponent,
                            SubmissionGridBodyComponent,
                            SubmissionGridFooterComponent
                        ],
                        exports: [
                            FormioGridComponent
                        ],
                        entryComponents: [
                            FormGridHeaderComponent,
                            FormGridBodyComponent,
                            FormGridFooterComponent,
                            SubmissionGridHeaderComponent,
                            SubmissionGridBodyComponent,
                            SubmissionGridFooterComponent
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

    exports.FormGridBodyComponent = FormGridBodyComponent;
    exports.FormGridFooterComponent = FormGridFooterComponent;
    exports.FormGridHeaderComponent = FormGridHeaderComponent;
    exports.FormioGrid = FormioGrid;
    exports.FormioGridComponent = FormioGridComponent;
    exports.GridBodyComponent = GridBodyComponent;
    exports.GridFooterComponent = GridFooterComponent;
    exports.GridHeaderComponent = GridHeaderComponent;
    exports.SubmissionGridBodyComponent = SubmissionGridBodyComponent;
    exports.SubmissionGridFooterComponent = SubmissionGridFooterComponent;
    exports.SubmissionGridHeaderComponent = SubmissionGridHeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-formio-grid.umd.js.map
