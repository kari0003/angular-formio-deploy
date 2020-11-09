import { Component, EventEmitter, ViewChild } from '@angular/core';
import { FormioGridComponent } from 'angular-formio/grid';
import { debounce } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "../form-manager.config";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "angular-formio/grid";
function FormManagerIndexComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵlistener("click", function FormManagerIndexComponent_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.clearSearch(); });
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵelementEnd();
} }
function FormManagerIndexComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "input", 3);
    i0.ɵɵlistener("keyup", function FormManagerIndexComponent_div_0_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSearch(); })("ngModelChange", function FormManagerIndexComponent_div_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.search = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, FormManagerIndexComponent_div_0_span_2_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.search && ctx_r0.search !== "");
} }
function FormManagerIndexComponent_formio_grid_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "formio-grid", 7);
    i0.ɵɵlistener("rowAction", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_rowAction_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onAction($event); })("rowSelect", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_rowSelect_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onSelect($event); })("createItem", function FormManagerIndexComponent_formio_grid_1_Template_formio_grid_createItem_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onCreateItem(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formio", ctx_r1.service.formio)("gridType", "form")("query", ctx_r1.gridQuery)("refresh", ctx_r1.refreshGrid)("isActionAllowed", ctx_r1.service.actionAllowed);
} }
export class FormManagerIndexComponent {
    constructor(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.search = '';
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        this.refreshGrid = new EventEmitter();
        this.onSearch = debounce(this.onSearch, 300);
    }
    loadGrid() {
        this.search = localStorage.getItem('searchInput');
        this.gridQuery = JSON.parse(localStorage.getItem('query')) || this.gridQuery;
        const currentPage = +localStorage.getItem('currentPage') || 0;
        this.formGrid
            .refreshGrid(this.gridQuery)
            .then(() => this.formGrid.setPage(currentPage - 1));
    }
    ngOnInit() {
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        this.service.reset();
        this.service.ready.then(() => {
            this.loadGrid();
            this.formGrid.footer.pageChanged.subscribe(page => {
                localStorage.setItem('currentPage', page.page);
            });
        });
    }
    onSearch() {
        const searchInput = this.search;
        if (searchInput.length > 0) {
            this.gridQuery.skip = 0;
            this.gridQuery.title__regex = '/' + searchInput + '/i';
        }
        else {
            delete this.gridQuery.title__regex;
        }
        localStorage.setItem('query', JSON.stringify(this.gridQuery));
        localStorage.setItem('searchInput', this.search);
        this.formGrid.pageChanged({ page: 1, itemPerPage: this.gridQuery.limit });
        this.refreshGrid.emit(this.gridQuery);
    }
    clearSearch() {
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        localStorage.removeItem('query');
        localStorage.removeItem('searchInput');
        localStorage.removeItem('currentPage');
        this.search = '';
        this.formGrid.pageChanged({ page: 1 });
        this.formGrid.query = {};
        this.formGrid.refreshGrid({ tags: this.config.tag, type: 'form' });
    }
    onAction(action) {
        this.router.navigate([action.row._id, action.action], { relativeTo: this.route });
    }
    onSelect(row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    }
    onCreateItem() {
        this.router.navigate(['create'], { relativeTo: this.route });
    }
}
FormManagerIndexComponent.ɵfac = function FormManagerIndexComponent_Factory(t) { return new (t || FormManagerIndexComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.FormManagerConfig)); };
FormManagerIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerIndexComponent, selectors: [["ng-component"]], viewQuery: function FormManagerIndexComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(FormioGridComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formGrid = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "input-group mb-3", 4, "ngIf"], [3, "formio", "gridType", "query", "refresh", "isActionAllowed", "rowAction", "rowSelect", "createItem", 4, "ngIf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search Forms", "aria-label", "Search Forms", "aria-describedby", "button-search", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["class", "form-clear input-group-addon", 3, "click", 4, "ngIf"], [1, "form-clear", "input-group-addon", 3, "click"], [1, "fa", "fa-times"], [3, "formio", "gridType", "query", "refresh", "isActionAllowed", "rowAction", "rowSelect", "createItem"]], template: function FormManagerIndexComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormManagerIndexComponent_div_0_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(1, FormManagerIndexComponent_formio_grid_1_Template, 1, 5, "formio-grid", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.config.includeSearch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.service.ready);
    } }, directives: [i4.NgIf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.FormioGridComponent], styles: [".form-clear[_ngcontent-%COMP%]{align-items:center;background:#cecece;border-radius:50%;bottom:8px;color:rgba(0,0,0,.3);cursor:pointer;display:flex;height:24px;justify-content:center;position:absolute;right:10px;top:6px;width:24px;z-index:10}.form-clear[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:16px;font-weight:500}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerIndexComponent, [{
        type: Component,
        args: [{
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.FormManagerConfig }]; }, { formGrid: [{
            type: ViewChild,
            args: [FormioGridComponent, { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9tYW5hZ2VyL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4L2luZGV4LmNvbXBvbmVudC50cyIsImluZGV4L2luZGV4LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7O0lDSGhDLCtCQUFvRztJQUF4QixvTUFBdUI7SUFBQywwQkFBaUM7SUFBQSxpQkFBTzs7OztJQUY5SSw4QkFDRTtJQUFBLGdDQUNBO0lBRG1CLDBMQUFvQix3TUFBQTtJQUF2QyxpQkFDQTtJQUFBLGtGQUFvRztJQUN0RyxpQkFBTTs7O0lBRnlELGVBQW9CO0lBQXBCLHVDQUFvQjtJQUMxRSxlQUErQjtJQUEvQiw0REFBK0I7Ozs7SUFFeEMsc0NBVWU7SUFIYiw0TkFBOEIsaU5BQUEsMk1BQUE7SUFHL0IsaUJBQWM7OztJQVJiLDhDQUF5QixvQkFBQSwyQkFBQSwrQkFBQSxpREFBQTs7QURLM0IsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxZQUNTLE9BQTJCLEVBQzNCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUF5QjtRQUh6QixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFMM0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQU9qQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUMsSUFBSSxFQUFFLElB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O2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzt1SkFFa0QsUUFBUTtrQkFBeEQsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJDb25maWcgfSBmcm9tICcuLi9mb3JtLW1hbmFnZXIuY29uZmlnJztcbmltcG9ydCB7IEZvcm1pb0dyaWRDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyLWZvcm1pby9ncmlkJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9pbmRleC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luZGV4LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1hbmFnZXJJbmRleENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoRm9ybWlvR3JpZENvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSBmb3JtR3JpZDogRm9ybWlvR3JpZENvbXBvbmVudDtcbiAgcHVibGljIGdyaWRRdWVyeTogYW55O1xuICBwdWJsaWMgcmVmcmVzaEdyaWQ6IEV2ZW50RW1pdHRlcjxvYmplY3Q+O1xuICBwdWJsaWMgc2VhcmNoID0gJyc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3JtTWFuYWdlclNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGNvbmZpZzogRm9ybU1hbmFnZXJDb25maWdcbiAgKSB7XG4gICAgdGhpcy5ncmlkUXVlcnkgPSB7dGFnczogdGhpcy5jb25maWcudGFnLCB0eXBlOiAnZm9ybSd9O1xuICAgIHRoaXMucmVmcmVzaEdyaWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5vblNlYXJjaCA9IGRlYm91bmNlKHRoaXMub25TZWFyY2gsIDMwMCk7XG4gIH1cblxuICBsb2FkR3JpZCgpIHtcbiAgICB0aGlzLnNlYXJjaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWFyY2hJbnB1dCcpO1xuICAgIHRoaXMuZ3JpZFF1ZXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncXVlcnknKSkgfHwgdGhpcy5ncmlkUXVlcnk7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSArbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQYWdlJykgfHwgMDtcbiAgICB0aGlzLmZvcm1HcmlkXG4gICAgICAucmVmcmVzaEdyaWQodGhpcy5ncmlkUXVlcnkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmZvcm1HcmlkLnNldFBhZ2UoY3VycmVudFBhZ2UgLSAxKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdyaWRRdWVyeSA9IHt0YWdzOiB0aGlzLmNvbmZpZy50YWcsIHR5cGU6ICdmb3JtJ307XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0KCk7XG4gICAgdGhpcy5zZXJ2aWNlLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkR3JpZCgpO1xuICAgICAgdGhpcy5mb3JtR3JpZC5mb290ZXIucGFnZUNoYW5nZWQuc3Vic2NyaWJlKHBhZ2UgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFBhZ2UnLCBwYWdlLnBhZ2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlYXJjaCgpIHtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHRoaXMuc2VhcmNoO1xuICAgIGlmIChzZWFyY2hJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdyaWRRdWVyeS5za2lwID0gMDtcbiAgICAgIHRoaXMuZ3JpZFF1ZXJ5LnRpdGxlX19yZWdleCA9ICcvJyArIHNlYXJjaElucHV0ICsgJy9pJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuZ3JpZFF1ZXJ5LnRpdGxlX19yZWdleDtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3F1ZXJ5JywgSlNPTi5zdHJpbmdpZnkodGhpcy5ncmlkUXVlcnkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoSW5wdXQnLCB0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5mb3JtR3JpZC5wYWdlQ2hhbmdlZCh7cGFnZTogMSwgaXRlbVBlclBhZ2U6IHRoaXMuZ3JpZFF1ZXJ5LmxpbWl0fSk7XG4gICAgdGhpcy5yZWZyZXNoR3JpZC5lbWl0KHRoaXMuZ3JpZFF1ZXJ5KTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoKCkge1xuICAgIHRoaXMuZ3JpZFF1ZXJ5ID0ge3RhZ3M6IHRoaXMuY29uZmlnLnRhZywgdHlwZTogJ2Zvcm0nfTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncXVlcnknKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2VhcmNoSW5wdXQnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFBhZ2UnKTtcbiAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIHRoaXMuZm9ybUdyaWQucGFnZUNoYW5nZWQoe3BhZ2U6IDF9KTtcbiAgICB0aGlzLmZvcm1HcmlkLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5mb3JtR3JpZC5yZWZyZXNoR3JpZCh7dGFnczogdGhpcy5jb25maWcudGFnLCB0eXBlOiAnZm9ybSd9KTtcbiAgfVxuXG4gIG9uQWN0aW9uKGFjdGlvbjogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2FjdGlvbi5yb3cuX2lkLCBhY3Rpb24uYWN0aW9uXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICB9XG5cbiAgb25TZWxlY3Qocm93OiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm93Ll9pZCwgJ3ZpZXcnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICB9XG5cbiAgb25DcmVhdGVJdGVtKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY3JlYXRlJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgKm5nSWY9XCJjb25maWcuaW5jbHVkZVNlYXJjaFwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwib25TZWFyY2goKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBGb3Jtc1wiIGFyaWEtbGFiZWw9XCJTZWFyY2ggRm9ybXNcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYnV0dG9uLXNlYXJjaFwiPlxuICA8c3BhbiAgKm5nSWY9XCJzZWFyY2ggJiYgc2VhcmNoICE9PSAnJ1wiIGNsYXNzPVwiZm9ybS1jbGVhciBpbnB1dC1ncm91cC1hZGRvblwiIChjbGljayk9XCJjbGVhclNlYXJjaCgpXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvc3Bhbj48L3NwYW4+XG48L2Rpdj5cbjxmb3JtaW8tZ3JpZFxuICAqbmdJZj1cInNlcnZpY2UucmVhZHlcIlxuICBbZm9ybWlvXT1cInNlcnZpY2UuZm9ybWlvXCJcbiAgW2dyaWRUeXBlXT1cIidmb3JtJ1wiXG4gIFtxdWVyeV09XCJncmlkUXVlcnlcIlxuICBbcmVmcmVzaF09XCJyZWZyZXNoR3JpZFwiXG4gIFtpc0FjdGlvbkFsbG93ZWRdPVwic2VydmljZS5hY3Rpb25BbGxvd2VkXCJcbiAgKHJvd0FjdGlvbik9XCJvbkFjdGlvbigkZXZlbnQpXCJcbiAgKHJvd1NlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcbiAgKGNyZWF0ZUl0ZW0pPVwib25DcmVhdGVJdGVtKClcIlxuPjwvZm9ybWlvLWdyaWQ+XG4iXX0=