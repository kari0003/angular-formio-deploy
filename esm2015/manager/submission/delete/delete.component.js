import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "angular-formio";
export class SubmissionDeleteComponent {
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onDelete() {
        this.service.formio.deleteSubmission().then(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        }).catch(err => this.alerts.setAlert({ type: 'danger', message: (err.message || err) }));
    }
    onCancel() {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    }
}
SubmissionDeleteComponent.ɵfac = function SubmissionDeleteComponent_Factory(t) { return new (t || SubmissionDeleteComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAlerts)); };
SubmissionDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionDeleteComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[3, "alerts"], [1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function SubmissionDeleteComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("alerts", ctx.alerts);
    } }, directives: [i3.FormioAlertsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionDeleteComponent, [{
        type: Component,
        args: [{
                templateUrl: './delete.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormioAlerts }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vbWFuYWdlci9zcmMvIiwic291cmNlcyI6WyJzdWJtaXNzaW9uL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTFDLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFDUyxPQUEyQixFQUMzQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBb0I7UUFIcEIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFDMUIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2tHQWhCVSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1J0QyxtQ0FBaUQ7UUFDakQsMEJBQUk7UUFBQSw0REFBNEM7UUFBQSxpQkFBSztRQUNyRCw4QkFDRTtRQUFBLGlDQUE4RjtRQUF4RSxzR0FBUyxjQUFVLElBQUM7UUFBb0QsbUJBQUc7UUFBQSxpQkFBUztRQUMxRyxpQ0FBbUU7UUFBN0Msc0dBQVMsY0FBVSxJQUFDO1FBQXlCLGtCQUFFO1FBQUEsaUJBQVM7UUFDaEYsaUJBQU07O1FBTFMsbUNBQWlCOztrRERRbkIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUseUJBQXlCO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9mb3JtLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1pb0FsZXJ0cyB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxldGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN1Ym1pc3Npb25EZWxldGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybU1hbmFnZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBhbGVydHM6IEZvcm1pb0FsZXJ0c1xuICApIHt9XG5cbiAgb25EZWxldGUoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmZvcm1pby5kZWxldGVTdWJtaXNzaW9uKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHRoaXMuYWxlcnRzLnNldEFsZXJ0KHt0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogKGVyci5tZXNzYWdlIHx8IGVycil9KSk7XG4gIH1cblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsICd2aWV3J10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcbiAgfVxufVxuIiwiPGZvcm1pby1hbGVydHMgW2FsZXJ0c109XCJhbGVydHNcIj48L2Zvcm1pby1hbGVydHM+XG48aDM+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIHJlY29yZD88L2gzPlxuPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPlllczwvYnV0dG9uPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+Tm88L2J1dHRvbj5cbjwvZGl2PlxuIl19