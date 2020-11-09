import { Component } from '@angular/core';
import { GridHeaderComponent } from '../GridHeaderComponent';
import { SortType } from '../types/grid-header';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "glyphicon-triangle-top fa-caret-up": a0, "glyphicon-triangle-bottom fa-caret-down": a1 }; };
function FormGridHeaderComponent_ng_template_0_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, ctx_r1.header.sort === "asc", ctx_r1.header.sort === "desc"));
} }
function FormGridHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "th");
    i0.ɵɵelementStart(3, "div", 0);
    i0.ɵɵelementStart(4, "div", 1);
    i0.ɵɵelementStart(5, "a", 2);
    i0.ɵɵlistener("click", function FormGridHeaderComponent_ng_template_0_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.sort.emit(ctx_r2.header); });
    i0.ɵɵtext(6);
    i0.ɵɵtemplate(7, FormGridHeaderComponent_ng_template_0_span_7_Template, 1, 4, "span", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 4);
    i0.ɵɵtext(9, " Operations ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.header.label, "\u00A0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.header.sort);
} }
export class FormGridHeaderComponent extends GridHeaderComponent {
    load(formio) {
        this.header = {
            label: 'Title',
            key: 'title',
            sort: SortType.ASC
        };
        this.headers = [this.header];
        return Promise.resolve(this.headers);
    }
    get numHeaders() {
        return 2;
    }
}
FormGridHeaderComponent.ɵfac = function FormGridHeaderComponent_Factory(t) { return ɵFormGridHeaderComponent_BaseFactory(t || FormGridHeaderComponent); };
FormGridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormGridHeaderComponent, selectors: [["form-grid-header"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "row"], [1, "col-sm-8"], [3, "click"], ["class", "glyphicon fa", 3, "ngClass", 4, "ngIf"], [1, "col-sm-4"], [1, "glyphicon", "fa", 3, "ngClass"]], template: function FormGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormGridHeaderComponent_ng_template_0_Template, 10, 2, "ng-template");
    } }, directives: [i1.NgIf, i1.NgClass], encapsulation: 2 });
const ɵFormGridHeaderComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(FormGridHeaderComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormGridHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'form-grid-header',
                templateUrl: './FormGridHeader.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyaWRIZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImZvcm0vRm9ybUdyaWRIZWFkZXIuY29tcG9uZW50LnRzIiwiZm9ybS9Gb3JtR3JpZEhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBYSxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUNLcEIsMEJBQXVNOzs7SUFBak0saUhBQWdKOzs7O0lBTjFMLDZCQUNFO0lBQUEsMEJBQ0U7SUFBQSwwQkFDRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0QkFDRTtJQURDLHVLQUFTLCtCQUFpQixJQUFDO0lBQzVCLFlBQXdCO0lBQUEsd0ZBQWdNO0lBQzFOLGlCQUFJO0lBQ04saUJBQU07SUFDTiw4QkFDRTtJQUFBLDRCQUNGO0lBQUEsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBUTs7O0lBVEksZUFBd0I7SUFBeEIseURBQXdCO0lBQTRLLGVBQW1CO0lBQW5CLHlDQUFtQjs7QURDck8sTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtJQUU5RCxJQUFJLENBQUMsTUFBWTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixLQUFLLEVBQUUsT0FBTztZQUNkLEdBQUcsRUFBRSxPQUFPO1lBQ1osSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHO1NBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OEhBZFUsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNScEMsc0ZBQ0U7O29GRE9XLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsaUNBQWlDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHcmlkSGVhZGVyQ29tcG9uZW50fSBmcm9tICcuLi9HcmlkSGVhZGVyQ29tcG9uZW50JztcbmltcG9ydCB7R3JpZEhlYWRlciwgU29ydFR5cGV9IGZyb20gJy4uL3R5cGVzL2dyaWQtaGVhZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1ncmlkLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9Gb3JtR3JpZEhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyaWRIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBHcmlkSGVhZGVyQ29tcG9uZW50IHtcbiAgcHVibGljIGhlYWRlcjogR3JpZEhlYWRlcjtcbiAgbG9hZChmb3JtaW8/OiBhbnkpIHtcbiAgICB0aGlzLmhlYWRlciA9IHtcbiAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgc29ydDogU29ydFR5cGUuQVNDXG4gICAgfTtcbiAgICB0aGlzLmhlYWRlcnMgPSBbdGhpcy5oZWFkZXJdO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5oZWFkZXJzKTtcbiAgfVxuXG4gIGdldCBudW1IZWFkZXJzKCkge1xuICAgIHJldHVybiAyO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGg+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJzb3J0LmVtaXQoaGVhZGVyKVwiPlxuICAgICAgICAgICAgICB7eyBoZWFkZXIubGFiZWwgfX0mbmJzcDs8c3BhbiBbbmdDbGFzc109XCJ7J2dseXBoaWNvbi10cmlhbmdsZS10b3AgZmEtY2FyZXQtdXAnOiAoaGVhZGVyLnNvcnQgPT09ICdhc2MnKSwgJ2dseXBoaWNvbi10cmlhbmdsZS1ib3R0b20gZmEtY2FyZXQtZG93bic6IChoZWFkZXIuc29ydCA9PT0gJ2Rlc2MnKX1cIiBjbGFzcz1cImdseXBoaWNvbiBmYVwiICpuZ0lmPVwiaGVhZGVyLnNvcnRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICBPcGVyYXRpb25zXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==