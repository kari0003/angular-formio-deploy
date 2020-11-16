import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdirectiveInject, NgZone, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, Component, Optional, Input, Output, ViewChild, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵtemplate, ɵɵproperty, ɵɵdefinePipe, Pipe, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵclassMapInterpolate1, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵInheritDefinitionFeature, ViewEncapsulation, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Formio, Form, Utils, FormBuilder, Components } from 'formiojs';
export { Components, Formio, Utils as FormioUtils, Templates } from 'formiojs';
import { RouterModule } from '@angular/router';
import { each, assign, get, isEmpty, isArray, isNil, clone } from 'lodash';
import Evaluator from 'formiojs/utils/Evaluator';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

class FormioAppConfig {
    constructor() {
        this.appUrl = '';
        this.apiUrl = '';
    }
}
FormioAppConfig.ɵfac = function FormioAppConfig_Factory(t) { return new (t || FormioAppConfig)(); };
FormioAppConfig.ɵprov = ɵɵdefineInjectable({ token: FormioAppConfig, factory: FormioAppConfig.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAppConfig, [{
        type: Injectable
    }], null, null); })();

class FormioError {
    constructor(message, component, silent) {
        this.message = message;
        this.component = component;
        this.silent = silent;
    }
}

class FormioService {
    constructor(url, options) {
        this.url = url;
        this.options = options;
        this.formio = new Formio(this.url, this.options);
    }
    requestWrapper(fn) {
        let record;
        let called = false;
        return Observable.create((observer) => {
            try {
                if (!called) {
                    called = true;
                    fn()
                        .then((_record) => {
                        record = _record;
                        observer.next(record);
                        observer.complete();
                    })
                        .catch((err) => observer.error(err));
                }
                else if (record) {
                    observer.next(record);
                    observer.complete();
                }
            }
            catch (err) {
                observer.error(err);
            }
        });
    }
    saveForm(form, options) {
        return this.requestWrapper(() => this.formio.saveForm(form, options));
    }
    loadForm(query, options) {
        return this.requestWrapper(() => this.formio.loadForm(query, options));
    }
    loadForms(query, options) {
        return this.requestWrapper(() => this.formio.loadForms(query, options));
    }
    loadSubmission(query, options) {
        return this.requestWrapper(() => this.formio.loadSubmission(query, options));
    }
    userPermissions(user, form, submission) {
        return this.requestWrapper(() => this.formio.userPermissions(user, form, submission));
    }
    deleteSubmission(data, options) {
        return this.requestWrapper(() => this.formio.deleteSubmission(data, options));
    }
    saveSubmission(submission, options) {
        return this.requestWrapper(() => this.formio.saveSubmission(submission, options));
    }
    loadSubmissions(query, options) {
        return this.requestWrapper(() => this.formio.loadSubmissions(query, options));
    }
}

class FormioPromiseService {
    constructor(url, options) {
        this.url = url;
        this.options = options;
        this.formioService = new FormioService(url, options);
    }
    saveForm(form, options) {
        return this.formioService.saveForm(form, options).toPromise();
    }
    loadForm(query, options) {
        return this.formioService.loadForm(query, options).toPromise();
    }
    loadSubmission(query, options) {
        return this.formioService.loadSubmission(query, options).toPromise();
    }
    userPermissions(user, form, submission) {
        return this.formioService.userPermissions(user, form, submission).toPromise();
    }
    deleteSubmission(data, options) {
        return this.formioService.deleteSubmission(data, options).toPromise();
    }
    loadForms(query, options) {
        return this.formioService.loadForms(query, options).toPromise();
    }
    saveSubmission(submission, options) {
        return this.formioService.saveSubmission(submission, options).toPromise();
    }
    loadSubmissions(query, options) {
        return this.formioService.loadSubmissions(query, options).toPromise();
    }
}

function extendRouter(Class, config, ClassRoutes) {
    each(Class.decorators, decorator => {
        each(decorator.args, arg => {
            if (arg.declarations) {
                each(config, component => arg.declarations.push(component));
            }
            if (arg.imports) {
                each(arg.imports, (_import, index) => {
                    if ((_import.ngModule && (_import.ngModule.name === 'RouterModule')) ||
                        (_import.name === 'RouterModule')) {
                        arg.imports[index] = RouterModule.forChild(ClassRoutes(config));
                    }
                });
            }
        });
    });
    return Class;
}

class FormioAlerts {
    constructor() {
        this.alerts = [];
    }
    setAlert(alert) {
        this.alerts = [alert];
    }
    addAlert(alert) {
        this.alerts.push(alert);
    }
    setAlerts(alerts) {
        this.alerts = alerts;
    }
}

var AlertsPosition;
(function (AlertsPosition) {
    AlertsPosition[AlertsPosition["none"] = 0] = "none";
    AlertsPosition[AlertsPosition["top"] = 1] = "top";
    AlertsPosition[AlertsPosition["bottom"] = 2] = "bottom";
    AlertsPosition[AlertsPosition["both"] = 3] = "both";
})(AlertsPosition || (AlertsPosition = {}));

class CustomTagsService {
    constructor() {
        this.tags = [];
    }
    addCustomTag(tag) {
        this.tags.push(tag);
    }
}
CustomTagsService.ɵfac = function CustomTagsService_Factory(t) { return new (t || CustomTagsService)(); };
CustomTagsService.ɵprov = ɵɵdefineInjectable({ token: CustomTagsService, factory: CustomTagsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomTagsService, [{
        type: Injectable
    }], null, null); })();

const _c0 = ["formio"];
class FormioBaseComponent {
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
FormioBaseComponent.ɵfac = function FormioBaseComponent_Factory(t) { return new (t || FormioBaseComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FormioAppConfig, 8), ɵɵdirectiveInject(CustomTagsService, 8)); };
FormioBaseComponent.ɵcmp = ɵɵdefineComponent({ type: FormioBaseComponent, selectors: [["ng-component"]], viewQuery: function FormioBaseComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formioElement = _t.first);
    } }, inputs: { form: "form", submission: "submission", src: "src", url: "url", service: "service", options: "options", noeval: "noeval", formioOptions: "formioOptions", renderOptions: "renderOptions", readOnly: "readOnly", viewOnly: "viewOnly", hideComponents: "hideComponents", refresh: "refresh", error: "error", success: "success", language: "language", hooks: "hooks", renderer: "renderer", watchSubmissionErrors: "watchSubmissionErrors" }, outputs: { render: "render", customEvent: "customEvent", fileUploadingStatus: "fileUploadingStatus", submit: "submit", prevPage: "prevPage", nextPage: "nextPage", beforeSubmit: "beforeSubmit", change: "change", invalid: "invalid", errorChange: "errorChange", formLoad: "formLoad", submissionLoad: "submissionLoad", ready: "ready" }, features: [ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function FormioBaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioBaseComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return [{ type: NgZone }, { type: FormioAppConfig, decorators: [{
                type: Optional
            }] }, { type: CustomTagsService, decorators: [{
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

function FormioLoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "div", 2);
    ɵɵelementEnd();
} }
class FormioLoaderComponent {
}
FormioLoaderComponent.ɵfac = function FormioLoaderComponent_Factory(t) { return new (t || FormioLoaderComponent)(); };
FormioLoaderComponent.ɵcmp = ɵɵdefineComponent({ type: FormioLoaderComponent, selectors: [["formio-loader"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "formio-loader-wrapper", 4, "ngIf"], [1, "formio-loader-wrapper"], [1, "formio-loader"]], template: function FormioLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormioLoaderComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isLoading);
    } }, directives: [NgIf], styles: [".formio-loader-wrapper[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1000}.formio-loader[_ngcontent-%COMP%]{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border:6px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;display:inline-block;height:60px;left:50%;margin-left:-30px;margin-top:-30px;position:absolute;top:50%;width:60px;z-index:10000}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioLoaderComponent, [{
        type: Component,
        args: [{
                selector: 'formio-loader',
                styleUrls: ['./formio.loader.component.scss'],
                templateUrl: './formio.loader.component.html'
            }]
    }], null, { isLoading: [{
            type: Input
        }] }); })();

class ParseHtmlContentPipe {
    /*
      Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
      And then render in template.
    */
    transform(content) {
        const parsedContent = new DOMParser().parseFromString(content, 'text/html').body.childNodes[0];
        return parsedContent.textContent;
    }
}
ParseHtmlContentPipe.ɵfac = function ParseHtmlContentPipe_Factory(t) { return new (t || ParseHtmlContentPipe)(); };
ParseHtmlContentPipe.ɵpipe = ɵɵdefinePipe({ name: "parseHtmlContent", type: ParseHtmlContentPipe, pure: false });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ParseHtmlContentPipe, [{
        type: Pipe,
        args: [{ name: 'parseHtmlContent', pure: false }]
    }], null, null); })();

function FormioAlertsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function FormioAlertsComponent_div_0_Template_div_click_0_listener($event) { ɵɵrestoreView(_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.getComponent($event, alert_r1); });
    ɵɵtext(1);
    ɵɵpipe(2, "parseHtmlContent");
    ɵɵelementEnd();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    ɵɵclassMapInterpolate1("alert alert-", alert_r1.type, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, alert_r1.message), "\n");
} }
class FormioAlertsComponent {
    constructor() {
        this.focusComponent = new EventEmitter();
    }
    ngOnInit() {
        if (!this.alerts) {
            this.alerts = new FormioAlerts();
        }
    }
    getComponent(event, alert) {
        this.focusComponent.emit(alert.component.key);
    }
}
FormioAlertsComponent.ɵfac = function FormioAlertsComponent_Factory(t) { return new (t || FormioAlertsComponent)(); };
FormioAlertsComponent.ɵcmp = ɵɵdefineComponent({ type: FormioAlertsComponent, selectors: [["formio-alerts"]], inputs: { alerts: "alerts" }, outputs: { focusComponent: "focusComponent" }, decls: 1, vars: 1, consts: [["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"]], template: function FormioAlertsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FormioAlertsComponent_div_0_Template, 3, 6, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.alerts.alerts);
    } }, directives: [NgForOf], pipes: [ParseHtmlContentPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAlertsComponent, [{
        type: Component,
        args: [{
                selector: 'formio-alerts',
                templateUrl: './formio.alerts.component.html'
            }]
    }], null, { alerts: [{
            type: Input
        }], focusComponent: [{
            type: Output
        }] }); })();

function FormioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "formio-loader", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("isLoading", ctx_r0.isLoading);
} }
function FormioComponent_formio_alerts_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "formio-alerts", 5);
    ɵɵlistener("focusComponent", function FormioComponent_formio_alerts_2_Template_formio_alerts_focusComponent_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.focusOnComponet($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("alerts", ctx_r1.alerts);
} }
function FormioComponent_formio_alerts_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "formio-alerts", 5);
    ɵɵlistener("focusComponent", function FormioComponent_formio_alerts_5_Template_formio_alerts_focusComponent_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.focusOnComponet($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("alerts", ctx_r3.alerts);
} }
/* tslint:disable */
/* tslint:enable */
class FormioComponent extends FormioBaseComponent {
    constructor(ngZone, config, customTags) {
        super(ngZone, config, customTags);
        this.ngZone = ngZone;
        this.config = config;
        this.customTags = customTags;
        if (this.config) {
            Formio.setBaseUrl(this.config.apiUrl);
            Formio.setProjectUrl(this.config.appUrl);
        }
        else {
            console.warn('You must provide an AppConfig within your application!');
        }
    }
    getRenderer() {
        return this.renderer || Form;
    }
}
FormioComponent.ɵfac = function FormioComponent_Factory(t) { return new (t || FormioComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FormioAppConfig, 8), ɵɵdirectiveInject(CustomTagsService, 8)); };
FormioComponent.ɵcmp = ɵɵdefineComponent({ type: FormioComponent, selectors: [["formio"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 3, consts: [["style", "position:relative;height:200px", 4, "ngIf"], [3, "alerts", "focusComponent", 4, "ngIf"], ["formio", ""], [2, "position", "relative", "height", "200px"], [3, "isLoading"], [3, "alerts", "focusComponent"]], template: function FormioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, FormioComponent_div_1_Template, 2, 1, "div", 0);
        ɵɵtemplate(2, FormioComponent_formio_alerts_2_Template, 1, 1, "formio-alerts", 1);
        ɵɵelement(3, "div", null, 2);
        ɵɵtemplate(5, FormioComponent_formio_alerts_5_Template, 1, 1, "formio-alerts", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isLoading);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.top || ctx.options.alertsPosition === ctx.AlertsPosition.both);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.bottom || ctx.options.alertsPosition === ctx.AlertsPosition.both);
    } }, directives: [NgIf, FormioLoaderComponent, FormioAlertsComponent], styles: ["@charset \"UTF-8\";.choices{font-size:16px;margin-bottom:24px;position:relative}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#eaeaea;cursor:not-allowed;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{background-color:#fff;border-bottom:1px solid #ddd;display:block;margin:0;padding:10px;width:100%}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;border-radius:10em;height:20px;margin-right:25px;margin-top:-10px;opacity:.5;padding:0;position:absolute;right:0;top:50%;width:20px}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\"\"] .choices__button{display:none}.choices[data-type*=select-one]:after{border:5px solid transparent;border-top-color:#333;content:\"\";height:0;margin-top:-2.5px;pointer-events:none;position:absolute;right:11.5px;top:50%;width:0}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{left:0;margin-left:25px;margin-right:0;right:auto}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;border-left:1px solid #008fa1;border-radius:0;display:inline-block;line-height:1;margin:0 -4px 0 8px;opacity:.75;padding-left:16px;position:relative;width:8px}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{background-color:#f9f9f9;border:1px solid #ddd;border-radius:2.5px;display:inline-block;font-size:14px;min-height:44px;overflow:hidden;padding:7.5px 7.5px 3.75px;vertical-align:top;width:100%}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{list-style:none;margin:0;padding-left:0}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-left:16px;padding-right:4px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{background-color:#00bcd4;border:1px solid #00a5bb;border-radius:20px;box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;font-weight:500;margin-bottom:3.75px;margin-right:3.75px;padding:4px 10px;vertical-align:middle;word-break:break-all}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-left:3.75px;margin-right:0}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{background-color:#fff;border:1px solid #ddd;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;margin-top:-1px;overflow:hidden;position:absolute;top:100%;visibility:hidden;width:100%;will-change:visibility;word-break:break-all;z-index:1}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{border-radius:.25rem .25rem 0 0;bottom:100%;margin-bottom:-1px;margin-top:0;top:auto}.choices__list--dropdown .choices__list{-webkit-overflow-scrolling:touch;max-height:300px;overflow:auto;position:relative;will-change:scroll-position}.choices__list--dropdown .choices__item{font-size:14px;padding:10px;position:relative}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{padding-left:100px;padding-right:10px;text-align:right}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{left:10px;right:auto}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;opacity:.5;user-select:none}.choices__heading{border-bottom:1px solid #f7f7f7;color:grey;font-size:12px;font-weight:600;padding:10px}.choices__button{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:transparent;background-position:50%;background-repeat:no-repeat;border:0;cursor:pointer;text-indent:-9999px}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{background-color:#f9f9f9;border:0;border-radius:0;display:inline-block;font-size:14px;margin-bottom:5px;max-width:100%;padding:4px 0 4px 2px;vertical-align:baseline}[dir=rtl] .choices__input{padding-left:0;padding-right:2px}.choices__placeholder{opacity:.5}dialog{background:#fff;border:solid;color:#000;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{bottom:0;left:0;position:fixed;right:0;top:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.formio-form{min-height:80px;position:relative}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{background-color:#f8d7da;border-color:#f5c6cb;color:#721c24}.formio-warning-wrapper{background-color:#fff3cd;border-color:#ffeeba;color:#856404}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{color:inherit;display:block;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{background-color:#fff;min-height:200px}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{background:#1d1d1d;border:none;bottom:0;box-sizing:border-box;color:#ccc;display:none;font-family:Consolas,Menlo,Monaco,Courier New,monospace;font-size:15px;line-height:24px;margin:0;outline:none;padding:20px;position:absolute;top:0;width:100%}.formio-component-tags tags{background-color:#fff}.field-required:after{color:red;content:\" *\"}.glyphicon-spin{-webkit-animation:formio-spin 1s linear infinite;animation:formio-spin 1s linear infinite}@-webkit-keyframes formio-spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes formio-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success:after{content:\"\u2713\";line-height:1;position:relative;right:-4px;top:1px}.formio-component-submit .submit-fail:after{content:\"\u2717\";line-height:1;position:relative;right:-4px;top:1px}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border:1px solid #f4f4f4;border-radius:4px;box-shadow:inset 0 0 5px rgba(0,0,0,.02)}.btn.signature-pad-refresh{left:0;line-height:0;padding:3px;position:absolute;top:0;z-index:1000}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{color:#c3c3c3;text-align:center}.formio-loader{min-height:60px;position:relative}.loader-wrapper{background-color:rgba(0,0,0,.1);bottom:0;left:0;position:absolute;right:0;top:0;z-index:1000}.loader{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border:6px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;display:inline-block;height:60px;left:50%;margin-left:-30px;margin-top:-30px;position:absolute;top:50%;width:60px;z-index:10000}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;line-height:1em;margin-bottom:6px;padding:2px 8px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{overflow:hidden;padding-right:25px;text-overflow:ellipsis;white-space:nowrap}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{float:right;padding-left:5px}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{border-left:unset;border-right:1px solid #008fa1;float:left;margin:0 8px 0 -4px;overflow:hidden;padding-left:unset;padding-right:16px}.formio-component-file .fileSelector{border:2px dashed #ddd;padding:15px;text-align:center}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-left:5px;margin-right:unset}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}.formio-dialog{box-sizing:border-box;color:#666;font-size:.8em}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{-webkit-animation:formio-dialog-fadein .5s;-webkit-overflow-scrolling:touch;animation:formio-dialog-fadein .5s;background:rgba(0,0,0,.4);bottom:0;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:10000}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{-webkit-animation:formio-dialog-fadein .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadein .5s;background:transparent;bottom:0;left:0;margin-right:15px;position:fixed;right:0;top:0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-animation:formio-dialog-fadeout .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadeout .5s}.formio-dialog-content{-webkit-animation:formio-dialog-fadein .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadein .5s;background:#fff;overflow:auto;pointer-events:all}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-fadeout .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{content:\"\u00D7\";cursor:pointer;font-family:Helvetica,Arial,sans-serif}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{background:transparent;border:none;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{background:transparent;color:#bbb;content:\"\u00D7\";display:block;font-size:26px;font-weight:400;line-height:26px;padding:3px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:none}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{clear:both;content:\"\";display:table}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:none}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{color:#999;position:absolute}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;height:1000px;width:100%}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{font-size:1.5em;position:absolute;right:5px;top:6px}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{cursor:pointer;font-weight:400}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-left:-10px;margin-top:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-left:4px;margin-right:unset}.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon,.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{opacity:0;position:absolute;right:0;top:0;transition:opacity .2s linear,visibility 0ms .2s;visibility:hidden}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{opacity:1;transition:visibility 0ms,opacity .2s linear;visibility:visible}.formio-component-modaledit .formio-modaledit-view-container{border:1px solid #ddd;cursor:text;min-height:34px;padding:6px 12px;position:relative}td .formio-component-modaledit .formio-modaledit-view-container{border-style:none;padding:0}.formio-component-modaledit .formio-modaledit-edit{left:0;opacity:0;position:absolute;top:0;transition:opacity .2s linear,visibility 0ms .2s;visibility:hidden}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{opacity:1;transition:visibility 0ms,opacity .2s linear;visibility:visible}.formio-modaledit-dialog .formio-modaledit-close{border-radius:0;position:absolute;right:0;top:100%}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-moz-appearance:none;-webkit-appearance:none;text-indent:1px;text-overflow:\"\"}.datagrid-group-label.collapsed>td,.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{content:\"\u25BE\";display:inline-block;margin:0 5px;vertical-align:middle}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:\"\u25B8\"}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-bottom:10px;margin-top:5px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.formio-component-textarea .alert .ck-editor__editable{color:inherit}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{margin-left:0;position:relative}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{text-align:left;width:100%}.formio-component-modal-wrapper-signature .open-modal-button{font-size:1.4em;height:100%;margin:0;padding:0;text-align:center}.formio-component-content .image{clear:both;display:table;margin:1em auto;text-align:center}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{background-color:#f7f7f7;caption-side:bottom;color:#333;display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.formio-component-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;display:block;margin:1em 0;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;margin-top:-9px;position:absolute;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;border:1px solid rgba(50,50,50,.6);box-sizing:border-box;font:14px/22px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;overflow:auto;z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}div[read-only=true] .formio-component-textarea div[ref=input]{white-space:pre-wrap}.formio-editor-read-only-content img{max-width:100%}.table-responsive[ref=component]{overflow-x:visible}.checkbox label,.radio label{min-height:21px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioComponent, [{
        type: Component,
        args: [{
                selector: 'formio',
                templateUrl: './formio.component.html',
                styleUrls: ['./formio.component.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: NgZone }, { type: FormioAppConfig, decorators: [{
                type: Optional
            }] }, { type: CustomTagsService, decorators: [{
                type: Optional
            }] }]; }, null); })();

const _c0$1 = ["builder"];
/* tslint:disable */
/* tslint:enable */
class FormBuilderComponent {
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
FormBuilderComponent.ɵfac = function FormBuilderComponent_Factory(t) { return new (t || FormBuilderComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FormioAppConfig, 8), ɵɵdirectiveInject(CustomTagsService, 8)); };
FormBuilderComponent.ɵcmp = ɵɵdefineComponent({ type: FormBuilderComponent, selectors: [["form-builder"]], viewQuery: function FormBuilderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.builderElement = _t.first);
    } }, inputs: { form: "form", options: "options", formbuilder: "formbuilder", noeval: "noeval", refresh: "refresh", rebuild: "rebuild" }, outputs: { change: "change" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["builder", ""]], template: function FormBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
    } }, styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormBuilderComponent, [{
        type: Component,
        args: [{
                selector: 'form-builder',
                templateUrl: './formbuilder.component.html',
                styleUrls: ['./formbuilder.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: NgZone }, { type: FormioAppConfig, decorators: [{
                type: Optional
            }] }, { type: CustomTagsService, decorators: [{
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

class FormioModule {
}
FormioModule.ɵmod = ɵɵdefineNgModule({ type: FormioModule });
FormioModule.ɵinj = ɵɵdefineInjector({ factory: function FormioModule_Factory(t) { return new (t || FormioModule)(); }, providers: [
        FormioAlerts,
        CustomTagsService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormioModule, { declarations: [FormioComponent,
        FormBuilderComponent,
        FormioLoaderComponent,
        FormioAlertsComponent,
        ParseHtmlContentPipe], imports: [CommonModule], exports: [FormioComponent,
        FormBuilderComponent,
        FormioLoaderComponent,
        FormioAlertsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FormioComponent,
                    FormBuilderComponent,
                    FormioLoaderComponent,
                    FormioAlertsComponent,
                    ParseHtmlContentPipe
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    FormioComponent,
                    FormBuilderComponent,
                    FormioLoaderComponent,
                    FormioAlertsComponent
                ],
                providers: [
                    FormioAlerts,
                    CustomTagsService
                ],
                entryComponents: [
                    FormioComponent,
                    FormBuilderComponent
                ]
            }]
    }], null, null); })();

// @ts-nocheck
const BaseInputComponent = Components.components.input;
const TextfieldComponent = Components.components.textfield;
function createCustomFormioComponent(customComponentOptions) {
    var _a;
    return _a = class CustomComponent extends BaseInputComponent {
            constructor(component, options, data) {
                super(component, Object.assign(Object.assign({}, options), { sanitizeConfig: {
                        addTags: [customComponentOptions.selector],
                    } }), data);
                this.component = component;
                this.id = Utils.getRandomComponentId();
                this.type = customComponentOptions.type;
                if (customComponentOptions.extraValidators) {
                    this.validators = this.validators.concat(customComponentOptions.extraValidators);
                }
            }
            static schema() {
                return BaseInputComponent.schema(Object.assign(Object.assign({}, customComponentOptions.schema), { type: customComponentOptions.type }));
            }
            get defaultSchema() {
                return CustomComponent.schema();
            }
            get emptyValue() {
                return customComponentOptions.emptyValue || null;
            }
            static get builderInfo() {
                return {
                    title: customComponentOptions.title,
                    group: customComponentOptions.group,
                    icon: customComponentOptions.icon,
                    weight: customComponentOptions.weight,
                    documentation: customComponentOptions.documentation,
                    schema: CustomComponent.schema(),
                };
            }
            elementInfo() {
                const info = super.elementInfo();
                info.type = customComponentOptions.selector;
                info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
                info.attr = Object.assign(Object.assign({}, info.attr), { class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
                 });
                return info;
            }
            get inputInfo() {
                const info = Object.assign({ id: this.key }, this.elementInfo());
                return info;
            }
            renderElement(value, index) {
                const info = this.inputInfo;
                return this.renderTemplate(customComponentOptions.template || 'input', {
                    input: info,
                    value,
                    index
                });
            }
            attach(element) {
                let superAttach = super.attach(element);
                this._customAngularElement = element.querySelector(customComponentOptions.selector);
                // Bind the custom options and the validations to the Angular component's inputs (flattened)
                if (this._customAngularElement) {
                    // To make sure we have working input in IE...
                    // IE doesn't render it properly if it's not visible on the screen
                    // due to the whole structure applied via innerHTML to the parent
                    // so we need to use appendChild
                    if (!this._customAngularElement.getAttribute('ng-version')) {
                        this._customAngularElement.removeAttribute('ref');
                        const newCustomElement = document.createElement(customComponentOptions.selector);
                        newCustomElement.setAttribute('ref', 'input');
                        Object.keys(this.inputInfo.attr).forEach((attr) => {
                            newCustomElement.setAttribute(attr, this.inputInfo.attr[attr]);
                        });
                        this._customAngularElement.appendChild(newCustomElement);
                        this._customAngularElement = newCustomElement;
                        superAttach = super.attach(element);
                    }
                    // Bind customOptions
                    for (const key in this.component.customOptions) {
                        if (this.component.customOptions.hasOwnProperty(key)) {
                            this._customAngularElement[key] = this.component.customOptions[key];
                        }
                    }
                    // Bind validate options
                    for (const key in this.component.validate) {
                        if (this.component.validate.hasOwnProperty(key)) {
                            this._customAngularElement[key] = this.component.validate[key];
                        }
                    }
                    // Bind options explicitly set
                    const fieldOptions = customComponentOptions.fieldOptions;
                    if (isArray(fieldOptions) && fieldOptions.length > 0) {
                        for (const key in fieldOptions) {
                            if (fieldOptions.hasOwnProperty(key)) {
                                this._customAngularElement[fieldOptions[key]] = this.component[fieldOptions[key]];
                            }
                        }
                    }
                    // Attach event listener for emit event
                    this._customAngularElement.addEventListener('formioEvent', (event) => {
                        this.emit(event.detail.eventName, Object.assign(Object.assign({}, event.detail.data), { component: this.component }));
                    });
                    // Ensure we bind the value (if it isn't a multiple-value component with no wrapper)
                    if (!this._customAngularElement.value && !this.component.disableMultiValueWrapper) {
                        this.restoreValue();
                    }
                }
                return superAttach;
            }
            // Add extra option to support multiple value (e.g. datagrid) with single angular component (disableMultiValueWrapper)
            useWrapper() {
                return this.component.hasOwnProperty('multiple') && this.component.multiple && !this.component.disableMultiValueWrapper;
            }
            get defaultValue() {
                let defaultValue = this.emptyValue;
                // handle falsy default value
                if (!isNil(this.component.defaultValue)) {
                    defaultValue = this.component.defaultValue;
                }
                if (this.component.customDefaultValue && !this.options.preview) {
                    defaultValue = this.evaluate(this.component.customDefaultValue, { value: '' }, 'value');
                }
                return clone(defaultValue);
            }
        },
        _a.editForm = customComponentOptions.editForm || TextfieldComponent.editForm,
        _a;
}

function registerCustomTag(tag, injector) {
    injector.get(CustomTagsService).addCustomTag(tag);
}
function registerCustomTags(tags, injector) {
    tags.forEach(tag => registerCustomTag(tag, injector));
}
function registerCustomFormioComponent(options, angularComponent, injector) {
    registerCustomTag(options.selector, injector);
    const complexCustomComponent = createCustomElement(angularComponent, { injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, createCustomFormioComponent(options));
}
function registerCustomFormioComponentWithClass(options, angularComponent, formioClass, injector) {
    registerCustomTag(options.selector, injector);
    const complexCustomComponent = createCustomElement(angularComponent, { injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, formioClass);
}

/*
 * Public API Surface of angular-formio
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormBuilderComponent, FormioAlerts, FormioAlertsComponent, FormioAppConfig, FormioBaseComponent, FormioComponent, FormioError, FormioLoaderComponent, FormioModule, FormioPromiseService, FormioService, createCustomFormioComponent, extendRouter, registerCustomFormioComponent, registerCustomFormioComponentWithClass, registerCustomTag, registerCustomTags };
//# sourceMappingURL=angular-formio.js.map
