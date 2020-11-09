import { Component, EventEmitter, Input, Optional, Output, ViewChild } from '@angular/core';
import { FormioService } from './formio.service';
import { FormioAlerts } from './components/alerts/formio.alerts';
import { assign, get, isEmpty } from 'lodash';
import Evaluator from 'formiojs/utils/Evaluator';
import { AlertsPosition } from './types/alerts-position';
import * as i0 from "@angular/core";
import * as i1 from "./formio.config";
import * as i2 from "./custom-component/custom-tags.service";
const _c0 = ["formio"];
export class FormioBaseComponent {
    constructor(ngZone, config, customTags) {
        this.ngZone = ngZone;
        this.config = config;
        this.customTags = customTags;
        this.submission = {};
        this.noeval = false;
        this.readOnly = false;
        this.viewOnly = false;
        this.hooks = {};
        this.watchSubmissionErrors = false;
        this.render = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.fileUploadingStatus = new EventEmitter();
        this.submit = new EventEmitter();
        this.prevPage = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.beforeSubmit = new EventEmitter();
        this.change = new EventEmitter();
        this.invalid = new EventEmitter();
        this.errorChange = new EventEmitter();
        this.formLoad = new EventEmitter();
        this.submissionLoad = new EventEmitter();
        this.ready = new EventEmitter();
        this.AlertsPosition = AlertsPosition;
        this.initialized = false;
        this.alerts = new FormioAlerts();
        this.submitting = false;
        this.submissionSuccess = false;
        this.isLoading = true;
        this.formioReady = new Promise((ready) => {
            this.formioReadyResolve = ready;
        });
    }
    getRenderer() {
        return this.renderer;
    }
    getRendererOptions() {
        const extraTags = this.customTags ? this.customTags.tags : [];
        return assign({}, {
            icons: get(this.config, 'icons', 'fontawesome'),
            noAlerts: get(this.options, 'noAlerts', true),
            readOnly: this.readOnly,
            viewAsHtml: this.viewOnly,
            i18n: get(this.options, 'i18n', null),
            fileService: get(this.options, 'fileService', null),
            hooks: this.hooks,
            sanitizeConfig: {
                addTags: extraTags
            }
        }, this.renderOptions || {});
    }
    createRenderer() {
        const Renderer = this.getRenderer();
        const form = (new Renderer(this.formioElement ? this.formioElement.nativeElement : null, this.form, this.getRendererOptions()));
        return form.instance;
    }
    setForm(form) {
        this.form = form;
        if (this.formio) {
            this.formio.destroy();
        }
        // Clear out the element to render the new form.
        if (this.formioElement && this.formioElement.nativeElement) {
            this.formioElement.nativeElement.innerHTML = '';
        }
        this.formio = this.createRenderer();
        this.formio.submission = this.submission;
        if (this.renderOptions && this.renderOptions.validateOnInit) {
            this.formio.setValue(this.submission, { validateOnInit: true });
        }
        if (this.url) {
            this.formio.setUrl(this.url, this.formioOptions || {});
        }
        if (this.src) {
            this.formio.setUrl(this.src, this.formioOptions || {});
        }
        this.formio.nosubmit = true;
        this.formio.on('prevPage', (data) => this.ngZone.run(() => this.onPrevPage(data)));
        this.formio.on('nextPage', (data) => this.ngZone.run(() => this.onNextPage(data)));
        this.formio.on('change', (value, flags, isModified) => this.ngZone.run(() => this.onChange(value, flags, isModified)));
        this.formio.on('customEvent', (event) => this.ngZone.run(() => this.customEvent.emit(event)));
        ['fileUploadingStart', 'fileUploadingEnd'].forEach((eventName, index) => {
            const status = !!index ? 'end' : 'start';
            this.formio.on(eventName, () => this.ngZone.run(() => this.fileUploadingStatus.emit(status)));
        });
        this.formio.on('submit', (submission, saved) => this.ngZone.run(() => this.submitForm(submission, saved)));
        this.formio.on('error', (err) => this.ngZone.run(() => {
            this.submissionSuccess = false;
            return this.onError(err);
        }));
        this.formio.on('render', () => this.ngZone.run(() => this.render.emit()));
        this.formio.on('formLoad', (loadedForm) => this.ngZone.run(() => this.formLoad.emit(loadedForm)));
        return this.formio.ready.then(() => {
            this.ngZone.run(() => {
                this.isLoading = false;
                this.ready.emit(this);
                this.formioReadyResolve(this.formio);
                if (this.formio.submissionReady) {
                    this.formio.submissionReady.then((submission) => {
                        this.submissionLoad.emit(submission);
                    });
                }
            });
            return this.formio;
        });
    }
    initialize() {
        if (this.initialized) {
            return;
        }
        const extraTags = this.customTags ? this.customTags.tags : [];
        const defaultOptions = {
            errors: {
                message: 'Please fix the following errors before submitting.'
            },
            alerts: {
                submitMessage: 'Submission Complete.'
            },
            disableAlerts: false,
            hooks: {
                beforeSubmit: null
            },
            sanitizeConfig: {
                addTags: extraTags
            },
            alertsPosition: AlertsPosition.top,
        };
        this.options = Object.assign(defaultOptions, this.options);
        if (this.options.disableAlerts) {
            this.options.alertsPosition = AlertsPosition.none;
        }
        this.initialized = true;
    }
    ngOnInit() {
        Evaluator.noeval = this.noeval;
        this.initialize();
        if (this.language) {
            if (typeof this.language === 'string') {
                this.formio.language = this.language;
            }
            else {
                this.language.subscribe((lang) => {
                    this.formio.language = lang;
                });
            }
        }
        if (this.refresh) {
            this.refresh.subscribe((refresh) => this.onRefresh(refresh));
        }
        if (this.error) {
            this.error.subscribe((err) => this.onError(err));
        }
        if (this.success) {
            this.success.subscribe((message) => {
                this.alerts.setAlert({
                    type: 'success',
                    message: message || get(this.options, 'alerts.submitMessage')
                });
            });
        }
        if (this.src) {
            if (!this.service) {
                this.service = new FormioService(this.src);
            }
            this.isLoading = true;
            this.service.loadForm({ params: { live: 1 } }).subscribe((form) => {
                if (form && form.components) {
                    this.ngZone.runOutsideAngular(() => {
                        this.setForm(form);
                    });
                }
                // if a submission is also provided.
                if (isEmpty(this.submission) &&
                    this.service &&
                    this.service.formio.submissionId) {
                    this.service.loadSubmission().subscribe((submission) => {
                        if (this.readOnly) {
                            this.formio.options.readOnly = true;
                        }
                        this.submission = this.formio.submission = submission;
                    }, err => this.onError(err));
                }
            }, err => this.onError(err));
        }
        if (this.url && !this.service) {
            this.service = new FormioService(this.url);
        }
    }
    ngOnDestroy() {
        if (this.formio) {
            this.formio.destroy();
        }
    }
    onRefresh(refresh) {
        this.formioReady.then(() => {
            if (refresh.form) {
                this.formio.setForm(refresh.form).then(() => {
                    if (refresh.submission) {
                        this.formio.setSubmission(refresh.submission);
                    }
                });
            }
            else if (refresh.submission) {
                this.formio.setSubmission(refresh.submission);
            }
            else {
                switch (refresh.property) {
                    case 'submission':
                        this.formio.submission = refresh.value;
                        break;
                    case 'form':
                        this.formio.form = refresh.value;
                        break;
                }
            }
        });
    }
    ngOnChanges(changes) {
        Evaluator.noeval = this.noeval;
        this.initialize();
        if (changes.form && changes.form.currentValue) {
            this.ngZone.runOutsideAngular(() => {
                this.setForm(changes.form.currentValue);
            });
        }
        this.formioReady.then(() => {
            if (changes.submission && changes.submission.currentValue) {
                this.formio.setSubmission(changes.submission.currentValue, {
                    fromSubmission: false,
                });
            }
            if (changes.hideComponents && changes.hideComponents.currentValue) {
                const hiddenComponents = changes.hideComponents.currentValue;
                this.formio.options.hide = hiddenComponents;
                this.formio.everyComponent((component) => {
                    component.options.hide = hiddenComponents;
                    if (hiddenComponents.includes(component.component.key)) {
                        component.visible = false;
                    }
                });
            }
        });
    }
    onPrevPage(data) {
        this.alerts.setAlerts([]);
        this.prevPage.emit(data);
    }
    onNextPage(data) {
        this.alerts.setAlerts([]);
        this.nextPage.emit(data);
    }
    onSubmit(submission, saved, noemit) {
        this.submitting = false;
        this.submissionSuccess = true;
        if (saved) {
            this.formio.emit('submitDone', submission);
        }
        if (!noemit) {
            this.submit.emit(submission);
        }
        if (!this.success) {
            this.alerts.setAlert({
                type: 'success',
                message: get(this.options, 'alerts.submitMessage')
            });
        }
    }
    onError(err) {
        this.alerts.setAlerts([]);
        this.submitting = false;
        this.isLoading = false;
        if (!err) {
            return;
        }
        // Make sure it is an array.
        const errors = Array.isArray(err) ? err : [err];
        // Emit these errors again.
        this.errorChange.emit(errors);
        if (err.silent) {
            return;
        }
        if (this.formio && errors.length) {
            this.formio.emit('submitError', errors);
        }
        // Iterate through each one and set the alerts array.
        errors.forEach((error) => {
            const { message, paths, } = error
                ? error.details
                    ? {
                        message: error.details.map((detail) => detail.message).join(' '),
                        paths: error.details.map((detail) => detail.path),
                    }
                    : {
                        message: error.message || error.toString(),
                        paths: error.path ? [error.path] : [],
                    }
                : {
                    message: '',
                    paths: [],
                };
            this.alerts.addAlert({
                type: 'danger',
                message,
                component: error.component,
            });
            if (this.formio) {
                paths.forEach((path) => {
                    const component = this.formio.getComponent(path);
                    if (component) {
                        const components = Array.isArray(component) ? component : [component];
                        components.forEach((comp) => comp.setCustomValidity(message, true));
                    }
                });
            }
        });
    }
    focusOnComponet(key) {
        if (this.formio) {
            this.formio.focusOnComponent(key);
        }
    }
    submitExecute(submission, saved = false) {
        if (this.service && !this.url && !saved) {
            this.service
                .saveSubmission(submission)
                .subscribe((sub) => this.onSubmit(sub, true), err => this.onError(err));
        }
        else {
            this.onSubmit(submission, false);
        }
    }
    submitForm(submission, saved = false) {
        // Keep double submits from occurring...
        if (this.submitting) {
            return;
        }
        this.submissionSuccess = false;
        this.submitting = true;
        this.beforeSubmit.emit(submission);
        // if they provide a beforeSubmit hook, then allow them to alter the submission asynchronously
        // or even provide a custom Error method.
        const beforeSubmit = get(this.options, 'hooks.beforeSubmit');
        if (beforeSubmit) {
            beforeSubmit(submission, (err, sub) => {
                if (err) {
                    this.onError(err);
                    return;
                }
                this.submitExecute(sub, saved);
            });
        }
        else {
            this.submitExecute(submission, saved);
        }
    }
    onChange(value, flags, isModified) {
        if (this.watchSubmissionErrors && !this.submissionSuccess) {
            const errors = get(this, 'formio.errors', []);
            const alerts = get(this, 'alerts.alerts', []);
            const submitted = get(this, 'formio.submitted', false);
            if (submitted && (errors.length || alerts.length)) {
                this.onError(errors);
            }
        }
        return this.change.emit(Object.assign(Object.assign({}, value), { flags, isModified }));
    }
}
FormioBaseComponent.ɵfac = function FormioBaseComponent_Factory(t) { return new (t || FormioBaseComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.FormioAppConfig, 8), i0.ɵɵdirectiveInject(i2.CustomTagsService, 8)); };
FormioBaseComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioBaseComponent, selectors: [["ng-component"]], viewQuery: function FormioBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formioElement = _t.first);
    } }, inputs: { form: "form", submission: "submission", src: "src", url: "url", service: "service", options: "options", noeval: "noeval", formioOptions: "formioOptions", renderOptions: "renderOptions", readOnly: "readOnly", viewOnly: "viewOnly", hideComponents: "hideComponents", refresh: "refresh", error: "error", success: "success", language: "language", hooks: "hooks", renderer: "renderer", watchSubmissionErrors: "watchSubmissionErrors" }, outputs: { render: "render", customEvent: "customEvent", fileUploadingStatus: "fileUploadingStatus", submit: "submit", prevPage: "prevPage", nextPage: "nextPage", beforeSubmit: "beforeSubmit", change: "change", invalid: "invalid", errorChange: "errorChange", formLoad: "formLoad", submissionLoad: "submissionLoad", ready: "ready" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function FormioBaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioBaseComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i1.FormioAppConfig, decorators: [{
                type: Optional
            }] }, { type: i2.CustomTagsService, decorators: [{
                type: Optional
            }] }]; }, { form: [{
            type: Input
        }], submission: [{
            type: Input
        }], src: [{
            type: Input
        }], url: [{
            type: Input
        }], service: [{
            type: Input
        }], options: [{
            type: Input
        }], noeval: [{
            type: Input
        }], formioOptions: [{
            type: Input
        }], renderOptions: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], viewOnly: [{
            type: Input
        }], hideComponents: [{
            type: Input
        }], refresh: [{
            type: Input
        }], error: [{
            type: Input
        }], success: [{
            type: Input
        }], language: [{
            type: Input
        }], hooks: [{
            type: Input
        }], renderer: [{
            type: Input
        }], watchSubmissionErrors: [{
            type: Input
        }], render: [{
            type: Output
        }], customEvent: [{
            type: Output
        }], fileUploadingStatus: [{
            type: Output
        }], submit: [{
            type: Output
        }], prevPage: [{
            type: Output
        }], nextPage: [{
            type: Output
        }], beforeSubmit: [{
            type: Output
        }], change: [{
            type: Output
        }], invalid: [{
            type: Output
        }], errorChange: [{
            type: Output
        }], formLoad: [{
            type: Output
        }], submissionLoad: [{
            type: Output
        }], ready: [{
            type: Output
        }], formioElement: [{
            type: ViewChild,
            args: ['formio', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWlvQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsiRm9ybWlvQmFzZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXdDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlDLE9BQU8sU0FBUyxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFLekQsTUFBTSxPQUFnQixtQkFBbUI7SUE4Q3ZDLFlBQ1MsTUFBYyxFQUNGLE1BQXVCLEVBQ3ZCLFVBQThCO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDRixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQS9DMUMsZUFBVSxHQUFTLEVBQUUsQ0FBQztRQUt0QixXQUFNLEdBQUssS0FBSyxDQUFDO1FBR2pCLGFBQVEsR0FBSyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFLLEtBQUssQ0FBQztRQU1uQixVQUFLLEdBQVMsRUFBRSxDQUFDO1FBRWpCLDBCQUFxQixHQUFLLEtBQUssQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsd0JBQW1CLEdBQUcs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UTtrQkFBaEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxtQkFBbUI7a0JBQTVCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csS0FBSztrQkFBZCxNQUFNO1lBQ2dDLGFBQWE7a0JBQW5ELFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuL2Zvcm1pby5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb0FsZXJ0cyB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydHMvZm9ybWlvLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICcuL2Zvcm1pby5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWlvRXJyb3IsIEZvcm1pb0Zvcm0sIEZvcm1pb09wdGlvbnMsIEZvcm1pb1JlZnJlc2hWYWx1ZSB9IGZyb20gJy4vZm9ybWlvLmNvbW1vbic7XG5pbXBvcnQgeyBhc3NpZ24sIGdldCwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDdXN0b21UYWdzU2VydmljZSB9IGZyb20gJy4vY3VzdG9tLWNvbXBvbmVudC9jdXN0b20tdGFncy5zZXJ2aWNlJztcbmltcG9ydCBFdmFsdWF0b3IgZnJvbSAnZm9ybWlvanMvdXRpbHMvRXZhbHVhdG9yJztcbmltcG9ydCB7IEFsZXJ0c1Bvc2l0aW9uIH0gZnJvbSAnLi90eXBlcy9hbGVydHMtcG9zaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1pb0Jhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZm9ybT86IEZvcm1pb0Zvcm07XG4gIEBJbnB1dCgpIHN1Ym1pc3Npb24/OiBhbnkgPSB7fTtcbiAgQElucHV0KCkgc3JjPzogc3RyaW5nO1xuICBASW5wdXQoKSB1cmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlcnZpY2U/OiBGb3JtaW9TZXJ2aWNlO1xuICBASW5wdXQoKSBvcHRpb25zPzogRm9ybWlvT3B0aW9ucztcbiAgQElucHV0KCkgbm9ldmFsID8gPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWlvT3B0aW9ucz86IGFueTtcbiAgQElucHV0KCkgcmVuZGVyT3B0aW9ucz86IGFueTtcbiAgQElucHV0KCkgcmVhZE9ubHkgPyA9IGZhbHNlO1xuICBASW5wdXQoKSB2aWV3T25seSA/ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZGVDb21wb25lbnRzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpIHJlZnJlc2g/OiBFdmVudEVtaXR0ZXI8Rm9ybWlvUmVmcmVzaFZhbHVlPjtcbiAgQElucHV0KCkgZXJyb3I/OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgc3VjY2Vzcz86IEV2ZW50RW1pdHRlcjxvYmplY3Q+O1xuICBASW5wdXQoKSBsYW5ndWFnZT86IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICBASW5wdXQoKSBob29rcz86IGFueSA9IHt9O1xuICBASW5wdXQoKSByZW5kZXJlcj86IGFueTtcbiAgQElucHV0KCkgd2F0Y2hTdWJtaXNzaW9uRXJyb3JzID8gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcbiAgQE91dHB1dCgpIGZpbGVVcGxvYWRpbmdTdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuICBAT3V0cHV0KCkgcHJldlBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG4gIEBPdXRwdXQoKSBiZWZvcmVTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuICBAT3V0cHV0KCkgaW52YWxpZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGVycm9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmb3JtTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc3VibWlzc2lvbkxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtaW9CYXNlQ29tcG9uZW50PigpO1xuICBAVmlld0NoaWxkKCdmb3JtaW8nLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtaW9FbGVtZW50PzogRWxlbWVudFJlZjxhbnk+O1xuXG4gIHB1YmxpYyBBbGVydHNQb3NpdGlvbiA9IEFsZXJ0c1Bvc2l0aW9uO1xuICBwdWJsaWMgZm9ybWlvOiBhbnk7XG4gIHB1YmxpYyBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwdWJsaWMgYWxlcnRzID0gbmV3IEZvcm1pb0FsZXJ0cygpO1xuICBwdWJsaWMgZm9ybWlvUmVhZHk6IFByb21pc2U8YW55PjtcblxuICBwcml2YXRlIGZvcm1pb1JlYWR5UmVzb2x2ZTogYW55O1xuICBwcml2YXRlIHN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWJtaXNzaW9uU3VjY2VzcyA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY29uZmlnOiBGb3JtaW9BcHBDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGN1c3RvbVRhZ3M/OiBDdXN0b21UYWdzU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZm9ybWlvUmVhZHkgPSBuZXcgUHJvbWlzZSgocmVhZHkpID0+IHtcbiAgICAgIHRoaXMuZm9ybWlvUmVhZHlSZXNvbHZlID0gcmVhZHk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcbiAgfVxuXG4gIGdldFJlbmRlcmVyT3B0aW9ucygpIHtcbiAgICBjb25zdCBleHRyYVRhZ3MgPSB0aGlzLmN1c3RvbVRhZ3MgPyB0aGlzLmN1c3RvbVRhZ3MudGFncyA6IFtdO1xuICAgIHJldHVybiBhc3NpZ24oe30sIHtcbiAgICAgIGljb25zOiBnZXQodGhpcy5jb25maWcsICdpY29ucycsICdmb250YXdlc29tZScpLFxuICAgICAgbm9BbGVydHM6IGdldCh0aGlzLm9wdGlvbnMsICdub0FsZXJ0cycsIHRydWUpLFxuICAgICAgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksXG4gICAgICB2aWV3QXNIdG1sOiB0aGlzLnZpZXdPbmx5LFxuICAgICAgaTE4bjogZ2V0KHRoaXMub3B0aW9ucywgJ2kxOG4nLCBudWxsKSxcbiAgICAgIGZpbGVTZXJ2aWNlOiBnZXQodGhpcy5vcHRpb25zLCAnZmlsZVNlcnZpY2UnLCBudWxsKSxcbiAgICAgIGhvb2tzOiB0aGlzLmhvb2tzLFxuICAgICAgc2FuaXRpemVDb25maWc6IHtcbiAgICAgICAgYWRkVGFnczogZXh0cmFUYWdzXG4gICAgICB9XG4gICAgfSwgdGhpcy5yZW5kZXJPcHRpb25zIHx8IHt9KTtcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIGNvbnN0IFJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcigpO1xuICAgIGNvbnN0IGZvcm0gPSAobmV3IFJlbmRlcmVyKFxuICAgICAgdGhpcy5mb3JtaW9FbGVtZW50ID8gdGhpcy5mb3JtaW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsLFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgdGhpcy5nZXRSZW5kZXJlck9wdGlvbnMoKVxuICAgICkpO1xuICAgIHJldHVybiBmb3JtLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0Rm9ybShmb3JtOiBGb3JtaW9Gb3JtKSB7XG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICBpZiAodGhpcy5mb3JtaW8pIHtcbiAgICAgIHRoaXMuZm9ybWlvLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gQ2xlYXIgb3V0IHRoZSBlbGVtZW50IHRvIHJlbmRlciB0aGUgbmV3IGZvcm0uXG4gICAgaWYgKHRoaXMuZm9ybWlvRWxlbWVudCAmJiB0aGlzLmZvcm1pb0VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtaW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICAgIHRoaXMuZm9ybWlvID0gdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgIHRoaXMuZm9ybWlvLnN1Ym1pc3Npb24gPSB0aGlzLnN1Ym1pc3Npb247XG4gICAgaWYgKHRoaXMucmVuZGVyT3B0aW9ucyAmJiB0aGlzLnJlbmRlck9wdGlvbnMudmFsaWRhdGVPbkluaXQpIHtcbiAgICAgIHRoaXMuZm9ybWlvLnNldFZhbHVlKHRoaXMuc3VibWlzc2lvbiwge3ZhbGlkYXRlT25Jbml0OiB0cnVlfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5mb3JtaW8uc2V0VXJsKHRoaXMudXJsLCB0aGlzLmZvcm1pb09wdGlvbnMgfHwge30pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuZm9ybWlvLnNldFVybCh0aGlzLnNyYywgdGhpcy5mb3JtaW9PcHRpb25zIHx8IHt9KTtcbiAgICB9XG4gICAgdGhpcy5mb3JtaW8ubm9zdWJtaXQgPSB0cnVlO1xuICAgIHRoaXMuZm9ybWlvLm9uKCdwcmV2UGFnZScsIChkYXRhOiBhbnkpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm9uUHJldlBhZ2UoZGF0YSkpKTtcbiAgICB0aGlzLmZvcm1pby5vbignbmV4dFBhZ2UnLCAoZGF0YTogYW55KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbk5leHRQYWdlKGRhdGEpKSk7XG4gICAgdGhpcy5mb3JtaW8ub24oJ2NoYW5nZScsICh2YWx1ZTogYW55LCBmbGFnczogYW55LCBpc01vZGlmaWVkOiBib29sZWFuKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbkNoYW5nZSh2YWx1ZSwgZmxhZ3MsIGlzTW9kaWZpZWQpKSk7XG4gICAgdGhpcy5mb3JtaW8ub24oJ2N1c3RvbUV2ZW50JywgKGV2ZW50OiBhbnkpID0+XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jdXN0b21FdmVudC5lbWl0KGV2ZW50KSlcbiAgICApO1xuICAgIFsnZmlsZVVwbG9hZGluZ1N0YXJ0JywgJ2ZpbGVVcGxvYWRpbmdFbmQnXS5mb3JFYWNoKChldmVudE5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSAhIWluZGV4ID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgdGhpcy5mb3JtaW8ub24oZXZlbnROYW1lLCAoKSA9PlxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5maWxlVXBsb2FkaW5nU3RhdHVzLmVtaXQoc3RhdHVzKSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtaW8ub24oJ3N1Ym1pdCcsIChzdWJtaXNzaW9uOiBhbnksIHNhdmVkOiBib29sZWFuKSA9PlxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuc3VibWl0Rm9ybShzdWJtaXNzaW9uLCBzYXZlZCkpXG4gICAgKTtcbiAgICB0aGlzLmZvcm1pby5vbignZXJyb3InLCAoZXJyOiBhbnkpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnN1Ym1pc3Npb25TdWNjZXNzID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5vbkVycm9yKGVycik7XG4gICAgfSkpO1xuICAgIHRoaXMuZm9ybWlvLm9uKCdyZW5kZXInLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yZW5kZXIuZW1pdCgpKSk7XG4gICAgdGhpcy5mb3JtaW8ub24oJ2Zvcm1Mb2FkJywgKGxvYWRlZEZvcm06IGFueSkgPT5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmZvcm1Mb2FkLmVtaXQobG9hZGVkRm9ybSkpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmZvcm1pby5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVhZHkuZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb3JtaW9SZWFkeVJlc29sdmUodGhpcy5mb3JtaW8pO1xuICAgICAgICBpZiAodGhpcy5mb3JtaW8uc3VibWlzc2lvblJlYWR5KSB7XG4gICAgICAgICAgdGhpcy5mb3JtaW8uc3VibWlzc2lvblJlYWR5LnRoZW4oKHN1Ym1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWlzc2lvbkxvYWQuZW1pdChzdWJtaXNzaW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtaW87XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXh0cmFUYWdzID0gdGhpcy5jdXN0b21UYWdzID8gdGhpcy5jdXN0b21UYWdzLnRhZ3MgOiBbXTtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogRm9ybWlvT3B0aW9ucyA9IHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGZpeCB0aGUgZm9sbG93aW5nIGVycm9ycyBiZWZvcmUgc3VibWl0dGluZy4nXG4gICAgICB9LFxuICAgICAgYWxlcnRzOiB7XG4gICAgICAgIHN1Ym1pdE1lc3NhZ2U6ICdTdWJtaXNzaW9uIENvbXBsZXRlLidcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlQWxlcnRzOiBmYWxzZSxcbiAgICAgIGhvb2tzOiB7XG4gICAgICAgIGJlZm9yZVN1Ym1pdDogbnVsbFxuICAgICAgfSxcbiAgICAgIHNhbml0aXplQ29uZmlnOiB7XG4gICAgICAgIGFkZFRhZ3M6IGV4dHJhVGFnc1xuICAgICAgfSxcbiAgICAgIGFsZXJ0c1Bvc2l0aW9uOiBBbGVydHNQb3NpdGlvbi50b3AsXG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZUFsZXJ0cykge1xuICAgICAgdGhpcy5vcHRpb25zLmFsZXJ0c1Bvc2l0aW9uID0gQWxlcnRzUG9zaXRpb24ubm9uZTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBFdmFsdWF0b3Iubm9ldmFsID0gdGhpcy5ub2V2YWw7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG5cbiAgICBpZiAodGhpcy5sYW5ndWFnZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmxhbmd1YWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmZvcm1pby5sYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhbmd1YWdlLnN1YnNjcmliZSgobGFuZzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtaW8ubGFuZ3VhZ2UgPSBsYW5nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKChyZWZyZXNoOiBGb3JtaW9SZWZyZXNoVmFsdWUpID0+XG4gICAgICAgIHRoaXMub25SZWZyZXNoKHJlZnJlc2gpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yLnN1YnNjcmliZSgoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3Muc3Vic2NyaWJlKChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5hbGVydHMuc2V0QWxlcnQoe1xuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldCh0aGlzLm9wdGlvbnMsICdhbGVydHMuc3VibWl0TWVzc2FnZScpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgRm9ybWlvU2VydmljZSh0aGlzLnNyYyk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlcnZpY2UubG9hZEZvcm0oeyBwYXJhbXM6IHsgbGl2ZTogMSB9IH0pLnN1YnNjcmliZShcbiAgICAgICAgKGZvcm06IEZvcm1pb0Zvcm0pID0+IHtcbiAgICAgICAgICBpZiAoZm9ybSAmJiBmb3JtLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgYSBzdWJtaXNzaW9uIGlzIGFsc28gcHJvdmlkZWQuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNFbXB0eSh0aGlzLnN1Ym1pc3Npb24pICYmXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5mb3JtaW8uc3VibWlzc2lvbklkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UubG9hZFN1Ym1pc3Npb24oKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChzdWJtaXNzaW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtaW8ub3B0aW9ucy5yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWlzc2lvbiA9IHRoaXMuZm9ybWlvLnN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnIgPT4gdGhpcy5vbkVycm9yKGVycilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4gdGhpcy5vbkVycm9yKGVycilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCAmJiAhdGhpcy5zZXJ2aWNlKSB7XG4gICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgRm9ybWlvU2VydmljZSh0aGlzLnVybCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9ybWlvKSB7XG4gICAgICB0aGlzLmZvcm1pby5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgb25SZWZyZXNoKHJlZnJlc2g6IEZvcm1pb1JlZnJlc2hWYWx1ZSkge1xuICAgIHRoaXMuZm9ybWlvUmVhZHkudGhlbigoKSA9PiB7XG4gICAgICBpZiAocmVmcmVzaC5mb3JtKSB7XG4gICAgICAgIHRoaXMuZm9ybWlvLnNldEZvcm0ocmVmcmVzaC5mb3JtKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAocmVmcmVzaC5zdWJtaXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1pby5zZXRTdWJtaXNzaW9uKHJlZnJlc2guc3VibWlzc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVmcmVzaC5zdWJtaXNzaW9uKSB7XG4gICAgICAgIHRoaXMuZm9ybWlvLnNldFN1Ym1pc3Npb24ocmVmcmVzaC5zdWJtaXNzaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAocmVmcmVzaC5wcm9wZXJ0eSkge1xuICAgICAgICAgIGNhc2UgJ3N1Ym1pc3Npb24nOlxuICAgICAgICAgICAgdGhpcy5mb3JtaW8uc3VibWlzc2lvbiA9IHJlZnJlc2gudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgIHRoaXMuZm9ybWlvLmZvcm0gPSByZWZyZXNoLnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIEV2YWx1YXRvci5ub2V2YWwgPSB0aGlzLm5vZXZhbDtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcblxuICAgIGlmIChjaGFuZ2VzLmZvcm0gJiYgY2hhbmdlcy5mb3JtLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldEZvcm0oY2hhbmdlcy5mb3JtLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm1pb1JlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKGNoYW5nZXMuc3VibWlzc2lvbiAmJiBjaGFuZ2VzLnN1Ym1pc3Npb24uY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm9ybWlvLnNldFN1Ym1pc3Npb24oY2hhbmdlcy5zdWJtaXNzaW9uLmN1cnJlbnRWYWx1ZSwge1xuICAgICAgICAgIGZyb21TdWJtaXNzaW9uOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VzLmhpZGVDb21wb25lbnRzICYmIGNoYW5nZXMuaGlkZUNvbXBvbmVudHMuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbXBvbmVudHMgPSBjaGFuZ2VzLmhpZGVDb21wb25lbnRzLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub3B0aW9ucy5oaWRlID0gaGlkZGVuQ29tcG9uZW50cztcbiAgICAgICAgdGhpcy5mb3JtaW8uZXZlcnlDb21wb25lbnQoKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5vcHRpb25zLmhpZGUgPSBoaWRkZW5Db21wb25lbnRzO1xuICAgICAgICAgIGlmIChoaWRkZW5Db21wb25lbnRzLmluY2x1ZGVzKGNvbXBvbmVudC5jb21wb25lbnQua2V5KSkge1xuICAgICAgICAgICAgY29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25QcmV2UGFnZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmFsZXJ0cy5zZXRBbGVydHMoW10pO1xuICAgIHRoaXMucHJldlBhZ2UuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uTmV4dFBhZ2UoZGF0YTogYW55KSB7XG4gICAgdGhpcy5hbGVydHMuc2V0QWxlcnRzKFtdKTtcbiAgICB0aGlzLm5leHRQYWdlLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblN1Ym1pdChzdWJtaXNzaW9uOiBhbnksIHNhdmVkOiBib29sZWFuLCBub2VtaXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdWJtaXNzaW9uU3VjY2VzcyA9IHRydWU7XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICB0aGlzLmZvcm1pby5lbWl0KCdzdWJtaXREb25lJywgc3VibWlzc2lvbik7XG4gICAgfVxuICAgIGlmICghbm9lbWl0KSB7XG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KHN1Ym1pc3Npb24pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3VjY2Vzcykge1xuICAgICAgdGhpcy5hbGVydHMuc2V0QWxlcnQoe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6IGdldCh0aGlzLm9wdGlvbnMsICdhbGVydHMuc3VibWl0TWVzc2FnZScpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkVycm9yKGVycjogYW55KSB7XG4gICAgdGhpcy5hbGVydHMuc2V0QWxlcnRzKFtdKTtcbiAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKCFlcnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgaXMgYW4gYXJyYXkuXG4gICAgY29uc3QgZXJyb3JzID0gQXJyYXkuaXNBcnJheShlcnIpID8gZXJyIDogW2Vycl07XG5cbiAgICAvLyBFbWl0IHRoZXNlIGVycm9ycyBhZ2Fpbi5cbiAgICB0aGlzLmVycm9yQ2hhbmdlLmVtaXQoZXJyb3JzKTtcblxuICAgIGlmIChlcnIuc2lsZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybWlvICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZm9ybWlvLmVtaXQoJ3N1Ym1pdEVycm9yJywgZXJyb3JzKTtcbiAgICB9XG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBvbmUgYW5kIHNldCB0aGUgYWxlcnRzIGFycmF5LlxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHBhdGhzLFxuICAgICAgfSA9IGVycm9yXG4gICAgICAgID8gZXJyb3IuZGV0YWlsc1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IuZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gZGV0YWlsLm1lc3NhZ2UpLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIHBhdGhzOiBlcnJvci5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiBkZXRhaWwucGF0aCksXG4gICAgICAgICAgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgcGF0aHM6IGVycm9yLnBhdGggPyBbZXJyb3IucGF0aF0gOiBbXSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgIHBhdGhzOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgdGhpcy5hbGVydHMuYWRkQWxlcnQoe1xuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgY29tcG9uZW50OiBlcnJvci5jb21wb25lbnQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZm9ybWlvKSB7XG4gICAgICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmZvcm1pby5nZXRDb21wb25lbnQocGF0aCk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IEFycmF5LmlzQXJyYXkoY29tcG9uZW50KSA/IGNvbXBvbmVudCA6IFtjb21wb25lbnRdO1xuICAgICAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wKSA9PiBjb21wLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UsIHRydWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9jdXNPbkNvbXBvbmV0KGtleTogYW55KSB7XG4gICAgaWYgKHRoaXMuZm9ybWlvKSB7XG4gICAgICB0aGlzLmZvcm1pby5mb2N1c09uQ29tcG9uZW50KGtleSk7XG4gICAgfVxuICB9XG5cbiAgc3VibWl0RXhlY3V0ZShzdWJtaXNzaW9uOiBvYmplY3QsIHNhdmVkID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlICYmICF0aGlzLnVybCAmJiAhc2F2ZWQpIHtcbiAgICAgIHRoaXMuc2VydmljZVxuICAgICAgICAuc2F2ZVN1Ym1pc3Npb24oc3VibWlzc2lvbilcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoc3ViOiB7fSkgPT4gdGhpcy5vblN1Ym1pdChzdWIsIHRydWUpLFxuICAgICAgICAgIGVyciA9PiB0aGlzLm9uRXJyb3IoZXJyKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU3VibWl0KHN1Ym1pc3Npb24sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtKHN1Ym1pc3Npb246IGFueSwgc2F2ZWQgPSBmYWxzZSkge1xuICAgIC8vIEtlZXAgZG91YmxlIHN1Ym1pdHMgZnJvbSBvY2N1cnJpbmcuLi5cbiAgICBpZiAodGhpcy5zdWJtaXR0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3VibWlzc2lvblN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYmVmb3JlU3VibWl0LmVtaXQoc3VibWlzc2lvbik7XG5cbiAgICAvLyBpZiB0aGV5IHByb3ZpZGUgYSBiZWZvcmVTdWJtaXQgaG9vaywgdGhlbiBhbGxvdyB0aGVtIHRvIGFsdGVyIHRoZSBzdWJtaXNzaW9uIGFzeW5jaHJvbm91c2x5XG4gICAgLy8gb3IgZXZlbiBwcm92aWRlIGEgY3VzdG9tIEVycm9yIG1ldGhvZC5cbiAgICBjb25zdCBiZWZvcmVTdWJtaXQgPSBnZXQodGhpcy5vcHRpb25zLCAnaG9va3MuYmVmb3JlU3VibWl0Jyk7XG4gICAgaWYgKGJlZm9yZVN1Ym1pdCkge1xuICAgICAgYmVmb3JlU3VibWl0KHN1Ym1pc3Npb24sIChlcnI6IEZvcm1pb0Vycm9yLCBzdWI6IG9iamVjdCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VibWl0RXhlY3V0ZShzdWIsIHNhdmVkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEV4ZWN1dGUoc3VibWlzc2lvbiwgc2F2ZWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlOiBhbnksIGZsYWdzOiBhbnksIGlzTW9kaWZpZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy53YXRjaFN1Ym1pc3Npb25FcnJvcnMgJiYgIXRoaXMuc3VibWlzc2lvblN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IGdldCh0aGlzLCAnZm9ybWlvLmVycm9ycycsIFtdKTtcbiAgICAgIGNvbnN0IGFsZXJ0cyA9IGdldCh0aGlzLCAnYWxlcnRzLmFsZXJ0cycsIFtdKTtcbiAgICAgIGNvbnN0IHN1Ym1pdHRlZCA9IGdldCh0aGlzLCAnZm9ybWlvLnN1Ym1pdHRlZCcsIGZhbHNlKTtcbiAgICAgIGlmIChzdWJtaXR0ZWQgJiYgKGVycm9ycy5sZW5ndGggfHwgYWxlcnRzLmxlbmd0aCkpIHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoYW5nZS5lbWl0KHsuLi52YWx1ZSwgZmxhZ3MsIGlzTW9kaWZpZWR9KTtcbiAgfVxufVxuIl19