import { Component } from '@angular/core';
import { Utils, Components } from 'formiojs';
import { GridHeaderComponent } from '../GridHeaderComponent';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "glyphicon-triangle-top": a0, "glyphicon-triangle-bottom": a1 }; };
function SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const header_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, header_r2.sort === "asc", header_r2.sort === "desc"));
} }
function SubmissionGridHeaderComponent_ng_template_0_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function SubmissionGridHeaderComponent_ng_template_0_th_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r6); const header_r2 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.sort.emit(header_r2); });
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template, 1, 4, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", header_r2.label, "\u00A0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", header_r2.sort);
} }
function SubmissionGridHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵtemplate(2, SubmissionGridHeaderComponent_ng_template_0_th_2_Template, 4, 2, "th", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.headers);
} }
export class SubmissionGridHeaderComponent extends GridHeaderComponent {
    load(formio, query, columns) {
        query = query || {};
        return formio.loadForm({ params: query }).then((form) => {
            this.headers = [];
            this.formComponents = new Map();
            this.setComponents(form.components);
            columns ? columns.forEach(column => {
                this.setHeader(this.getHeaderForColumn(column, this.formComponents.get(column.path)));
            }) : this.setComponentsHeaders(this.formComponents);
            return this.headers;
        });
    }
    setHeader(header) {
        this.headers.push(header);
    }
    getHeaderForColumn(column, component, sort) {
        return {
            label: column.label,
            key: column.path,
            sort: sort,
            component: component ? Components.create(component, null, null, true) : undefined,
            renderCell: column ? column.renderCell : undefined
        };
    }
    getHeaderForComponent(component, path, sort) {
        return {
            label: component.label,
            key: path,
            sort: sort,
            component: component ? Components.create(component, null, null, true) : undefined,
        };
    }
    // Set headers from components in case if columns are not provided
    setComponentsHeaders(components, sort) {
        components.forEach((component, path) => {
            if (component.input &&
                (!component.hasOwnProperty('tableView') || component.tableView)) {
                this.setHeader(this.getHeaderForComponent(component, path, sort));
            }
        });
    }
    // Map components
    setComponents(components) {
        Utils.eachComponent(components, (component, newPath) => {
            this.formComponents.set(`data.${newPath}`, component);
        });
    }
}
SubmissionGridHeaderComponent.ɵfac = function SubmissionGridHeaderComponent_Factory(t) { return ɵSubmissionGridHeaderComponent_BaseFactory(t || SubmissionGridHeaderComponent); };
SubmissionGridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubmissionGridHeaderComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["class", "glyphicon", 3, "ngClass", 4, "ngIf"], [1, "glyphicon", 3, "ngClass"]], template: function SubmissionGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SubmissionGridHeaderComponent_ng_template_0_Template, 3, 1, "ng-template");
    } }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass], encapsulation: 2 });
const ɵSubmissionGridHeaderComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(SubmissionGridHeaderComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubmissionGridHeaderComponent, [{
        type: Component,
        args: [{
                templateUrl: './SubmissionGridHeader.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWlzc2lvbkdyaWRIZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9ncmlkL3NyYy8iLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24vU3VibWlzc2lvbkdyaWRIZWFkZXIuY29tcG9uZW50LnRzIiwic3VibWlzc2lvbi9TdWJtaXNzaW9uR3JpZEhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUEwQixNQUFNLFVBQVUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNHekIsMEJBQTBLOzs7SUFBcEsseUdBQXNIOzs7O0lBRnhKLDBCQUNFO0lBQUEsNEJBQ0U7SUFEQyxvTkFBUywyQkFBaUIsSUFBQztJQUM1QixZQUF3QjtJQUFBLG1HQUFtSztJQUM3TCxpQkFBSTtJQUNOLGlCQUFLOzs7SUFGRCxlQUF3QjtJQUF4QixxREFBd0I7SUFBK0ksZUFBbUI7SUFBbkIscUNBQW1COzs7SUFKbE0sNkJBQ0U7SUFBQSwwQkFDRTtJQUFBLDBGQUNFO0lBSUosaUJBQUs7SUFDUCxpQkFBUTs7O0lBTkEsZUFBOEI7SUFBOUIsd0NBQThCOztBRFF4QyxNQUFNLE9BQU8sNkJBQThCLFNBQVEsbUJBQW1CO0lBS3BFLElBQUksQ0FBQyxNQUE0QixFQUFFLEtBQVcsRUFBRSxPQUEyQjtRQUN6RSxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7WUFDaEUsSUFBSSxD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WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXRpbHMsIENvbXBvbmVudHMsIEV4dGVuZGVkQ29tcG9uZW50U2NoZW1hfSBmcm9tICdmb3JtaW9qcyc7XG5pbXBvcnQge0dyaWRIZWFkZXJDb21wb25lbnR9IGZyb20gJy4uL0dyaWRIZWFkZXJDb21wb25lbnQnO1xuaW1wb3J0IHtGb3JtaW9Qcm9taXNlU2VydmljZX0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuaW1wb3J0IHtDb21wb25lbnRJbnN0YW5jZSwgRm9ybWlvRm9ybX0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tICcuLi90eXBlcy9ncmlkLWNvbHVtbic7XG5pbXBvcnQge0dyaWRIZWFkZXIsIFNvcnRUeXBlfSBmcm9tICcuLi90eXBlcy9ncmlkLWhlYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vU3VibWlzc2lvbkdyaWRIZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgR3JpZEhlYWRlckNvbXBvbmVudCB7XG5cbiAgLy8gTWFwIHN0cnVjdHVyZSB3aGVyZSB0aGUga2V5IGlzIHRoZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgdGhlIGNvbXBvbmVudFxuICBmb3JtQ29tcG9uZW50czogTWFwPHN0cmluZywgRXh0ZW5kZWRDb21wb25lbnRTY2hlbWE+O1xuXG4gIGxvYWQoZm9ybWlvOiBGb3JtaW9Qcm9taXNlU2VydmljZSwgcXVlcnk/OiBhbnksIGNvbHVtbnM/OiBBcnJheTxHcmlkQ29sdW1uPikge1xuICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XG4gICAgcmV0dXJuIGZvcm1pby5sb2FkRm9ybSh7cGFyYW1zOiBxdWVyeX0pLnRoZW4oKGZvcm06IEZvcm1pb0Zvcm0pID0+IHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IFtdO1xuICAgICAgdGhpcy5mb3JtQ29tcG9uZW50cyA9IG5ldyBNYXA8c3RyaW5nLCBFeHRlbmRlZENvbXBvbmVudFNjaGVtYT4oKTtcbiAgICAgIHRoaXMuc2V0Q29tcG9uZW50cyhmb3JtLmNvbXBvbmVudHMpO1xuICAgICAgY29sdW1ucyA/IGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIHRoaXMuc2V0SGVhZGVyKHRoaXMuZ2V0SGVhZGVyRm9yQ29sdW1uKGNvbHVtbiwgdGhpcy5mb3JtQ29tcG9uZW50cy5nZXQoY29sdW1uLnBhdGgpKSk7XG4gICAgICAgIH0pIDogdGhpcy5zZXRDb21wb25lbnRzSGVhZGVycyh0aGlzLmZvcm1Db21wb25lbnRzKTtcblxuICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycztcbiAgICB9KTtcbiAgfVxuXG4gIHNldEhlYWRlcihoZWFkZXI6IEdyaWRIZWFkZXIpIHtcbiAgICB0aGlzLmhlYWRlcnMucHVzaChoZWFkZXIpO1xuICB9XG5cbiAgZ2V0SGVhZGVyRm9yQ29sdW1uKGNvbHVtbjogR3JpZENvbHVtbiwgY29tcG9uZW50PzogRXh0ZW5kZWRDb21wb25lbnRTY2hlbWEsIHNvcnQ/OiBTb3J0VHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogY29sdW1uLmxhYmVsLFxuICAgICAga2V5OiBjb2x1bW4ucGF0aCxcbiAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCA/IENvbXBvbmVudHMuY3JlYXRlKGNvbXBvbmVudCwgbnVsbCwgbnVsbCwgdHJ1ZSkgYXMgQ29tcG9uZW50SW5zdGFuY2UgOiB1bmRlZmluZWQsXG4gICAgICByZW5kZXJDZWxsOiBjb2x1bW4gPyBjb2x1bW4ucmVuZGVyQ2VsbCA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICBnZXRIZWFkZXJGb3JDb21wb25lbnQoY29tcG9uZW50OiBFeHRlbmRlZENvbXBvbmVudFNjaGVtYSwgcGF0aDogc3RyaW5nLCBzb3J0PzogU29ydFR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IGNvbXBvbmVudC5sYWJlbCxcbiAgICAgIGtleTogcGF0aCxcbiAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCA/IENvbXBvbmVudHMuY3JlYXRlKGNvbXBvbmVudCwgbnVsbCwgbnVsbCwgdHJ1ZSkgYXMgQ29tcG9uZW50SW5zdGFuY2UgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuICAvLyBTZXQgaGVhZGVycyBmcm9tIGNvbXBvbmVudHMgaW4gY2FzZSBpZiBjb2x1bW5zIGFyZSBub3QgcHJvdmlkZWRcbiAgc2V0Q29tcG9uZW50c0hlYWRlcnMoY29tcG9uZW50czogTWFwPHN0cmluZywgRXh0ZW5kZWRDb21wb25lbnRTY2hlbWE+LCBzb3J0PzogU29ydFR5cGUpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCwgcGF0aCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjb21wb25lbnQuaW5wdXQgJiZcbiAgICAgICAgKCFjb21wb25lbnQuaGFzT3duUHJvcGVydHkoJ3RhYmxlVmlldycpIHx8IGNvbXBvbmVudC50YWJsZVZpZXcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRIZWFkZXIodGhpcy5nZXRIZWFkZXJGb3JDb21wb25lbnQoY29tcG9uZW50LCBwYXRoLCBzb3J0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBNYXAgY29tcG9uZW50c1xuICBzZXRDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgICBVdGlscy5lYWNoQ29tcG9uZW50KGNvbXBvbmVudHMsIChjb21wb25lbnQ6IEV4dGVuZGVkQ29tcG9uZW50U2NoZW1hLCBuZXdQYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybUNvbXBvbmVudHMuc2V0KGBkYXRhLiR7bmV3UGF0aH1gLCBjb21wb25lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZGVyIG9mIGhlYWRlcnNcIj5cbiAgICAgICAgPGEgKGNsaWNrKT1cInNvcnQuZW1pdChoZWFkZXIpXCI+XG4gICAgICAgICAge3sgaGVhZGVyLmxhYmVsIH19Jm5ic3A7PHNwYW4gW25nQ2xhc3NdPVwieydnbHlwaGljb24tdHJpYW5nbGUtdG9wJzogKGhlYWRlci5zb3J0ID09PSAnYXNjJyksICdnbHlwaGljb24tdHJpYW5nbGUtYm90dG9tJzogKGhlYWRlci5zb3J0ID09PSAnZGVzYycpfVwiIGNsYXNzPVwiZ2x5cGhpY29uXCIgKm5nSWY9XCJoZWFkZXIuc29ydFwiPjwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==