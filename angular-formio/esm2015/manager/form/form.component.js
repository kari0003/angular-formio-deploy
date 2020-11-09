import { Component } from '@angular/core';
import { Formio } from 'formiojs';
import * as i0 from "@angular/core";
import * as i1 from "../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "angular-formio";
import * as i4 from "../form-manager.config";
import * as i5 from "ngx-bootstrap/modal";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
function FormManagerFormComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function FormManagerFormComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(17); return ctx_r5.openEmbed(_r3); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵtext(2, " Share");
    i0.ɵɵelementEnd();
} }
function FormManagerFormComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "a", 14);
    i0.ɵɵelement(2, "i", 15);
    i0.ɵɵtext(3, " Edit Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function FormManagerFormComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "a", 16);
    i0.ɵɵelement(2, "span", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function FormManagerFormComponent_ng_template_16_pre_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵelement(1, "textarea", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r7.embedCode);
} }
function FormManagerFormComponent_ng_template_16_input_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 32);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r8.shareUrl);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function FormManagerFormComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "h4", 19);
    i0.ɵɵtext(2, "Share or Embed this form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 21);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵelementStart(7, "ul", 23);
    i0.ɵɵelementStart(8, "li", 2);
    i0.ɵɵelementStart(9, "a", 24);
    i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.choices("isUrl"); });
    i0.ɵɵelement(10, "i", 25);
    i0.ɵɵtext(11, " URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "li", 2);
    i0.ɵɵelementStart(13, "a", 24);
    i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.choices("isEmbed"); });
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
    i0.ɵɵlistener("click", function FormManagerFormComponent_ng_template_16_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.modalRef.hide(); });
    i0.ɵɵtext(20, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r4.choice === "isUrl"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r4.choice === "isEmbed"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r4.choice === "isEmbed");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.choice === "isUrl");
} }
export class FormManagerFormComponent {
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
FormManagerFormComponent.ɵfac = function FormManagerFormComponent_Factory(t) { return new (t || FormManagerFormComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAppConfig), i0.ɵɵdirectiveInject(i4.FormManagerConfig), i0.ɵɵdirectiveInject(i5.BsModalService)); };
FormManagerFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerFormComponent, selectors: [["ng-component"]], decls: 18, vars: 3, consts: [["class", "pull-right btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-2"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-pencil", "glyphicon", "glyphicon-pencil"], ["routerLink", "submission", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-list-alt", "glyphicon", "glyphicon-list-alt"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["content", ""], [1, "pull-right", "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-share-alt", "glyphicon", "glyphicon-share"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-edit", "glyphicon", "glyphicon-edit"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "nav", "nav-tabs", "mr-auto", "mb-2"], [1, "nav-link", 3, "ngClass", "click"], [1, "fa", "fa-link"], [1, "fa", "fa-code"], [4, "ngIf"], ["type", "text", "onclick", "this.focus();this.select()", "readonly", "readonly", "class", "form-control", "placeholder", "https://examples.form.io/example", 3, "ngModel", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["onclick", "this.focus();this.select()", "readonly", "readonly", "rows", "8", 2, "width", "100%", 3, "ngModel"], ["type", "text", "onclick", "this.focus();this.select()", "readonly", "readonly", "placeholder", "https://examples.form.io/example", 1, "form-control", 3, "ngModel"]], template: function FormManagerFormComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.options.viewer);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngIf", ctx.service.actionAllowed("formEdit"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.service.actionAllowed("formDelete"));
    } }, directives: [i6.NgIf, i2.RouterLinkWithHref, i2.RouterLinkActive, i2.RouterOutlet, i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerFormComponent, [{
        type: Component,
        args: [{
                templateUrl: './form.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.ActivatedRoute }, { type: i3.FormioAppConfig }, { type: i4.FormManagerConfig }, { type: i5.BsModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsiZm9ybS9mb3JtLmNvbXBvbmVudC50cyIsImZvcm0vZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQU0vRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztJQ05sQyxrQ0FBdUc7SUFBN0IsaU9BQTRCO0lBQUMsd0JBQXlEO0lBQUMsc0JBQUs7SUFBQSxpQkFBUzs7O0lBSzdLLDZCQUF5RjtJQUFBLDZCQUFnRTtJQUFBLHdCQUFtRDtJQUFDLDBCQUFTO0lBQUEsaUJBQUk7SUFBQSxpQkFBSzs7O0lBQy9OLDZCQUEyRjtJQUFBLDZCQUFrRTtJQUFBLDJCQUEyRDtJQUFBLGlCQUFJO0lBQUEsaUJBQUs7OztJQW1CL04sMkJBQW1DO0lBQUEsK0JBQWlJO0lBQUEsaUJBQU07OztJQUF2QyxlQUFxQjtJQUFyQiwwQ0FBcUI7OztJQUN4Siw0QkFDRjs7O0lBRDhILHlDQUFvQjs7Ozs7SUFoQmxKLCtCQUNFO0lBQUEsOEJBQXdCO0lBQUEsd0NBQXdCO0lBQUEsaUJBQUs7SUFDckQsa0NBQ0U7SUFEcUQsK0tBQVMsc0JBQWUsSUFBQztJQUM5RSxnQ0FBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3pDLGlCQUFTO0lBQ1gsaUJBQU07SUFDTiwrQkFDRTtJQUFBLDhCQUNFO0lBQUEsNkJBQ0U7SUFBQSw2QkFBMEY7SUFBM0IsMkxBQWlCLE9BQU8sS0FBRTtJQUFDLHlCQUEwQjtJQUFDLHFCQUFHO0lBQUEsaUJBQUk7SUFDOUgsaUJBQUs7SUFDTCw4QkFDRTtJQUFBLDhCQUE4RjtJQUE3Qiw0TEFBaUIsU0FBUyxLQUFFO0lBQUMseUJBQTBCO0lBQUMsdUJBQUs7SUFBQSxpQkFBSTtJQUNwSSxpQkFBSztJQUNQLGlCQUFLO0lBQ0wsMkZBQW1DO0lBQ25DLCtGQUNGO0lBQUEsaUJBQU07SUFDTixnQ0FDRTtJQUFBLG1DQUFzRTtJQUExQixpTEFBUyx1QkFBZSxJQUFDO0lBQUMsc0JBQUs7SUFBQSxpQkFBUztJQUN0RixpQkFBTTs7O0lBWG9CLGVBQTBDO0lBQTFDLCtFQUEwQztJQUcxQyxlQUE0QztJQUE1QyxpRkFBNEM7SUFHOUQsZUFBNEI7SUFBNUIsa0RBQTRCO0lBQzNCLGVBQTBCO0lBQTFCLGdEQUEwQjs7QURmckMsTUFBTSxPQUFPLHdCQUF3QjtJQVNuQyxZQUNTLE9BQTJCLEVBQzNCLEtBQXFCLEVBQ3JCLFNBQTBCLEVBQzFCLE9BQTBCLEVBQ3pCLFlBQTRCO1FBSjdCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQWJ0QyxXQUFNLEdBQVEsT0FBTyxDQUFDO1FBTXRCLFNBQUksR0FBUSxFQUFFLENBQUM7SUFRWCxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLFNBQVMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLFdBQVcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUF5QjtRQUNqQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLElBQUksZ0ZBQWdGLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUN4RztRQUNELElBQUksU0FBUyxHQUFHLGlDQUFpQyxDQUFDO1FBQ2xELFNBQVMsSUFBSSx3QkFBd0IsQ0FBQztRQUN0QyxTQUFTLElBQU8sNENBQTRDLENBQUM7UUFDN0QsU0FBUyxJQUFPLG9DQUFvQyxDQUFDO1FBQ3JELFNBQVMsSUFBTyw2QkFBNkIsQ0FBQztRQUM5QyxTQUFTLElBQU8sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLCtDQUErQyxDQUFDO1FBQ3BHLFNBQVMsSUFBTywyQkFBMkIsQ0FBQztRQUM1QyxTQUFTLElBQVUsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pGLFNBQVMsSUFBVSx3Q0FBd0MsQ0FBQztRQUM1RCxTQUFTLElBQWEsNEJBQTRCLENBQUM7UUFDbkQsU0FBUyxJQUFVLEdBQUcsQ0FBQztRQUN2QixTQUFTLElBQVUsMERBQTBELEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM3RixTQUFTLElBQU8sSUFBSSxDQUFDO1FBQ3JCLFNBQVMsSUFBTyxtQkFBbUIsQ0FBQztRQUNwQyxTQUFTLElBQUksdUJBQXVCLENBQUM7UUFDckMsU0FBUyxJQUFJLFdBQVcsQ0FBQztRQUN6QixTQUFTLElBQUksMEJBQTBCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BFLFNBQVMsSUFBUSxzREFBc0QsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ2pILElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Z0dBaEVVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDWHJDLCtFQUF1RztRQUN2Ryw2QkFDRTtRQUFBLDZCQUFxQjtRQUFBLDRCQUFxQztRQUFBLHVCQUFtRTtRQUFBLGlCQUFJO1FBQUEsaUJBQUs7UUFDdEksNkJBQStDO1FBQUEsNEJBQWdFO1FBQUEsdUJBQXVEO1FBQUMsMkJBQVU7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQzFMLDZCQUErQztRQUFBLDZCQUFzRTtRQUFBLHdCQUEyRDtRQUFDLDJCQUFTO1FBQUEsaUJBQUk7UUFBQSxpQkFBSztRQUNuTSwwRUFBeUY7UUFDekYsMEVBQTJGO1FBQzdGLGlCQUFLO1FBQ0wsaUNBQStCO1FBQy9CLDhIQUNFOztRQVZNLHlDQUFzQjtRQUt4QixnQkFBeUM7UUFBekMsNERBQXlDO1FBQ3pDLGVBQTJDO1FBQTNDLDhEQUEyQzs7a0RES3BDLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLHVCQUF1QjthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJDb25maWcgfSBmcm9tICcuLi9mb3JtLW1hbmFnZXIuY29uZmlnJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1pb0FwcENvbmZpZyB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlLCBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBGb3JtaW8gfSBmcm9tICdmb3JtaW9qcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1hbmFnZXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2hvaWNlOiBhbnkgPSAnaXNVcmwnO1xuICBlbWJlZENvZGU6IGFueTtcbiAgZm9ybWlvOiBhbnk7XG4gIHNoYXJlVXJsOiBhbnk7XG4gIHByb2plY3RJZDogYW55O1xuICBwYXRoTmFtZTogYW55O1xuICBnb1RvOiBhbnkgPSAnJztcbiAgbW9kYWxSZWY6IEJzTW9kYWxSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3JtTWFuYWdlclNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYXBwQ29uZmlnOiBGb3JtaW9BcHBDb25maWcsXG4gICAgcHVibGljIG9wdGlvbnM6IEZvcm1NYW5hZ2VyQ29uZmlnLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5mb3JtaW8gPSBuZXcgRm9ybWlvKGAke3RoaXMuYXBwQ29uZmlnLmFwcFVybH0vZm9ybS8ke3BhcmFtcy5pZH1gKTtcbiAgICAgIHRoaXMuZm9ybWlvLmxvYWRGb3JtKCkudGhlbihmb3JtID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0SWQgPSBmb3JtLnByb2plY3Q7XG4gICAgICAgIHRoaXMucGF0aE5hbWUgPSBmb3JtLnBhdGg7XG4gICAgICAgIHRoaXMuZ2V0U2hhcmVVcmwoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXJ2aWNlLnJlc2V0KHRoaXMucm91dGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFNoYXJlVXJsKCkge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuYXBwQ29uZmlnLmFwcFVybCArICcvJyArIHRoaXMucGF0aE5hbWU7XG4gICAgdGhpcy5zaGFyZVVybCA9IGAke3RoaXMub3B0aW9ucy52aWV3ZXJ9LyMvP3NyYz0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfWA7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVVcmw7XG4gIH1cblxuICBvcGVuRW1iZWQoY29udGVudDogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGxldCBnb3RvID0gJyc7XG4gICAgaWYgKHRoaXMuZ29Ubykge1xuICAgICAgZ290byArPSBgaWYgKGQgJiYgZC5mb3JtU3VibWlzc2lvbiAmJiBkLmZvcm1TdWJtaXNzaW9uLl9pZCkgeyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiJHt0aGlzLmdvVG99XCI7fWA7XG4gICAgfVxuICAgIGxldCBlbWJlZENvZGUgPSAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+JztcbiAgICBlbWJlZENvZGUgKz0gJyhmdW5jdGlvbiBhKGQsIHcsIHUpIHsnO1xuICAgIGVtYmVkQ29kZSArPSAgICAndmFyIGggPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTsnO1xuICAgIGVtYmVkQ29kZSArPSAgICAndmFyIHMgPSBkLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7JztcbiAgICBlbWJlZENvZGUgKz0gICAgJ3MudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7JztcbiAgICBlbWJlZENvZGUgKz0gICAgJ3Muc3JjID0gXCInICsgdGhpcy5vcHRpb25zLnZpZXdlciArICcvYXNzZXRzL2xpYi9zZWFtbGVzcy9zZWFtbGVzcy5wYXJlbnQubWluLmpzXCI7JztcbiAgICBlbWJlZENvZGUgKz0gICAgJ3Mub25sb2FkID0gZnVuY3Rpb24gYigpIHsnO1xuICAgIGVtYmVkQ29kZSArPSAgICAgICAndmFyIGYgPSBkLmdldEVsZW1lbnRCeUlkKFwiZm9ybWlvLWZvcm0tJyArIHRoaXMuZm9ybWlvLmZvcm1JZCArICdcIik7JztcbiAgICBlbWJlZENvZGUgKz0gICAgICAgJ2lmICghZiB8fCAodHlwZW9mIHcuc2VhbWxlc3MgPT09IHUpKSB7JztcbiAgICBlbWJlZENvZGUgKz0gICAgICAgICAgJ3JldHVybiBzZXRUaW1lb3V0KGIsIDEwMCk7JztcbiAgICBlbWJlZENvZGUgKz0gICAgICAgJ30nO1xuICAgIGVtYmVkQ29kZSArPSAgICAgICAndy5zZWFtbGVzcyhmLCB7ZmFsbGJhY2s6ZmFsc2V9KS5yZWNlaXZlKGZ1bmN0aW9uKGQsIGUpIHsnICsgZ290byArICd9KTsnO1xuICAgIGVtYmVkQ29kZSArPSAgICAnfTsnO1xuICAgIGVtYmVkQ29kZSArPSAgICAnaC5hcHBlbmRDaGlsZChzKTsnO1xuICAgIGVtYmVkQ29kZSArPSAnfSkoZG9jdW1lbnQsIHdpbmRvdyk7JztcbiAgICBlbWJlZENvZGUgKz0gJzwvc2NyaXB0Pic7XG4gICAgZW1iZWRDb2RlICs9ICc8aWZyYW1lIGlkPVwiZm9ybWlvLWZvcm0tJyArIHRoaXMuZm9ybWlvLmZvcm1JZCArICdcIiAnO1xuICAgIGVtYmVkQ29kZSArPSAgICAgJ3N0eWxlPVwid2lkdGg6MTAwJTtib3JkZXI6bm9uZTtcIiBoZWlnaHQ9XCI4MDBweFwiIHNyYz1cIicgKyB0aGlzLnNoYXJlVXJsICsgJyZpZnJhbWU9MVwiPjwvaWZyYW1lPic7XG4gICAgdGhpcy5lbWJlZENvZGUgPSBlbWJlZENvZGU7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3coY29udGVudCwgeyBjbGFzczogJ21vZGFsLWxnJyB9KTtcbiAgfVxuXG4gIGNob2ljZXMoc3RyaW5nKSB7XG4gICAgdGhpcy5jaG9pY2UgPSBzdHJpbmc7XG4gIH1cbn1cbiIsIjxidXR0b24gKm5nSWY9XCJvcHRpb25zLnZpZXdlclwiIGNsYXNzPVwicHVsbC1yaWdodCBidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIChjbGljayk9XCJvcGVuRW1iZWQoY29udGVudClcIj48aSBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdCBnbHlwaGljb24gZ2x5cGhpY29uLXNoYXJlXCI+PC9pPiBTaGFyZTwvYnV0dG9uPlxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIG1iLTJcIj5cbiAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cIi4uL1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0IGdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT48L2xpPlxuICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cInZpZXdcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWwgZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcIj48L2k+IEVudGVyIERhdGE8L2E+PC9saT5cbiAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJzdWJtaXNzaW9uXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxpIGNsYXNzPVwiZmEgZmEtbGlzdC1hbHQgZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdFwiPjwvaT4gVmlldyBEYXRhPC9hPjwvbGk+XG4gIDxsaSAqbmdJZj1cInNlcnZpY2UuYWN0aW9uQWxsb3dlZCgnZm9ybUVkaXQnKVwiIGNsYXNzPVwibmF2LWl0ZW1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJlZGl0XCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdCBnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcIj48L2k+IEVkaXQgRm9ybTwvYT48L2xpPlxuICA8bGkgKm5nSWY9XCJzZXJ2aWNlLmFjdGlvbkFsbG93ZWQoJ2Zvcm1EZWxldGUnKVwiIGNsYXNzPVwibmF2LWl0ZW1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJkZWxldGVcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaCBnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXCI+PC9zcGFuPjwvYT48L2xpPlxuPC91bD5cbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbjxuZy10ZW1wbGF0ZSAjY29udGVudD5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+U2hhcmUgb3IgRW1iZWQgdGhpcyBmb3JtPC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm1vZGFsUmVmLmhpZGUoKVwiPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIG1yLWF1dG8gbWItMlwiPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogY2hvaWNlID09PSAnaXNVcmwnfVwiIChjbGljayk9XCJjaG9pY2VzKCdpc1VybCcpXCI+PGkgY2xhc3M9XCJmYSBmYS1saW5rXCI+PC9pPiBVUkw8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogY2hvaWNlID09PSAnaXNFbWJlZCd9XCIgKGNsaWNrKT1cImNob2ljZXMoJ2lzRW1iZWQnKVwiPjxpIGNsYXNzPVwiZmEgZmEtY29kZVwiPjwvaT4gRW1iZWQ8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHByZSAgKm5nSWY9XCJjaG9pY2UgPT09ICdpc0VtYmVkJ1wiPjx0ZXh0YXJlYSBvbmNsaWNrPVwidGhpcy5mb2N1cygpO3RoaXMuc2VsZWN0KClcIiByZWFkb25seT1cInJlYWRvbmx5XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIHJvd3M9XCI4XCIgW25nTW9kZWxdPVwiZW1iZWRDb2RlXCI+PC90ZXh0YXJlYT48L3ByZT5cbiAgICA8aW5wdXQgKm5nSWY9XCJjaG9pY2UgPT09ICdpc1VybCdcIiB0eXBlPVwidGV4dFwiIG9uY2xpY2s9XCJ0aGlzLmZvY3VzKCk7dGhpcy5zZWxlY3QoKVwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtuZ01vZGVsXT1cInNoYXJlVXJsXCIgcGxhY2Vob2xkZXI9XCJodHRwczovL2V4YW1wbGVzLmZvcm0uaW8vZXhhbXBsZVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodFwiIChjbGljayk9XCJtb2RhbFJlZi5oaWRlKClcIj5DbG9zZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=