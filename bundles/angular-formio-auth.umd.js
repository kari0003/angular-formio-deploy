(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash'), require('formiojs'), require('angular-formio'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-formio/auth', ['exports', '@angular/core', 'lodash', 'formiojs', 'angular-formio', '@angular/router', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['angular-formio'] = global['angular-formio'] || {}, global['angular-formio'].auth = {}), global.ng.core, global._, global.formiojs, global['angular-formio'], global.ng.router, global.ng.common));
}(this, (function (exports, i0, lodash, formiojs, i1, i1$1, common) { 'use strict';

    var FormioAuthConfig = /** @class */ (function () {
        function FormioAuthConfig() {
        }
        return FormioAuthConfig;
    }());
    FormioAuthConfig.ɵfac = function FormioAuthConfig_Factory(t) { return new (t || FormioAuthConfig)(); };
    FormioAuthConfig.ɵprov = i0.ɵɵdefineInjectable({ token: FormioAuthConfig, factory: FormioAuthConfig.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAuthConfig, [{
                type: i0.Injectable
            }], null, null);
    })();
    var FormioOauthType;
    (function (FormioOauthType) {
        FormioOauthType["okta"] = "okta";
        FormioOauthType["saml"] = "saml";
    })(FormioOauthType || (FormioOauthType = {}));

    var FormioAuthService = /** @class */ (function () {
        function FormioAuthService(appConfig, config) {
            var _this = this;
            this.appConfig = appConfig;
            this.config = config;
            this.authenticated = false;
            this.formAccess = {};
            this.submissionAccess = {};
            this.is = {};
            this.user = null;
            if (this.appConfig && this.appConfig.appUrl) {
                formiojs.Formio.setBaseUrl(this.appConfig.apiUrl);
                formiojs.Formio.setProjectUrl(this.appConfig.appUrl);
                formiojs.Formio.formOnly = !!this.appConfig.formOnly;
            }
            else {
                console.error('You must provide an AppConfig within your application!');
            }
            this.loginForm =
                this.appConfig.appUrl +
                    '/' +
                    lodash.get(this.config, 'login.form', 'user/login');
            this.registerForm =
                this.appConfig.appUrl +
                    '/' +
                    lodash.get(this.config, 'register.form', 'user/register');
            this.onLogin = new i0.EventEmitter();
            this.onLogout = new i0.EventEmitter();
            this.onRegister = new i0.EventEmitter();
            this.onUser = new i0.EventEmitter();
            this.onError = new i0.EventEmitter();
            this.ready = new Promise(function (resolve, reject) {
                _this.readyResolve = resolve;
                _this.readyReject = reject;
            });
            // Register for the core events.
            formiojs.Formio.events.on('formio.badToken', function () { return _this.logoutError(); });
            formiojs.Formio.events.on('formio.sessionExpired', function () { return _this.logoutError(); });
            if (!this.config.delayAuth) {
                this.init();
            }
        }
        FormioAuthService.prototype.onLoginSubmit = function (submission) {
            this.setUser(submission);
            this.onLogin.emit(submission);
        };
        FormioAuthService.prototype.onRegisterSubmit = function (submission) {
            this.setUser(submission);
            this.onRegister.emit(submission);
        };
        FormioAuthService.prototype.init = function () {
            var _this = this;
            this.projectReady = formiojs.Formio.makeStaticRequest(this.appConfig.appUrl).then(function (project) {
                lodash.each(project.access, function (access) {
                    _this.formAccess[access.type] = access.roles;
                });
            }, function () {
                _this.formAccess = {};
                return null;
            });
            // Get the access for this project.
            this.accessReady = formiojs.Formio.makeStaticRequest(this.appConfig.appUrl + '/access').then(function (access) {
                lodash.each(access.forms, function (form) {
                    _this.submissionAccess[form.name] = {};
                    form.submissionAccess.forEach(function (subAccess) {
                        _this.submissionAccess[form.name][subAccess.type] = subAccess.roles;
                    });
                });
                _this.roles = access.roles;
                return access;
            }, function () {
                _this.roles = {};
                return null;
            });
            var currentUserPromise;
            if (this.config.oauth) {
                // Make a fix to the hash to remove starting "/" that angular might put there.
                if (window.location.hash && window.location.hash.match(/^#\/access_token/)) {
                    history.pushState(null, null, window.location.hash.replace(/^#\/access_token/, '#access_token'));
                }
                // Initiate the SSO if they provide oauth settings.
                currentUserPromise = formiojs.Formio.ssoInit(this.config.oauth.type, this.config.oauth.options);
            }
            else {
                currentUserPromise = formiojs.Formio.currentUser();
            }
            this.userReady = currentUserPromise.then(function (user) {
                _this.setUser(user);
                return user;
            });
            // Trigger we are redy when all promises have resolved.
            if (this.accessReady) {
                this.accessReady
                    .then(function () { return _this.projectReady; })
                    .then(function () { return _this.userReady; })
                    .then(function () { return _this.readyResolve(true); })
                    .catch(function (err) { return _this.readyReject(err); });
            }
        };
        FormioAuthService.prototype.setUser = function (user) {
            var namespace = formiojs.Formio.namespace || 'formio';
            if (user) {
                this.user = user;
                localStorage.setItem(namespace + "AppUser", JSON.stringify(user));
                this.setUserRoles();
            }
            else {
                this.user = null;
                this.is = {};
                localStorage.removeItem(namespace + "AppUser");
                formiojs.Formio.clearCache();
                formiojs.Formio.setUser(null);
            }
            this.authenticated = !!formiojs.Formio.getToken();
            this.onUser.emit(this.user);
        };
        FormioAuthService.prototype.setUserRoles = function () {
            var _this = this;
            if (this.accessReady) {
                this.accessReady.then(function () {
                    lodash.each(_this.roles, function (role, roleName) {
                        if (_this.user.roles.indexOf(role._id) !== -1) {
                            _this.is[roleName] = true;
                        }
                    });
                });
            }
        };
        FormioAuthService.prototype.logoutError = function () {
            this.setUser(null);
            var namespace = formiojs.Formio.namespace || 'formio';
            localStorage.removeItem(namespace + "Token");
            this.onError.emit();
        };
        FormioAuthService.prototype.logout = function () {
            var _this = this;
            this.setUser(null);
            var namespace = formiojs.Formio.namespace || 'formio';
            localStorage.removeItem(namespace + "Token");
            formiojs.Formio.logout()
                .then(function () { return _this.onLogout.emit(); })
                .catch(function () { return _this.logoutError(); });
        };
        return FormioAuthService;
    }());
    FormioAuthService.ɵfac = function FormioAuthService_Factory(t) { return new (t || FormioAuthService)(i0.ɵɵinject(i1.FormioAppConfig), i0.ɵɵinject(FormioAuthConfig)); };
    FormioAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: FormioAuthService, factory: FormioAuthService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAuthService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.FormioAppConfig }, { type: FormioAuthConfig }]; }, null);
    })();

    var FormioAuthComponent = /** @class */ (function () {
        function FormioAuthComponent() {
        }
        return FormioAuthComponent;
    }());
    FormioAuthComponent.ɵfac = function FormioAuthComponent_Factory(t) { return new (t || FormioAuthComponent)(); };
    FormioAuthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAuthComponent, selectors: [["ng-component"]], decls: 11, vars: 0, consts: [[1, "card", "card-primary", "panel", "panel-default"], [1, "card-header", "panel-heading"], [1, "nav", "nav-tabs", "card-header-tabs"], ["role", "presentation", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "register", "routerLinkActive", "active", 1, "nav-link"], [1, "card-body", "panel-body"]], template: function FormioAuthComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "ul", 2);
                i0.ɵɵelementStart(3, "li", 3);
                i0.ɵɵelementStart(4, "a", 4);
                i0.ɵɵtext(5, "Login");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "li", 3);
                i0.ɵɵelementStart(7, "a", 5);
                i0.ɵɵtext(8, "Register");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 6);
                i0.ɵɵelement(10, "router-outlet");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$1.RouterLinkActive, i1$1.RouterLinkWithHref, i1$1.RouterOutlet], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAuthComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './auth.component.html'
                    }]
            }], null, null);
    })();

    var FormioAuthLoginComponent = /** @class */ (function () {
        function FormioAuthLoginComponent(service) {
            this.service = service;
        }
        return FormioAuthLoginComponent;
    }());
    FormioAuthLoginComponent.ɵfac = function FormioAuthLoginComponent_Factory(t) { return new (t || FormioAuthLoginComponent)(i0.ɵɵdirectiveInject(FormioAuthService)); };
    FormioAuthLoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAuthLoginComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthLoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "formio", 0);
                i0.ɵɵlistener("submit", function FormioAuthLoginComponent_Template_formio_submit_0_listener($event) { return ctx.service.onLoginSubmit($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("src", ctx.service.loginForm);
            }
        }, directives: [i1.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAuthLoginComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './login.component.html'
                    }]
            }], function () { return [{ type: FormioAuthService }]; }, null);
    })();

    var FormioAuthRegisterComponent = /** @class */ (function () {
        function FormioAuthRegisterComponent(service) {
            this.service = service;
        }
        return FormioAuthRegisterComponent;
    }());
    FormioAuthRegisterComponent.ɵfac = function FormioAuthRegisterComponent_Factory(t) { return new (t || FormioAuthRegisterComponent)(i0.ɵɵdirectiveInject(FormioAuthService)); };
    FormioAuthRegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAuthRegisterComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthRegisterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "formio", 0);
                i0.ɵɵlistener("submit", function FormioAuthRegisterComponent_Template_formio_submit_0_listener($event) { return ctx.service.onRegisterSubmit($event); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("src", ctx.service.registerForm);
            }
        }, directives: [i1.FormioComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAuthRegisterComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './register.component.html'
                    }]
            }], function () { return [{ type: FormioAuthService }]; }, null);
    })();

    function FormioAuthRoutes(config) {
        return [
            {
                path: '',
                component: config && config.auth ? config.auth : FormioAuthComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        component: config && config.login ? config.login : FormioAuthLoginComponent
                    },
                    {
                        path: 'register',
                        component: config && config.register ? config.register : FormioAuthRegisterComponent
                    }
                ]
            }
        ];
    }

    var FormioAuth = /** @class */ (function () {
        function FormioAuth() {
        }
        FormioAuth.forRoot = function (config) {
            return i1.extendRouter(FormioAuth, config, FormioAuthRoutes);
        };
        FormioAuth.forChild = function (config) {
            return i1.extendRouter(FormioAuth, config, FormioAuthRoutes);
        };
        return FormioAuth;
    }());
    FormioAuth.ɵmod = i0.ɵɵdefineNgModule({ type: FormioAuth });
    FormioAuth.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioAuth_Factory(t) { return new (t || FormioAuth)(); }, imports: [[
                common.CommonModule,
                i1.FormioModule,
                i1$1.RouterModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioAuth, { declarations: [FormioAuthComponent,
                FormioAuthLoginComponent,
                FormioAuthRegisterComponent], imports: [common.CommonModule,
                i1.FormioModule,
                i1$1.RouterModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormioAuth, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            common.CommonModule,
                            i1.FormioModule,
                            i1$1.RouterModule
                        ],
                        declarations: [
                            FormioAuthComponent,
                            FormioAuthLoginComponent,
                            FormioAuthRegisterComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of angular-formio
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormioAuth = FormioAuth;
    exports.FormioAuthComponent = FormioAuthComponent;
    exports.FormioAuthConfig = FormioAuthConfig;
    exports.FormioAuthLoginComponent = FormioAuthLoginComponent;
    exports.FormioAuthRegisterComponent = FormioAuthRegisterComponent;
    exports.FormioAuthRoutes = FormioAuthRoutes;
    exports.FormioAuthService = FormioAuthService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-formio-auth.umd.js.map
