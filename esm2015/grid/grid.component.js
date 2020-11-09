import { GridFooterPositions } from './types/grid-footer-positions';
import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { each } from 'lodash';
import { Formio } from 'formiojs';
import FormComponents from './form/index';
import SubmissionComponents from './submission/index';
import { FormioPromiseService } from 'angular-formio';
import { SortType } from './types/grid-header';
import * as i0 from "@angular/core";
import * as i1 from "angular-formio";
import * as i2 from "@angular/common";
const _c0 = ["headerTemplate"];
const _c1 = ["bodyTemplate"];
const _c2 = ["footerTemplate"];
function FormioGridComponent_ng_template_0_Template(rf, ctx) { }
function FormioGridComponent_ng_template_2_Template(rf, ctx) { }
function FormioGridComponent_ng_template_4_Template(rf, ctx) { }
const _c3 = function (a0) { return { position: a0 }; };
function FormioGridComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footer.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r6.footerPositions.top));
} }
function FormioGridComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.header.template);
} }
function FormioGridComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.body.template);
} }
function FormioGridComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.footer.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r9.footerPositions.bottom));
} }
const _c4 = function (a0, a1) { return [a0, a1]; };
export class FormioGridComponent {
    constructor(alerts, resolver, ref) {
        this.alerts = alerts;
        this.resolver = resolver;
        this.ref = ref;
        this.footerPosition = GridFooterPositions.bottom;
        this.page = 0;
        this.isLoading = false;
        this.initialized = false;
        this.footerPositions = GridFooterPositions;
        this.select = this.rowSelect = new EventEmitter();
        this.rowAction = new EventEmitter();
        this.createItem = new EventEmitter();
        this.error = new EventEmitter();
        this.isLoading = true;
    }
    createComponent(property, component) {
        const factory = this.resolver.resolveComponentFactory(component);
        const componentRef = property.createComponent(factory);
        return componentRef.instance;
    }
    loadGrid(src) {
        // If no source is provided, then skip.
        if (!src && !this.formio) {
            return;
        }
        // Do not double load.
        if (this.formio && this.src && (src === this.src)) {
            return;
        }
        if (src) {
            this.src = src;
            this.formio = new FormioPromiseService(this.src, { formOnly: true });
        }
        // Load the header.
        this.header.load(this.formio, {}, this.columns)
            .then(() => this.setPage(0))
            .catch(error => this.onError(error));
    }
    ngOnInit() {
        // Create our components.
        const comps = this.components || ((this.gridType === 'form') ? FormComponents : SubmissionComponents);
        this.header = this.createComponent(this.headerElement, comps.header);
        this.header.actionAllowed = this.actionAllowed.bind(this);
        this.header.sort.subscribe(header => this.sortColumn(header));
        this.body = this.createComponent(this.bodyElement, comps.body);
        this.body.header = this.header;
        this.body.actionAllowed = this.actionAllowed.bind(this);
        this.body.rowSelect.subscribe(row => this.rowSelect.emit(row));
        this.body.rowAction.subscribe(action => this.rowAction.emit(action));
        this.footer = this.createComponent(this.footerElement, comps.footer);
        this.footer.header = this.header;
        this.footer.body = this.body;
        this.footer.actionAllowed = this.actionAllowed.bind(this);
        this.footer.createText = this.createText;
        this.footer.size = this.size;
        this.footer.pageChanged.subscribe(page => this.pageChanged(page));
        this.footer.createItem.subscribe(item => this.createItem.emit(item));
    }
    ngOnChanges(changes) {
        if (this.initialized) {
            if ((changes.src && changes.src.currentValue) ||
                (changes.formio && changes.formio.currentValue)) {
                this.loadGrid(changes.src.currentValue);
            }
            if (changes.items && changes.items.currentValue) {
                this.refreshGrid();
            }
        }
        if (this.footer &&
            (changes.createText && changes.createText.currentValue)) {
            this.footer.createText = changes.createText.currentValue;
        }
    }
    ngAfterViewInit() {
        this.alerts.setAlerts([]);
        this.query = this.query || {};
        if (this.refresh) {
            this.refresh.subscribe((query) => this.refreshGrid(query));
        }
        this.loadGrid(this.src);
        this.initialized = true;
        this.ref.detectChanges();
    }
    actionAllowed(action) {
        if (this.isActionAllowed) {
            return this.isActionAllowed(action);
        }
        else {
            return true;
        }
    }
    onError(error) {
        this.isLoading = false;
        this.error.emit(error);
        this.alerts.setAlert({
            type: 'danger',
            message: error
        });
    }
    refreshGrid(query) {
        this.alerts.setAlerts([]);
        this.query = query || this.query;
        if (!this.query.hasOwnProperty('limit')) {
            this.query.limit = 10;
        }
        if (!this.query.hasOwnProperty('skip')) {
            this.query.skip = 0;
        }
        this.isLoading = true;
        this.ref.detectChanges();
        Formio.cache = {};
        let loader = null;
        if (this.items) {
            loader = Promise.resolve(this.body.setRows(this.query, this.items));
        }
        else {
            loader = this.body.load(this.formio, this.query);
        }
        return loader.then(info => {
            this.isLoading = false;
            this.initialized = true;
            this.ref.detectChanges();
        }).catch(error => this.onError(error));
    }
    setPage(num = -1) {
        this.page = num !== -1 ? num : this.page;
        if (!this.query.hasOwnProperty('limit')) {
            this.query.limit = 10;
        }
        if (!this.query.hasOwnProperty('skip')) {
            this.query.skip = 0;
        }
        this.query.skip = this.page * this.query.limit;
        this.refreshGrid();
    }
    sortColumn(header) {
        // Reset all other column sorts.
        each(this.header.headers, (col) => {
            if (col.key !== header.key) {
                col.sort = '';
            }
        });
        switch (header.sort) {
            case 'asc':
                header.sort = SortType.DESC;
                this.query.sort = '-' + header.key;
                break;
            case 'desc':
                header.sort = undefined;
                delete this.query.sort;
                break;
            case undefined:
                header.sort = SortType.ASC;
                this.query.sort = header.key;
                break;
        }
        this.refreshGrid();
    }
    pageChanged(page) {
        this.setPage(page.page - 1);
    }
}
FormioGridComponent.ɵfac = function FormioGridComponent_Factory(t) { return new (t || FormioGridComponent)(i0.ɵɵdirectiveInject(i1.FormioAlerts), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FormioGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioGridComponent, selectors: [["formio-grid"]], viewQuery: function FormioGridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        i0.ɵɵstaticViewQuery(_c1, true, ViewContainerRef);
        i0.ɵɵstaticViewQuery(_c2, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.footerElement = _t.first);
    } }, inputs: { footerPosition: "footerPosition", src: "src", items: "items", onForm: "onForm", query: "query", refresh: "refresh", columns: "columns", gridType: "gridType", size: "size", components: "components", formio: "formio", createText: "createText", isActionAllowed: "isActionAllowed" }, outputs: { select: "select", rowSelect: "rowSelect", rowAction: "rowAction", createItem: "createItem", error: "error" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 12, consts: [["headerTemplate", ""], ["bodyTemplate", ""], ["footerTemplate", ""], [1, "formio-grid"], [3, "alerts"], [1, "table", "table-bordered", "table-striped", "table-hover"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "isLoading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"]], template: function FormioGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormioGridComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, FormioGridComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, FormioGridComponent_ng_template_4_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelement(7, "formio-alerts", 4);
        i0.ɵɵelementStart(8, "table", 5);
        i0.ɵɵtemplate(9, FormioGridComponent_ng_container_9_Template, 1, 4, "ng-container", 6);
        i0.ɵɵtemplate(10, FormioGridComponent_ng_container_10_Template, 1, 1, "ng-container", 7);
        i0.ɵɵelement(11, "formio-loader", 8);
        i0.ɵɵtemplate(12, FormioGridComponent_ng_container_12_Template, 1, 1, "ng-container", 7);
        i0.ɵɵtemplate(13, FormioGridComponent_ng_container_13_Template, 1, 4, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("alerts", ctx.alerts);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.initialized && i0.ɵɵpureFunction2(6, _c4, ctx.footerPositions.top, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== -1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.initialized);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("isLoading", ctx.isLoading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.initialized);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.initialized && i0.ɵɵpureFunction2(9, _c4, ctx.footerPositions.bottom, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== -1);
    } }, directives: [i1.FormioAlertsComponent, i2.NgIf, i1.FormioLoaderComponent, i2.NgTemplateOutlet], styles: [".formio-grid[_ngcontent-%COMP%]{position:relative;width:100%}.grid-refresh[_ngcontent-%COMP%]{height:400px;width:100%}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioGridComponent, [{
        type: Component,
        args: [{
                selector: 'formio-grid',
                styleUrls: ['./grid.component.scss'],
                templateUrl: './grid.component.html'
            }]
    }], function () { return [{ type: i1.FormioAlerts }, { type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }]; }, { footerPosition: [{
            type: Input
        }], src: [{
            type: Input
        }], items: [{
            type: Input
        }], onForm: [{
            type: Input
        }], query: [{
            type: Input
        }], refresh: [{
            type: Input
        }], columns: [{
            type: Input
        }], gridType: [{
            type: Input
        }], size: [{
            type: Input
        }], components: [{
            type: Input
        }], formio: [{
            type: Input
        }], createText: [{
            type: Input
        }], isActionAllowed: [{
            type: Input
        }], select: [{
            type: Output
        }], rowSelect: [{
            type: Output
        }], rowAction: [{
            type: Output
        }], createItem: [{
            type: Output
        }], error: [{
            type: Output
        }], headerElement: [{
            type: ViewChild,
            args: ['headerTemplate', { read: ViewContainerRef, static: true }]
        }], bodyElement: [{
            type: ViewChild,
            args: ['bodyTemplate', { read: ViewContainerRef, static: true }]
        }], footerElement: [{
            type: ViewChild,
            args: ['footerTemplate', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2dyaWQvc3JjLyIsInNvdXJjZXMiOlsiZ3JpZC5jb21wb25lbnQudHMiLCJncmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFHTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFJaEMsT0FBTyxjQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sb0JBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFhLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7SUNsQnJELDJCQUVlOzs7SUFEYix5REFBb0MsbUZBQUE7OztJQUV0Qyw0QkFDc0Q7OztJQUFwRCx5REFBb0M7OztJQUV0Qyw0QkFBb0Y7OztJQUFsRCx1REFBa0M7OztJQUNwRSwyQkFFZTs7O0lBRGIseURBQW9DLHNGQUFBOzs7QURpQjFDLE1BQU0sT0FBTyxtQkFBbUI7SUErQjlCLFlBQ1MsTUFBb0IsRUFDbkIsUUFBa0MsRUFDbEMsR0FBc0I7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpDdkIsbUJBQWMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFN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LElBQUksRUFBQztZQUNBLFdBQVc7a0JBQTdFLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDSSxhQUFhO2tCQUFqRixTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkRm9vdGVyUG9zaXRpb25zIH0gZnJvbSAnLi90eXBlcy9ncmlkLWZvb3Rlci1wb3NpdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1pb0FsZXJ0c30gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuaW1wb3J0IHtlYWNofSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtGb3JtaW99IGZyb20gJ2Zvcm1pb2pzJztcbmltcG9ydCB7R3JpZEhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9HcmlkSGVhZGVyQ29tcG9uZW50JztcbmltcG9ydCB7R3JpZEJvZHlDb21wb25lbnR9IGZyb20gJy4vR3JpZEJvZHlDb21wb25lbnQnO1xuaW1wb3J0IHtHcmlkRm9vdGVyQ29tcG9uZW50fSBmcm9tICcuL0dyaWRGb290ZXJDb21wb25lbnQnO1xuaW1wb3J0IEZvcm1Db21wb25lbnRzIGZyb20gJy4vZm9ybS9pbmRleCc7XG5pbXBvcnQgU3VibWlzc2lvbkNvbXBvbmVudHMgZnJvbSAnLi9zdWJtaXNzaW9uL2luZGV4JztcbmltcG9ydCB7Rm9ybWlvUHJvbWlzZVNlcnZpY2V9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCB7R3JpZENvbHVtbn0gZnJvbSAnLi90eXBlcy9ncmlkLWNvbHVtbic7XG5pbXBvcnQge0dyaWRIZWFkZXIsIFNvcnRUeXBlfSBmcm9tICcuL3R5cGVzL2dyaWQtaGVhZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWlvLWdyaWQnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9HcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBmb290ZXJQb3NpdGlvbiA9IEdyaWRGb290ZXJQb3NpdGlvbnMuYm90dG9tO1xuICBASW5wdXQoKSBzcmM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1zPzogQXJyYXk8YW55PjtcbiAgQElucHV0KCkgb25Gb3JtPzogUHJvbWlzZTxhbnk+O1xuICBASW5wdXQoKSBxdWVyeT86IGFueTtcbiAgQElucHV0KCkgcmVmcmVzaD86IEV2ZW50RW1pdHRlcjxvYmplY3Q+O1xuICBASW5wdXQoKSBjb2x1bW5zPzogQXJyYXk8R3JpZENvbHVtbj47XG4gIEBJbnB1dCgpIGdyaWRUeXBlPzogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplPzogbnVtYmVyO1xuICBASW5wdXQoKSBjb21wb25lbnRzPzogYW55O1xuICBASW5wdXQoKSBmb3JtaW8/OiBGb3JtaW9Qcm9taXNlU2VydmljZTtcbiAgQElucHV0KCkgY3JlYXRlVGV4dDogU3RyaW5nO1xuICBASW5wdXQoKSBpc0FjdGlvbkFsbG93ZWQ6IGFueTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPG9iamVjdD47XG4gIEBPdXRwdXQoKSByb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxvYmplY3Q+O1xuICBAT3V0cHV0KCkgcm93QWN0aW9uOiBFdmVudEVtaXR0ZXI8b2JqZWN0PjtcbiAgQE91dHB1dCgpIGNyZWF0ZUl0ZW06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAVmlld0NoaWxkKCdoZWFkZXJUZW1wbGF0ZScsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWV9KSBoZWFkZXJFbGVtZW50OiBWaWV3Q29udGFpbmVyUmVmO1xuICBAVmlld0NoaWxkKCdib2R5VGVtcGxhdGUnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlfSkgYm9keUVsZW1lbnQ6IFZpZXdDb250YWluZXJSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Zvb3RlclRlbXBsYXRlJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZX0pIGZvb3RlckVsZW1lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgcHVibGljIHBhZ2UgPSAwO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwdWJsaWMgaGVhZGVyOiBHcmlkSGVhZGVyQ29tcG9uZW50O1xuICBwdWJsaWMgYm9keTogR3JpZEJvZHlDb21wb25lbnQ7XG4gIHB1YmxpYyBmb290ZXI6IEdyaWRGb290ZXJDb21wb25lbnQ7XG4gIHB1YmxpYyBmb290ZXJQb3NpdGlvbnMgPSBHcmlkRm9vdGVyUG9zaXRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhbGVydHM6IEZvcm1pb0FsZXJ0cyxcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5yb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5yb3dBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5jcmVhdGVJdGVtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMuZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50KHByb3BlcnR5LCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHByb3BlcnR5LmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG5cbiAgbG9hZEdyaWQoc3JjPzogc3RyaW5nKSB7XG4gICAgLy8gSWYgbm8gc291cmNlIGlzIHByb3ZpZGVkLCB0aGVuIHNraXAuXG4gICAgaWYgKCFzcmMgJiYgIXRoaXMuZm9ybWlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIERvIG5vdCBkb3VibGUgbG9hZC5cbiAgICBpZiAodGhpcy5mb3JtaW8gJiYgdGhpcy5zcmMgJiYgKHNyYyA9PT0gdGhpcy5zcmMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgICB0aGlzLmZvcm1pbyA9IG5ldyBGb3JtaW9Qcm9taXNlU2VydmljZSh0aGlzLnNyYywgeyBmb3JtT25seTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIHRoZSBoZWFkZXIuXG4gICAgdGhpcy5oZWFkZXIubG9hZCh0aGlzLmZvcm1pbywge30sIHRoaXMuY29sdW1ucylcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0UGFnZSgwKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLm9uRXJyb3IoZXJyb3IpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIENyZWF0ZSBvdXIgY29tcG9uZW50cy5cbiAgICBjb25zdCBjb21wcyA9IHRoaXMuY29tcG9uZW50cyB8fCAoKHRoaXMuZ3JpZFR5cGUgPT09ICdmb3JtJykgPyBGb3JtQ29tcG9uZW50cyA6IFN1Ym1pc3Npb25Db21wb25lbnRzKTtcblxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5jcmVhdGVDb21wb25lbnQodGhpcy5oZWFkZXJFbGVtZW50LCBjb21wcy5oZWFkZXIpO1xuICAgIHRoaXMuaGVhZGVyLmFjdGlvbkFsbG93ZWQgPSB0aGlzLmFjdGlvbkFsbG93ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhlYWRlci5zb3J0LnN1YnNjcmliZShoZWFkZXIgPT4gdGhpcy5zb3J0Q29sdW1uKGhlYWRlcikpO1xuXG4gICAgdGhpcy5ib2R5ID0gdGhpcy5jcmVhdGVDb21wb25lbnQodGhpcy5ib2R5RWxlbWVudCwgY29tcHMuYm9keSk7XG4gICAgdGhpcy5ib2R5LmhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIHRoaXMuYm9keS5hY3Rpb25BbGxvd2VkID0gdGhpcy5hY3Rpb25BbGxvd2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib2R5LnJvd1NlbGVjdC5zdWJzY3JpYmUocm93ID0+IHRoaXMucm93U2VsZWN0LmVtaXQocm93KSk7XG4gICAgdGhpcy5ib2R5LnJvd0FjdGlvbi5zdWJzY3JpYmUoYWN0aW9uID0+IHRoaXMucm93QWN0aW9uLmVtaXQoYWN0aW9uKSk7XG5cbiAgICB0aGlzLmZvb3RlciA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KHRoaXMuZm9vdGVyRWxlbWVudCwgY29tcHMuZm9vdGVyKTtcbiAgICB0aGlzLmZvb3Rlci5oZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICB0aGlzLmZvb3Rlci5ib2R5ID0gdGhpcy5ib2R5O1xuICAgIHRoaXMuZm9vdGVyLmFjdGlvbkFsbG93ZWQgPSB0aGlzLmFjdGlvbkFsbG93ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvb3Rlci5jcmVhdGVUZXh0ID0gdGhpcy5jcmVhdGVUZXh0O1xuICAgIHRoaXMuZm9vdGVyLnNpemUgPSB0aGlzLnNpemU7XG4gICAgdGhpcy5mb290ZXIucGFnZUNoYW5nZWQuc3Vic2NyaWJlKHBhZ2UgPT4gdGhpcy5wYWdlQ2hhbmdlZChwYWdlKSk7XG4gICAgdGhpcy5mb290ZXIuY3JlYXRlSXRlbS5zdWJzY3JpYmUoaXRlbSA9PiB0aGlzLmNyZWF0ZUl0ZW0uZW1pdChpdGVtKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgaWYgKFxuICAgICAgICAoY2hhbmdlcy5zcmMgJiYgY2hhbmdlcy5zcmMuY3VycmVudFZhbHVlKSB8fFxuICAgICAgICAoY2hhbmdlcy5mb3JtaW8gJiYgY2hhbmdlcy5mb3JtaW8uY3VycmVudFZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubG9hZEdyaWQoY2hhbmdlcy5zcmMuY3VycmVudFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZXMuaXRlbXMgJiYgY2hhbmdlcy5pdGVtcy5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoR3JpZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmZvb3RlciAmJlxuICAgICAgICAoY2hhbmdlcy5jcmVhdGVUZXh0ICYmIGNoYW5nZXMuY3JlYXRlVGV4dC5jdXJyZW50VmFsdWUpKSB7XG4gICAgICB0aGlzLmZvb3Rlci5jcmVhdGVUZXh0ID0gY2hhbmdlcy5jcmVhdGVUZXh0LmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hbGVydHMuc2V0QWxlcnRzKFtdKTtcbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKChxdWVyeTogb2JqZWN0KSA9PiB0aGlzLnJlZnJlc2hHcmlkKHF1ZXJ5KSk7XG4gICAgfVxuICAgIHRoaXMubG9hZEdyaWQodGhpcy5zcmMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGFjdGlvbkFsbG93ZWQoYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25BbGxvd2VkKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0FjdGlvbkFsbG93ZWQoYWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25FcnJvcihlcnJvcjogYW55KSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9yLmVtaXQoZXJyb3IpO1xuICAgIHRoaXMuYWxlcnRzLnNldEFsZXJ0KHtcbiAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgbWVzc2FnZTogZXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hHcmlkKHF1ZXJ5PzogYW55KSB7XG4gICAgdGhpcy5hbGVydHMuc2V0QWxlcnRzKFtdKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkgfHwgdGhpcy5xdWVyeTtcbiAgICBpZiAoIXRoaXMucXVlcnkuaGFzT3duUHJvcGVydHkoJ2xpbWl0JykpIHtcbiAgICAgIHRoaXMucXVlcnkubGltaXQgPSAxMDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdza2lwJykpIHtcbiAgICAgIHRoaXMucXVlcnkuc2tpcCA9IDA7XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgRm9ybWlvLmNhY2hlID0ge307XG4gICAgbGV0IGxvYWRlciA9IG51bGw7XG4gICAgaWYgKHRoaXMuaXRlbXMpIHtcbiAgICAgIGxvYWRlciA9IFByb21pc2UucmVzb2x2ZSh0aGlzLmJvZHkuc2V0Um93cyh0aGlzLnF1ZXJ5LCB0aGlzLml0ZW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRlciA9IHRoaXMuYm9keS5sb2FkKHRoaXMuZm9ybWlvLCB0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGVyLnRoZW4oaW5mbyA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5vbkVycm9yKGVycm9yKSk7XG4gIH1cblxuICBzZXRQYWdlKG51bSA9IC0xKSB7XG4gICAgdGhpcy5wYWdlID0gbnVtICE9PSAtMSA/IG51bSA6IHRoaXMucGFnZTtcbiAgICBpZiAoIXRoaXMucXVlcnkuaGFzT3duUHJvcGVydHkoJ2xpbWl0JykpIHtcbiAgICAgIHRoaXMucXVlcnkubGltaXQgPSAxMDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdza2lwJykpIHtcbiAgICAgIHRoaXMucXVlcnkuc2tpcCA9IDA7XG4gICAgfVxuICAgIHRoaXMucXVlcnkuc2tpcCA9IHRoaXMucGFnZSAqIHRoaXMucXVlcnkubGltaXQ7XG4gICAgdGhpcy5yZWZyZXNoR3JpZCgpO1xuICB9XG5cbiAgc29ydENvbHVtbihoZWFkZXI6IEdyaWRIZWFkZXIpIHtcbiAgICAvLyBSZXNldCBhbGwgb3RoZXIgY29sdW1uIHNvcnRzLlxuICAgIGVhY2godGhpcy5oZWFkZXIuaGVhZGVycywgKGNvbDogYW55KSA9PiB7XG4gICAgICBpZiAoY29sLmtleSAhPT0gaGVhZGVyLmtleSkge1xuICAgICAgICBjb2wuc29ydCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXRjaCAoaGVhZGVyLnNvcnQpIHtcbiAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgIGhlYWRlci5zb3J0ID0gU29ydFR5cGUuREVTQztcbiAgICAgICAgdGhpcy5xdWVyeS5zb3J0ID0gJy0nICsgaGVhZGVyLmtleTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjJzpcbiAgICAgICAgaGVhZGVyLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJ5LnNvcnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGhlYWRlci5zb3J0ID0gU29ydFR5cGUuQVNDO1xuICAgICAgICB0aGlzLnF1ZXJ5LnNvcnQgPSBoZWFkZXIua2V5O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoR3JpZCgpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQocGFnZTogYW55KSB7XG4gICAgdGhpcy5zZXRQYWdlKHBhZ2UucGFnZSAtIDEpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgI2hlYWRlclRlbXBsYXRlPjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZT48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNmb290ZXJUZW1wbGF0ZT48L25nLXRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImZvcm1pby1ncmlkXCI+XG4gIDxmb3JtaW8tYWxlcnRzIFthbGVydHNdPVwiYWxlcnRzXCI+PC9mb3JtaW8tYWxlcnRzPlxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImluaXRpYWxpemVkICYmIFtmb290ZXJQb3NpdGlvbnMudG9wLCBmb290ZXJQb3NpdGlvbnMuYm90aF0uaW5kZXhPZihmb290ZXJQb3NpdGlvbikgIT09IC0xXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3Rlci50ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHBvc2l0aW9uOiBmb290ZXJQb3NpdGlvbnMudG9wIH1cIj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5pdGlhbGl6ZWRcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyLnRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPGZvcm1pby1sb2FkZXIgW2lzTG9hZGluZ109XCJpc0xvYWRpbmdcIj48L2Zvcm1pby1sb2FkZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImluaXRpYWxpemVkXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keS50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbml0aWFsaXplZCAmJiBbZm9vdGVyUG9zaXRpb25zLmJvdHRvbSwgZm9vdGVyUG9zaXRpb25zLmJvdGhdLmluZGV4T2YoZm9vdGVyUG9zaXRpb24pICE9PSAtMVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXIudGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBwb3NpdGlvbjogZm9vdGVyUG9zaXRpb25zLmJvdHRvbSB9XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvdGFibGU+XG48L2Rpdj5cbiJdfQ==