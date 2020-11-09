import { Input, Output, EventEmitter, ViewChild, TemplateRef, Component } from '@angular/core';
import { each, clone } from 'lodash';
import * as i0 from "@angular/core";
export class GridBodyComponent {
    constructor() {
        this.firstItem = 0;
        this.lastItem = 0;
        this.skip = 0;
        this.limit = 0;
        this.total = 0;
        this.rowSelect = new EventEmitter();
        this.rowAction = new EventEmitter();
        this.loading = true;
    }
    load(formio, query) {
        return formio.loadForm(query);
    }
    onRowSelect(event, row) {
        event.preventDefault();
        this.rowSelect.emit(row);
    }
    onRowAction(event, row, action) {
        event.preventDefault();
        this.rowAction.emit({ row, action });
    }
    /**
     * Set the rows for this Grid body.
     *
     * @param query
     * @param items
     * @return any
     */
    setRows(query, items) {
        this.rows = [];
        if (typeof items !== 'object') {
            this.firstItem = 0;
            this.lastItem = 0;
            this.total = 0;
            this.skip = 0;
            this.loading = false;
            return this.rows;
        }
        this.firstItem = query.skip + 1;
        this.lastItem = this.firstItem + items.length - 1;
        this.total = items.serverCount;
        this.limit = query.limit;
        this.skip = Math.floor(items.skip / query.limit) + 1;
        this.loading = false;
        each(items, (item) => {
            this.rows.push(clone(item));
        });
        return this.rows;
    }
}
GridBodyComponent.ɵfac = function GridBodyComponent_Factory(t) { return new (t || GridBodyComponent)(); };
GridBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridBodyComponent, selectors: [["ng-component"]], viewQuery: function GridBodyComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { header: "header", actionAllowed: "actionAllowed" }, outputs: { rowSelect: "rowSelect", rowAction: "rowAction" }, decls: 0, vars: 0, template: function GridBodyComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridBodyComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return []; }, { header: [{
            type: Input
        }], actionAllowed: [{
            type: Input
        }], rowSelect: [{
            type: Output
        }], rowAction: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZEJvZHlDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2dyaWQvc3JjLyIsInNvdXJjZXMiOlsiR3JpZEJvZHlDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQU9yQyxNQUFNLE9BQWdCLGlCQUFpQjtJQWFyQztRQUxPLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQTRCLEVBQUUsS0FBVztRQUM1QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRztRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU07UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE9BQU8sQ0FBQyxLQUFVLEVBQUUsS0FBVTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7O2tGQTlEbUIsaUJBQWlCO3NEQUFqQixpQkFBaUI7NkJBSzFCLFdBQVc7Ozs7O2tEQUxGLGlCQUFpQjtjQUh0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjtzQ0FFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0ksU0FBUztrQkFBbEIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDaUMsUUFBUTtrQkFBL0MsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVhY2gsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL0dyaWRIZWFkZXJDb21wb25lbnQnO1xuaW1wb3J0IHtGb3JtaW9Qcm9taXNlU2VydmljZX0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyaWRCb2R5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaGVhZGVyOiBHcmlkSGVhZGVyQ29tcG9uZW50O1xuICBASW5wdXQoKSBhY3Rpb25BbGxvd2VkOiBhbnk7XG4gIEBPdXRwdXQoKSByb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgcm93QWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwdWJsaWMgcm93czogQXJyYXk8YW55PjtcbiAgcHVibGljIGxvYWRpbmc6IEJvb2xlYW47XG4gIHB1YmxpYyBmaXJzdEl0ZW0gPSAwO1xuICBwdWJsaWMgbGFzdEl0ZW0gPSAwO1xuICBwdWJsaWMgc2tpcCA9IDA7XG4gIHB1YmxpYyBsaW1pdCA9IDA7XG4gIHB1YmxpYyB0b3RhbCA9IDA7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMucm93QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gIH1cblxuICBsb2FkKGZvcm1pbzogRm9ybWlvUHJvbWlzZVNlcnZpY2UsIHF1ZXJ5PzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZm9ybWlvLmxvYWRGb3JtKHF1ZXJ5KTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0KGV2ZW50LCByb3cpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm93U2VsZWN0LmVtaXQocm93KTtcbiAgfVxuXG4gIG9uUm93QWN0aW9uKGV2ZW50LCByb3csIGFjdGlvbikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3dBY3Rpb24uZW1pdCh7IHJvdywgYWN0aW9uIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcm93cyBmb3IgdGhpcyBHcmlkIGJvZHkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHNldFJvd3MocXVlcnk6IGFueSwgaXRlbXM6IGFueSkge1xuICAgIHRoaXMucm93cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZmlyc3RJdGVtID0gMDtcbiAgICAgIHRoaXMubGFzdEl0ZW0gPSAwO1xuICAgICAgdGhpcy50b3RhbCA9IDA7XG4gICAgICB0aGlzLnNraXAgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5yb3dzO1xuICAgIH1cblxuICAgIHRoaXMuZmlyc3RJdGVtID0gcXVlcnkuc2tpcCArIDE7XG4gICAgdGhpcy5sYXN0SXRlbSA9IHRoaXMuZmlyc3RJdGVtICsgaXRlbXMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnRvdGFsID0gaXRlbXMuc2VydmVyQ291bnQ7XG4gICAgdGhpcy5saW1pdCA9IHF1ZXJ5LmxpbWl0O1xuICAgIHRoaXMuc2tpcCA9IE1hdGguZmxvb3IoaXRlbXMuc2tpcCAvIHF1ZXJ5LmxpbWl0KSArIDE7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgZWFjaChpdGVtcywgKGl0ZW06IGFueSkgPT4ge1xuICAgICAgdGhpcy5yb3dzLnB1c2goY2xvbmUoaXRlbSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJvd3M7XG4gIH1cbn1cbiJdfQ==