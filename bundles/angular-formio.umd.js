(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('formiojs'), require('@angular/router'), require('lodash'), require('formiojs/utils/Evaluator'), require('@angular/common'), require('@angular/elements')) :
    typeof define === 'function' && define.amd ? define('angular-formio', ['exports', '@angular/core', 'rxjs', 'formiojs', '@angular/router', 'lodash', 'formiojs/utils/Evaluator', '@angular/common', '@angular/elements'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-formio'] = {}, global.ng.core, global.rxjs, global.formiojs, global.ng.router, global._, global.Evaluator, global.ng.common, global.ng.elements));
}(this, (function (exports, i0, rxjs, formiojs, router, lodash, Evaluator, i1, elements) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Evaluator__default = /*#__PURE__*/_interopDefaultLegacy(Evaluator);

    var FormioAppConfig = /** @class */ (function () {
        function FormioAppConfig() {
            this.appUrl = '';
            this.apiUrl = '';
        }
        return FormioAppConfig;
    }());
    FormioAppConfig.ɵfac = function FormioAppConfig_Factory(t) { return new (t || FormioAppConfig)(); };
    FormioAppConfig.ɵprov = i0.ɵɵdefineInjectable({ token: FormioAppConfig, factory: FormioAppConfig.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAppConfig, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FormioError = /** @class */ (function () {
        function FormioError(message, component, silent) {
            this.message = message;
            this.component = component;
            this.silent = silent;
        }
        return FormioError;
    }());

    var FormioService = /** @class */ (function () {
        function FormioService(url, options) {
            this.url = url;
            this.options = options;
            this.formio = new formiojs.Formio(this.url, this.options);
        }
        FormioService.prototype.requestWrapper = function (fn) {
            var record;
            var called = false;
            return rxjs.Observable.create(function (observer) {
                try {
                    if (!called) {
                        called = true;
                        fn()
                            .then(function (_record) {
                            record = _record;
                            observer.next(record);
                            observer.complete();
                        })
                            .catch(function (err) { return observer.error(err); });
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
        };
        FormioService.prototype.saveForm = function (form, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.saveForm(form, options); });
        };
        FormioService.prototype.loadForm = function (query, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.loadForm(query, options); });
        };
        FormioService.prototype.loadForms = function (query, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.loadForms(query, options); });
        };
        FormioService.prototype.loadSubmission = function (query, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.loadSubmission(query, options); });
        };
        FormioService.prototype.userPermissions = function (user, form, submission) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.userPermissions(user, form, submission); });
        };
        FormioService.prototype.deleteSubmission = function (data, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.deleteSubmission(data, options); });
        };
        FormioService.prototype.saveSubmission = function (submission, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.saveSubmission(submission, options); });
        };
        FormioService.prototype.loadSubmissions = function (query, options) {
            var _this = this;
            return this.requestWrapper(function () { return _this.formio.loadSubmissions(query, options); });
        };
        return FormioService;
    }());

    var FormioPromiseService = /** @class */ (function () {
        function FormioPromiseService(url, options) {
            this.url = url;
            this.options = options;
            this.formioService = new FormioService(url, options);
        }
        FormioPromiseService.prototype.saveForm = function (form, options) {
            return this.formioService.saveForm(form, options).toPromise();
        };
        FormioPromiseService.prototype.loadForm = function (query, options) {
            return this.formioService.loadForm(query, options).toPromise();
        };
        FormioPromiseService.prototype.loadSubmission = function (query, options) {
            return this.formioService.loadSubmission(query, options).toPromise();
        };
        FormioPromiseService.prototype.userPermissions = function (user, form, submission) {
            return this.formioService.userPermissions(user, form, submission).toPromise();
        };
        FormioPromiseService.prototype.deleteSubmission = function (data, options) {
            return this.formioService.deleteSubmission(data, options).toPromise();
        };
        FormioPromiseService.prototype.loadForms = function (query, options) {
            return this.formioService.loadForms(query, options).toPromise();
        };
        FormioPromiseService.prototype.saveSubmission = function (submission, options) {
            return this.formioService.saveSubmission(submission, options).toPromise();
        };
        FormioPromiseService.prototype.loadSubmissions = function (query, options) {
            return this.formioService.loadSubmissions(query, options).toPromise();
        };
        return FormioPromiseService;
    }());

    function extendRouter(Class, config, ClassRoutes) {
        lodash.each(Class.decorators, function (decorator) {
            lodash.each(decorator.args, function (arg) {
                if (arg.declarations) {
                    lodash.each(config, function (component) { return arg.declarations.push(component); });
                }
                if (arg.imports) {
                    lodash.each(arg.imports, function (_import, index) {
                        if ((_import.ngModule && (_import.ngModule.name === 'RouterModule')) ||
                            (_import.name === 'RouterModule')) {
                            arg.imports[index] = router.RouterModule.forChild(ClassRoutes(config));
                        }
                    });
                }
            });
        });
        return Class;
    }

    var FormioAlerts = /** @class */ (function () {
        function FormioAlerts() {
            this.alerts = [];
        }
        FormioAlerts.prototype.setAlert = function (alert) {
            this.alerts = [alert];
        };
        FormioAlerts.prototype.addAlert = function (alert) {
            this.alerts.push(alert);
        };
        FormioAlerts.prototype.setAlerts = function (alerts) {
            this.alerts = alerts;
        };
        return FormioAlerts;
    }());

    var AlertsPosition;
    (function (AlertsPosition) {
        AlertsPosition[AlertsPosition["none"] = 0] = "none";
        AlertsPosition[AlertsPosition["top"] = 1] = "top";
        AlertsPosition[AlertsPosition["bottom"] = 2] = "bottom";
        AlertsPosition[AlertsPosition["both"] = 3] = "both";
    })(AlertsPosition || (AlertsPosition = {}));

    var CustomTagsService = /** @class */ (function () {
        function CustomTagsService() {
            this.tags = [];
        }
        CustomTagsService.prototype.addCustomTag = function (tag) {
            this.tags.push(tag);
        };
        return CustomTagsService;
    }());
    CustomTagsService.ɵfac = function CustomTagsService_Factory(t) { return new (t || CustomTagsService)(); };
    CustomTagsService.ɵprov = i0.ɵɵdefineInjectable({ token: CustomTagsService, factory: CustomTagsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CustomTagsService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0 = ["formio"];
    var FormioBaseComponent = /** @class */ (function () {
        function FormioBaseComponent(ngZone, config, customTags) {
            var _this = this;
            this.ngZone = ngZone;
            this.config = config;
            this.customTags = customTags;
            this.submission = {};
            this.noeval = false;
            this.readOnly = false;
            this.viewOnly = false;
            this.hooks = {};
            this.watchSubmissionErrors = false;
            this.render = new i0.EventEmitter();
            this.customEvent = new i0.EventEmitter();
            this.fileUploadingStatus = new i0.EventEmitter();
            this.submit = new i0.EventEmitter();
            this.prevPage = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.beforeSubmit = new i0.EventEmitter();
            this.change = new i0.EventEmitter();
            this.invalid = new i0.EventEmitter();
            this.errorChange = new i0.EventEmitter();
            this.formLoad = new i0.EventEmitter();
            this.submissionLoad = new i0.EventEmitter();
            this.ready = new i0.EventEmitter();
            this.AlertsPosition = AlertsPosition;
            this.initialized = false;
            this.alerts = new FormioAlerts();
            this.submitting = false;
            this.submissionSuccess = false;
            this.isLoading = true;
            this.formioReady = new Promise(function (ready) {
                _this.formioReadyResolve = ready;
            });
        }
        FormioBaseComponent.prototype.getRenderer = function () {
            return this.renderer;
        };
        FormioBaseComponent.prototype.getRendererOptions = function () {
            var extraTags = this.customTags ? this.customTags.tags : [];
            return lodash.assign({}, {
                icons: lodash.get(this.config, 'icons', 'fontawesome'),
                noAlerts: lodash.get(this.options, 'noAlerts', true),
                readOnly: this.readOnly,
                viewAsHtml: this.viewOnly,
                i18n: lodash.get(this.options, 'i18n', null),
                fileService: lodash.get(this.options, 'fileService', null),
                hooks: this.hooks,
                sanitizeConfig: {
                    addTags: extraTags
                }
            }, this.renderOptions || {});
        };
        FormioBaseComponent.prototype.createRenderer = function () {
            var Renderer = this.getRenderer();
            var form = (new Renderer(this.formioElement ? this.formioElement.nativeElement : null, this.form, this.getRendererOptions()));
            return form.instance;
        };
        FormioBaseComponent.prototype.setForm = function (form) {
            var _this = this;
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
            this.formio.on('prevPage', function (data) { return _this.ngZone.run(function () { return _this.onPrevPage(data); }); });
            this.formio.on('nextPage', function (data) { return _this.ngZone.run(function () { return _this.onNextPage(data); }); });
            this.formio.on('change', function (value, flags, isModified) { return _this.ngZone.run(function () { return _this.onChange(value, flags, isModified); }); });
            this.formio.on('customEvent', function (event) { return _this.ngZone.run(function () { return _this.customEvent.emit(event); }); });
            ['fileUploadingStart', 'fileUploadingEnd'].forEach(function (eventName, index) {
                var status = !!index ? 'end' : 'start';
                _this.formio.on(eventName, function () { return _this.ngZone.run(function () { return _this.fileUploadingStatus.emit(status); }); });
            });
            this.formio.on('submit', function (submission, saved) { return _this.ngZone.run(function () { return _this.submitForm(submission, saved); }); });
            this.formio.on('error', function (err) { return _this.ngZone.run(function () {
                _this.submissionSuccess = false;
                return _this.onError(err);
            }); });
            this.formio.on('render', function () { return _this.ngZone.run(function () { return _this.render.emit(); }); });
            this.formio.on('formLoad', function (loadedForm) { return _this.ngZone.run(function () { return _this.formLoad.emit(loadedForm); }); });
            return this.formio.ready.then(function () {
                _this.ngZone.run(function () {
                    _this.isLoading = false;
                    _this.ready.emit(_this);
                    _this.formioReadyResolve(_this.formio);
                    if (_this.formio.submissionReady) {
                        _this.formio.submissionReady.then(function (submission) {
                            _this.submissionLoad.emit(submission);
                        });
                    }
                });
                return _this.formio;
            });
        };
        FormioBaseComponent.prototype.initialize = function () {
            if (this.initialized) {
                return;
            }
            var extraTags = this.customTags ? this.customTags.tags : [];
            var defaultOptions = {
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
        };
        FormioBaseComponent.prototype.ngOnInit = function () {
            var _this = this;
            Evaluator__default['default'].noeval = this.noeval;
            this.initialize();
            if (this.language) {
                if (typeof this.language === 'string') {
                    this.formio.language = this.language;
                }
                else {
                    this.language.subscribe(function (lang) {
                        _this.formio.language = lang;
                    });
                }
            }
            if (this.refresh) {
                this.refresh.subscribe(function (refresh) { return _this.onRefresh(refresh); });
            }
            if (this.error) {
                this.error.subscribe(function (err) { return _this.onError(err); });
            }
            if (this.success) {
                this.success.subscribe(function (message) {
                    _this.alerts.setAlert({
                        type: 'success',
                        message: message || lodash.get(_this.options, 'alerts.submitMessage')
                    });
                });
            }
            if (this.src) {
                if (!this.service) {
                    this.service = new FormioService(this.src);
                }
                this.isLoading = true;
                this.service.loadForm({ params: { live: 1 } }).subscribe(function (form) {
                    if (form && form.components) {
                        _this.ngZone.runOutsideAngular(function () {
                            _this.setForm(form);
                        });
                    }
                    // if a submission is also provided.
                    if (lodash.isEmpty(_this.submission) &&
                        _this.service &&
                        _this.service.formio.submissionId) {
                        _this.service.loadSubmission().subscribe(function (submission) {
                            if (_this.readOnly) {
                                _this.formio.options.readOnly = true;
                            }
                            _this.submission = _this.formio.submission = submission;
                        }, function (err) { return _this.onError(err); });
                    }
                }, function (err) { return _this.onError(err); });
            }
            if (this.url && !this.service) {
                this.service = new FormioService(this.url);
            }
        };
        FormioBaseComponent.prototype.ngOnDestroy = function () {
            if (this.formio) {
                this.formio.destroy();
            }
        };
        FormioBaseComponent.prototype.onRefresh = function (refresh) {
            var _this = this;
            this.formioReady.then(function () {
                if (refresh.form) {
                    _this.formio.setForm(refresh.form).then(function () {
                        if (refresh.submission) {
                            _this.formio.setSubmission(refresh.submission);
                        }
                    });
                }
                else if (refresh.submission) {
                    _this.formio.setSubmission(refresh.submission);
                }
                else {
                    switch (refresh.property) {
                        case 'submission':
                            _this.formio.submission = refresh.value;
                            break;
                        case 'form':
                            _this.formio.form = refresh.value;
                            break;
                    }
                }
            });
        };
        FormioBaseComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            Evaluator__default['default'].noeval = this.noeval;
            this.initialize();
            if (changes.form && changes.form.currentValue) {
                this.ngZone.runOutsideAngular(function () {
                    _this.setForm(changes.form.currentValue);
                });
            }
            this.formioReady.then(function () {
                if (changes.submission && changes.submission.currentValue) {
                    _this.formio.setSubmission(changes.submission.currentValue, {
                        fromSubmission: false,
                    });
                }
                if (changes.hideComponents && changes.hideComponents.currentValue) {
                    var hiddenComponents_1 = changes.hideComponents.currentValue;
                    _this.formio.options.hide = hiddenComponents_1;
                    _this.formio.everyComponent(function (component) {
                        component.options.hide = hiddenComponents_1;
                        if (hiddenComponents_1.includes(component.component.key)) {
                            component.visible = false;
                        }
                    });
                }
            });
        };
        FormioBaseComponent.prototype.onPrevPage = function (data) {
            this.alerts.setAlerts([]);
            this.prevPage.emit(data);
        };
        FormioBaseComponent.prototype.onNextPage = function (data) {
            this.alerts.setAlerts([]);
            this.nextPage.emit(data);
        };
        FormioBaseComponent.prototype.onSubmit = function (submission, saved, noemit) {
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
                    message: lodash.get(this.options, 'alerts.submitMessage')
                });
            }
        };
        FormioBaseComponent.prototype.onError = function (err) {
            var _this = this;
            this.alerts.setAlerts([]);
            this.submitting = false;
            this.isLoading = false;
            if (!err) {
                return;
            }
            // Make sure it is an array.
            var errors = Array.isArray(err) ? err : [err];
            // Emit these errors again.
            this.errorChange.emit(errors);
            if (err.silent) {
                return;
            }
            if (this.formio && errors.length) {
                this.formio.emit('submitError', errors);
            }
            // Iterate through each one and set the alerts array.
            errors.forEach(function (error) {
                var _a = error
                    ? error.details
                        ? {
                            message: error.details.map(function (detail) { return detail.message; }).join(' '),
                            paths: error.details.map(function (detail) { return detail.path; }),
                        }
                        : {
                            message: error.message || error.toString(),
                            paths: error.path ? [error.path] : [],
                        }
                    : {
                        message: '',
                        paths: [],
                    }, message = _a.message, paths = _a.paths;
                _this.alerts.addAlert({
                    type: 'danger',
                    message: message,
                    component: error.component,
                });
                if (_this.formio) {
                    paths.forEach(function (path) {
                        var component = _this.formio.getComponent(path);
                        if (component) {
                            var components = Array.isArray(component) ? component : [component];
                            components.forEach(function (comp) { return comp.setCustomValidity(message, true); });
                        }
                    });
                }
            });
        };
        FormioBaseComponent.prototype.focusOnComponet = function (key) {
            if (this.formio) {
                this.formio.focusOnComponent(key);
            }
        };
        FormioBaseComponent.prototype.submitExecute = function (submission, saved) {
            var _this = this;
            if (saved === void 0) { saved = false; }
            if (this.service && !this.url && !saved) {
                this.service
                    .saveSubmission(submission)
                    .subscribe(function (sub) { return _this.onSubmit(sub, true); }, function (err) { return _this.onError(err); });
            }
            else {
                this.onSubmit(submission, false);
            }
        };
        FormioBaseComponent.prototype.submitForm = function (submission, saved) {
            var _this = this;
            if (saved === void 0) { saved = false; }
            // Keep double submits from occurring...
            if (this.submitting) {
                return;
            }
            this.submissionSuccess = false;
            this.submitting = true;
            this.beforeSubmit.emit(submission);
            // if they provide a beforeSubmit hook, then allow them to alter the submission asynchronously
            // or even provide a custom Error method.
            var beforeSubmit = lodash.get(this.options, 'hooks.beforeSubmit');
            if (beforeSubmit) {
                beforeSubmit(submission, function (err, sub) {
                    if (err) {
                        _this.onError(err);
                        return;
                    }
                    _this.submitExecute(sub, saved);
                });
            }
            else {
                this.submitExecute(submission, saved);
            }
        };
        FormioBaseComponent.prototype.onChange = function (value, flags, isModified) {
            if (this.watchSubmissionErrors && !this.submissionSuccess) {
                var errors = lodash.get(this, 'formio.errors', []);
                var alerts = lodash.get(this, 'alerts.alerts', []);
                var submitted = lodash.get(this, 'formio.submitted', false);
                if (submitted && (errors.length || alerts.length)) {
                    this.onError(errors);
                }
            }
            return this.change.emit(Object.assign(Object.assign({}, value), { flags: flags, isModified: isModified }));
        };
        return FormioBaseComponent;
    }());
    FormioBaseComponent.ɵfac = function FormioBaseComponent_Factory(t) { return new (t || FormioBaseComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(FormioAppConfig, 8), i0.ɵɵdirectiveInject(CustomTagsService, 8)); };
    FormioBaseComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioBaseComponent, selectors: [["ng-component"]], viewQuery: function FormioBaseComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formioElement = _t.first);
            }
        }, inputs: { form: "form", submission: "submission", src: "src", url: "url", service: "service", options: "options", noeval: "noeval", formioOptions: "formioOptions", renderOptions: "renderOptions", readOnly: "readOnly", viewOnly: "viewOnly", hideComponents: "hideComponents", refresh: "refresh", error: "error", success: "success", language: "language", hooks: "hooks", renderer: "renderer", watchSubmissionErrors: "watchSubmissionErrors" }, outputs: { render: "render", customEvent: "customEvent", fileUploadingStatus: "fileUploadingStatus", submit: "submit", prevPage: "prevPage", nextPage: "nextPage", beforeSubmit: "beforeSubmit", change: "change", invalid: "invalid", errorChange: "errorChange", formLoad: "formLoad", submissionLoad: "submissionLoad", ready: "ready" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function FormioBaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioBaseComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], function () {
            return [{ type: i0.NgZone }, { type: FormioAppConfig, decorators: [{
                            type: i0.Optional
                        }] }, { type: CustomTagsService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { form: [{
                    type: i0.Input
                }], submission: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], url: [{
                    type: i0.Input
                }], service: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], noeval: [{
                    type: i0.Input
                }], formioOptions: [{
                    type: i0.Input
                }], renderOptions: [{
                    type: i0.Input
                }], readOnly: [{
                    type: i0.Input
                }], viewOnly: [{
                    type: i0.Input
                }], hideComponents: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], error: [{
                    type: i0.Input
                }], success: [{
                    type: i0.Input
                }], language: [{
                    type: i0.Input
                }], hooks: [{
                    type: i0.Input
                }], renderer: [{
                    type: i0.Input
                }], watchSubmissionErrors: [{
                    type: i0.Input
                }], render: [{
                    type: i0.Output
                }], customEvent: [{
                    type: i0.Output
                }], fileUploadingStatus: [{
                    type: i0.Output
                }], submit: [{
                    type: i0.Output
                }], prevPage: [{
                    type: i0.Output
                }], nextPage: [{
                    type: i0.Output
                }], beforeSubmit: [{
                    type: i0.Output
                }], change: [{
                    type: i0.Output
                }], invalid: [{
                    type: i0.Output
                }], errorChange: [{
                    type: i0.Output
                }], formLoad: [{
                    type: i0.Output
                }], submissionLoad: [{
                    type: i0.Output
                }], ready: [{
                    type: i0.Output
                }], formioElement: [{
                    type: i0.ViewChild,
                    args: ['formio', { static: true }]
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function FormioLoaderComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelement(1, "div", 2);
            i0.ɵɵelementEnd();
        }
    }
    var FormioLoaderComponent = /** @class */ (function () {
        function FormioLoaderComponent() {
        }
        return FormioLoaderComponent;
    }());
    FormioLoaderComponent.ɵfac = function FormioLoaderComponent_Factory(t) { return new (t || FormioLoaderComponent)(); };
    FormioLoaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioLoaderComponent, selectors: [["formio-loader"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "formio-loader-wrapper", 4, "ngIf"], [1, "formio-loader-wrapper"], [1, "formio-loader"]], template: function FormioLoaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormioLoaderComponent_div_0_Template, 2, 0, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isLoading);
            }
        }, directives: [i1.NgIf], styles: [".formio-loader-wrapper[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1000}.formio-loader[_ngcontent-%COMP%]{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border:6px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;display:inline-block;height:60px;left:50%;margin-left:-30px;margin-top:-30px;position:absolute;top:50%;width:60px;z-index:10000}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioLoaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'formio-loader',
                        styleUrls: ['./formio.loader.component.scss'],
                        templateUrl: './formio.loader.component.html'
                    }]
            }], null, { isLoading: [{
                    type: i0.Input
                }] });
    })();

    var ParseHtmlContentPipe = /** @class */ (function () {
        function ParseHtmlContentPipe() {
        }
        /*
          Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
          And then render in template.
        */
        ParseHtmlContentPipe.prototype.transform = function (content) {
            var parsedContent = new DOMParser().parseFromString(content, 'text/html').body.childNodes[0];
            return parsedContent.textContent;
        };
        return ParseHtmlContentPipe;
    }());
    ParseHtmlContentPipe.ɵfac = function ParseHtmlContentPipe_Factory(t) { return new (t || ParseHtmlContentPipe)(); };
    ParseHtmlContentPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "parseHtmlContent", type: ParseHtmlContentPipe, pure: false });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ParseHtmlContentPipe, [{
                type: i0.Pipe,
                args: [{ name: 'parseHtmlContent', pure: false }]
            }], null, null);
    })();

    function FormioAlertsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵlistener("click", function FormioAlertsComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var alert_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.getComponent($event, alert_r1); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "parseHtmlContent");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var alert_r1 = ctx.$implicit;
            i0.ɵɵclassMapInterpolate1("alert alert-", alert_r1.type, "");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, alert_r1.message), "\n");
        }
    }
    var FormioAlertsComponent = /** @class */ (function () {
        function FormioAlertsComponent() {
            this.focusComponent = new i0.EventEmitter();
        }
        FormioAlertsComponent.prototype.ngOnInit = function () {
            if (!this.alerts) {
                this.alerts = new FormioAlerts();
            }
        };
        FormioAlertsComponent.prototype.getComponent = function (event, alert) {
            this.focusComponent.emit(alert.component.key);
        };
        return FormioAlertsComponent;
    }());
    FormioAlertsComponent.ɵfac = function FormioAlertsComponent_Factory(t) { return new (t || FormioAlertsComponent)(); };
    FormioAlertsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAlertsComponent, selectors: [["formio-alerts"]], inputs: { alerts: "alerts" }, outputs: { focusComponent: "focusComponent" }, decls: 1, vars: 1, consts: [["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"]], template: function FormioAlertsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FormioAlertsComponent_div_0_Template, 3, 6, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.alerts.alerts);
            }
        }, directives: [i1.NgForOf], pipes: [ParseHtmlContentPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAlertsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'formio-alerts',
                        templateUrl: './formio.alerts.component.html'
                    }]
            }], null, { alerts: [{
                    type: i0.Input
                }], focusComponent: [{
                    type: i0.Output
                }] });
    })();

    function FormioComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelement(1, "formio-loader", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("isLoading", ctx_r0.isLoading);
        }
    }
    function FormioComponent_formio_alerts_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "formio-alerts", 5);
            i0.ɵɵlistener("focusComponent", function FormioComponent_formio_alerts_2_Template_formio_alerts_focusComponent_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.focusOnComponet($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("alerts", ctx_r1.alerts);
        }
    }
    function FormioComponent_formio_alerts_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "formio-alerts", 5);
            i0.ɵɵlistener("focusComponent", function FormioComponent_formio_alerts_5_Template_formio_alerts_focusComponent_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.focusOnComponet($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("alerts", ctx_r3.alerts);
        }
    }
    /* tslint:disable */
    /* tslint:enable */
    var FormioComponent = /** @class */ (function (_super) {
        __extends(FormioComponent, _super);
        function FormioComponent(ngZone, config, customTags) {
            var _this = _super.call(this, ngZone, config, customTags) || this;
            _this.ngZone = ngZone;
            _this.config = config;
            _this.customTags = customTags;
            if (_this.config) {
                formiojs.Formio.setBaseUrl(_this.config.apiUrl);
                formiojs.Formio.setProjectUrl(_this.config.appUrl);
            }
            else {
                console.warn('You must provide an AppConfig within your application!');
            }
            return _this;
        }
        FormioComponent.prototype.getRenderer = function () {
            return this.renderer || formiojs.Form;
        };
        return FormioComponent;
    }(FormioBaseComponent));
    FormioComponent.ɵfac = function FormioComponent_Factory(t) { return new (t || FormioComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(FormioAppConfig, 8), i0.ɵɵdirectiveInject(CustomTagsService, 8)); };
    FormioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioComponent, selectors: [["formio"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 3, consts: [["style", "position:relative;height:200px", 4, "ngIf"], [3, "alerts", "focusComponent", 4, "ngIf"], ["formio", ""], [2, "position", "relative", "height", "200px"], [3, "isLoading"], [3, "alerts", "focusComponent"]], template: function FormioComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵtemplate(1, FormioComponent_div_1_Template, 2, 1, "div", 0);
                i0.ɵɵtemplate(2, FormioComponent_formio_alerts_2_Template, 1, 1, "formio-alerts", 1);
                i0.ɵɵelement(3, "div", null, 2);
                i0.ɵɵtemplate(5, FormioComponent_formio_alerts_5_Template, 1, 1, "formio-alerts", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isLoading);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.top || ctx.options.alertsPosition === ctx.AlertsPosition.both);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.bottom || ctx.options.alertsPosition === ctx.AlertsPosition.both);
            }
        }, directives: [i1.NgIf, FormioLoaderComponent, FormioAlertsComponent], styles: ["@charset \"UTF-8\";.choices{font-size:16px;margin-bottom:24px;position:relative}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#eaeaea;cursor:not-allowed;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{background-color:#fff;border-bottom:1px solid #ddd;display:block;margin:0;padding:10px;width:100%}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;border-radius:10em;height:20px;margin-right:25px;margin-top:-10px;opacity:.5;padding:0;position:absolute;right:0;top:50%;width:20px}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\"\"] .choices__button{display:none}.choices[data-type*=select-one]:after{border:5px solid transparent;border-top-color:#333;content:\"\";height:0;margin-top:-2.5px;pointer-events:none;position:absolute;right:11.5px;top:50%;width:0}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{left:0;margin-left:25px;margin-right:0;right:auto}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;border-left:1px solid #008fa1;border-radius:0;display:inline-block;line-height:1;margin:0 -4px 0 8px;opacity:.75;padding-left:16px;position:relative;width:8px}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{background-color:#f9f9f9;border:1px solid #ddd;border-radius:2.5px;display:inline-block;font-size:14px;min-height:44px;overflow:hidden;padding:7.5px 7.5px 3.75px;vertical-align:top;width:100%}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{list-style:none;margin:0;padding-left:0}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-left:16px;padding-right:4px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{background-color:#00bcd4;border:1px solid #00a5bb;border-radius:20px;box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;font-weight:500;margin-bottom:3.75px;margin-right:3.75px;padding:4px 10px;vertical-align:middle;word-break:break-all}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-left:3.75px;margin-right:0}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{background-color:#fff;border:1px solid #ddd;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;margin-top:-1px;overflow:hidden;position:absolute;top:100%;visibility:hidden;width:100%;will-change:visibility;word-break:break-all;z-index:1}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{border-radius:.25rem .25rem 0 0;bottom:100%;margin-bottom:-1px;margin-top:0;top:auto}.choices__list--dropdown .choices__list{-webkit-overflow-scrolling:touch;max-height:300px;overflow:auto;position:relative;will-change:scroll-position}.choices__list--dropdown .choices__item{font-size:14px;padding:10px;position:relative}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{padding-left:100px;padding-right:10px;text-align:right}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{left:10px;right:auto}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;opacity:.5;user-select:none}.choices__heading{border-bottom:1px solid #f7f7f7;color:grey;font-size:12px;font-weight:600;padding:10px}.choices__button{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:transparent;background-position:50%;background-repeat:no-repeat;border:0;cursor:pointer;text-indent:-9999px}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{background-color:#f9f9f9;border:0;border-radius:0;display:inline-block;font-size:14px;margin-bottom:5px;max-width:100%;padding:4px 0 4px 2px;vertical-align:baseline}[dir=rtl] .choices__input{padding-left:0;padding-right:2px}.choices__placeholder{opacity:.5}dialog{background:#fff;border:solid;color:#000;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{bottom:0;left:0;position:fixed;right:0;top:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.formio-form{min-height:80px;position:relative}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{background-color:#f8d7da;border-color:#f5c6cb;color:#721c24}.formio-warning-wrapper{background-color:#fff3cd;border-color:#ffeeba;color:#856404}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{color:inherit;display:block;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{background-color:#fff;min-height:200px}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{background:#1d1d1d;border:none;bottom:0;box-sizing:border-box;color:#ccc;display:none;font-family:Consolas,Menlo,Monaco,Courier New,monospace;font-size:15px;line-height:24px;margin:0;outline:none;padding:20px;position:absolute;top:0;width:100%}.formio-component-tags tags{background-color:#fff}.field-required:after{color:red;content:\" *\"}.glyphicon-spin{-webkit-animation:formio-spin 1s linear infinite;animation:formio-spin 1s linear infinite}@-webkit-keyframes formio-spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes formio-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success:after{content:\"\u2713\";line-height:1;position:relative;right:-4px;top:1px}.formio-component-submit .submit-fail:after{content:\"\u2717\";line-height:1;position:relative;right:-4px;top:1px}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border:1px solid #f4f4f4;border-radius:4px;box-shadow:inset 0 0 5px rgba(0,0,0,.02)}.btn.signature-pad-refresh{left:0;line-height:0;padding:3px;position:absolute;top:0;z-index:1000}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{color:#c3c3c3;text-align:center}.formio-loader{min-height:60px;position:relative}.loader-wrapper{background-color:rgba(0,0,0,.1);bottom:0;left:0;position:absolute;right:0;top:0;z-index:1000}.loader{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border:6px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;display:inline-block;height:60px;left:50%;margin-left:-30px;margin-top:-30px;position:absolute;top:50%;width:60px;z-index:10000}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;line-height:1em;margin-bottom:6px;padding:2px 8px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{overflow:hidden;padding-right:25px;text-overflow:ellipsis;white-space:nowrap}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{float:right;padding-left:5px}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{border-left:unset;border-right:1px solid #008fa1;float:left;margin:0 8px 0 -4px;overflow:hidden;padding-left:unset;padding-right:16px}.formio-component-file .fileSelector{border:2px dashed #ddd;padding:15px;text-align:center}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-left:5px;margin-right:unset}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}.formio-dialog{box-sizing:border-box;color:#666;font-size:.8em}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{-webkit-animation:formio-dialog-fadein .5s;-webkit-overflow-scrolling:touch;animation:formio-dialog-fadein .5s;background:rgba(0,0,0,.4);bottom:0;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:10000}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{-webkit-animation:formio-dialog-fadein .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadein .5s;background:transparent;bottom:0;left:0;margin-right:15px;position:fixed;right:0;top:0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-animation:formio-dialog-fadeout .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadeout .5s}.formio-dialog-content{-webkit-animation:formio-dialog-fadein .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadein .5s;background:#fff;overflow:auto;pointer-events:all}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-fadeout .5s;-webkit-backface-visibility:hidden;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{content:\"\u00D7\";cursor:pointer;font-family:Helvetica,Arial,sans-serif}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{background:transparent;border:none;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{background:transparent;color:#bbb;content:\"\u00D7\";display:block;font-size:26px;font-weight:400;line-height:26px;padding:3px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:none}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{clear:both;content:\"\";display:table}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:none}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{color:#999;position:absolute}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;height:1000px;width:100%}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{font-size:1.5em;position:absolute;right:5px;top:6px}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{cursor:pointer;font-weight:400}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-left:-10px;margin-top:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-left:4px;margin-right:unset}.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon,.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{opacity:0;position:absolute;right:0;top:0;transition:opacity .2s linear,visibility 0ms .2s;visibility:hidden}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{opacity:1;transition:visibility 0ms,opacity .2s linear;visibility:visible}.formio-component-modaledit .formio-modaledit-view-container{border:1px solid #ddd;cursor:text;min-height:34px;padding:6px 12px;position:relative}td .formio-component-modaledit .formio-modaledit-view-container{border-style:none;padding:0}.formio-component-modaledit .formio-modaledit-edit{left:0;opacity:0;position:absolute;top:0;transition:opacity .2s linear,visibility 0ms .2s;visibility:hidden}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{opacity:1;transition:visibility 0ms,opacity .2s linear;visibility:visible}.formio-modaledit-dialog .formio-modaledit-close{border-radius:0;position:absolute;right:0;top:100%}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-moz-appearance:none;-webkit-appearance:none;text-indent:1px;text-overflow:\"\"}.datagrid-group-label.collapsed>td,.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{content:\"\u25BE\";display:inline-block;margin:0 5px;vertical-align:middle}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:\"\u25B8\"}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-bottom:10px;margin-top:5px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.formio-component-textarea .alert .ck-editor__editable{color:inherit}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{margin-left:0;position:relative}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{text-align:left;width:100%}.formio-component-modal-wrapper-signature .open-modal-button{font-size:1.4em;height:100%;margin:0;padding:0;text-align:center}.formio-component-content .image{clear:both;display:table;margin:1em auto;text-align:center}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{background-color:#f7f7f7;caption-side:bottom;color:#333;display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.formio-component-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;display:block;margin:1em 0;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;margin-top:-9px;position:absolute;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;border:1px solid rgba(50,50,50,.6);box-sizing:border-box;font:14px/22px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;overflow:auto;z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}div[read-only=true] .formio-component-textarea div[ref=input]{white-space:pre-wrap}.formio-editor-read-only-content img{max-width:100%}.table-responsive[ref=component]{overflow-x:visible}.checkbox label,.radio label{min-height:21px}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'formio',
                        templateUrl: './formio.component.html',
                        styleUrls: ['./formio.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i0.NgZone }, { type: FormioAppConfig, decorators: [{
                            type: i0.Optional
                        }] }, { type: CustomTagsService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var _c0$1 = ["builder"];
    /* tslint:disable */
    /* tslint:enable */
    var FormBuilderComponent = /** @class */ (function () {
        function FormBuilderComponent(ngZone, config, customTags) {
            var _this = this;
            this.ngZone = ngZone;
            this.config = config;
            this.customTags = customTags;
            this.componentAdding = false;
            this.noeval = false;
            if (this.config) {
                formiojs.Formio.setBaseUrl(this.config.apiUrl);
                formiojs.Formio.setProjectUrl(this.config.appUrl);
            }
            else {
                console.warn('You must provide an AppConfig within your application!');
            }
            this.change = new i0.EventEmitter();
            this.ready = new Promise(function (resolve) {
                _this.readyResolve = resolve;
            });
        }
        FormBuilderComponent.prototype.ngOnInit = function () {
            var _this = this;
            formiojs.Utils.Evaluator.noeval = this.noeval;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.ngZone.runOutsideAngular(function () {
                        _this.buildForm(_this.form);
                    });
                });
            }
            if (this.rebuild) {
                this.rebuild.subscribe(function (options) {
                    _this.ngZone.runOutsideAngular(function () {
                        _this.rebuildForm(_this.form, options);
                    });
                });
            }
        };
        FormBuilderComponent.prototype.setInstance = function (instance) {
            var _this = this;
            this.formio = instance;
            instance.off('addComponent');
            instance.off('saveComponent');
            instance.off('updateComponent');
            instance.off('removeComponent');
            instance.on('addComponent', function (component, parent, path, index, isNew) {
                _this.ngZone.run(function () {
                    if (isNew) {
                        _this.componentAdding = true;
                    }
                    else {
                        _this.change.emit({
                            type: 'addComponent',
                            builder: instance,
                            form: instance.schema,
                            component: component,
                            parent: parent,
                            path: path,
                            index: index
                        });
                        _this.componentAdding = false;
                    }
                });
            });
            instance.on('saveComponent', function (component, original, parent, path, index, isNew) {
                _this.ngZone.run(function () {
                    _this.change.emit({
                        type: _this.componentAdding ? 'addComponent' : 'saveComponent',
                        builder: instance,
                        form: instance.schema,
                        component: component,
                        originalComponent: original,
                        parent: parent,
                        path: path,
                        index: index,
                        isNew: isNew || false
                    });
                    _this.componentAdding = false;
                });
            });
            instance.on('updateComponent', function (component) {
                _this.ngZone.run(function () {
                    _this.change.emit({
                        type: 'updateComponent',
                        builder: instance,
                        form: instance.schema,
                        component: component
                    });
                });
            });
            instance.on('removeComponent', function (component, parent, path, index) {
                _this.ngZone.run(function () {
                    _this.change.emit({
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
            this.ngZone.run(function () {
                _this.readyResolve(instance);
            });
            return instance;
        };
        FormBuilderComponent.prototype.setDisplay = function (display) {
            var _this = this;
            return this.builder.setDisplay(display).then(function (instance) { return _this.setInstance(instance); });
        };
        FormBuilderComponent.prototype.buildForm = function (form) {
            var _this = this;
            if (!form || !this.builderElement || !this.builderElement.nativeElement) {
                return;
            }
            if (this.builder) {
                return this.setDisplay(form.display).then(function () {
                    _this.builder.form = form;
                    _this.builder.instance.form = form;
                    return _this.builder.instance;
                });
            }
            return this.rebuildForm(form);
        };
        FormBuilderComponent.prototype.rebuildForm = function (form, options) {
            var _this = this;
            var Builder = this.formbuilder || formiojs.FormBuilder;
            var extraTags = this.customTags ? this.customTags.tags : [];
            this.builder = new Builder(this.builderElement.nativeElement, form, lodash.assign({
                icons: 'fontawesome',
                sanitizeConfig: {
                    addTags: extraTags
                }
            }, options || this.options || {}));
            return this.builder.ready.then(function (instance) { return _this.setInstance(instance); });
        };
        FormBuilderComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            formiojs.Utils.Evaluator.noeval = this.noeval;
            if (changes.form && changes.form.currentValue) {
                this.ngZone.runOutsideAngular(function () {
                    _this.buildForm(changes.form.currentValue || { components: [] });
                });
            }
        };
        FormBuilderComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
            if (this.formio) {
                this.formio.destroy();
            }
        };
        return FormBuilderComponent;
    }());
    FormBuilderComponent.ɵfac = function FormBuilderComponent_Factory(t) { return new (t || FormBuilderComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(FormioAppConfig, 8), i0.ɵɵdirectiveInject(CustomTagsService, 8)); };
    FormBuilderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormBuilderComponent, selectors: [["form-builder"]], viewQuery: function FormBuilderComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.builderElement = _t.first);
            }
        }, inputs: { form: "form", options: "options", formbuilder: "formbuilder", noeval: "noeval", refresh: "refresh", rebuild: "rebuild" }, outputs: { change: "change" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["builder", ""]], template: function FormBuilderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", null, 0);
            }
        }, styles: [""], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormBuilderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'form-builder',
                        templateUrl: './formbuilder.component.html',
                        styleUrls: ['./formbuilder.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: i0.NgZone }, { type: FormioAppConfig, decorators: [{
                            type: i0.Optional
                        }] }, { type: CustomTagsService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { form: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], formbuilder: [{
                    type: i0.Input
                }], noeval: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], rebuild: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], builderElement: [{
                    type: i0.ViewChild,
                    args: ['builder', { static: true }]
                }] });
    })();

    var FormioModule = /** @class */ (function () {
        function FormioModule() {
        }
        return FormioModule;
    }());
    FormioModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormioModule });
    FormioModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioModule_Factory(t) { return new (t || FormioModule)(); }, providers: [
            FormioAlerts,
            CustomTagsService
        ], imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioModule, { declarations: [FormioComponent,
                FormBuilderComponent,
                FormioLoaderComponent,
                FormioAlertsComponent,
                ParseHtmlContentPipe], imports: [i1.CommonModule], exports: [FormioComponent,
                FormBuilderComponent,
                FormioLoaderComponent,
                FormioAlertsComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FormioComponent,
                            FormBuilderComponent,
                            FormioLoaderComponent,
                            FormioAlertsComponent,
                            ParseHtmlContentPipe
                        ],
                        imports: [
                            i1.CommonModule
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
            }], null, null);
    })();

    var BaseInputComponent = formiojs.Components.components.input;
    var TextfieldComponent = formiojs.Components.components.textfield;
    function createCustomFormioComponent(customComponentOptions) {
        var _a;
        return _a = /** @class */ (function (_super) {
            __extends(CustomComponent, _super);
            function CustomComponent(component, options, data) {
                var _this = _super.call(this, component, Object.assign(Object.assign({}, options), { sanitizeConfig: {
                        addTags: [customComponentOptions.selector],
                    } }), data) || this;
                _this.component = component;
                _this.id = formiojs.Utils.getRandomComponentId();
                _this.type = customComponentOptions.type;
                if (customComponentOptions.extraValidators) {
                    _this.validators = _this.validators.concat(customComponentOptions.extraValidators);
                }
                return _this;
            }
            CustomComponent.schema = function () {
                return BaseInputComponent.schema(Object.assign(Object.assign({}, customComponentOptions.schema), { type: customComponentOptions.type }));
            };
            Object.defineProperty(CustomComponent.prototype, "defaultSchema", {
                get: function () {
                    return CustomComponent.schema();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomComponent.prototype, "emptyValue", {
                get: function () {
                    return customComponentOptions.emptyValue || null;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomComponent, "builderInfo", {
                get: function () {
                    return {
                        title: customComponentOptions.title,
                        group: customComponentOptions.group,
                        icon: customComponentOptions.icon,
                        weight: customComponentOptions.weight,
                        documentation: customComponentOptions.documentation,
                        schema: CustomComponent.schema(),
                    };
                },
                enumerable: false,
                configurable: true
            });
            CustomComponent.prototype.elementInfo = function () {
                var info = _super.prototype.elementInfo.call(this);
                info.type = customComponentOptions.selector;
                info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
                info.attr = Object.assign(Object.assign({}, info.attr), { class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
                });
                return info;
            };
            Object.defineProperty(CustomComponent.prototype, "inputInfo", {
                get: function () {
                    var info = Object.assign({ id: this.key }, this.elementInfo());
                    return info;
                },
                enumerable: false,
                configurable: true
            });
            CustomComponent.prototype.renderElement = function (value, index) {
                var info = this.inputInfo;
                return this.renderTemplate(customComponentOptions.template || 'input', {
                    input: info,
                    value: value,
                    index: index
                });
            };
            CustomComponent.prototype.attach = function (element) {
                var _this = this;
                var superAttach = _super.prototype.attach.call(this, element);
                this._customAngularElement = element.querySelector(customComponentOptions.selector);
                // Bind the custom options and the validations to the Angular component's inputs (flattened)
                if (this._customAngularElement) {
                    // To make sure we have working input in IE...
                    // IE doesn't render it properly if it's not visible on the screen
                    // due to the whole structure applied via innerHTML to the parent
                    // so we need to use appendChild
                    if (!this._customAngularElement.getAttribute('ng-version')) {
                        this._customAngularElement.removeAttribute('ref');
                        var newCustomElement_1 = document.createElement(customComponentOptions.selector);
                        newCustomElement_1.setAttribute('ref', 'input');
                        Object.keys(this.inputInfo.attr).forEach(function (attr) {
                            newCustomElement_1.setAttribute(attr, _this.inputInfo.attr[attr]);
                        });
                        this._customAngularElement.appendChild(newCustomElement_1);
                        this._customAngularElement = newCustomElement_1;
                        superAttach = _super.prototype.attach.call(this, element);
                    }
                    // Bind customOptions
                    for (var key in this.component.customOptions) {
                        if (this.component.customOptions.hasOwnProperty(key)) {
                            this._customAngularElement[key] = this.component.customOptions[key];
                        }
                    }
                    // Bind validate options
                    for (var key in this.component.validate) {
                        if (this.component.validate.hasOwnProperty(key)) {
                            this._customAngularElement[key] = this.component.validate[key];
                        }
                    }
                    // Bind options explicitly set
                    var fieldOptions = customComponentOptions.fieldOptions;
                    if (lodash.isArray(fieldOptions) && fieldOptions.length > 0) {
                        for (var key in fieldOptions) {
                            if (fieldOptions.hasOwnProperty(key)) {
                                this._customAngularElement[fieldOptions[key]] = this.component[fieldOptions[key]];
                            }
                        }
                    }
                    // Attach event listener for emit event
                    this._customAngularElement.addEventListener('formioEvent', function (event) {
                        _this.emit(event.detail.eventName, Object.assign(Object.assign({}, event.detail.data), { component: _this.component }));
                    });
                    // Ensure we bind the value (if it isn't a multiple-value component with no wrapper)
                    if (!this._customAngularElement.value && !this.component.disableMultiValueWrapper) {
                        this.restoreValue();
                    }
                }
                return superAttach;
            };
            // Add extra option to support multiple value (e.g. datagrid) with single angular component (disableMultiValueWrapper)
            CustomComponent.prototype.useWrapper = function () {
                return this.component.hasOwnProperty('multiple') && this.component.multiple && !this.component.disableMultiValueWrapper;
            };
            Object.defineProperty(CustomComponent.prototype, "defaultValue", {
                get: function () {
                    var defaultValue = this.emptyValue;
                    // handle falsy default value
                    if (!lodash.isNil(this.component.defaultValue)) {
                        defaultValue = this.component.defaultValue;
                    }
                    if (this.component.customDefaultValue && !this.options.preview) {
                        defaultValue = this.evaluate(this.component.customDefaultValue, { value: '' }, 'value');
                    }
                    return lodash.clone(defaultValue);
                },
                enumerable: false,
                configurable: true
            });
            return CustomComponent;
        }(BaseInputComponent)),
            _a.editForm = customComponentOptions.editForm || TextfieldComponent.editForm,
            _a;
    }

    function registerCustomTag(tag, injector) {
        injector.get(CustomTagsService).addCustomTag(tag);
    }
    function registerCustomTags(tags, injector) {
        tags.forEach(function (tag) { return registerCustomTag(tag, injector); });
    }
    function registerCustomFormioComponent(options, angularComponent, injector) {
        registerCustomTag(options.selector, injector);
        var complexCustomComponent = elements.createCustomElement(angularComponent, { injector: injector });
        customElements.define(options.selector, complexCustomComponent);
        formiojs.Components.setComponent(options.type, createCustomFormioComponent(options));
    }
    function registerCustomFormioComponentWithClass(options, angularComponent, formioClass, injector) {
        registerCustomTag(options.selector, injector);
        var complexCustomComponent = elements.createCustomElement(angularComponent, { injector: injector });
        customElements.define(options.selector, complexCustomComponent);
        formiojs.Components.setComponent(options.type, formioClass);
    }

    /*
     * Public API Surface of angular-formio
     */

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'Components', {
        enumerable: true,
        get: function () {
            return formiojs.Components;
        }
    });
    Object.defineProperty(exports, 'Formio', {
        enumerable: true,
        get: function () {
            return formiojs.Formio;
        }
    });
    Object.defineProperty(exports, 'FormioUtils', {
        enumerable: true,
        get: function () {
            return formiojs.Utils;
        }
    });
    Object.defineProperty(exports, 'Templates', {
        enumerable: true,
        get: function () {
            return formiojs.Templates;
        }
    });
    exports.FormBuilderComponent = FormBuilderComponent;
    exports.FormioAlerts = FormioAlerts;
    exports.FormioAlertsComponent = FormioAlertsComponent;
    exports.FormioAppConfig = FormioAppConfig;
    exports.FormioBaseComponent = FormioBaseComponent;
    exports.FormioComponent = FormioComponent;
    exports.FormioError = FormioError;
    exports.FormioLoaderComponent = FormioLoaderComponent;
    exports.FormioModule = FormioModule;
    exports.FormioPromiseService = FormioPromiseService;
    exports.FormioService = FormioService;
    exports.createCustomFormioComponent = createCustomFormioComponent;
    exports.extendRouter = extendRouter;
    exports.registerCustomFormioComponent = registerCustomFormioComponent;
    exports.registerCustomFormioComponentWithClass = registerCustomFormioComponentWithClass;
    exports.registerCustomTag = registerCustomTag;
    exports.registerCustomTags = registerCustomTags;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-formio.umd.js.map
