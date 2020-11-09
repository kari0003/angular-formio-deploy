import { Component, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../resource.service";
import * as i2 from "@angular/router";
import * as i3 from "../resource.config";
import * as i4 from "angular-formio";
export class FormioResourceEditComponent {
    constructor(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.triggerError = new EventEmitter();
    }
    onSubmit(submission) {
        const edit = this.service.resource;
        edit.data = submission.data;
        this.service.save(edit)
            .then(() => {
            this.router.navigate(['../', 'view'], { relativeTo: this.route });
        })
            .catch((err) => this.triggerError.emit(err));
    }
}
FormioResourceEditComponent.ɵfac = function FormioResourceEditComponent_Factory(t) { return new (t || FormioResourceEditComponent)(i0.ɵɵdirectiveInject(i1.FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.FormioResourceConfig)); };
FormioResourceEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceEditComponent, selectors: [["ng-component"]], decls: 1, vars: 4, consts: [[3, "form", "submission", "error", "refresh", "submit"]], template: function FormioResourceEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "formio", 0);
        i0.ɵɵlistener("submit", function FormioResourceEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("error", ctx.triggerError)("refresh", ctx.service.refresh);
    } }, directives: [i4.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceEditComponent, [{
        type: Component,
        args: [{
                templateUrl: './edit.component.html'
            }]
    }], function () { return [{ type: i1.FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.FormioResourceConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Jlc291cmNlL3NyYy8iLCJzb3VyY2VzIjpbImVkaXQvZWRpdC5jb21wb25lbnQudHMiLCJlZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVF4RCxNQUFNLE9BQU8sMkJBQTJCO0lBRXRDLFlBQ1MsT0FBOEIsRUFDOUIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQTRCO1FBSDVCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUw5QixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXpELENBQUM7SUFFSixRQUFRLENBQUMsVUFBZTtRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7c0dBakJVLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDUnhDLGlDQU1VO1FBRFIsZ0hBQVUsb0JBQWdCLElBQUM7UUFDNUIsaUJBQVM7O1FBTFIsdUNBQXFCLG9DQUFBLDJCQUFBLGdDQUFBOztrRERPViwyQkFBMkI7Y0FIdkMsU0FBUztlQUFDO2dCQUNULFdBQVcsRUFBRSx1QkFBdUI7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlQ29uZmlnIH0gZnJvbSAnLi4vcmVzb3VyY2UuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQge1xuICBwdWJsaWMgdHJpZ2dlckVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1pb1Jlc291cmNlU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgY29uZmlnOiBGb3JtaW9SZXNvdXJjZUNvbmZpZ1xuICApIHt9XG5cbiAgb25TdWJtaXQoc3VibWlzc2lvbjogYW55KSB7XG4gICAgY29uc3QgZWRpdCA9IHRoaXMuc2VydmljZS5yZXNvdXJjZTtcbiAgICBlZGl0LmRhdGEgPSBzdWJtaXNzaW9uLmRhdGE7XG4gICAgdGhpcy5zZXJ2aWNlLnNhdmUoZWRpdClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8nLCAndmlldyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHRoaXMudHJpZ2dlckVycm9yLmVtaXQoZXJyKSk7XG4gIH1cbn1cbiIsIjxmb3JtaW9cbiAgW2Zvcm1dPVwic2VydmljZS5mb3JtXCJcbiAgW3N1Ym1pc3Npb25dPVwic2VydmljZS5yZXNvdXJjZVwiXG4gIFtlcnJvcl09XCJ0cmlnZ2VyRXJyb3JcIlxuICBbcmVmcmVzaF09XCJzZXJ2aWNlLnJlZnJlc2hcIlxuICAoc3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIlxuPjwvZm9ybWlvPlxuIl19