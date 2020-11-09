import { Component } from '@angular/core';
import { GridBodyComponent } from '../GridBodyComponent';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const form_r3 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.onRowAction($event, form_r3, "view"); });
    i0.ɵɵelement(1, "span", 8);
    i0.ɵɵtext(2, " Enter Data");
    i0.ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_10_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const form_r3 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.onRowAction($event, form_r3, "submission"); });
    i0.ɵɵelement(1, "span", 9);
    i0.ɵɵtext(2, " View Data");
    i0.ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_12_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const form_r3 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onRowAction($event, form_r3, "edit"); });
    i0.ɵɵelement(1, "span", 10);
    i0.ɵɵtext(2, " Edit Form");
    i0.ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_button_14_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const form_r3 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.onRowAction($event, form_r3, "delete"); });
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementEnd();
} }
function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "a", 4);
    i0.ɵɵlistener("click", function FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template_a_click_4_listener($event) { i0.ɵɵrestoreView(_r21); const form_r3 = ctx.$implicit; const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.onRowSelect($event, form_r3); });
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
} if (rf & 2) {
    const form_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
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
} }
function FormGridBodyComponent_ng_template_0_tbody_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, FormGridBodyComponent_ng_template_0_tbody_0_tr_1_Template, 15, 6, "tr", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.rows);
} }
function FormGridBodyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FormGridBodyComponent_ng_template_0_tbody_0_Template, 2, 1, "tbody", 0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.rows);
} }
export class FormGridBodyComponent extends GridBodyComponent {
    load(formio, query) {
        query = query || {};
        return formio.loadForms({ params: query }).then((forms) => this.setRows(query, forms));
    }
}
FormGridBodyComponent.ɵfac = function FormGridBodyComponent_Factory(t) { return ɵFormGridBodyComponent_BaseFactory(t || FormGridBodyComponent); };
FormGridBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormGridBodyComponent, selectors: [["form-grid-body"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-sm-8"], [3, "routerLink", "click"], [1, "col-sm-4"], ["class", "btn btn-secondary btn-sm form-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-sm", "form-btn", 3, "click"], [1, "fa", "fa-pencil"], [1, "fa", "fa-list-alt"], [1, "fa", "fa-edit"], [1, "fa", "fa-trash"]], template: function FormGridBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormGridBodyComponent_ng_template_0_Template, 1, 1, "ng-template");
    } }, directives: [i1.NgIf, i1.NgForOf, i2.RouterLinkWithHref], styles: [".form-btn[_ngcontent-%COMP%]{font-size:.75rem}"] });
const ɵFormGridBodyComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(FormGridBodyComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormGridBodyComponent, [{
        type: Component,
        args: [{
                selector: 'form-grid-body',
                styleUrls: ['./FormGridBody.component.scss'],
                templateUrl: './FormGridBody.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyaWRCb2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vZ3JpZC9zcmMvIiwic291cmNlcyI6WyJmb3JtL0Zvcm1HcmlkQm9keS5jb21wb25lbnQudHMiLCJmb3JtL0Zvcm1HcmlkQm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7SUNRN0MsaUNBQWdJO0lBQTVDLHlSQUFtQyxNQUFNLEtBQUU7SUFBQywwQkFBa0M7SUFBQywyQkFBVTtJQUFBLGlCQUFTOzs7O0lBQ3RMLGlDQUE2STtJQUFsRCw2UkFBbUMsWUFBWSxLQUFFO0lBQUMsMEJBQW9DO0lBQUMsMEJBQVM7SUFBQSxpQkFBUzs7OztJQUNwTSxpQ0FBZ0k7SUFBNUMsNlJBQW1DLE1BQU0sS0FBRTtJQUFDLDJCQUFnQztJQUFDLDBCQUFTO0lBQUEsaUJBQVM7Ozs7SUFDbkwsaUNBQW9JO0lBQTlDLDZSQUFtQyxRQUFRLEtBQUU7SUFBQywyQkFBaUM7SUFBQSxpQkFBUzs7OztJQVZ0TCwwQkFDRTtJQUFBLDBCQUNFO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDRCQUFzRTtJQUFwQyxrUUFBbUM7SUFBQywwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFBQSxpQkFBSTtJQUNyRyxpQkFBTTtJQUNOLDhCQUNFO0lBQUEsdUdBQWdJO0lBQXNELHVCQUN0TDtJQUFBLHlHQUE2STtJQUF1RCx3QkFDcE07SUFBQSx5R0FBZ0k7SUFBbUQsd0JBQ25MO0lBQUEseUdBQW9JO0lBQ3RJLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBSztJQUNQLGlCQUFLOzs7O0lBVk0sZUFBOEI7SUFBOUIsaUVBQThCO0lBQXlDLGVBQWdCO0lBQWhCLG1DQUFnQjtJQUdsRixlQUFpQztJQUFqQyx1REFBaUM7SUFDakMsZUFBd0M7SUFBeEMsOERBQXdDO0lBQ3hDLGVBQWlDO0lBQWpDLHVEQUFpQztJQUNqQyxlQUFtQztJQUFuQyx5REFBbUM7OztJQVhyRCw2QkFDRTtJQUFBLDJGQUNFO0lBY0osaUJBQVE7OztJQWZGLGVBQXlCO0lBQXpCLHFDQUF5Qjs7O0lBRC9CLHdGQUNFOzs7SUFESyxrQ0FBWTs7QURRckIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjtJQUMxRCxJQUFJLENBQUMsTUFBNEIsRUFBRSxLQUFXO1FBQzVDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOzt3SEFKVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1RsQyxtRkFDRTs7a0ZEUVcscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmlkQm9keUNvbXBvbmVudCB9IGZyb20gJy4uL0dyaWRCb2R5Q29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Byb21pc2VTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWdyaWQtYm9keScsXG4gIHN0eWxlVXJsczogWycuL0Zvcm1HcmlkQm9keS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vRm9ybUdyaWRCb2R5LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtR3JpZEJvZHlDb21wb25lbnQgZXh0ZW5kcyBHcmlkQm9keUNvbXBvbmVudCB7XG4gIGxvYWQoZm9ybWlvOiBGb3JtaW9Qcm9taXNlU2VydmljZSwgcXVlcnk/OiBhbnkpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgIHJldHVybiBmb3JtaW8ubG9hZEZvcm1zKHsgcGFyYW1zOiBxdWVyeSB9KS50aGVuKChmb3JtczogYW55KSA9PiB0aGlzLnNldFJvd3MocXVlcnksIGZvcm1zKSk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgPHRib2R5ICpuZ0lmPVwicm93c1wiPlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZm9ybSBvZiByb3dzXCI+XG4gICAgICA8dGQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJ7e2Zvcm0uX2lkfX0vdmlld1wiIChjbGljayk9XCJvblJvd1NlbGVjdCgkZXZlbnQsIGZvcm0pXCI+PGg1Pnt7IGZvcm0udGl0bGUgfX08L2g1PjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJhY3Rpb25BbGxvd2VkKCdmb3JtVmlldycpXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZm9ybS1idG5cIiAoY2xpY2spPVwib25Sb3dBY3Rpb24oJGV2ZW50LCBmb3JtLCAndmlldycpXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L3NwYW4+IEVudGVyIERhdGE8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJhY3Rpb25BbGxvd2VkKCdzdWJtaXNzaW9uSW5kZXgnKVwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZvcm0tYnRuXCIgKGNsaWNrKT1cIm9uUm93QWN0aW9uKCRldmVudCwgZm9ybSwgJ3N1Ym1pc3Npb24nKVwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtbGlzdC1hbHRcIj48L3NwYW4+IFZpZXcgRGF0YTwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImFjdGlvbkFsbG93ZWQoJ2Zvcm1FZGl0JylcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBmb3JtLWJ0blwiIChjbGljayk9XCJvblJvd0FjdGlvbigkZXZlbnQsIGZvcm0sICdlZGl0JylcIj48c3BhbiBjbGFzcz1cImZhIGZhLWVkaXRcIj48L3NwYW4+IEVkaXQgRm9ybTwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImFjdGlvbkFsbG93ZWQoJ2Zvcm1EZWxldGUnKVwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZvcm0tYnRuXCIgKGNsaWNrKT1cIm9uUm93QWN0aW9uKCRldmVudCwgZm9ybSwgJ2RlbGV0ZScpXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L25nLXRlbXBsYXRlPlxuIl19