import { Component } from '@angular/core';
import { get } from 'lodash';
import { GridBodyComponent } from '../GridBodyComponent';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 3);
} if (rf & 2) {
    const rowHeader_r4 = ctx.$implicit;
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r3.view(row_r2, rowHeader_r4), i0.ɵɵsanitizeHtml);
} }
function SubmissionGridBodyComponent_ng_template_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 1);
    i0.ɵɵlistener("click", function SubmissionGridBodyComponent_ng_template_0_tr_1_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const row_r2 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onRowSelect($event, row_r2); });
    i0.ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template, 1, 1, "td", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.header.headers);
} }
function SubmissionGridBodyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_Template, 2, 1, "tr", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.rows);
} }
export class SubmissionGridBodyComponent extends GridBodyComponent {
    load(formio, query) {
        query = query || {};
        return formio.loadSubmissions({ params: query })
            .then((submissions) => this.setRows(query, submissions));
    }
    /**
     * Render the cell data.
     *
     * @param submission
     * @param header
     * @return any
     */
    view(submission, header) {
        const cellValue = get(submission, header.key);
        if (header.renderCell) {
            return header.renderCell(cellValue, header.component);
        }
        else {
            if (header.component) {
                if (header.component.getView) {
                    return header.component.getView(cellValue);
                }
                return header.component.asString(cellValue);
            }
            else {
                return cellValue.toString();
            }
        }
    }
}
SubmissionGridBodyComponent.ɵfac = function SubmissionGridBodyComponent_Factory(t) { return ɵSubmissionGridBodyComponent_BaseFactory(t || SubmissionGridBodyComponent); };
SubmissionGridBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionGridBodyComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function SubmissionGridBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SubmissionGridBodyComponent_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [i1.NgForOf], encapsulation: 2 });
const ɵSubmissionGridBodyComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(SubmissionGridBodyComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionGridBodyComponent, [{
        type: Component,
        args: [{
                templateUrl: './SubmissionGridBody.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWlzc2lvbkdyaWRCb2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vZ3JpZC9zcmMvIiwic291cmNlcyI6WyJzdWJtaXNzaW9uL1N1Ym1pc3Npb25HcmlkQm9keS5jb21wb25lbnQudHMiLCJzdWJtaXNzaW9uL1N1Ym1pc3Npb25HcmlkQm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBUSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7SUNDbkQsd0JBQXFGOzs7OztJQUF4QyxnRkFBa0M7Ozs7SUFEakYsNkJBQ0U7SUFEMkIsNFBBQWtDO0lBQzdELDZGQUFnRjtJQUNsRixpQkFBSzs7O0lBREMsZUFBd0M7SUFBeEMsK0NBQXdDOzs7SUFGaEQsNkJBQ0U7SUFBQSx3RkFDRTtJQUVKLGlCQUFROzs7SUFIRixlQUF3QjtJQUF4QixxQ0FBd0I7O0FET2hDLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxpQkFBaUI7SUFDaEUsSUFBSSxDQUFDLE1BQTRCLEVBQUUsS0FBVztRQUM1QyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDN0MsSUFBSSxDQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxDQUFDLFVBQTRCLEVBQUUsTUFBa0I7UUFDbkQsTUFBTSxTQUFTLEdBQVEsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzVDO2dCQUNELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7OzBJQTVCVSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRQ1R4Qyx5RkFDRTs7d0ZEUVcsMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FIdkMsU0FBUztlQUFDO2dCQUNULFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVhY2gsIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBHcmlkQm9keUNvbXBvbmVudCB9IGZyb20gJy4uL0dyaWRCb2R5Q29tcG9uZW50JztcbmltcG9ydCB7Rm9ybWlvUHJvbWlzZVNlcnZpY2V9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCB7IEdyaWRIZWFkZXIgfSBmcm9tICcuLi90eXBlcy9ncmlkLWhlYWRlcic7XG5pbXBvcnQge0Zvcm1pb1N1Ym1pc3Npb259IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vU3VibWlzc2lvbkdyaWRCb2R5LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdWJtaXNzaW9uR3JpZEJvZHlDb21wb25lbnQgZXh0ZW5kcyBHcmlkQm9keUNvbXBvbmVudCB7XG4gIGxvYWQoZm9ybWlvOiBGb3JtaW9Qcm9taXNlU2VydmljZSwgcXVlcnk/OiBhbnkpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgIHJldHVybiBmb3JtaW8ubG9hZFN1Ym1pc3Npb25zKHsgcGFyYW1zOiBxdWVyeSB9KVxuICAgICAgLnRoZW4oKHN1Ym1pc3Npb25zOiBhbnkpID0+IHRoaXMuc2V0Um93cyhxdWVyeSwgc3VibWlzc2lvbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGNlbGwgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIGhlYWRlclxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgdmlldyhzdWJtaXNzaW9uOiBGb3JtaW9TdWJtaXNzaW9uLCBoZWFkZXI6IEdyaWRIZWFkZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNlbGxWYWx1ZTogYW55ID0gZ2V0KHN1Ym1pc3Npb24sIGhlYWRlci5rZXkpO1xuICAgIGlmIChoZWFkZXIucmVuZGVyQ2VsbCkge1xuICAgICAgcmV0dXJuIGhlYWRlci5yZW5kZXJDZWxsKGNlbGxWYWx1ZSwgaGVhZGVyLmNvbXBvbmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoZWFkZXIuY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChoZWFkZXIuY29tcG9uZW50LmdldFZpZXcpIHtcbiAgICAgICAgICByZXR1cm4gaGVhZGVyLmNvbXBvbmVudC5nZXRWaWV3KGNlbGxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWRlci5jb21wb25lbnQuYXNTdHJpbmcoY2VsbFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjZWxsVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3NcIiAoY2xpY2spPVwib25Sb3dTZWxlY3QoJGV2ZW50LCByb3cpXCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IHJvd0hlYWRlciBvZiBoZWFkZXIuaGVhZGVyc1wiIFtpbm5lckhUTUxdPVwidmlldyhyb3csIHJvd0hlYWRlcilcIj48L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L25nLXRlbXBsYXRlPlxuIl19