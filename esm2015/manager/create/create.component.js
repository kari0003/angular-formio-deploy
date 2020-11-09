import { Component } from '@angular/core';
import { FormManagerEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "angular-formio";
function FormManagerCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
function FormManagerCreateComponent_form_builder_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "form-builder", 16, 17);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formbuilder", ctx_r3.config.builder)("form", ctx_r3.form);
} }
export class FormManagerCreateComponent extends FormManagerEditComponent {
    ngOnInit() {
        this.service.reset();
    }
}
FormManagerCreateComponent.ɵfac = function FormManagerCreateComponent_Factory(t) { return ɵFormManagerCreateComponent_BaseFactory(t || FormManagerCreateComponent); };
FormManagerCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerCreateComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 21, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-8"], ["type", "text", "id", "formTitle", "placeholder", "Enter a Title", 1, "form-control"], ["title", ""], [1, "col-sm-2"], ["id", "formSelect", 1, "form-control", 3, "change"], ["type", ""], ["value", "form"], ["value", "wizard"], ["value", "pdf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [3, "alerts"], [3, "formbuilder", "form", 4, "ngIf"], [1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"], [1, "loader"], [3, "formbuilder", "form"], ["builder", ""]], template: function FormManagerCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("alerts", ctx.alerts);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formReady);
    } }, directives: [i1.NgIf, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i3.FormioAlertsComponent, i3.FormBuilderComponent], encapsulation: 2 });
const ɵFormManagerCreateComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(FormManagerCreateComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerCreateComponent, [{
        type: Component,
        args: [{
                templateUrl: '../edit/edit.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vbWFuYWdlci9zcmMvIiwic291cmNlcyI6WyJjcmVhdGUvY3JlYXRlLmNvbXBvbmVudC50cyIsImVkaXQvZWRpdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUNEbEUsMEJBQTBDOzs7SUFpQjFDLHVDQUFxRzs7O0lBQXJFLG1EQUE4QixxQkFBQTs7QURYOUQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHdCQUF3QjtJQUN0RSxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzt1SUFIVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ052QywyRUFBb0M7UUFDcEMsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLDhCQUNGO1FBQUEsaUJBQU07UUFDTiw4QkFDRTtRQUFBLG9DQUNFO1FBRDJDLCtHQUFVLDJCQUF1QixJQUFDO1FBQzdFLGlDQUFxQjtRQUFBLG9CQUFJO1FBQUEsaUJBQVM7UUFDbEMsa0NBQXVCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUN0QyxtQ0FBb0I7UUFBQSxvQkFBRztRQUFBLGlCQUFTO1FBQ2xDLGlCQUFTO1FBQ1gsaUJBQU07UUFDTiwrQkFDRTtRQUFBLG1DQUE2RDtRQUFuQix3R0FBUyxZQUFRLElBQUM7UUFBQywwQkFBUztRQUFBLGlCQUFTO1FBQ2pGLGlCQUFNO1FBQ1IsaUJBQU07UUFDTixxQ0FBaUQ7UUFDakQsZ0dBQXNGO1FBQ3RGLG1DQUE2RTtRQUFuQix3R0FBUyxZQUFRLElBQUM7UUFBQywwQkFBUztRQUFBLGlCQUFTOztRQWxCM0Usa0NBQWU7UUFnQnBCLGdCQUFpQjtRQUFqQixtQ0FBaUI7UUFDbEIsZUFBaUI7UUFBakIsb0NBQWlCOzt1RkRYbEIsMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FIdEMsU0FBUztlQUFDO2dCQUNULFdBQVcsRUFBRSw2QkFBNkI7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4uL2VkaXQvZWRpdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1hbmFnZXJDcmVhdGVDb21wb25lbnQgZXh0ZW5kcyBGb3JtTWFuYWdlckVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlcnZpY2UucmVzZXQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImxvYWRlclwiICpuZ0lmPVwibG9hZGluZ1wiPjwvZGl2PlxuPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb3JtVGl0bGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGEgVGl0bGVcIiAjdGl0bGU+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb3JtU2VsZWN0XCIgKGNoYW5nZSk9XCJvbkRpc3BsYXlTZWxlY3QoJGV2ZW50KVwiICN0eXBlPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1cIj5Gb3JtPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwid2l6YXJkXCI+V2l6YXJkPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwicGRmXCI+UERGPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIChjbGljayk9XCJvblNhdmUoKVwiPlNhdmUgRm9ybTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGZvcm1pby1hbGVydHMgW2FsZXJ0c109XCJhbGVydHNcIj48L2Zvcm1pby1hbGVydHM+XG48Zm9ybS1idWlsZGVyICpuZ0lmPVwiZm9ybVJlYWR5XCIgW2Zvcm1idWlsZGVyXT1cImNvbmZpZy5idWlsZGVyXCIgW2Zvcm1dPVwiZm9ybVwiICNidWlsZGVyPjwvZm9ybS1idWlsZGVyPlxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAoY2xpY2spPVwib25TYXZlKClcIj5TYXZlIEZvcm08L2J1dHRvbj5cbiJdfQ==