import { EventEmitter, ɵɵdefineComponent, ɵɵstaticViewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵsetClassMetadata, Component, Input, Output, ViewChild, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction2, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵtemplate, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵInheritDefinitionFeature, ɵɵgetInheritedFactory, ɵɵpropertyInterpolate1, ɵɵtextInterpolate, ɵɵelementContainer, ɵɵreference, ɵɵtextInterpolate2, ɵɵtemplateRefExtractor, ViewEncapsulation, ɵɵsanitizeHtml, ɵɵpureFunction1, ɵɵdirectiveInject, ComponentFactoryResolver, ChangeDetectorRef, ViewContainerRef, ɵɵNgOnChangesFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { FormioPromiseService, FormioAlerts, FormioAlertsComponent, FormioLoaderComponent, FormioModule } from 'angular-formio';
import { each, clone, get } from 'lodash';
import { Components, Utils, Formio } from 'formiojs';
import { PaginationComponent, PaginationModule } from 'ngx-bootstrap/pagination';

var GridFooterPositions;
(function (GridFooterPositions) {
    GridFooterPositions[GridFooterPositions["bottom"] = 0] = "bottom";
    GridFooterPositions[GridFooterPositions["top"] = 1] = "top";
    GridFooterPositions[GridFooterPositions["both"] = 2] = "both";
})(GridFooterPositions || (GridFooterPositions = {}));

class GridHeaderComponent {
    constructor() {
        this.headers = [];
        this.sort = new EventEmitter();
    }
    get numHeaders() {
        return this.headers.length;
    }
    load(formio, query, columns) {
        return Promise.resolve([]);
    }
}
GridHeaderComponent.ɵfac = function GridHeaderComponent_Factory(t) { return new (t || GridHeaderComponent)(); };
GridHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: GridHeaderComponent, selectors: [["ng-component"]], viewQuery: function GridHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { actionAllowed: "actionAllowed" }, outputs: { sort: "sort" }, decls: 0, vars: 0, template: function GridHeaderComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridHeaderComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return []; }, { actionAllowed: [{
            type: Input
        }], sort: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

var SortType;
(function (SortType) {
    SortType["ASC"] = "asc";
    SortType["DESC"] = "desc";
})(SortType || (SortType = {}));

const _c0 = function (a0, a1) { return { "glyphicon-triangle-top fa-caret-up": a0, "glyphicon-triangle-bottom fa-caret-down": a1 }; };
function FormGridHeaderComponent_ng_template_0_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c0, ctx_r1.header.sort === "asc", ctx_r1.header.sort === "desc"));
} }
function FormGridHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "thead");
    ɵɵelementStart(1, "tr");
    ɵɵelementStart(2, "th");
    ɵɵelementStart(3, "div", 0);
    ɵɵelementStart(4, "div", 1);
    ɵɵelementStart(5, "a", 2);
    ɵɵlistener("click", function FormGridHeaderComponent_ng_template_0_Template_a_click_5_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.sort.emit(ctx_r2.header); });
    ɵɵtext(6);
    ɵɵtemplate(7, FormGridHeaderComponent_ng_template_0_span_7_Template, 1, 4, "span", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 4);
    ɵɵtext(9, " Operations ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ctx_r0.header.label, "\u00A0");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.header.sort);
} }
class FormGridHeaderComponent extends GridHeaderComponent {
    load(formio) {
        this.header = {
            label: 'Title',
            key: 'title',
            sort: SortType.ASC
        };
        this.headers = [this.header];
        return Promise.resolve(this.headers);
    }
    get numHeaders() {
        return 2;
    }
}
FormGridHeaderComponent.ɵfac = function FormGridHeaderComponent_Factory(t) { return ɵFormGridHeaderComponent_BaseFactory(t || FormGridHeaderComponent); };
FormGridHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: FormGridHeaderComponent, selectors: [["form-grid-header"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "row"], [1, "col-sm-8"], [3, "click"], ["class", "glyphicon fa", 3, "ngClass", 4, "ngIf"], [1, "col-sm-4"], [1, "glyphicon", "fa", 3, "ngClass"]], template: function FormGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormGridHeaderComponent_ng_template_0_Template, 10, 2, "ng-template");
    } }, directives: [NgIf, NgClass], encapsulation: 2 });
const ɵFormGridHeaderComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(FormGridHeaderComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormGridHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'form-grid-header',
                templateUrl: './FormGridHeader.component.html'
            }]
    }], null, null); })();

class GridBodyComponent {
    constructor() {
        this.firstItem = 0;
        this.lastItem = 0;
        this.skip = 0;
        this.limit = 0;
        this.total = 0;
        this.rowSelect = new EventEmitter();
        this.rowAction = new EventEmitter();
        this.loading = true;
    }
    load(formio, query) {
        return formio.loadForm(query);
    }
    onRowSelect(event, row) {
        event.preventDefault();
        this.rowSelect.emit(row);
    }
    onRowAction(event, row, action) {
        event.preventDefault();
        this.rowAction.emit({ row, action });
    }
    /**
     * Set the rows for this Grid body.
     *
     * @param query
     * @param items
     * @return any
     */
    setRows(query, items) {
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
        each(items, (item) => {
            this.rows.push(clone(item));
        });
        return this.rows;
    }
}
GridBodyComponent.ɵfac = function GridBodyComponent_Factory(t) { return new (t || GridBodyComponent)(); };
GridBodyComponent.ɵcmp = ɵɵdefineComponent({ type: GridBodyComponent, selectors: [["ng-component"]], viewQuery: function GridBodyComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { header: "header", actionAllowed: "actionAllowed" }, outputs: { rowSelect: "rowSelect", rowAction: "rowAction" }, decls: 0, vars: 0, template: function GridBodyComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridBodyComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return []; }, { header: [{
            type: Input
        }], actionAllowed: [{
            type: Input
        }], rowSelect: [{
            type: Output
        }], rowAction: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template_button_click_0_listener($event) { ɵɵrestoreView(_r9); const form_r3 = ɵɵnextContext().$implicit; const ctx_r8 = ɵɵnextContext(3); return ctx_r8.onRowAction($event, form_r3, "view"); });
    ɵɵelement(1, "span", 8);
    ɵɵtext(2, " Enter Data");
    ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template_button_click_0_listener($event) { ɵɵrestoreView(_r12); const form_r3 = ɵɵnextContext().$implicit; const ctx_r11 = ɵɵnextContext(3); return ctx_r11.onRowAction($event, form_r3, "submission"); });
    ɵɵelement(1, "span", 9);
    ɵɵtext(2, " View Data");
    ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template_button_click_0_listener($event) { ɵɵrestoreView(_r15); const form_r3 = ɵɵnextContext().$implicit; const ctx_r14 = ɵɵnextContext(3); return ctx_r14.onRowAction($event, form_r3, "edit"); });
    ɵɵelement(1, "span", 10);
    ɵɵtext(2, " Edit Form");
    ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template_button_click_0_listener($event) { ɵɵrestoreView(_r18); const form_r3 = ɵɵnextContext().$implicit; const ctx_r17 = ɵɵnextContext(3); return ctx_r17.onRowAction($event, form_r3, "delete"); });
    ɵɵelement(1, "span", 11);
    ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵelementStart(2, "div", 2);
    ɵɵelementStart(3, "div", 3);
    ɵɵelementStart(4, "a", 4);
    ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template_a_click_4_listener($event) { ɵɵrestoreView(_r21); const form_r3 = ctx.$implicit; const ctx_r20 = ɵɵnextContext(3); return ctx_r20.onRowSelect($event, form_r3); });
    ɵɵelementStart(5, "h5");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 5);
    ɵɵtemplate(8, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template, 3, 0, "button", 6);
    ɵɵtext(9, "\u00A0 ");
    ɵɵtemplate(10, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template, 3, 0, "button", 6);
    ɵɵtext(11, "\u00A0 ");
    ɵɵtemplate(12, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template, 3, 0, "button", 6);
    ɵɵtext(13, "\u00A0 ");
    ɵɵtemplate(14, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template, 2, 0, "button", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const form_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵpropertyInterpolate1("routerLink", "", form_r3._id, "/view");
    ɵɵadvance(2);
    ɵɵtextInterpolate(form_r3.title);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.actionAllowed("formView"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.actionAllowed("submissionIndex"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.actionAllowed("formEdit"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.actionAllowed("formDelete"));
} }
function FormGridBodyComponent_ng_template_0_tbody_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tbody");
    ɵɵtemplate(1, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template, 15, 6, "tr", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.rows);
} }
function FormGridBodyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, FormGridBodyComponent_ng_template_0_tbody_0_Template, 2, 1, "tbody", 0);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.rows);
} }
class FormGridBodyComponent extends GridBodyComponent {
    load(formio, query) {
        query = query || {};
        return formio.loadForms({ params: query }).then((forms) => this.setRows(query, forms));
    }
}
FormGridBodyComponent.ɵfac = function FormGridBodyComponent_Factory(t) { return ɵFormGridBodyComponent_BaseFactory(t || FormGridBodyComponent); };
FormGridBodyComponent.ɵcmp = ɵɵdefineComponent({ type: FormGridBodyComponent, selectors: [["form-grid-body"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-sm-8"], [3, "routerLink", "click"], [1, "col-sm-4"], ["class", "btn btn-secondary btn-sm form-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-sm", "form-btn", 3, "click"], [1, "fa", "fa-pencil"], [1, "fa", "fa-list-alt"], [1, "fa", "fa-edit"], [1, "fa", "fa-trash"]], template: function FormGridBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormGridBodyComponent_ng_template_0_Template, 1, 1, "ng-template");
    } }, directives: [NgIf, NgForOf, RouterLinkWithHref], styles: [".form-btn[_ngcontent-%COMP%]{font-size:.75rem}"] });
const ɵFormGridBodyComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(FormGridBodyComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormGridBodyComponent, [{
        type: Component,
        args: [{
                selector: 'form-grid-body',
                styleUrls: ['./FormGridBody.component.scss'],
                templateUrl: './FormGridBody.component.html'
            }]
    }], null, null); })();

class GridFooterComponent {
    constructor() {
        this.footerPositions = GridFooterPositions;
        this.pageChanged = new EventEmitter();
        this.createItem = new EventEmitter();
    }
}
GridFooterComponent.ɵfac = function GridFooterComponent_Factory(t) { return new (t || GridFooterComponent)(); };
GridFooterComponent.ɵcmp = ɵɵdefineComponent({ type: GridFooterComponent, selectors: [["ng-component"]], viewQuery: function GridFooterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { header: "header", body: "body", createText: "createText", size: "size", actionAllowed: "actionAllowed" }, outputs: { pageChanged: "pageChanged", createItem: "createItem" }, decls: 0, vars: 0, template: function GridFooterComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridFooterComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return []; }, { header: [{
            type: Input
        }], body: [{
            type: Input
        }], createText: [{
            type: Input
        }], size: [{
            type: Input
        }], actionAllowed: [{
            type: Input
        }], pageChanged: [{
            type: Output
        }], createItem: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

function FormGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "thead", 3);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function FormGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tfoot", 3);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function FormGridFooterComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
    ɵɵtemplate(1, FormGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
} if (rf & 2) {
    const position_r4 = ctx.position;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
} }
function FormGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function FormGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
    ɵɵelement(1, "i", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
} }
function FormGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
    ɵɵelementStart(2, "span", 8);
    ɵɵelementStart(3, "span", 9);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "pagination", 10);
    ɵɵlistener("ngModelChange", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { ɵɵrestoreView(_r12); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.actionAllowed("formCreate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
    ɵɵadvance(1);
    ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
} }
function FormGridFooterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.header);
} }
class FormGridFooterComponent extends GridFooterComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        if (!this.createText) {
            this.createText = 'Create Form';
        }
        if (!this.size) {
            this.size = 7;
        }
    }
}
FormGridFooterComponent.ɵfac = function FormGridFooterComponent_Factory(t) { return new (t || FormGridFooterComponent)(); };
FormGridFooterComponent.ɵcmp = ɵɵdefineComponent({ type: FormGridFooterComponent, selectors: [["ng-component"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function FormGridFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, FormGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } }, directives: [NgIf, NgTemplateOutlet, PaginationComponent, NgControlStatus, NgModel], styles: ["tfoot.formio-grid-footer td{padding:.3rem}tfoot.formio-grid-footer .page-num{font-size:1.4em}tfoot.formio-grid-footer ul.pagination{margin-bottom:0;margin-top:5px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormGridFooterComponent, [{
        type: Component,
        args: [{
                templateUrl: './FormGridFooter.component.html',
                styleUrls: ['../grid.footer.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();

var FormComponents = {
    header: FormGridHeaderComponent,
    body: FormGridBodyComponent,
    footer: FormGridFooterComponent
};

const _c0$1 = function (a0, a1) { return { "glyphicon-triangle-top": a0, "glyphicon-triangle-bottom": a1 }; };
function SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const header_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c0$1, header_r2.sort === "asc", header_r2.sort === "desc"));
} }
function SubmissionGridHeaderComponent_ng_template_0_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th");
    ɵɵelementStart(1, "a", 1);
    ɵɵlistener("click", function SubmissionGridHeaderComponent_ng_template_0_th_2_Template_a_click_1_listener() { ɵɵrestoreView(_r6); const header_r2 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(2); return ctx_r5.sort.emit(header_r2); });
    ɵɵtext(2);
    ɵɵtemplate(3, SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template, 1, 4, "span", 2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const header_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", header_r2.label, "\u00A0");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", header_r2.sort);
} }
function SubmissionGridHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "thead");
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, SubmissionGridHeaderComponent_ng_template_0_th_2_Template, 4, 2, "th", 0);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.headers);
} }
class SubmissionGridHeaderComponent extends GridHeaderComponent {
    load(formio, query, columns) {
        query = query || {};
        return formio.loadForm({ params: query }).then((form) => {
            this.headers = [];
            this.formComponents = new Map();
            this.setComponents(form.components);
            columns ? columns.forEach(column => {
                this.setHeader(this.getHeaderForColumn(column, this.formComponents.get(column.path)));
            }) : this.setComponentsHeaders(this.formComponents);
            return this.headers;
        });
    }
    setHeader(header) {
        this.headers.push(header);
    }
    getHeaderForColumn(column, component, sort) {
        return {
            label: column.label,
            key: column.path,
            sort: sort,
            component: component ? Components.create(component, null, null, true) : undefined,
            renderCell: column ? column.renderCell : undefined
        };
    }
    getHeaderForComponent(component, path, sort) {
        return {
            label: component.label,
            key: path,
            sort: sort,
            component: component ? Components.create(component, null, null, true) : undefined,
        };
    }
    // Set headers from components in case if columns are not provided
    setComponentsHeaders(components, sort) {
        components.forEach((component, path) => {
            if (component.input &&
                (!component.hasOwnProperty('tableView') || component.tableView)) {
                this.setHeader(this.getHeaderForComponent(component, path, sort));
            }
        });
    }
    // Map components
    setComponents(components) {
        Utils.eachComponent(components, (component, newPath) => {
            this.formComponents.set(`data.${newPath}`, component);
        });
    }
}
SubmissionGridHeaderComponent.ɵfac = function SubmissionGridHeaderComponent_Factory(t) { return ɵSubmissionGridHeaderComponent_BaseFactory(t || SubmissionGridHeaderComponent); };
SubmissionGridHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionGridHeaderComponent, selectors: [["ng-component"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["class", "glyphicon", 3, "ngClass", 4, "ngIf"], [1, "glyphicon", 3, "ngClass"]], template: function SubmissionGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SubmissionGridHeaderComponent_ng_template_0_Template, 3, 1, "ng-template");
    } }, directives: [NgForOf, NgIf, NgClass], encapsulation: 2 });
const ɵSubmissionGridHeaderComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(SubmissionGridHeaderComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionGridHeaderComponent, [{
        type: Component,
        args: [{
                templateUrl: './SubmissionGridHeader.component.html'
            }]
    }], null, null); })();

function SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "td", 3);
} if (rf & 2) {
    const rowHeader_r4 = ctx.$implicit;
    const row_r2 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r3.view(row_r2, rowHeader_r4), ɵɵsanitizeHtml);
} }
function SubmissionGridBodyComponent_ng_template_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 1);
    ɵɵlistener("click", function SubmissionGridBodyComponent_ng_template_0_tr_1_Template_tr_click_0_listener($event) { ɵɵrestoreView(_r7); const row_r2 = ctx.$implicit; const ctx_r6 = ɵɵnextContext(2); return ctx_r6.onRowSelect($event, row_r2); });
    ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template, 1, 1, "td", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.header.headers);
} }
function SubmissionGridBodyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tbody");
    ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_Template, 2, 1, "tr", 0);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.rows);
} }
class SubmissionGridBodyComponent extends GridBodyComponent {
    load(formio, query) {
        query = query || {};
        return formio.loadSubmissions({ params: query })
            .then((submissions) => this.setRows(query, submissions));
    }
    /**
     * Render the cell data.
     *
     * @param submission
     * @param header
     * @return any
     */
    view(submission, header) {
        const cellValue = get(submission, header.key);
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
    }
}
SubmissionGridBodyComponent.ɵfac = function SubmissionGridBodyComponent_Factory(t) { return ɵSubmissionGridBodyComponent_BaseFactory(t || SubmissionGridBodyComponent); };
SubmissionGridBodyComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionGridBodyComponent, selectors: [["ng-component"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function SubmissionGridBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SubmissionGridBodyComponent_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [NgForOf], encapsulation: 2 });
const ɵSubmissionGridBodyComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(SubmissionGridBodyComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionGridBodyComponent, [{
        type: Component,
        args: [{
                templateUrl: './SubmissionGridBody.component.html'
            }]
    }], null, null); })();

function SubmissionGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "thead", 3);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SubmissionGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tfoot", 3);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SubmissionGridFooterComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, SubmissionGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
    ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
} if (rf & 2) {
    const position_r4 = ctx.position;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
} }
function SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
    ɵɵelement(1, "i", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
} }
function SubmissionGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
    ɵɵelementStart(2, "span", 8);
    ɵɵelementStart(3, "span", 9);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "pagination", 10);
    ɵɵlistener("ngModelChange", function SubmissionGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function SubmissionGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { ɵɵrestoreView(_r12); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.actionAllowed("submissionCreate") && ctx_r7.createText);
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
    ɵɵadvance(1);
    ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
} }
function SubmissionGridFooterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.header);
} }
class SubmissionGridFooterComponent extends GridFooterComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        if (!this.size) {
            this.size = 7;
        }
    }
}
SubmissionGridFooterComponent.ɵfac = function SubmissionGridFooterComponent_Factory(t) { return new (t || SubmissionGridFooterComponent)(); };
SubmissionGridFooterComponent.ɵcmp = ɵɵdefineComponent({ type: SubmissionGridFooterComponent, selectors: [["ng-component"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function SubmissionGridFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SubmissionGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, SubmissionGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } }, directives: [NgIf, NgTemplateOutlet, PaginationComponent, NgControlStatus, NgModel], styles: ["tfoot.formio-grid-footer td{padding:.3rem}tfoot.formio-grid-footer .page-num{font-size:1.4em}tfoot.formio-grid-footer ul.pagination{margin-bottom:0;margin-top:5px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubmissionGridFooterComponent, [{
        type: Component,
        args: [{
                templateUrl: './SubmissionGridFooter.component.html',
                styleUrls: ['../grid.footer.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();

var SubmissionComponents = {
    header: SubmissionGridHeaderComponent,
    body: SubmissionGridBodyComponent,
    footer: SubmissionGridFooterComponent
};

const _c0$2 = ["headerTemplate"];
const _c1 = ["bodyTemplate"];
const _c2 = ["footerTemplate"];
function FormioGridComponent_ng_template_0_Template(rf, ctx) { }
function FormioGridComponent_ng_template_2_Template(rf, ctx) { }
function FormioGridComponent_ng_template_4_Template(rf, ctx) { }
const _c3 = function (a0) { return { position: a0 }; };
function FormioGridComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 9);
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.footer.template)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r6.footerPositions.top));
} }
function FormioGridComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r7.header.template);
} }
function FormioGridComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r8.body.template);
} }
function FormioGridComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 9);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r9.footer.template)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r9.footerPositions.bottom));
} }
const _c4 = function (a0, a1) { return [a0, a1]; };
class FormioGridComponent {
    constructor(alerts, resolver, ref) {
        this.alerts = alerts;
        this.resolver = resolver;
        this.ref = ref;
        this.footerPosition = GridFooterPositions.bottom;
        this.page = 0;
        this.isLoading = false;
        this.initialized = false;
        this.footerPositions = GridFooterPositions;
        this.select = this.rowSelect = new EventEmitter();
        this.rowAction = new EventEmitter();
        this.createItem = new EventEmitter();
        this.error = new EventEmitter();
        this.isLoading = true;
    }
    createComponent(property, component) {
        const factory = this.resolver.resolveComponentFactory(component);
        const componentRef = property.createComponent(factory);
        return componentRef.instance;
    }
    loadGrid(src) {
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
            this.formio = new FormioPromiseService(this.src, { formOnly: true });
        }
        // Load the header.
        this.header.load(this.formio, {}, this.columns)
            .then(() => this.setPage(0))
            .catch(error => this.onError(error));
    }
    ngOnInit() {
        // Create our components.
        const comps = this.components || ((this.gridType === 'form') ? FormComponents : SubmissionComponents);
        this.header = this.createComponent(this.headerElement, comps.header);
        this.header.actionAllowed = this.actionAllowed.bind(this);
        this.header.sort.subscribe(header => this.sortColumn(header));
        this.body = this.createComponent(this.bodyElement, comps.body);
        this.body.header = this.header;
        this.body.actionAllowed = this.actionAllowed.bind(this);
        this.body.rowSelect.subscribe(row => this.rowSelect.emit(row));
        this.body.rowAction.subscribe(action => this.rowAction.emit(action));
        this.footer = this.createComponent(this.footerElement, comps.footer);
        this.footer.header = this.header;
        this.footer.body = this.body;
        this.footer.actionAllowed = this.actionAllowed.bind(this);
        this.footer.createText = this.createText;
        this.footer.size = this.size;
        this.footer.pageChanged.subscribe(page => this.pageChanged(page));
        this.footer.createItem.subscribe(item => this.createItem.emit(item));
    }
    ngOnChanges(changes) {
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
    }
    ngAfterViewInit() {
        this.alerts.setAlerts([]);
        this.query = this.query || {};
        if (this.refresh) {
            this.refresh.subscribe((query) => this.refreshGrid(query));
        }
        this.loadGrid(this.src);
        this.initialized = true;
        this.ref.detectChanges();
    }
    actionAllowed(action) {
        if (this.isActionAllowed) {
            return this.isActionAllowed(action);
        }
        else {
            return true;
        }
    }
    onError(error) {
        this.isLoading = false;
        this.error.emit(error);
        this.alerts.setAlert({
            type: 'danger',
            message: error
        });
    }
    refreshGrid(query) {
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
        Formio.cache = {};
        let loader = null;
        if (this.items) {
            loader = Promise.resolve(this.body.setRows(this.query, this.items));
        }
        else {
            loader = this.body.load(this.formio, this.query);
        }
        return loader.then(info => {
            this.isLoading = false;
            this.initialized = true;
            this.ref.detectChanges();
        }).catch(error => this.onError(error));
    }
    setPage(num = -1) {
        this.page = num !== -1 ? num : this.page;
        if (!this.query.hasOwnProperty('limit')) {
            this.query.limit = 10;
        }
        if (!this.query.hasOwnProperty('skip')) {
            this.query.skip = 0;
        }
        this.query.skip = this.page * this.query.limit;
        this.refreshGrid();
    }
    sortColumn(header) {
        // Reset all other column sorts.
        each(this.header.headers, (col) => {
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
    }
    pageChanged(page) {
        this.setPage(page.page - 1);
    }
}
FormioGridComponent.ɵfac = function FormioGridComponent_Factory(t) { return new (t || FormioGridComponent)(ɵɵdirectiveInject(FormioAlerts), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ChangeDetectorRef)); };
FormioGridComponent.ɵcmp = ɵɵdefineComponent({ type: FormioGridComponent, selectors: [["formio-grid"]], viewQuery: function FormioGridComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$2, true, ViewContainerRef);
        ɵɵstaticViewQuery(_c1, true, ViewContainerRef);
        ɵɵstaticViewQuery(_c2, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerElement = _t.first);
    } }, inputs: { footerPosition: "footerPosition", src: "src", items: "items", onForm: "onForm", query: "query", refresh: "refresh", columns: "columns", gridType: "gridType", size: "size", components: "components", formio: "formio", createText: "createText", isActionAllowed: "isActionAllowed" }, outputs: { select: "select", rowSelect: "rowSelect", rowAction: "rowAction", createItem: "createItem", error: "error" }, features: [ɵɵNgOnChangesFeature], decls: 14, vars: 12, consts: [["headerTemplate", ""], ["bodyTemplate", ""], ["footerTemplate", ""], [1, "formio-grid"], [3, "alerts"], [1, "table", "table-bordered", "table-striped", "table-hover"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "isLoading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"]], template: function FormioGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormioGridComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, FormioGridComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, FormioGridComponent_ng_template_4_Template, 0, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementStart(6, "div", 3);
        ɵɵelement(7, "formio-alerts", 4);
        ɵɵelementStart(8, "table", 5);
        ɵɵtemplate(9, FormioGridComponent_ng_container_9_Template, 1, 4, "ng-container", 6);
        ɵɵtemplate(10, FormioGridComponent_ng_container_10_Template, 1, 1, "ng-container", 7);
        ɵɵelement(11, "formio-loader", 8);
        ɵɵtemplate(12, FormioGridComponent_ng_container_12_Template, 1, 1, "ng-container", 7);
        ɵɵtemplate(13, FormioGridComponent_ng_container_13_Template, 1, 4, "ng-container", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("alerts", ctx.alerts);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.initialized && ɵɵpureFunction2(6, _c4, ctx.footerPositions.top, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== -1);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.initialized);
        ɵɵadvance(1);
        ɵɵproperty("isLoading", ctx.isLoading);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.initialized);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.initialized && ɵɵpureFunction2(9, _c4, ctx.footerPositions.bottom, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== -1);
    } }, directives: [FormioAlertsComponent, NgIf, FormioLoaderComponent, NgTemplateOutlet], styles: [".formio-grid[_ngcontent-%COMP%]{position:relative;width:100%}.grid-refresh[_ngcontent-%COMP%]{height:400px;width:100%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioGridComponent, [{
        type: Component,
        args: [{
                selector: 'formio-grid',
                styleUrls: ['./grid.component.scss'],
                templateUrl: './grid.component.html'
            }]
    }], function () { return [{ type: FormioAlerts }, { type: ComponentFactoryResolver }, { type: ChangeDetectorRef }]; }, { footerPosition: [{
            type: Input
        }], src: [{
            type: Input
        }], items: [{
            type: Input
        }], onForm: [{
            type: Input
        }], query: [{
            type: Input
        }], refresh: [{
            type: Input
        }], columns: [{
            type: Input
        }], gridType: [{
            type: Input
        }], size: [{
            type: Input
        }], components: [{
            type: Input
        }], formio: [{
            type: Input
        }], createText: [{
            type: Input
        }], isActionAllowed: [{
            type: Input
        }], select: [{
            type: Output
        }], rowSelect: [{
            type: Output
        }], rowAction: [{
            type: Output
        }], createItem: [{
            type: Output
        }], error: [{
            type: Output
        }], headerElement: [{
            type: ViewChild,
            args: ['headerTemplate', { read: ViewContainerRef, static: true }]
        }], bodyElement: [{
            type: ViewChild,
            args: ['bodyTemplate', { read: ViewContainerRef, static: true }]
        }], footerElement: [{
            type: ViewChild,
            args: ['footerTemplate', { read: ViewContainerRef, static: true }]
        }] }); })();

class FormioGrid {
}
FormioGrid.ɵmod = ɵɵdefineNgModule({ type: FormioGrid });
FormioGrid.ɵinj = ɵɵdefineInjector({ factory: function FormioGrid_Factory(t) { return new (t || FormioGrid)(); }, providers: [
        FormioAlerts
    ], imports: [[
            CommonModule,
            FormsModule,
            FormioModule,
            RouterModule,
            PaginationModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormioGrid, { declarations: [FormioGridComponent,
        FormGridHeaderComponent,
        FormGridBodyComponent,
        FormGridFooterComponent,
        SubmissionGridHeaderComponent,
        SubmissionGridBodyComponent,
        SubmissionGridFooterComponent], imports: [CommonModule,
        FormsModule,
        FormioModule,
        RouterModule, PaginationModule], exports: [FormioGridComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioGrid, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FormioModule,
                    RouterModule,
                    PaginationModule.forRoot()
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

export { FormGridBodyComponent, FormGridFooterComponent, FormGridHeaderComponent, FormioGrid, FormioGridComponent, GridBodyComponent, GridFooterComponent, GridHeaderComponent, SubmissionGridBodyComponent, SubmissionGridFooterComponent, SubmissionGridHeaderComponent };
//# sourceMappingURL=angular-formio-grid.js.map
