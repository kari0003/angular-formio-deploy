import { Output, EventEmitter, ViewChild, TemplateRef, Input, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class GridHeaderComponent {
    constructor() {
        this.headers = [];
        this.sort = new EventEmitter();
    }
    get numHeaders() {
        return this.headers.length;
    }
    load(formio, query, columns) {
        return Promise.resolve([]);
    }
}
GridHeaderComponent.ɵfac = function GridHeaderComponent_Factory(t) { return new (t || GridHeaderComponent)(); };
GridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridHeaderComponent, selectors: [["ng-component"]], viewQuery: function GridHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { actionAllowed: "actionAllowed" }, outputs: { sort: "sort" }, decls: 0, vars: 0, template: function GridHeaderComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridHeaderComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return []; }, { actionAllowed: [{
            type: Input
        }], sort: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZEhlYWRlckNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vZ3JpZC9zcmMvIiwic291cmNlcyI6WyJHcmlkSGVhZGVyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPL0YsTUFBTSxPQUFnQixtQkFBbUI7SUFLdkM7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksQ0FBQyxNQUE0QixFQUFFLEtBQVcsRUFBRSxPQUFvQjtRQUNsRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7c0ZBaEJtQixtQkFBbUI7d0RBQW5CLG1CQUFtQjs2QkFHNUIsV0FBVzs7Ozs7a0RBSEYsbUJBQW1CO2NBSHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsRUFBRTthQUNiO3NDQUVVLGFBQWE7a0JBQXJCLEtBQUs7WUFDSSxJQUFJO2tCQUFiLE1BQU07WUFDaUMsUUFBUTtrQkFBL0MsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIElucHV0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybWlvUHJvbWlzZVNlcnZpY2V9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCB7R3JpZEhlYWRlcn0gZnJvbSAnLi90eXBlcy9ncmlkLWhlYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZEhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFjdGlvbkFsbG93ZWQ6IGFueTtcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxHcmlkSGVhZGVyPjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwdWJsaWMgaGVhZGVyczogQXJyYXk8R3JpZEhlYWRlcj47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xuICAgIHRoaXMuc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIGdldCBudW1IZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRlcnMubGVuZ3RoO1xuICB9XG5cbiAgbG9hZChmb3JtaW86IEZvcm1pb1Byb21pc2VTZXJ2aWNlLCBxdWVyeT86IGFueSwgY29sdW1ucz86IEFycmF5PGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICB9XG59XG4iXX0=