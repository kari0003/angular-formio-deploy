import { GridFooterPositions } from './types/grid-footer-positions';
import { Input, Output, ViewChild, TemplateRef, EventEmitter, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class GridFooterComponent {
    constructor() {
        this.footerPositions = GridFooterPositions;
        this.pageChanged = new EventEmitter();
        this.createItem = new EventEmitter();
    }
}
GridFooterComponent.ɵfac = function GridFooterComponent_Factory(t) { return new (t || GridFooterComponent)(); };
GridFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridFooterComponent, selectors: [["ng-component"]], viewQuery: function GridFooterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { header: "header", body: "body", createText: "createText", size: "size", actionAllowed: "actionAllowed" }, outputs: { pageChanged: "pageChanged", createItem: "createItem" }, decls: 0, vars: 0, template: function GridFooterComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridFooterComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return []; }, { header: [{
            type: Input
        }], body: [{
            type: Input
        }], createText: [{
            type: Input
        }], size: [{
            type: Input
        }], actionAllowed: [{
            type: Input
        }], pageChanged: [{
            type: Output
        }], createItem: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZEZvb3RlckNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vZ3JpZC9zcmMvIiwic291cmNlcyI6WyJHcmlkRm9vdGVyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPL0YsTUFBTSxPQUFnQixtQkFBbUI7SUFZdkM7UUFGTyxvQkFBZSxHQUFHLG1CQUFtQixDQUFDO1FBRzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7c0ZBZm1CLG1CQUFtQjt3REFBbkIsbUJBQW1COzZCQVE1QixXQUFXOzs7OztrREFSRixtQkFBbUI7Y0FIeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2I7c0NBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNpQyxRQUFRO2tCQUEvQyxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkRm9vdGVyUG9zaXRpb25zIH0gZnJvbSAnLi90eXBlcy9ncmlkLWZvb3Rlci1wb3NpdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL0dyaWRIZWFkZXJDb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZEJvZHlDb21wb25lbnQgfSBmcm9tICcuL0dyaWRCb2R5Q29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcmlkRm9vdGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaGVhZGVyOiBHcmlkSGVhZGVyQ29tcG9uZW50O1xuICBASW5wdXQoKSBib2R5OiBHcmlkQm9keUNvbXBvbmVudDtcbiAgQElucHV0KCkgY3JlYXRlVGV4dDogU3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFjdGlvbkFsbG93ZWQ6IGFueTtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIGNyZWF0ZUl0ZW06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7c3RhdGljOiB0cnVlfSkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHVibGljIGZvb3RlclBvc2l0aW9ucyA9IEdyaWRGb290ZXJQb3NpdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cbn1cbiJdfQ==