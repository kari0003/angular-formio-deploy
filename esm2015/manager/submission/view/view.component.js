import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../form-manager.service";
import * as i2 from "angular-formio";
export class SubmissionViewComponent {
    constructor(service) {
        this.service = service;
    }
}
SubmissionViewComponent.ɵfac = function SubmissionViewComponent_Factory(t) { return new (t || SubmissionViewComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService)); };
SubmissionViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionViewComponent, selectors: [["ng-component"]], decls: 1, vars: 3, consts: [[3, "renderer", "src", "readOnly", "formLoad", "submissionLoad"]], template: function SubmissionViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "formio", 0);
        i0.ɵɵlistener("formLoad", function SubmissionViewComponent_Template_formio_formLoad_0_listener($event) { return ctx.service.setForm($event); })("submissionLoad", function SubmissionViewComponent_Template_formio_submissionLoad_0_listener($event) { return ctx.service.submissionLoaded($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("renderer", ctx.service.config.renderer)("src", ctx.service.formio.submissionUrl)("readOnly", true);
    } }, directives: [i2.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionViewComponent, [{
        type: Component,
        args: [{
                templateUrl: './view.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsic3VibWlzc2lvbi92aWV3L3ZpZXcuY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU0xQyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO0lBQUksQ0FBQzs7OEZBRHhDLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDTnBDLGlDQU1VO1FBRlIsZ0hBQVksMkJBQXVCLElBQUMsK0dBQ2xCLG9DQUFnQyxJQURkO1FBRXJDLGlCQUFTOztRQUxSLHNEQUFvQyx5Q0FBQSxrQkFBQTs7a0RES3pCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLHVCQUF1QjthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybS1tYW5hZ2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN1Ym1pc3Npb25WaWV3Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEZvcm1NYW5hZ2VyU2VydmljZSkgeyB9XG59XG4iLCI8Zm9ybWlvXG4gIFtyZW5kZXJlcl09XCJzZXJ2aWNlLmNvbmZpZy5yZW5kZXJlclwiXG4gIFtzcmNdPVwic2VydmljZS5mb3JtaW8uc3VibWlzc2lvblVybFwiXG4gIFtyZWFkT25seV09XCJ0cnVlXCJcbiAgKGZvcm1Mb2FkKT1cInNlcnZpY2Uuc2V0Rm9ybSgkZXZlbnQpXCJcbiAgKHN1Ym1pc3Npb25Mb2FkKT1cInNlcnZpY2Uuc3VibWlzc2lvbkxvYWRlZCgkZXZlbnQpXCJcbj48L2Zvcm1pbz5cbiJdfQ==