import { Component, EventEmitter } from '@angular/core';
import { Formio } from 'formiojs';
import * as i0 from "@angular/core";
import * as i1 from "../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "../form-manager.config";
import * as i4 from "angular-formio/auth";
import * as i5 from "@angular/common";
import * as i6 from "angular-formio";
function FormManagerViewComponent_formio_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "formio", 1);
    i0.ɵɵlistener("submit", function FormManagerViewComponent_formio_0_Template_formio_submit_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onSubmit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("renderer", ctx_r0.config.renderer)("renderOptions", ctx_r0.renderOptions)("url", ctx_r0.service.formio.formUrl)("form", ctx_r0.currentForm)("submission", ctx_r0.submission)("success", ctx_r0.onSuccess)("error", ctx_r0.onError);
} }
export class FormManagerViewComponent {
    constructor(service, router, route, config, auth) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.config = config;
        this.auth = auth;
        this.onSuccess = new EventEmitter();
        this.onError = new EventEmitter();
        this.renderOptions = {
            saveDraft: this.config.saveDraft
        };
        this.currentForm = null;
        this.submission = { data: {} };
    }
    ngOnInit() {
        // Reset the formio service to this form only.
        this.service.formio = new Formio(this.service.formio.formUrl);
        this.service.loadForm().then((form) => {
            this.currentForm = form;
        });
    }
    onSubmit(submission) {
        this.submission.data = submission.data;
        this.submission.state = 'complete';
        this.service.formio.saveSubmission(this.submission).then(saved => {
            this.onSuccess.emit();
            this.router.navigate(['../', 'submission', saved._id], { relativeTo: this.route });
        }).catch((err) => this.onError.emit(err));
    }
}
FormManagerViewComponent.ɵfac = function FormManagerViewComponent_Factory(t) { return new (t || FormManagerViewComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormManagerConfig), i0.ɵɵdirectiveInject(i4.FormioAuthService)); };
FormManagerViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerViewComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "renderer", "renderOptions", "url", "form", "submission", "success", "error", "submit", 4, "ngIf"], [3, "renderer", "renderOptions", "url", "form", "submission", "success", "error", "submit"]], template: function FormManagerViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormManagerViewComponent_formio_0_Template, 1, 7, "formio", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.currentForm);
    } }, directives: [i5.NgIf, i6.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerViewComponent, [{
        type: Component,
        args: [{
                templateUrl: './view.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormManagerConfig }, { type: i4.FormioAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsidmlldy92aWV3LmNvbXBvbmVudC50cyIsInZpZXcvdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7O0lDTGxDLGlDQVNVO0lBRFIsMk1BQTJCO0lBQzVCLGlCQUFTOzs7SUFSUixpREFBNEIsdUNBQUEsc0NBQUEsNEJBQUEsaUNBQUEsNkJBQUEseUJBQUE7O0FEUzlCLE1BQU0sT0FBTyx3QkFBd0I7SUFNbkMsWUFDUyxPQUEyQixFQUMzQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBeUIsRUFDekIsSUFBdUI7UUFKdkIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBUHpCLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFReEQsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRO1FBQ04sOENBQThDO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWU7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnR0FuQ1Usd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNWckMsK0VBU0M7O1FBVE8sc0NBQW1COztrRERVZCx3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFdBQVcsRUFBRSx1QkFBdUI7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlckNvbmZpZyB9IGZyb20gJy4uL2Zvcm0tbWFuYWdlci5jb25maWcnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvL2F1dGgnO1xuaW1wb3J0IHsgRm9ybWlvIH0gZnJvbSAnZm9ybWlvanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1NYW5hZ2VyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBzdWJtaXNzaW9uOiBhbnk7XG4gIHB1YmxpYyBjdXJyZW50Rm9ybTogYW55O1xuICBwdWJsaWMgcmVuZGVyT3B0aW9uczogYW55O1xuICBwdWJsaWMgb25TdWNjZXNzOiBFdmVudEVtaXR0ZXI8b2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIG9uRXJyb3I6IEV2ZW50RW1pdHRlcjxvYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybU1hbmFnZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBjb25maWc6IEZvcm1NYW5hZ2VyQ29uZmlnLFxuICAgIHB1YmxpYyBhdXRoOiBGb3JtaW9BdXRoU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlbmRlck9wdGlvbnMgPSB7XG4gICAgICBzYXZlRHJhZnQ6IHRoaXMuY29uZmlnLnNhdmVEcmFmdFxuICAgIH07XG4gICAgdGhpcy5jdXJyZW50Rm9ybSA9IG51bGw7XG4gICAgdGhpcy5zdWJtaXNzaW9uID0ge2RhdGE6IHt9fTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFJlc2V0IHRoZSBmb3JtaW8gc2VydmljZSB0byB0aGlzIGZvcm0gb25seS5cbiAgICB0aGlzLnNlcnZpY2UuZm9ybWlvID0gbmV3IEZvcm1pbyh0aGlzLnNlcnZpY2UuZm9ybWlvLmZvcm1VcmwpO1xuICAgIHRoaXMuc2VydmljZS5sb2FkRm9ybSgpLnRoZW4oKGZvcm0pID0+IHtcbiAgICAgIHRoaXMuY3VycmVudEZvcm0gPSBmb3JtO1xuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoc3VibWlzc2lvbjogYW55KSB7XG4gICAgdGhpcy5zdWJtaXNzaW9uLmRhdGEgPSBzdWJtaXNzaW9uLmRhdGE7XG4gICAgdGhpcy5zdWJtaXNzaW9uLnN0YXRlID0gJ2NvbXBsZXRlJztcbiAgICB0aGlzLnNlcnZpY2UuZm9ybWlvLnNhdmVTdWJtaXNzaW9uKHRoaXMuc3VibWlzc2lvbikudGhlbihzYXZlZCA9PiB7XG4gICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsICdzdWJtaXNzaW9uJywgc2F2ZWQuX2lkXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB0aGlzLm9uRXJyb3IuZW1pdChlcnIpKTtcbiAgfVxufVxuIiwiPGZvcm1pbyAqbmdJZj1cImN1cnJlbnRGb3JtXCJcbiAgW3JlbmRlcmVyXT1cImNvbmZpZy5yZW5kZXJlclwiXG4gIFtyZW5kZXJPcHRpb25zXT1cInJlbmRlck9wdGlvbnNcIlxuICBbdXJsXT1cInNlcnZpY2UuZm9ybWlvLmZvcm1VcmxcIlxuICBbZm9ybV09XCJjdXJyZW50Rm9ybVwiXG4gIFtzdWJtaXNzaW9uXT1cInN1Ym1pc3Npb25cIlxuICBbc3VjY2Vzc109XCJvblN1Y2Nlc3NcIlxuICBbZXJyb3JdPVwib25FcnJvclwiXG4gIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiXG4+PC9mb3JtaW8+XG4iXX0=