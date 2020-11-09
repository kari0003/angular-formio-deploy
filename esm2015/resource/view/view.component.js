import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../resource.service";
import * as i2 from "../resource.config";
import * as i3 from "angular-formio";
export class FormioResourceViewComponent {
    constructor(service, config) {
        this.service = service;
        this.config = config;
    }
}
FormioResourceViewComponent.ɵfac = function FormioResourceViewComponent_Factory(t) { return new (t || FormioResourceViewComponent)(i0.ɵɵdirectiveInject(i1.FormioResourceService), i0.ɵɵdirectiveInject(i2.FormioResourceConfig)); };
FormioResourceViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceViewComponent, selectors: [["ng-component"]], decls: 1, vars: 5, consts: [[3, "form", "submission", "refresh", "hideComponents", "readOnly"]], template: function FormioResourceViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "formio", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("hideComponents", ctx.config.parents)("readOnly", true);
    } }, directives: [i3.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceViewComponent, [{
        type: Component,
        args: [{
                templateUrl: './view.component.html'
            }]
    }], function () { return [{ type: i1.FormioResourceService }, { type: i2.FormioResourceConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Jlc291cmNlL3NyYy8iLCJzb3VyY2VzIjpbInZpZXcvdmlldy5jb21wb25lbnQudHMiLCJ2aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPMUMsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUNTLE9BQThCLEVBQzlCLE1BQTRCO1FBRDVCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQ2xDLENBQUM7O3NHQUpPLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDUHhDLDRCQU1VOztRQUxSLHVDQUFxQixvQ0FBQSxnQ0FBQSxzQ0FBQSxrQkFBQTs7a0RETVYsMkJBQTJCO2NBSHZDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsdUJBQXVCO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlQ29uZmlnIH0gZnJvbSAnLi4vcmVzb3VyY2UuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IEZvcm1pb1Jlc291cmNlQ29uZmlnXG4gICkge31cbn1cbiIsIjxmb3JtaW9cbiAgW2Zvcm1dPVwic2VydmljZS5mb3JtXCJcbiAgW3N1Ym1pc3Npb25dPVwic2VydmljZS5yZXNvdXJjZVwiXG4gIFtyZWZyZXNoXT1cInNlcnZpY2UucmVmcmVzaFwiXG4gIFtoaWRlQ29tcG9uZW50c109XCJjb25maWcucGFyZW50c1wiXG4gIFtyZWFkT25seV09XCJ0cnVlXCJcbj48L2Zvcm1pbz5cbiJdfQ==