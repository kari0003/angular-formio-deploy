import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../resource.service";
import * as i2 from "@angular/router";
export class FormioResourceDeleteComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    onDelete() {
        this.service.remove().then(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        });
    }
    onCancel() {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    }
}
FormioResourceDeleteComponent.ɵfac = function FormioResourceDeleteComponent_Factory(t) { return new (t || FormioResourceDeleteComponent)(i0.ɵɵdirectiveInject(i1.FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); };
FormioResourceDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceDeleteComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function FormioResourceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1, "Are you sure you wish to delete this record?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_3_listener() { return ctx.onDelete(); });
        i0.ɵɵtext(4, "Yes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
        i0.ɵɵtext(6, "No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceDeleteComponent, [{
        type: Component,
        args: [{
                templateUrl: './delete.component.html'
            }]
    }], function () { return [{ type: i1.FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcmVzb3VyY2Uvc3JjLyIsInNvdXJjZXMiOlsiZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQudHMiLCJkZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPMUMsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUNTLE9BQThCLEVBQzlCLEtBQXFCLEVBQ3JCLE1BQWM7UUFGZCxZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OzBHQWZVLDZCQUE2QjtrRUFBN0IsNkJBQTZCO1FDUDFDLDBCQUFJO1FBQUEsNERBQTRDO1FBQUEsaUJBQUs7UUFDckQsOEJBQ0U7UUFBQSxpQ0FBOEY7UUFBeEUsMEdBQVMsY0FBVSxJQUFDO1FBQW9ELG1CQUFHO1FBQUEsaUJBQVM7UUFDMUcsaUNBQWtFO1FBQTVDLDBHQUFTLGNBQVUsSUFBQztRQUF3QixrQkFBRTtRQUFBLGlCQUFTO1FBQy9FLGlCQUFNOztrRERHTyw2QkFBNkI7Y0FIekMsU0FBUztlQUFDO2dCQUNULFdBQVcsRUFBRSx5QkFBeUI7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzb3VyY2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vZGVsZXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3JtaW9SZXNvdXJjZVNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIG9uRGVsZXRlKCkge1xuICAgIHRoaXMuc2VydmljZS5yZW1vdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vJywgJ3ZpZXcnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICB9XG59XG4iLCI8aDM+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIHJlY29yZD88L2gzPlxuPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPlllczwvYnV0dG9uPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5ObzwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=