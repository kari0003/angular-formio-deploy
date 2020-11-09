import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "angular-formio";
export class FormManagerDeleteComponent {
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onDelete() {
        this.service.formio.deleteForm().then(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        }).catch(err => this.alerts.setAlert({ type: 'danger', message: (err.message || err) }));
    }
    onCancel() {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    }
}
FormManagerDeleteComponent.ɵfac = function FormManagerDeleteComponent_Factory(t) { return new (t || FormManagerDeleteComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAlerts)); };
FormManagerDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerDeleteComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [[3, "alerts"], [1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function FormManagerDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "formio-alerts", 0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2, "Are you sure you wish to delete this form?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function FormManagerDeleteComponent_Template_button_click_4_listener() { return ctx.onDelete(); });
        i0.ɵɵtext(5, "Yes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function FormManagerDeleteComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        i0.ɵɵtext(7, "No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("alerts", ctx.alerts);
    } }, directives: [i3.FormioAlertsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerDeleteComponent, [{
        type: Component,
        args: [{
                templateUrl: './delete.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormioAlerts }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vbWFuYWdlci9zcmMvIiwic291cmNlcyI6WyJkZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsImRlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRMUMsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUNTLE9BQTJCLEVBQzNCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUFvQjtRQUhwQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUMxQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O29HQWhCVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1J2QyxtQ0FBaUQ7UUFDakQsMEJBQUk7UUFBQSwwREFBMEM7UUFBQSxpQkFBSztRQUNuRCw4QkFDRTtRQUFBLGlDQUE4RjtRQUF4RSx1R0FBUyxjQUFVLElBQUM7UUFBb0QsbUJBQUc7UUFBQSxpQkFBUztRQUMxRyxpQ0FBbUU7UUFBN0MsdUdBQVMsY0FBVSxJQUFDO1FBQXlCLGtCQUFFO1FBQUEsaUJBQVM7UUFDaEYsaUJBQU07O1FBTFMsbUNBQWlCOztrRERRbkIsMEJBQTBCO2NBSHRDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUseUJBQXlCO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi9mb3JtLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1pb0FsZXJ0cyB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxldGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1NYW5hZ2VyRGVsZXRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1NYW5hZ2VyU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBGb3JtaW9BbGVydHNcbiAgKSB7fVxuXG4gIG9uRGVsZXRlKCkge1xuICAgIHRoaXMuc2VydmljZS5mb3JtaW8uZGVsZXRlRm9ybSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiB0aGlzLmFsZXJ0cy5zZXRBbGVydCh7dHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IChlcnIubWVzc2FnZSB8fCBlcnIpfSkpO1xuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8nLCAndmlldyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG4gIH1cbn1cbiIsIjxmb3JtaW8tYWxlcnRzIFthbGVydHNdPVwiYWxlcnRzXCI+PC9mb3JtaW8tYWxlcnRzPlxuPGgzPkFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyBmb3JtPzwvaDM+XG48ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXJcIj5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCI+WWVzPC9idXR0b24+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5ObzwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=