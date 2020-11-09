import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function SubmissionComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵelement(1, "img", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r0.downloadUrl, i0.ɵɵsanitizeUrl);
} }
function SubmissionComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "a", 11);
    i0.ɵɵelement(2, "i", 12);
    i0.ɵɵtext(3, " Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function SubmissionComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "a", 13);
    i0.ɵɵelement(2, "span", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class SubmissionComponent {
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
SubmissionComponent.ɵfac = function SubmissionComponent_Factory(t) { return new (t || SubmissionComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
SubmissionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionComponent, selectors: [["ng-component"]], decls: 12, vars: 3, consts: [["target", "_blank", "class", "pull-right", 3, "href", 4, "ngIf"], [1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-eye", "glyphicon", "glyphicon-eye"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["target", "_blank", 1, "pull-right", 3, "href"], ["src", "https://pro.formview.io/assets/pdf.png", 2, "height", "2em"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-edit", "glyphicon", "glyphicon-edit"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function SubmissionComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.downloadUrl);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.service.perms.edit);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.service.perms.delete);
    } }, directives: [i3.NgIf, i2.RouterLinkWithHref, i2.RouterLinkActive, i2.RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionComponent, [{
        type: Component,
        args: [{
                templateUrl: './submission.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWlzc2lvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsic3VibWlzc2lvbi9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQWxELDRCQUErRTtJQUFBLDBCQUF5RTtJQUFBLGlCQUFJOzs7SUFBckksMkRBQW9COzs7SUFJekMsNkJBQTBFO0lBQUEsNkJBQWdFO0lBQUEsd0JBQW1EO0lBQUMscUJBQUk7SUFBQSxpQkFBSTtJQUFBLGlCQUFLOzs7SUFDM00sNkJBQTRFO0lBQUEsNkJBQWtFO0lBQUEsMkJBQTJEO0lBQUEsaUJBQUk7SUFBQSxpQkFBSzs7QURFcE4sTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixZQUNTLE9BQTJCLEVBQzNCLEtBQXFCO1FBRHJCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzFCLENBQUM7SUFFTCxjQUFjLENBQUMsR0FBRztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMxRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzRkFmVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1BoQyxnRUFBK0U7UUFDL0UsNkJBQ0U7UUFBQSw2QkFBcUI7UUFBQSw0QkFBcUM7UUFBQSx1QkFBbUU7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQ3RJLDZCQUErQztRQUFBLDRCQUFnRTtRQUFBLHVCQUFpRDtRQUFDLHFCQUFJO1FBQUEsaUJBQUk7UUFBQSxpQkFBSztRQUM5SyxrRUFBMEU7UUFDMUUsb0VBQTRFO1FBQzlFLGlCQUFLO1FBQ0wsaUNBQStCOztRQVA1QixzQ0FBbUI7UUFJMkIsZUFBMEI7UUFBMUIsNkNBQTBCO1FBQzFCLGVBQTRCO1FBQTVCLCtDQUE0Qjs7a0RERWhFLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLDZCQUE2QjthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9mb3JtLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vc3VibWlzc2lvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3VibWlzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBkb3dubG9hZFVybDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybU1hbmFnZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBzZXREb3dubG9hZFVybCh1cmwpIHtcbiAgICB0aGlzLmRvd25sb2FkVXJsID0gdXJsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldFN1Ym1pc3Npb24odGhpcy5yb3V0ZSkudGhlbigoZm9ybWlvOiBhbnkpID0+IHtcbiAgICAgIGZvcm1pby5nZXREb3dubG9hZFVybCgpLnRoZW4oKHVybCkgPT4gdGhpcy5zZXREb3dubG9hZFVybCh1cmwpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGEgKm5nSWY9XCJkb3dubG9hZFVybFwiIFtocmVmXT1cImRvd25sb2FkVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+PGltZyBzcmM9XCJodHRwczovL3Byby5mb3Jtdmlldy5pby9hc3NldHMvcGRmLnBuZ1wiIHN0eWxlPVwiaGVpZ2h0OiAyZW07XCIgLz48L2E+XG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTBweFwiPlxuICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rPVwiLi4vXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnQgZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPjwvbGk+XG4gIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rPVwidmlld1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48aSBjbGFzcz1cImZhIGZhLWV5ZSBnbHlwaGljb24gZ2x5cGhpY29uLWV5ZVwiPjwvaT4gVmlldzwvYT48L2xpPlxuICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiAqbmdJZj1cInNlcnZpY2UucGVybXMuZWRpdFwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rPVwiZWRpdFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48aSBjbGFzcz1cImZhIGZhLWVkaXQgZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XCI+PC9pPiBFZGl0PC9hPjwvbGk+XG4gIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiICpuZ0lmPVwic2VydmljZS5wZXJtcy5kZWxldGVcIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cImRlbGV0ZVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48c3BhbiBjbGFzcz1cImZhIGZhLXRyYXNoIGdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcIj48L3NwYW4+PC9hPjwvbGk+XG48L3VsPlxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIl19