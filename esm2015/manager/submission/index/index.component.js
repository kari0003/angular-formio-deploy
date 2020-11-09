import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "angular-formio/grid";
export class SubmissionIndexComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    onSelect(row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    }
}
SubmissionIndexComponent.ɵfac = function SubmissionIndexComponent_Factory(t) { return new (t || SubmissionIndexComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); };
SubmissionIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionIndexComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "formio", "rowSelect"]], template: function SubmissionIndexComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "formio-grid", 0);
        i0.ɵɵlistener("rowSelect", function SubmissionIndexComponent_Template_formio_grid_rowSelect_0_listener($event) { return ctx.onSelect($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formio", ctx.service.formio);
    } }, directives: [i3.FormioGridComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionIndexComponent, [{
        type: Component,
        args: [{
                templateUrl: './index.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9tYW5hZ2VyL3NyYy8iLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24vaW5kZXgvaW5kZXguY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi9pbmRleC9pbmRleC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU8xQyxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ1MsT0FBMkIsRUFDM0IsS0FBcUIsRUFDckIsTUFBYztRQUZkLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVKLFFBQVEsQ0FBQyxHQUFRO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dHQVRVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDUHJDLHNDQUFvRjtRQUE3Qyx3SEFBYSxvQkFBZ0IsSUFBQztRQUFDLGlCQUFjOztRQUF2RSwyQ0FBeUI7O2tERE96Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFdBQVcsRUFBRSx3QkFBd0I7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybS1tYW5hZ2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2luZGV4LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdWJtaXNzaW9uSW5kZXhDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybU1hbmFnZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBvblNlbGVjdChyb3c6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3cuX2lkLCAndmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG59XG4iLCI8Zm9ybWlvLWdyaWQgW2Zvcm1pb109XCJzZXJ2aWNlLmZvcm1pb1wiIChyb3dTZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiPjwvZm9ybWlvLWdyaWQ+XG4iXX0=