import { Component, ViewEncapsulation } from '@angular/core';
import { GridFooterComponent } from '../GridFooterComponent';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/pagination";
import * as i3 from "@angular/forms";
function SubmissionGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead", 3);
    i0.ɵɵelementContainer(1, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SubmissionGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tfoot", 3);
    i0.ɵɵelementContainer(1, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SubmissionGridFooterComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubmissionGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
    i0.ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
} if (rf & 2) {
    const position_r4 = ctx.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
} }
function SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
} }
function SubmissionGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵelementStart(3, "span", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "pagination", 10);
    i0.ɵɵlistener("ngModelChange", function SubmissionGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function SubmissionGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.actionAllowed("submissionCreate") && ctx_r7.createText);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
} }
function SubmissionGridFooterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SubmissionGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.header);
} }
export class SubmissionGridFooterComponent extends GridFooterComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        if (!this.size) {
            this.size = 7;
        }
    }
}
SubmissionGridFooterComponent.ɵfac = function SubmissionGridFooterComponent_Factory(t) { return new (t || SubmissionGridFooterComponent)(); };
SubmissionGridFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionGridFooterComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function SubmissionGridFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SubmissionGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, SubmissionGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.PaginationComponent, i3.NgControlStatus, i3.NgModel], styles: ["tfoot.formio-grid-footer td{padding:.3rem}tfoot.formio-grid-footer .page-num{font-size:1.4em}tfoot.formio-grid-footer ul.pagination{margin-bottom:0;margin-top:5px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionGridFooterComponent, [{
        type: Component,
        args: [{
                templateUrl: './SubmissionGridFooter.component.html',
                styleUrls: ['../grid.footer.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWlzc2lvbkdyaWRGb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9ncmlkL3NyYy8iLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24vU3VibWlzc2lvbkdyaWRGb290ZXIuY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi9TdWJtaXNzaW9uR3JpZEZvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUNBM0QsZ0NBQ0U7SUFBQSwyQkFBd0U7SUFDMUUsaUJBQVE7Ozs7SUFEUSxlQUEwQztJQUExQyxzQ0FBMEM7OztJQUUxRCxnQ0FDRTtJQUFBLDJCQUF3RTtJQUMxRSxpQkFBUTs7OztJQURRLGVBQTBDO0lBQTFDLHNDQUEwQzs7O0lBSjFELGdHQUNFO0lBRUYsZ0dBQ0U7Ozs7SUFKZ0MsaUVBQXdDO0lBR3hDLGVBQTJDO0lBQTNDLG9FQUEyQzs7OztJQVF6RSxrQ0FBK0k7SUFBbEMsa01BQVMsdUJBQWdCLE1BQU0sQ0FBQyxJQUFDO0lBQUMsd0JBQW1EO0lBQUMsWUFBZ0I7SUFBQSxpQkFBUzs7O0lBQXpCLGVBQWdCO0lBQWhCLGlEQUFnQjs7OztJQURyTiw2QkFDRTtJQUFBLHVHQUErSTtJQUMvSSwrQkFBa0Q7SUFBQSwrQkFBdUI7SUFBQSxZQUEwQztJQUFBLGlCQUFPO0lBQUMsWUFBd0I7SUFBQSxpQkFBTztJQUMxSixzQ0FBOE07SUFBNUksa1BBQXVCLG1NQUFnQixnQ0FBd0IsSUFBeEM7SUFBd0csaUJBQWE7SUFDaE4saUJBQUs7OztJQUpjLGtEQUE2QjtJQUN0QyxlQUF1RDtJQUF2RCxvRkFBdUQ7SUFDVSxlQUEwQztJQUExQyxpRkFBMEM7SUFBUSxlQUF3QjtJQUF4Qix5REFBd0I7SUFDdkksZUFBeUI7SUFBekIsOENBQXlCLG1DQUFBLDZCQUFBLHdCQUFBOzs7SUFKekMsMEJBQ0U7SUFBQSwwRkFDRTtJQUlKLGlCQUFLOzs7SUFMQyxlQUFjO0lBQWQsb0NBQWM7O0FESHRCLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxtQkFBbUI7SUFFcEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7MEdBVlUsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNSMUMsK0hBQ0U7UUFRRiwrSEFDRTs7a0RERlcsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmlkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vR3JpZEZvb3RlckNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vU3VibWlzc2lvbkdyaWRGb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vZ3JpZC5mb290ZXIuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN1Ym1pc3Npb25HcmlkRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgR3JpZEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSA3O1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNmb290ZXIgbGV0LXBvc2l0aW9uPVwicG9zaXRpb25cIj5cbiAgPHRoZWFkIGNsYXNzPVwiZm9ybWlvLWdyaWQtZm9vdGVyXCIgKm5nSWY9XCJwb3NpdGlvbiA9PT0gZm9vdGVyUG9zaXRpb25zLnRvcFwiPlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGVmYXVsdEZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDwvdGhlYWQ+XG4gIDx0Zm9vdCBjbGFzcz1cImZvcm1pby1ncmlkLWZvb3RlclwiICpuZ0lmPVwicG9zaXRpb24gPT09IGZvb3RlclBvc2l0aW9ucy5ib3R0b21cIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRlZmF1bHRGb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L3Rmb290PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0Rm9vdGVyVGVtcGxhdGU+XG4gIDx0cj5cbiAgICA8dGQgKm5nSWY9XCJoZWFkZXJcIiBbY29sU3Bhbl09XCJoZWFkZXIubnVtSGVhZGVyc1wiPlxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImFjdGlvbkFsbG93ZWQoJ3N1Ym1pc3Npb25DcmVhdGUnKSAmJiBjcmVhdGVUZXh0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIiAoY2xpY2spPVwiY3JlYXRlSXRlbS5lbWl0KCdmb3JtJylcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1cyBmYSBmYS1wbHVzXCI+PC9pPiB7eyBjcmVhdGVUZXh0IH19PC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzcz1cInB1bGwtcmlnaHQgZmxvYXQtcmlnaHQgaXRlbS1jb3VudGVyXCI+PHNwYW4gY2xhc3M9XCJwYWdlLW51bVwiPnt7IGJvZHkuZmlyc3RJdGVtIH19IC0ge3sgYm9keS5sYXN0SXRlbSB9fTwvc3Bhbj4gLyB7eyBib2R5LnRvdGFsIH19IHRvdGFsPC9zcGFuPlxuICAgICAgPHBhZ2luYXRpb24gW3RvdGFsSXRlbXNdPVwiYm9keS50b3RhbFwiIFtpdGVtc1BlclBhZ2VdPVwiYm9keS5saW1pdFwiIFsobmdNb2RlbCldPVwiYm9keS5za2lwXCIgKHBhZ2VDaGFuZ2VkKT1cInBhZ2VDaGFuZ2VkLmVtaXQoJGV2ZW50KVwiIFttYXhTaXplXT1cInNpemVcIiBjbGFzcz1cImp1c3RpZnktY29udGVudC1jZW50ZXIgcGFnaW5hdGlvbi1zbVwiPjwvcGFnaW5hdGlvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==