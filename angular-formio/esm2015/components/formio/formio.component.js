import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { Formio, Form } from 'formiojs';
import { FormioBaseComponent } from '../../FormioBaseComponent';
import * as i0 from "@angular/core";
import * as i1 from "../../formio.config";
import * as i2 from "../../custom-component/custom-tags.service";
import * as i3 from "@angular/common";
import * as i4 from "../loader/formio.loader.component";
import * as i5 from "../alerts/formio.alerts.component";
function FormioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "formio-loader", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("isLoading", ctx_r0.isLoading);
} }
function FormioComponent_formio_alerts_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "formio-alerts", 5);
    i0.ɵɵlistener("focusComponent", function FormioComponent_formio_alerts_2_Template_formio_alerts_focusComponent_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.focusOnComponet($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("alerts", ctx_r1.alerts);
} }
function FormioComponent_formio_alerts_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "formio-alerts", 5);
    i0.ɵɵlistener("focusComponent", function FormioComponent_formio_alerts_5_Template_formio_alerts_focusComponent_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.focusOnComponet($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("alerts", ctx_r3.alerts);
} }
/* tslint:disable */
/* tslint:enable */
export class FormioComponent extends FormioBaseComponent {
    constructor(ngZone, config, customTags) {
        super(ngZone, config, customTags);
        this.ngZone = ngZone;
        this.config = config;
        this.customTags = customTags;
        if (this.config) {
            Formio.setBaseUrl(this.config.apiUrl);
            Formio.setProjectUrl(this.config.appUrl);
        }
        else {
            console.warn('You must provide an AppConfig within your application!');
        }
    }
    getRenderer() {
        return this.renderer || Form;
    }
}
FormioComponent.ɵfac = function FormioComponent_Factory(t) { return new (t || FormioComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.FormioAppConfig, 8), i0.ɵɵdirectiveInject(i2.CustomTagsService, 8)); };
FormioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioComponent, selectors: [["formio"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 3, consts: [["style", "position:relative;height:200px", 4, "ngIf"], [3, "alerts", "focusComponent", 4, "ngIf"], ["formio", ""], [2, "position", "relative", "height", "200px"], [3, "isLoading"], [3, "alerts", "focusComponent"]], template: function FormioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, FormioComponent_div_1_Template, 2, 1, "div", 0);
        i0.ɵɵtemplate(2, FormioComponent_formio_alerts_2_Template, 1, 1, "formio-alerts", 1);
        i0.ɵɵelement(3, "div", null, 2);
        i0.ɵɵtemplate(5, FormioComponent_formio_alerts_5_Template, 1, 1, "formio-alerts", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.top || ctx.options.alertsPosition === ctx.AlertsPosition.both);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.bottom || ctx.options.alertsPosition === ctx.AlertsPosition.both);
    } }, directives: [i3.NgIf, i4.FormioLoaderComponent, i5.FormioAlertsComponent], styles: ["@import \"/node_modules/formiojs/dist/formio.form.min.css\";.checkbox label,.radio label{min-height:21px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioComponent, [{
        type: Component,
        args: [{
                selector: 'formio',
                templateUrl: './formio.component.html',
                styleUrls: ['./formio.component.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i1.FormioAppConfig, decorators: [{
                type: Optional
            }] }, { type: i2.CustomTagsService, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb3JtaW8vZm9ybWlvLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvZm9ybWlvL2Zvcm1pby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0lDRjlELDhCQUNFO0lBQUEsbUNBQXVEO0lBQ3pELGlCQUFNOzs7SUFEVyxlQUF1QjtJQUF2Qiw0Q0FBdUI7Ozs7SUFFeEMsd0NBQThNO0lBQTdFLHVPQUEwQztJQUFtQixpQkFBZ0I7OztJQUFsQyxzQ0FBaUI7Ozs7SUFFN0wsd0NBQWlOO0lBQTdFLHVPQUEwQztJQUFtQixpQkFBZ0I7OztJQUFsQyxzQ0FBaUI7O0FEQWxNLG9CQUFvQjtBQU9wQixtQkFBbUI7QUFDbkIsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1CO0lBQ3RELFlBQ1MsTUFBYyxFQUNGLE1BQXVCLEVBQ3ZCLFVBQThCO1FBRWpELEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDRixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUdqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQzs7OEVBakJVLGVBQWU7b0RBQWYsZUFBZTtRQ2Q1QiwyQkFDRTtRQUFBLGdFQUNFO1FBRUYsb0ZBQThMO1FBQzlMLCtCQUFtQjtRQUNuQixvRkFBaU07UUFDbk0saUJBQU07O1FBTkMsZUFBaUI7UUFBakIsb0NBQWlCO1FBR1AsZUFBaUg7UUFBakgsc0lBQWlIO1FBRWpILGVBQW9IO1FBQXBILHlJQUFvSDs7a0REUXhILGVBQWU7Y0FQM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQUtJLFFBQVE7O3NCQUNSLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1pb0FwcENvbmZpZyB9IGZyb20gJy4uLy4uL2Zvcm1pby5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWlvLCBGb3JtIH0gZnJvbSAnZm9ybWlvanMnO1xuaW1wb3J0IHsgRm9ybWlvQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0Zvcm1pb0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tVGFnc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXN0b20tY29tcG9uZW50L2N1c3RvbS10YWdzLnNlcnZpY2UnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm1pby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm1pby5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjbGFzcyBGb3JtaW9Db21wb25lbnQgZXh0ZW5kcyBGb3JtaW9CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNvbmZpZzogRm9ybWlvQXBwQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjdXN0b21UYWdzPzogQ3VzdG9tVGFnc1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKG5nWm9uZSwgY29uZmlnLCBjdXN0b21UYWdzKTtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIEZvcm1pby5zZXRCYXNlVXJsKHRoaXMuY29uZmlnLmFwaVVybCk7XG4gICAgICBGb3JtaW8uc2V0UHJvamVjdFVybCh0aGlzLmNvbmZpZy5hcHBVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHByb3ZpZGUgYW4gQXBwQ29uZmlnIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9uIScpO1xuICAgIH1cbiAgfVxuXG4gIGdldFJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyIHx8IEZvcm07XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxkaXYgKm5nSWY9XCJpc0xvYWRpbmdcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoyMDBweFwiPlxuICAgIDxmb3JtaW8tbG9hZGVyIFtpc0xvYWRpbmddPVwiaXNMb2FkaW5nXCI+PC9mb3JtaW8tbG9hZGVyPlxuICA8L2Rpdj5cbiAgPGZvcm1pby1hbGVydHMgKm5nSWY9XCJ0aGlzLm9wdGlvbnMuYWxlcnRzUG9zaXRpb24gPT09IEFsZXJ0c1Bvc2l0aW9uLnRvcCB8fCB0aGlzLm9wdGlvbnMuYWxlcnRzUG9zaXRpb24gPT09IEFsZXJ0c1Bvc2l0aW9uLmJvdGhcIiAoZm9jdXNDb21wb25lbnQpPVwiZm9jdXNPbkNvbXBvbmV0KCRldmVudClcIiBbYWxlcnRzXT1cImFsZXJ0c1wiPjwvZm9ybWlvLWFsZXJ0cz5cbiAgPGRpdiAjZm9ybWlvPjwvZGl2PlxuICA8Zm9ybWlvLWFsZXJ0cyAqbmdJZj1cInRoaXMub3B0aW9ucy5hbGVydHNQb3NpdGlvbiA9PT0gQWxlcnRzUG9zaXRpb24uYm90dG9tIHx8IHRoaXMub3B0aW9ucy5hbGVydHNQb3NpdGlvbiA9PT0gQWxlcnRzUG9zaXRpb24uYm90aFwiIChmb2N1c0NvbXBvbmVudCk9XCJmb2N1c09uQ29tcG9uZXQoJGV2ZW50KVwiIFthbGVydHNdPVwiYWxlcnRzXCI+PC9mb3JtaW8tYWxlcnRzPlxuPC9kaXY+XG4iXX0=