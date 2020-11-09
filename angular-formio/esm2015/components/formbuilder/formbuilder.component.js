import { Component, Input, ViewEncapsulation, Optional, ViewChild, EventEmitter, Output } from '@angular/core';
import { Formio, FormBuilder, Utils } from 'formiojs';
import { assign } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../../formio.config";
import * as i2 from "../../custom-component/custom-tags.service";
const _c0 = ["builder"];
/* tslint:disable */
/* tslint:enable */
export class FormBuilderComponent {
    constructor(ngZone, config, customTags) {
        this.ngZone = ngZone;
        this.config = config;
        this.customTags = customTags;
        this.componentAdding = false;
        this.noeval = false;
        if (this.config) {
            Formio.setBaseUrl(this.config.apiUrl);
            Formio.setProjectUrl(this.config.appUrl);
        }
        else {
            console.warn('You must provide an AppConfig within your application!');
        }
        this.change = new EventEmitter();
        this.ready = new Promise((resolve) => {
            this.readyResolve = resolve;
        });
    }
    ngOnInit() {
        Utils.Evaluator.noeval = this.noeval;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.ngZone.runOutsideAngular(() => {
                    this.buildForm(this.form);
                });
            });
        }
        if (this.rebuild) {
            this.rebuild.subscribe((options) => {
                this.ngZone.runOutsideAngular(() => {
                    this.rebuildForm(this.form, options);
                });
            });
        }
    }
    setInstance(instance) {
        this.formio = instance;
        instance.off('addComponent');
        instance.off('saveComponent');
        instance.off('updateComponent');
        instance.off('removeComponent');
        instance.on('addComponent', (component, parent, path, index, isNew) => {
            this.ngZone.run(() => {
                if (isNew) {
                    this.componentAdding = true;
                }
                else {
                    this.change.emit({
                        type: 'addComponent',
                        builder: instance,
                        form: instance.schema,
                        component: component,
                        parent: parent,
                        path: path,
                        index: index
                    });
                    this.componentAdding = false;
                }
            });
        });
        instance.on('saveComponent', (component, original, parent, path, index, isNew) => {
            this.ngZone.run(() => {
                this.change.emit({
                    type: this.componentAdding ? 'addComponent' : 'saveComponent',
                    builder: instance,
                    form: instance.schema,
                    component: component,
                    originalComponent: original,
                    parent: parent,
                    path: path,
                    index: index,
                    isNew: isNew || false
                });
                this.componentAdding = false;
            });
        });
        instance.on('updateComponent', (component) => {
            this.ngZone.run(() => {
                this.change.emit({
                    type: 'updateComponent',
                    builder: instance,
                    form: instance.schema,
                    component: component
                });
            });
        });
        instance.on('removeComponent', (component, parent, path, index) => {
            this.ngZone.run(() => {
                this.change.emit({
                    type: 'deleteComponent',
                    builder: instance,
                    form: instance.schema,
                    component: component,
                    parent: parent,
                    path: path,
                    index: index
                });
            });
        });
        this.ngZone.run(() => {
            this.readyResolve(instance);
        });
        return instance;
    }
    setDisplay(display) {
        return this.builder.setDisplay(display).then(instance => this.setInstance(instance));
    }
    buildForm(form) {
        if (!form || !this.builderElement || !this.builderElement.nativeElement) {
            return;
        }
        if (this.builder) {
            return this.setDisplay(form.display).then(() => {
                this.builder.form = form;
                this.builder.instance.form = form;
                return this.builder.instance;
            });
        }
        return this.rebuildForm(form);
    }
    rebuildForm(form, options) {
        const Builder = this.formbuilder || FormBuilder;
        const extraTags = this.customTags ? this.customTags.tags : [];
        this.builder = new Builder(this.builderElement.nativeElement, form, assign({
            icons: 'fontawesome',
            sanitizeConfig: {
                addTags: extraTags
            }
        }, options || this.options || {}));
        return this.builder.ready.then(instance => this.setInstance(instance));
    }
    ngOnChanges(changes) {
        Utils.Evaluator.noeval = this.noeval;
        if (changes.form && changes.form.currentValue) {
            this.ngZone.runOutsideAngular(() => {
                this.buildForm(changes.form.currentValue || { components: [] });
            });
        }
    }
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        if (this.formio) {
            this.formio.destroy();
        }
    }
}
FormBuilderComponent.ɵfac = function FormBuilderComponent_Factory(t) { return new (t || FormBuilderComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.FormioAppConfig, 8), i0.ɵɵdirectiveInject(i2.CustomTagsService, 8)); };
FormBuilderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormBuilderComponent, selectors: [["form-builder"]], viewQuery: function FormBuilderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.builderElement = _t.first);
    } }, inputs: { form: "form", options: "options", formbuilder: "formbuilder", noeval: "noeval", refresh: "refresh", rebuild: "rebuild" }, outputs: { change: "change" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["builder", ""]], template: function FormBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } }, styles: ["@import \"/node_modules/formiojs/dist/formio.builder.min.css\";"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormBuilderComponent, [{
        type: Component,
        args: [{
                selector: 'form-builder',
                templateUrl: './formbuilder.component.html',
                styleUrls: ['./formbuilder.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i1.FormioAppConfig, decorators: [{
                type: Optional
            }] }, { type: i2.CustomTagsService, decorators: [{
                type: Optional
            }] }]; }, { form: [{
            type: Input
        }], options: [{
            type: Input
        }], formbuilder: [{
            type: Input
        }], noeval: [{
            type: Input
        }], refresh: [{
            type: Input
        }], rebuild: [{
            type: Input
        }], change: [{
            type: Output
        }], builderElement: [{
            type: ViewChild,
            args: ['builder', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm1idWlsZGVyL2Zvcm1idWlsZGVyLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvZm9ybWJ1aWxkZXIvZm9ybWJ1aWxkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSUwsaUJBQWlCLEVBQ2pCLFFBQVEsRUFFUixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFJaEMsb0JBQW9CO0FBT3BCLG1CQUFtQjtBQUNuQixNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQixZQUNVLE1BQWMsRUFDRixNQUF1QixFQUN2QixVQUE4QjtRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0YsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFkN0Msb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFLdEIsV0FBTSxHQUFLLEtBQUssQ0FBQztRQVd4QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENB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QUFvQjs7Ozs7O1FDaENqQywrQkFBb0I7O2tERGdDUCxvQkFBb0I7Y0FQaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQW9CSSxRQUFROztzQkFDUixRQUFRO3dCQVpGLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxNQUFNO2tCQUFmLE1BQU07WUFDaUMsY0FBYztrQkFBckQsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICcuLi8uLi9mb3JtaW8uY29uZmlnJztcbmltcG9ydCB7XG4gIEZvcm1pb0Zvcm0sXG4gIEZvcm1pb09wdGlvbnNcbn0gZnJvbSAnLi4vLi4vZm9ybWlvLmNvbW1vbic7XG5pbXBvcnQgeyBGb3JtaW8sIEZvcm1CdWlsZGVyLCBVdGlscyB9IGZyb20gJ2Zvcm1pb2pzJztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbVRhZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VzdG9tLWNvbXBvbmVudC9jdXN0b20tdGFncy5zZXJ2aWNlJztcblxuLyogdHNsaW50OmRpc2FibGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtYnVpbGRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm1idWlsZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHVibGljIHJlYWR5OiBQcm9taXNlPG9iamVjdD47XG4gIHB1YmxpYyByZWFkeVJlc29sdmU6IGFueTtcbiAgcHVibGljIGZvcm1pbzogYW55O1xuICBwdWJsaWMgYnVpbGRlcjogRm9ybUJ1aWxkZXI7XG4gIHB1YmxpYyBjb21wb25lbnRBZGRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIGZvcm0/OiBGb3JtaW9Gb3JtO1xuICBASW5wdXQoKSBvcHRpb25zPzogRm9ybWlvT3B0aW9ucztcbiAgQElucHV0KCkgZm9ybWJ1aWxkZXI/OiBhbnk7XG4gIEBJbnB1dCgpIG5vZXZhbCA/ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlZnJlc2g/OiBPYnNlcnZhYmxlPHZvaWQ+O1xuICBASW5wdXQoKSByZWJ1aWxkPzogT2JzZXJ2YWJsZTxvYmplY3Q+O1xuICBAT3V0cHV0KCkgY2hhbmdlPzogRXZlbnRFbWl0dGVyPG9iamVjdD47XG4gIEBWaWV3Q2hpbGQoJ2J1aWxkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBidWlsZGVyRWxlbWVudD86IEVsZW1lbnRSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnOiBGb3JtaW9BcHBDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjdXN0b21UYWdzPzogQ3VzdG9tVGFnc1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBGb3JtaW8uc2V0QmFzZVVybCh0aGlzLmNvbmZpZy5hcGlVcmwpO1xuICAgICAgRm9ybWlvLnNldFByb2plY3RVcmwodGhpcy5jb25maWcuYXBwVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBwcm92aWRlIGFuIEFwcENvbmZpZyB3aXRoaW4geW91ciBhcHBsaWNhdGlvbiEnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnJlYWR5ID0gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgVXRpbHMuRXZhbHVhdG9yLm5vZXZhbCA9IHRoaXMubm9ldmFsO1xuXG4gICAgaWYgKHRoaXMucmVmcmVzaCkge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1aWxkRm9ybSh0aGlzLmZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlYnVpbGQpIHtcbiAgICAgIHRoaXMucmVidWlsZC5zdWJzY3JpYmUoKG9wdGlvbnMpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVidWlsZEZvcm0odGhpcy5mb3JtLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5mb3JtaW8gPSBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5vZmYoJ2FkZENvbXBvbmVudCcpO1xuICAgIGluc3RhbmNlLm9mZignc2F2ZUNvbXBvbmVudCcpO1xuICAgIGluc3RhbmNlLm9mZigndXBkYXRlQ29tcG9uZW50Jyk7XG4gICAgaW5zdGFuY2Uub2ZmKCdyZW1vdmVDb21wb25lbnQnKTtcbiAgICBpbnN0YW5jZS5vbignYWRkQ29tcG9uZW50JywgKGNvbXBvbmVudCwgcGFyZW50LCBwYXRoLCBpbmRleCwgaXNOZXcpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50QWRkaW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHR5cGU6ICdhZGRDb21wb25lbnQnLFxuICAgICAgICAgICAgYnVpbGRlcjogaW5zdGFuY2UsXG4gICAgICAgICAgICBmb3JtOiBpbnN0YW5jZS5zY2hlbWEsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50QWRkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGluc3RhbmNlLm9uKCdzYXZlQ29tcG9uZW50JywgKGNvbXBvbmVudCwgb3JpZ2luYWwsIHBhcmVudCwgcGF0aCwgaW5kZXgsIGlzTmV3KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB0eXBlOiB0aGlzLmNvbXBvbmVudEFkZGluZyA/ICdhZGRDb21wb25lbnQnIDogJ3NhdmVDb21wb25lbnQnLFxuICAgICAgICAgIGJ1aWxkZXI6IGluc3RhbmNlLFxuICAgICAgICAgIGZvcm06IGluc3RhbmNlLnNjaGVtYSxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICBvcmlnaW5hbENvbXBvbmVudDogb3JpZ2luYWwsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgaXNOZXc6IGlzTmV3IHx8IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudEFkZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaW5zdGFuY2Uub24oJ3VwZGF0ZUNvbXBvbmVudCcsIChjb21wb25lbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHR5cGU6ICd1cGRhdGVDb21wb25lbnQnLFxuICAgICAgICAgIGJ1aWxkZXI6IGluc3RhbmNlLFxuICAgICAgICAgIGZvcm06IGluc3RhbmNlLnNjaGVtYSxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGluc3RhbmNlLm9uKCdyZW1vdmVDb21wb25lbnQnLCAoY29tcG9uZW50LCBwYXJlbnQsIHBhdGgsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB0eXBlOiAnZGVsZXRlQ29tcG9uZW50JyxcbiAgICAgICAgICBidWlsZGVyOiBpbnN0YW5jZSxcbiAgICAgICAgICBmb3JtOiBpbnN0YW5jZS5zY2hlbWEsXG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWFkeVJlc29sdmUoaW5zdGFuY2UpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHNldERpc3BsYXkoZGlzcGxheTogU3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci5zZXREaXNwbGF5KGRpc3BsYXkpLnRoZW4oaW5zdGFuY2UgPT4gdGhpcy5zZXRJbnN0YW5jZShpbnN0YW5jZSkpO1xuICB9XG5cbiAgYnVpbGRGb3JtKGZvcm06IGFueSkge1xuICAgIGlmICghZm9ybSB8fCAhdGhpcy5idWlsZGVyRWxlbWVudCB8fCAhdGhpcy5idWlsZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnVpbGRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0RGlzcGxheShmb3JtLmRpc3BsYXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmJ1aWxkZXIuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuYnVpbGRlci5pbnN0YW5jZS5mb3JtID0gZm9ybTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5pbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlYnVpbGRGb3JtKGZvcm0pO1xuICB9XG5cbiAgcmVidWlsZEZvcm0oZm9ybTogYW55LCBvcHRpb25zPzogb2JqZWN0KSB7XG4gICAgY29uc3QgQnVpbGRlciA9IHRoaXMuZm9ybWJ1aWxkZXIgfHwgRm9ybUJ1aWxkZXI7XG4gICAgY29uc3QgZXh0cmFUYWdzID0gdGhpcy5jdXN0b21UYWdzID8gdGhpcy5jdXN0b21UYWdzLnRhZ3MgOiBbXTtcbiAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgQnVpbGRlcihcbiAgICAgIHRoaXMuYnVpbGRlckVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcm0sXG4gICAgICBhc3NpZ24oe1xuICAgICAgICBpY29uczogJ2ZvbnRhd2Vzb21lJyxcbiAgICAgICAgc2FuaXRpemVDb25maWc6IHtcbiAgICAgICAgICBhZGRUYWdzOiBleHRyYVRhZ3NcbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMgfHwge30pXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLnJlYWR5LnRoZW4oaW5zdGFuY2UgPT4gdGhpcy5zZXRJbnN0YW5jZShpbnN0YW5jZSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgVXRpbHMuRXZhbHVhdG9yLm5vZXZhbCA9IHRoaXMubm9ldmFsO1xuXG4gICAgaWYgKGNoYW5nZXMuZm9ybSAmJiBjaGFuZ2VzLmZvcm0uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtKGNoYW5nZXMuZm9ybS5jdXJyZW50VmFsdWUgfHwge2NvbXBvbmVudHM6IFtdfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtaW8pIHtcbiAgICAgIHRoaXMuZm9ybWlvLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgI2J1aWxkZXI+PC9kaXY+XG4iXX0=