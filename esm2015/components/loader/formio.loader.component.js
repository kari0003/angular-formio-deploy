import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FormioLoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵelementEnd();
} }
export class FormioLoaderComponent {
}
FormioLoaderComponent.ɵfac = function FormioLoaderComponent_Factory(t) { return new (t || FormioLoaderComponent)(); };
FormioLoaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioLoaderComponent, selectors: [["formio-loader"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "formio-loader-wrapper", 4, "ngIf"], [1, "formio-loader-wrapper"], [1, "formio-loader"]], template: function FormioLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormioLoaderComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isLoading);
    } }, directives: [i1.NgIf], styles: [".formio-loader-wrapper[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1000}.formio-loader[_ngcontent-%COMP%]{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border:6px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;display:inline-block;height:60px;left:50%;margin-left:-30px;margin-top:-30px;position:absolute;top:50%;width:60px;z-index:10000}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioLoaderComponent, [{
        type: Component,
        args: [{
                selector: 'formio-loader',
                styleUrls: ['./formio.loader.component.scss'],
                templateUrl: './formio.loader.component.html'
            }]
    }], null, { isLoading: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLmxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGVyL2Zvcm1pby5sb2FkZXIuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9sb2FkZXIvZm9ybWlvLmxvYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0EvQyw4QkFDRTtJQUFBLHlCQUFpQztJQUNuQyxpQkFBTTs7QURLTixNQUFNLE9BQU8scUJBQXFCOzswRkFBckIscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNQbEMsc0VBQ0U7O1FBRGlDLG9DQUFpQjs7a0RET3ZDLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDO2dCQUVVLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtaW8tbG9hZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybWlvLmxvYWRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybWlvLmxvYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvTG9hZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuIiwiPGRpdiBjbGFzcz1cImZvcm1pby1sb2FkZXItd3JhcHBlclwiICpuZ0lmPVwiaXNMb2FkaW5nXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtaW8tbG9hZGVyXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==