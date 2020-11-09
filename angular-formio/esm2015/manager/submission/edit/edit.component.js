import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "angular-formio";
export class SubmissionEditComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    onSubmit(submission) {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
}
SubmissionEditComponent.ɵfac = function SubmissionEditComponent_Factory(t) { return new (t || SubmissionEditComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
SubmissionEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionEditComponent, selectors: [["ng-component"]], decls: 1, vars: 2, consts: [[3, "renderer", "src", "submit", "formLoad", "submissionLoad"]], template: function SubmissionEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "formio", 0);
        i0.ɵɵlistener("submit", function SubmissionEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); })("formLoad", function SubmissionEditComponent_Template_formio_formLoad_0_listener($event) { return ctx.service.setForm($event); })("submissionLoad", function SubmissionEditComponent_Template_formio_submissionLoad_0_listener($event) { return ctx.service.submissionLoaded($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("renderer", ctx.service.config.renderer)("src", ctx.service.formio.submissionUrl);
    } }, directives: [i3.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionEditComponent, [{
        type: Component,
        args: [{
                templateUrl: './edit.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsic3VibWlzc2lvbi9lZGl0L2VkaXQuY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPMUMsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNTLE9BQTJCLEVBQzNCLE1BQWMsRUFDZCxLQUFxQjtRQUZyQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDMUIsQ0FBQztJQUVMLFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OEZBVFUsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNQcEMsaUNBTVU7UUFIUiw0R0FBVSxvQkFBZ0IsSUFBQyxtR0FDZiwyQkFBdUIsSUFEUiwrR0FFVCxvQ0FBZ0MsSUFGdkI7UUFHNUIsaUJBQVM7O1FBTFIsc0RBQW9DLHlDQUFBOztrRERNekIsdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsdUJBQXVCO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9mb3JtLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdWJtaXNzaW9uRWRpdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3JtTWFuYWdlclNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBvblN1Ym1pdChzdWJtaXNzaW9uKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8nXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxufVxuIiwiPGZvcm1pb1xuICBbcmVuZGVyZXJdPVwic2VydmljZS5jb25maWcucmVuZGVyZXJcIlxuICBbc3JjXT1cInNlcnZpY2UuZm9ybWlvLnN1Ym1pc3Npb25VcmxcIlxuICAoc3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIlxuICAoZm9ybUxvYWQpPVwic2VydmljZS5zZXRGb3JtKCRldmVudClcIlxuICAoc3VibWlzc2lvbkxvYWQpPVwic2VydmljZS5zdWJtaXNzaW9uTG9hZGVkKCRldmVudClcIlxuPjwvZm9ybWlvPlxuIl19