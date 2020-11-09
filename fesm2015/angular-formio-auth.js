import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵinject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, Component, ɵɵdirectiveInject, ɵɵlistener, ɵɵproperty, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { get, each } from 'lodash';
import { Formio } from 'formiojs';
import { FormioAppConfig, FormioComponent, extendRouter, FormioModule } from 'angular-formio';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

class FormioAuthConfig {
}
FormioAuthConfig.ɵfac = function FormioAuthConfig_Factory(t) { return new (t || FormioAuthConfig)(); };
FormioAuthConfig.ɵprov = ɵɵdefineInjectable({ token: FormioAuthConfig, factory: FormioAuthConfig.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAuthConfig, [{
        type: Injectable
    }], null, null); })();
var FormioOauthType;
(function (FormioOauthType) {
    FormioOauthType["okta"] = "okta";
    FormioOauthType["saml"] = "saml";
})(FormioOauthType || (FormioOauthType = {}));

class FormioAuthService {
    constructor(appConfig, config) {
        this.appConfig = appConfig;
        this.config = config;
        this.authenticated = false;
        this.formAccess = {};
        this.submissionAccess = {};
        this.is = {};
        this.user = null;
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
            Formio.formOnly = !!this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        this.loginForm =
            this.appConfig.appUrl +
                '/' +
                get(this.config, 'login.form', 'user/login');
        this.registerForm =
            this.appConfig.appUrl +
                '/' +
                get(this.config, 'register.form', 'user/register');
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
        this.onRegister = new EventEmitter();
        this.onUser = new EventEmitter();
        this.onError = new EventEmitter();
        this.ready = new Promise((resolve, reject) => {
            this.readyResolve = resolve;
            this.readyReject = reject;
        });
        // Register for the core events.
        Formio.events.on('formio.badToken', () => this.logoutError());
        Formio.events.on('formio.sessionExpired', () => this.logoutError());
        if (!this.config.delayAuth) {
            this.init();
        }
    }
    onLoginSubmit(submission) {
        this.setUser(submission);
        this.onLogin.emit(submission);
    }
    onRegisterSubmit(submission) {
        this.setUser(submission);
        this.onRegister.emit(submission);
    }
    init() {
        this.projectReady = Formio.makeStaticRequest(this.appConfig.appUrl).then((project) => {
            each(project.access, (access) => {
                this.formAccess[access.type] = access.roles;
            });
        }, () => {
            this.formAccess = {};
            return null;
        });
        // Get the access for this project.
        this.accessReady = Formio.makeStaticRequest(this.appConfig.appUrl + '/access').then((access) => {
            each(access.forms, (form) => {
                this.submissionAccess[form.name] = {};
                form.submissionAccess.forEach((subAccess) => {
                    this.submissionAccess[form.name][subAccess.type] = subAccess.roles;
                });
            });
            this.roles = access.roles;
            return access;
        }, () => {
            this.roles = {};
            return null;
        });
        let currentUserPromise;
        if (this.config.oauth) {
            // Make a fix to the hash to remove starting "/" that angular might put there.
            if (window.location.hash && window.location.hash.match(/^#\/access_token/)) {
                history.pushState(null, null, window.location.hash.replace(/^#\/access_token/, '#access_token'));
            }
            // Initiate the SSO if they provide oauth settings.
            currentUserPromise = Formio.ssoInit(this.config.oauth.type, this.config.oauth.options);
        }
        else {
            currentUserPromise = Formio.currentUser();
        }
        this.userReady = currentUserPromise.then((user) => {
            this.setUser(user);
            return user;
        });
        // Trigger we are redy when all promises have resolved.
        if (this.accessReady) {
            this.accessReady
                .then(() => this.projectReady)
                .then(() => this.userReady)
                .then(() => this.readyResolve(true))
                .catch((err) => this.readyReject(err));
        }
    }
    setUser(user) {
        const namespace = Formio.namespace || 'formio';
        if (user) {
            this.user = user;
            localStorage.setItem(`${namespace}AppUser`, JSON.stringify(user));
            this.setUserRoles();
        }
        else {
            this.user = null;
            this.is = {};
            localStorage.removeItem(`${namespace}AppUser`);
            Formio.clearCache();
            Formio.setUser(null);
        }
        this.authenticated = !!Formio.getToken();
        this.onUser.emit(this.user);
    }
    setUserRoles() {
        if (this.accessReady) {
            this.accessReady.then(() => {
                each(this.roles, (role, roleName) => {
                    if (this.user.roles.indexOf(role._id) !== -1) {
                        this.is[roleName] = true;
                    }
                });
            });
        }
    }
    logoutError() {
        this.setUser(null);
        const namespace = Formio.namespace || 'formio';
        localStorage.removeItem(`${namespace}Token`);
        this.onError.emit();
    }
    logout() {
        this.setUser(null);
        const namespace = Formio.namespace || 'formio';
        localStorage.removeItem(`${namespace}Token`);
        Formio.logout()
            .then(() => this.onLogout.emit())
            .catch(() => this.logoutError());
    }
}
FormioAuthService.ɵfac = function FormioAuthService_Factory(t) { return new (t || FormioAuthService)(ɵɵinject(FormioAppConfig), ɵɵinject(FormioAuthConfig)); };
FormioAuthService.ɵprov = ɵɵdefineInjectable({ token: FormioAuthService, factory: FormioAuthService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAuthService, [{
        type: Injectable
    }], function () { return [{ type: FormioAppConfig }, { type: FormioAuthConfig }]; }, null); })();

class FormioAuthComponent {
}
FormioAuthComponent.ɵfac = function FormioAuthComponent_Factory(t) { return new (t || FormioAuthComponent)(); };
FormioAuthComponent.ɵcmp = ɵɵdefineComponent({ type: FormioAuthComponent, selectors: [["ng-component"]], decls: 11, vars: 0, consts: [[1, "card", "card-primary", "panel", "panel-default"], [1, "card-header", "panel-heading"], [1, "nav", "nav-tabs", "card-header-tabs"], ["role", "presentation", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "register", "routerLinkActive", "active", 1, "nav-link"], [1, "card-body", "panel-body"]], template: function FormioAuthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "ul", 2);
        ɵɵelementStart(3, "li", 3);
        ɵɵelementStart(4, "a", 4);
        ɵɵtext(5, "Login");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "li", 3);
        ɵɵelementStart(7, "a", 5);
        ɵɵtext(8, "Register");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 6);
        ɵɵelement(10, "router-outlet");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [RouterLinkActive, RouterLinkWithHref, RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAuthComponent, [{
        type: Component,
        args: [{
                templateUrl: './auth.component.html'
            }]
    }], null, null); })();

class FormioAuthLoginComponent {
    constructor(service) {
        this.service = service;
    }
}
FormioAuthLoginComponent.ɵfac = function FormioAuthLoginComponent_Factory(t) { return new (t || FormioAuthLoginComponent)(ɵɵdirectiveInject(FormioAuthService)); };
FormioAuthLoginComponent.ɵcmp = ɵɵdefineComponent({ type: FormioAuthLoginComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthLoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "formio", 0);
        ɵɵlistener("submit", function FormioAuthLoginComponent_Template_formio_submit_0_listener($event) { return ctx.service.onLoginSubmit($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("src", ctx.service.loginForm);
    } }, directives: [FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAuthLoginComponent, [{
        type: Component,
        args: [{
                templateUrl: './login.component.html'
            }]
    }], function () { return [{ type: FormioAuthService }]; }, null); })();

class FormioAuthRegisterComponent {
    constructor(service) {
        this.service = service;
    }
}
FormioAuthRegisterComponent.ɵfac = function FormioAuthRegisterComponent_Factory(t) { return new (t || FormioAuthRegisterComponent)(ɵɵdirectiveInject(FormioAuthService)); };
FormioAuthRegisterComponent.ɵcmp = ɵɵdefineComponent({ type: FormioAuthRegisterComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "formio", 0);
        ɵɵlistener("submit", function FormioAuthRegisterComponent_Template_formio_submit_0_listener($event) { return ctx.service.onRegisterSubmit($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("src", ctx.service.registerForm);
    } }, directives: [FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAuthRegisterComponent, [{
        type: Component,
        args: [{
                templateUrl: './register.component.html'
            }]
    }], function () { return [{ type: FormioAuthService }]; }, null); })();

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

class FormioAuth {
    static forRoot(config) {
        return extendRouter(FormioAuth, config, FormioAuthRoutes);
    }
    static forChild(config) {
        return extendRouter(FormioAuth, config, FormioAuthRoutes);
    }
}
FormioAuth.ɵmod = ɵɵdefineNgModule({ type: FormioAuth });
FormioAuth.ɵinj = ɵɵdefineInjector({ factory: function FormioAuth_Factory(t) { return new (t || FormioAuth)(); }, imports: [[
            CommonModule,
            FormioModule,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormioAuth, { declarations: [FormioAuthComponent,
        FormioAuthLoginComponent,
        FormioAuthRegisterComponent], imports: [CommonModule,
        FormioModule,
        RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormioAuth, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    RouterModule
                ],
                declarations: [
                    FormioAuthComponent,
                    FormioAuthLoginComponent,
                    FormioAuthRegisterComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-formio
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormioAuth, FormioAuthComponent, FormioAuthConfig, FormioAuthLoginComponent, FormioAuthRegisterComponent, FormioAuthRoutes, FormioAuthService };
//# sourceMappingURL=angular-formio-auth.js.map
