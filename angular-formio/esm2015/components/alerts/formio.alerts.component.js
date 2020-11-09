import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormioAlerts } from './formio.alerts';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./parse-html-content.pipe";
function FormioAlertsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function FormioAlertsComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.getComponent($event, alert_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "parseHtmlContent");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("alert alert-", alert_r1.type, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, alert_r1.message), "\n");
} }
export class FormioAlertsComponent {
    constructor() {
        this.focusComponent = new EventEmitter();
    }
    ngOnInit() {
        if (!this.alerts) {
            this.alerts = new FormioAlerts();
        }
    }
    getComponent(event, alert) {
        this.focusComponent.emit(alert.component.key);
    }
}
FormioAlertsComponent.ɵfac = function FormioAlertsComponent_Factory(t) { return new (t || FormioAlertsComponent)(); };
FormioAlertsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAlertsComponent, selectors: [["formio-alerts"]], inputs: { alerts: "alerts" }, outputs: { focusComponent: "focusComponent" }, decls: 1, vars: 1, consts: [["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"]], template: function FormioAlertsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormioAlertsComponent_div_0_Template, 3, 6, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.alerts.alerts);
    } }, directives: [i1.NgForOf], pipes: [i2.ParseHtmlContentPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioAlertsComponent, [{
        type: Component,
        args: [{
                selector: 'formio-alerts',
                templateUrl: './formio.alerts.component.html'
            }]
    }], null, { alerts: [{
            type: Input
        }], focusComponent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLmFsZXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxlcnRzL2Zvcm1pby5hbGVydHMuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hbGVydHMvZm9ybWlvLmFsZXJ0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDRC9DLDhCQUNFO0lBRHlGLDhPQUFxQztJQUM5SCxZQUNGOztJQUFBLGlCQUFNOzs7SUFGbUMsNERBQW9DO0lBQzNFLGVBQ0Y7SUFERSx3RUFDRjs7QURLQSxNQUFNLE9BQU8scUJBQXFCO0lBSmxDO1FBTVksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBU3ZEO0lBUkMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFDRCxZQUFZLENBQUUsS0FBSyxFQUFFLEtBQUs7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzswRkFWVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1BsQyxzRUFDRTs7UUFERywyQ0FBbUM7O2tERE8zQixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDO2dCQUVVLE1BQU07a0JBQWQsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWlvQWxlcnRzIH0gZnJvbSAnLi9mb3JtaW8uYWxlcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWlvLWFsZXJ0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtaW8uYWxlcnRzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9BbGVydHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhbGVydHM6IEZvcm1pb0FsZXJ0cztcbiAgQE91dHB1dCgpIGZvY3VzQ29tcG9uZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5hbGVydHMpIHtcbiAgICAgIHRoaXMuYWxlcnRzID0gbmV3IEZvcm1pb0FsZXJ0cygpO1xuICAgIH1cbiAgfVxuICBnZXRDb21wb25lbnQgKGV2ZW50LCBhbGVydCkge1xuICAgIHRoaXMuZm9jdXNDb21wb25lbnQuZW1pdChhbGVydC5jb21wb25lbnQua2V5KTtcbiAgfVxufVxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzLmFsZXJ0c1wiIGNsYXNzPVwiYWxlcnQgYWxlcnQte3sgYWxlcnQudHlwZSB9fVwiIHJvbGU9XCJhbGVydFwiIChjbGljayk9XCJnZXRDb21wb25lbnQoJGV2ZW50LCBhbGVydClcIj5cbiAge3thbGVydC5tZXNzYWdlIHwgcGFyc2VIdG1sQ29udGVudH19XG48L2Rpdj5cbiJdfQ==