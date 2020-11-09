import { Component, ViewChild } from '@angular/core';
import { FormBuilderComponent } from 'angular-formio';
import _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../form-manager.service";
import * as i2 from "@angular/router";
import * as i3 from "../form-manager.config";
import * as i4 from "angular-formio";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
const _c0 = ["title"];
const _c1 = ["type"];
function FormManagerEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
function FormManagerEditComponent_form_builder_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "form-builder", 16, 17);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formbuilder", ctx_r3.config.builder)("form", ctx_r3.form);
} }
export class FormManagerEditComponent {
    constructor(service, router, route, config, ref, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.config = config;
        this.ref = ref;
        this.alerts = alerts;
        this.form = { components: [] };
        this.formReady = false;
        this.loading = false;
        this.editMode = false;
    }
    initBuilder(editing) {
        if (editing) {
            this.loading = true;
            this.editMode = true;
            return this.service.loadForm().then(form => {
                this.form = form;
                this.formTitle.nativeElement.value = form.title;
                this.formType.nativeElement.value = form.display || 'form';
                this.loading = false;
                this.formReady = true;
                this.ref.detectChanges();
                return true;
            }).catch(err => {
                this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
                this.loading = false;
                this.formReady = true;
            });
        }
        else {
            this.formReady = true;
            return Promise.resolve(true);
        }
    }
    ngAfterViewInit() {
        this.route.url.subscribe(url => {
            this.initBuilder((url[0].path === 'edit'));
        });
    }
    onDisplaySelect(event) {
        this.builder.setDisplay(event.target.value);
    }
    saveForm() {
        this.loading = true;
        this.form.title = this.formTitle.nativeElement.value;
        this.form.display = this.formType.nativeElement.value;
        this.form.components = this.builder.formio.schema.components;
        if (this.config.tag) {
            this.form.tags = this.form.tags || [];
            this.form.tags.push(this.config.tag);
            this.form.tags = _.uniq(this.form.tags);
        }
        if (!this.form._id) {
            this.form.name = _.camelCase(this.form.title).toLowerCase();
            this.form.path = this.form.name;
        }
        return this.service.formio.saveForm(this.form).then(form => {
            this.form = this.service.setForm(form);
            this.loading = false;
            return this.form;
        }).catch(err => {
            this.loading = false;
            // Catch if a form is returned as an error. This is a conflict.
            if (err._id && err.type) {
                throw err;
            }
            this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
        });
    }
    onSave() {
        return this.saveForm().then((form) => {
            if (this.editMode) {
                this.router.navigate(['../', 'view'], { relativeTo: this.route });
            }
            else {
                this.router.navigate(['../', form._id, 'view'], { relativeTo: this.route });
            }
        });
    }
}
FormManagerEditComponent.ɵfac = function FormManagerEditComponent_Factory(t) { return new (t || FormManagerEditComponent)(i0.ɵɵdirectiveInject(i1.FormManagerService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormManagerConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.FormioAlerts)); };
FormManagerEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormManagerEditComponent, selectors: [["ng-component"]], viewQuery: function FormManagerEditComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(FormBuilderComponent, true);
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.builder = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formTitle = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formType = _t.first);
    } }, decls: 21, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-8"], ["type", "text", "id", "formTitle", "placeholder", "Enter a Title", 1, "form-control"], ["title", ""], [1, "col-sm-2"], ["id", "formSelect", 1, "form-control", 3, "change"], ["type", ""], ["value", "form"], ["value", "wizard"], ["value", "pdf"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [3, "alerts"], [3, "formbuilder", "form", 4, "ngIf"], [1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"], [1, "loader"], [3, "formbuilder", "form"], ["builder", ""]], template: function FormManagerEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormManagerEditComponent_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "input", 3, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "select", 6, 7);
        i0.ɵɵlistener("change", function FormManagerEditComponent_Template_select_change_6_listener($event) { return ctx.onDisplaySelect($event); });
        i0.ɵɵelementStart(8, "option", 8);
        i0.ɵɵtext(9, "Form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "option", 9);
        i0.ɵɵtext(11, "Wizard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "option", 10);
        i0.ɵɵtext(13, "PDF");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 5);
        i0.ɵɵelementStart(15, "button", 11);
        i0.ɵɵlistener("click", function FormManagerEditComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        i0.ɵɵtext(16, "Save Form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "formio-alerts", 12);
        i0.ɵɵtemplate(18, FormManagerEditComponent_form_builder_18_Template, 2, 2, "form-builder", 13);
        i0.ɵɵelementStart(19, "button", 14);
        i0.ɵɵlistener("click", function FormManagerEditComponent_Template_button_click_19_listener() { return ctx.onSave(); });
        i0.ɵɵtext(20, "Save Form");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("alerts", ctx.alerts);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formReady);
    } }, directives: [i5.NgIf, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_x, i4.FormioAlertsComponent, i4.FormBuilderComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerEditComponent, [{
        type: Component,
        args: [{
                templateUrl: './edit.component.html'
            }]
    }], function () { return [{ type: i1.FormManagerService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormManagerConfig }, { type: i0.ChangeDetectorRef }, { type: i4.FormioAlerts }]; }, { builder: [{
            type: ViewChild,
            args: [FormBuilderComponent, { static: false }]
        }], formTitle: [{
            type: ViewChild,
            args: ['title', { static: false }]
        }], formType: [{
            type: ViewChild,
            args: ['type', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsiZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsImVkaXQvZWRpdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBZ0QsTUFBTSxlQUFlLENBQUM7QUFLbkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7OztJQ052QiwwQkFBMEM7OztJQWlCMUMsdUNBQXFHOzs7SUFBckUsbURBQThCLHFCQUFBOztBRE45RCxNQUFNLE9BQU8sd0JBQXdCO0lBU25DLFlBQ1MsT0FBMkIsRUFDM0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQXlCLEVBQ3pCLEdBQXNCLEVBQ3RCLE1BQW9CO1FBTHBCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRTNCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8s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LEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi9mb3JtLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1NYW5hZ2VyQ29uZmlnIH0gZnJvbSAnLi4vZm9ybS1tYW5hZ2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1hbmFnZXJFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoRm9ybUJ1aWxkZXJDb21wb25lbnQsIHtzdGF0aWM6IGZhbHNlfSkgYnVpbGRlcjogRm9ybUJ1aWxkZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlJywge3N0YXRpYzogZmFsc2V9KSBmb3JtVGl0bGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3R5cGUnLCB7c3RhdGljOiBmYWxzZX0pIGZvcm1UeXBlOiBFbGVtZW50UmVmO1xuICBwdWJsaWMgZm9ybTogYW55O1xuICBwdWJsaWMgbG9hZGluZzogQm9vbGVhbjtcbiAgcHVibGljIGZvcm1SZWFkeTogQm9vbGVhbjtcbiAgcHVibGljIGVkaXRNb2RlOiBCb29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3JtTWFuYWdlclNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGNvbmZpZzogRm9ybU1hbmFnZXJDb25maWcsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGFsZXJ0czogRm9ybWlvQWxlcnRzXG4gICkge1xuICAgIHRoaXMuZm9ybSA9IHtjb21wb25lbnRzOiBbXX07XG4gICAgdGhpcy5mb3JtUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gIH1cblxuICBpbml0QnVpbGRlcihlZGl0aW5nKSB7XG4gICAgaWYgKGVkaXRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UubG9hZEZvcm0oKS50aGVuKGZvcm0gPT4ge1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmZvcm1UaXRsZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gZm9ybS50aXRsZTtcbiAgICAgICAgdGhpcy5mb3JtVHlwZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gZm9ybS5kaXNwbGF5IHx8ICdmb3JtJztcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybVJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuYWxlcnRzLnNldEFsZXJ0KHt0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogKGVyci5tZXNzYWdlIHx8IGVycil9KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybVJlYWR5ID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1SZWFkeSA9IHRydWU7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnVybC5zdWJzY3JpYmUoIHVybCA9PiB7XG4gICAgICB0aGlzLmluaXRCdWlsZGVyKCh1cmxbMF0ucGF0aCA9PT0gJ2VkaXQnKSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkRpc3BsYXlTZWxlY3QoZXZlbnQpIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0RGlzcGxheShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgc2F2ZUZvcm0oKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZvcm0udGl0bGUgPSB0aGlzLmZvcm1UaXRsZS5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIHRoaXMuZm9ybS5kaXNwbGF5ID0gdGhpcy5mb3JtVHlwZS5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIHRoaXMuZm9ybS5jb21wb25lbnRzID0gdGhpcy5idWlsZGVyLmZvcm1pby5zY2hlbWEuY29tcG9uZW50cztcbiAgICBpZiAodGhpcy5jb25maWcudGFnKSB7XG4gICAgICB0aGlzLmZvcm0udGFncyA9IHRoaXMuZm9ybS50YWdzIHx8IFtdO1xuICAgICAgdGhpcy5mb3JtLnRhZ3MucHVzaCh0aGlzLmNvbmZpZy50YWcpO1xuICAgICAgdGhpcy5mb3JtLnRhZ3MgPSBfLnVuaXEodGhpcy5mb3JtLnRhZ3MpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZm9ybS5faWQpIHtcbiAgICAgIHRoaXMuZm9ybS5uYW1lID0gXy5jYW1lbENhc2UodGhpcy5mb3JtLnRpdGxlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5mb3JtLnBhdGggPSB0aGlzLmZvcm0ubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5mb3JtaW8uc2F2ZUZvcm0odGhpcy5mb3JtKS50aGVuKGZvcm0gPT4ge1xuICAgICAgdGhpcy5mb3JtID0gdGhpcy5zZXJ2aWNlLnNldEZvcm0oZm9ybSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm07XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gQ2F0Y2ggaWYgYSBmb3JtIGlzIHJldHVybmVkIGFzIGFuIGVycm9yLiBUaGlzIGlzIGEgY29uZmxpY3QuXG4gICAgICBpZiAoZXJyLl9pZCAmJiBlcnIudHlwZSkge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB0aGlzLmFsZXJ0cy5zZXRBbGVydCh7dHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IChlcnIubWVzc2FnZSB8fCBlcnIpfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNhdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZUZvcm0oKS50aGVuKChmb3JtKSA9PiB7XG4gICAgICBpZiAodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsICd2aWV3J10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsIGZvcm0uX2lkLCAndmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibG9hZGVyXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvcm1UaXRsZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBUaXRsZVwiICN0aXRsZT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvcm1TZWxlY3RcIiAoY2hhbmdlKT1cIm9uRGlzcGxheVNlbGVjdCgkZXZlbnQpXCIgI3R5cGU+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybVwiPkZvcm08L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ3aXphcmRcIj5XaXphcmQ8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJwZGZcIj5QREY8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgKGNsaWNrKT1cIm9uU2F2ZSgpXCI+U2F2ZSBGb3JtPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG48Zm9ybWlvLWFsZXJ0cyBbYWxlcnRzXT1cImFsZXJ0c1wiPjwvZm9ybWlvLWFsZXJ0cz5cbjxmb3JtLWJ1aWxkZXIgKm5nSWY9XCJmb3JtUmVhZHlcIiBbZm9ybWJ1aWxkZXJdPVwiY29uZmlnLmJ1aWxkZXJcIiBbZm9ybV09XCJmb3JtXCIgI2J1aWxkZXI+PC9mb3JtLWJ1aWxkZXI+XG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiIChjbGljayk9XCJvblNhdmUoKVwiPlNhdmUgRm9ybTwvYnV0dG9uPlxuIl19