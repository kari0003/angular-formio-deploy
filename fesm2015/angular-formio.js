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
    } }, directives: [NgIf, FormioLoaderComponent, FormioAlertsComponent], styles: ["@import \"/node_modules/formiojs/dist/formio.form.min.css\";.checkbox label,.radio label{min-height:21px}"], encapsulation: 2 });
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
    } }, styles: ["@import \"/node_modules/formiojs/dist/formio.builder.min.css\";"], encapsulation: 2 });
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
