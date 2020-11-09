import { Component, ViewEncapsulation } from '@angular/core';
import { GridFooterComponent } from '../GridFooterComponent';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/pagination";
import * as i3 from "@angular/forms";
function FormGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead", 3);
    i0.ɵɵelementContainer(1, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function FormGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tfoot", 3);
    i0.ɵɵelementContainer(1, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function FormGridFooterComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
    i0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
} if (rf & 2) {
    const position_r4 = ctx.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
} }
function FormGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function FormGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
} }
function FormGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵelementStart(3, "span", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "pagination", 10);
    i0.ɵɵlistener("ngModelChange", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.actionAllowed("formCreate"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
} }
function FormGridFooterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.header);
} }
export class FormGridFooterComponent extends GridFooterComponent {
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
FormGridFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormGridFooterComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function FormGridFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, FormGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.PaginationComponent, i3.NgControlStatus, i3.NgModel], styles: ["tfoot.formio-grid-footer td{padding:.3rem}tfoot.formio-grid-footer .page-num{font-size:1.4em}tfoot.formio-grid-footer ul.pagination{margin-bottom:0;margin-top:5px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormGridFooterComponent, [{
        type: Component,
        args: [{
                templateUrl: './FormGridFooter.component.html',
                styleUrls: ['../grid.footer.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyaWRGb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImZvcm0vRm9ybUdyaWRGb290ZXIuY29tcG9uZW50LnRzIiwiZm9ybS9Gb3JtR3JpZEZvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUNBM0QsZ0NBQ0U7SUFBQSwyQkFBd0U7SUFDMUUsaUJBQVE7Ozs7SUFEUSxlQUEwQztJQUExQyxzQ0FBMEM7OztJQUUxRCxnQ0FDRTtJQUFBLDJCQUF3RTtJQUMxRSxpQkFBUTs7OztJQURRLGVBQTBDO0lBQTFDLHNDQUEwQzs7O0lBSjFELDBGQUNFO0lBRUYsMEZBQ0U7Ozs7SUFKZ0MsaUVBQXdDO0lBR3hDLGVBQTJDO0lBQTNDLG9FQUEyQzs7OztJQVF6RSxrQ0FBMkg7SUFBbEMsNExBQVMsdUJBQWdCLE1BQU0sQ0FBQyxJQUFDO0lBQUMsd0JBQW1EO0lBQUMsWUFBZ0I7SUFBQSxpQkFBUzs7O0lBQXpCLGVBQWdCO0lBQWhCLGlEQUFnQjs7OztJQURqTSw2QkFDRTtJQUFBLGlHQUEySDtJQUMzSCwrQkFBa0Q7SUFBQSwrQkFBdUI7SUFBQSxZQUEwQztJQUFBLGlCQUFPO0lBQUMsWUFBd0I7SUFBQSxpQkFBTztJQUMxSixzQ0FDYTtJQURxRCw0T0FBdUIsNkxBQWdCLGdDQUF3QixJQUF4QztJQUN6RixpQkFBYTtJQUNmLGlCQUFLOzs7SUFMYyxrREFBNkI7SUFDdEMsZUFBbUM7SUFBbkMseURBQW1DO0lBQzhCLGVBQTBDO0lBQTFDLGlGQUEwQztJQUFRLGVBQXdCO0lBQXhCLHlEQUF3QjtJQUN2SSxlQUF5QjtJQUF6Qiw4Q0FBeUIsbUNBQUEsNkJBQUEsd0JBQUE7OztJQUp6QywwQkFDRTtJQUFBLG9GQUNFO0lBS0osaUJBQUs7OztJQU5DLGVBQWM7SUFBZCxvQ0FBYzs7QURIdEIsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtJQUU5RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7OzhGQWJVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDUnBDLHlIQUNFO1FBUUYseUhBQ0U7O2tEREZXLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuLi9HcmlkRm9vdGVyQ29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9Gb3JtR3JpZEZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi9ncmlkLmZvb3Rlci5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyaWRGb290ZXJDb21wb25lbnQgZXh0ZW5kcyBHcmlkRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNyZWF0ZVRleHQpIHtcbiAgICAgIHRoaXMuY3JlYXRlVGV4dCA9ICdDcmVhdGUgRm9ybSc7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSA3O1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNmb290ZXIgbGV0LXBvc2l0aW9uPVwicG9zaXRpb25cIj5cbiAgPHRoZWFkIGNsYXNzPVwiZm9ybWlvLWdyaWQtZm9vdGVyXCIgKm5nSWY9XCJwb3NpdGlvbiA9PT0gZm9vdGVyUG9zaXRpb25zLnRvcFwiPlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGVmYXVsdEZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDwvdGhlYWQ+XG4gIDx0Zm9vdCBjbGFzcz1cImZvcm1pby1ncmlkLWZvb3RlclwiICpuZ0lmPVwicG9zaXRpb24gPT09IGZvb3RlclBvc2l0aW9ucy5ib3R0b21cIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRlZmF1bHRGb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L3Rmb290PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0Rm9vdGVyVGVtcGxhdGU+XG4gIDx0cj5cbiAgICA8dGQgKm5nSWY9XCJoZWFkZXJcIiBbY29sU3Bhbl09XCJoZWFkZXIubnVtSGVhZGVyc1wiPlxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImFjdGlvbkFsbG93ZWQoJ2Zvcm1DcmVhdGUnKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCIgKGNsaWNrKT1cImNyZWF0ZUl0ZW0uZW1pdCgnZm9ybScpXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgZmEgZmEtcGx1c1wiPjwvaT4ge3sgY3JlYXRlVGV4dCB9fTwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0IGl0ZW0tY291bnRlclwiPjxzcGFuIGNsYXNzPVwicGFnZS1udW1cIj57eyBib2R5LmZpcnN0SXRlbSB9fSAtIHt7IGJvZHkubGFzdEl0ZW0gfX08L3NwYW4+IC8ge3sgYm9keS50b3RhbCB9fSB0b3RhbDwvc3Bhbj5cbiAgICAgIDxwYWdpbmF0aW9uIFt0b3RhbEl0ZW1zXT1cImJvZHkudG90YWxcIiBbaXRlbXNQZXJQYWdlXT1cImJvZHkubGltaXRcIiBbKG5nTW9kZWwpXT1cImJvZHkuc2tpcFwiIChwYWdlQ2hhbmdlZCk9XCJwYWdlQ2hhbmdlZC5lbWl0KCRldmVudClcIiBbbWF4U2l6ZV09XCJzaXplXCIgY2xhc3M9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhZ2luYXRpb24tc21cIj5cbiAgICAgIDwvcGFnaW5hdGlvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==