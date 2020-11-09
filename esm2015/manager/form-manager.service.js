import { Injectable } from '@angular/core';
import { Formio } from 'formiojs';
import _each from 'lodash/each';
import _intersection from 'lodash/intersection';
import * as i0 from "@angular/core";
import * as i1 from "angular-formio";
import * as i2 from "./form-manager.config";
import * as i3 from "angular-formio/auth";
export class FormManagerService {
    constructor(appConfig, config, auth) {
        this.appConfig = appConfig;
        this.config = config;
        this.auth = auth;
        this.form = null;
        this.perms = { delete: false, edit: false };
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        this.allAccessMap = {
            'update_all': 'formEdit',
            'delete_all': 'formDelete'
        };
        this.ownAccessMap = {
            'update_own': 'formEdit',
            'delete_own': 'formDelete'
        };
        this.actionAllowed = (action) => this.isActionAllowed(action);
        this.reset();
    }
    isActionAllowed(action) {
        return this.access[action];
    }
    setAccess() {
        this.access = {
            formCreate: true,
            formView: true,
            formEdit: true,
            formDelete: true,
            submissionIndex: true
        };
        if (this.auth) {
            this.access = {
                formCreate: false,
                formView: false,
                formEdit: false,
                formDelete: false,
                submissionIndex: false
            };
            this.ready = this.auth.ready.then(() => {
                const adminRoles = [];
                _each(this.auth.roles, (role, name) => {
                    if (role.admin) {
                        adminRoles.push(role._id);
                    }
                });
                if (this.auth.user && this.auth.user.roles) {
                    this.auth.user.roles.forEach(roleId => {
                        if (adminRoles.indexOf(roleId) !== -1) {
                            this.access.formCreate = true;
                            this.access.formView = true;
                            this.access.formEdit = true;
                            this.access.formDelete = true;
                            this.access.submissionIndex = true;
                        }
                        if (!this.access.formCreate) {
                            this.access.formCreate = (this.auth.formAccess.create_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.formView) {
                            this.access.formView = (this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.formEdit) {
                            this.access.formEdit = (this.auth.formAccess.update_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.formDelete) {
                            this.access.formDelete = (this.auth.formAccess.delete_all.indexOf(roleId) !== -1);
                        }
                        if (!this.access.submissionIndex) {
                            this.access.submissionIndex = (this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                        }
                    });
                }
            });
        }
        else {
            this.ready = Promise.resolve(false);
        }
    }
    reset(route) {
        if (route) {
            route.params.subscribe(params => {
                if (params.id) {
                    this.formio = new Formio(`${this.formio.formsUrl}/${params.id}`);
                }
                else {
                    this.reset();
                }
            });
        }
        else {
            this.formio = new Formio(this.appConfig.appUrl);
            this.setAccess();
        }
    }
    hasAccess(roles) {
        if (!this.auth.user) {
            return false;
        }
        return !!_intersection(roles, this.auth.user.roles).length;
    }
    setForm(form) {
        this.form = form;
        if (form.access) {
            // Check if they have access here.
            form.access.forEach(access => {
                // Check for all access.
                if (this.allAccessMap[access.type] && !this.access[this.allAccessMap[access.type]]) {
                    this.access[this.allAccessMap[access.type]] = this.hasAccess(access.roles);
                }
                // Check for own access.
                if (this.auth && this.auth.user &&
                    (form._id === this.auth.user._id) &&
                    this.ownAccessMap[access.type] &&
                    !this.access[this.ownAccessMap[access.type]]) {
                    this.access[this.ownAccessMap[access.type]] = this.hasAccess(access.roles);
                }
            });
        }
        return form;
    }
    loadForm() {
        return this.formio.loadForm().then(form => this.setForm(form));
    }
    setSubmission(route) {
        return new Promise((resolve) => {
            route.params.subscribe(params => {
                this.formio = new Formio(`${this.formio.submissionsUrl}/${params.id}`);
                resolve(this.formio);
            });
        });
    }
    submissionLoaded(submission) {
        this.auth.ready.then(() => {
            this.formio.userPermissions(this.auth.user, this.form, submission).then((perms) => {
                this.perms.delete = perms.delete;
                this.perms.edit = perms.edit;
            });
        });
    }
    loadForms() {
        return this.formio.loadForms({ params: {
                tags: this.config.tag
            } });
    }
    createForm(form) {
        return this.formio.createform(form);
    }
}
FormManagerService.ɵfac = function FormManagerService_Factory(t) { return new (t || FormManagerService)(i0.ɵɵinject(i1.FormioAppConfig), i0.ɵɵinject(i2.FormManagerConfig), i0.ɵɵinject(i3.FormioAuthService)); };
FormManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: FormManagerService, factory: FormManagerService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerService, [{
        type: Injectable
    }], function () { return [{ type: i1.FormioAppConfig }, { type: i2.FormManagerConfig }, { type: i3.FormioAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL21hbmFnZXIvc3JjLyIsInNvdXJjZXMiOlsiZm9ybS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQUNoQyxPQUFPLGFBQWEsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFHaEQsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QixZQUNTLFNBQTBCLEVBQzFCLE1BQXlCLEVBQ3pCLElBQXVCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBTnpCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFLLEdBQUcsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztRQU8xQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixZQUFZLEVBQUUsVUFBVTtZQUN4QixZQUFZLEVBQUUsWUFBWTtTQUMzQixD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SSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFO2dCQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO2FBQ3RCLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7b0ZBektVLGtCQUFrQjswREFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlckNvbmZpZyB9IGZyb20gJy4vZm9ybS1tYW5hZ2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtaW8gfSBmcm9tICdmb3JtaW9qcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvL2F1dGgnO1xuaW1wb3J0IF9lYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcbmltcG9ydCBfaW50ZXJzZWN0aW9uIGZyb20gJ2xvZGFzaC9pbnRlcnNlY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybU1hbmFnZXJTZXJ2aWNlIHtcbiAgcHVibGljIGZvcm1pbzogRm9ybWlvO1xuICBwdWJsaWMgYWNjZXNzOiBhbnk7XG4gIHB1YmxpYyBhbGxBY2Nlc3NNYXA6IGFueTtcbiAgcHVibGljIG93bkFjY2Vzc01hcDogYW55O1xuICBwdWJsaWMgcmVhZHk6IFByb21pc2U8YW55PjtcbiAgcHVibGljIGFjdGlvbkFsbG93ZWQ6IGFueTtcbiAgcHVibGljIGZvcm0gPSBudWxsO1xuICBwdWJsaWMgcGVybXMgPSB7ZGVsZXRlOiBmYWxzZSwgZWRpdDogZmFsc2V9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcHBDb25maWc6IEZvcm1pb0FwcENvbmZpZyxcbiAgICBwdWJsaWMgY29uZmlnOiBGb3JtTWFuYWdlckNvbmZpZyxcbiAgICBwdWJsaWMgYXV0aDogRm9ybWlvQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHRoaXMuYXBwQ29uZmlnICYmIHRoaXMuYXBwQ29uZmlnLmFwcFVybCkge1xuICAgICAgRm9ybWlvLnNldEJhc2VVcmwodGhpcy5hcHBDb25maWcuYXBpVXJsKTtcbiAgICAgIEZvcm1pby5zZXRQcm9qZWN0VXJsKHRoaXMuYXBwQ29uZmlnLmFwcFVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYW4gQXBwQ29uZmlnIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9uIScpO1xuICAgIH1cblxuICAgIHRoaXMuYWxsQWNjZXNzTWFwID0ge1xuICAgICAgJ3VwZGF0ZV9hbGwnOiAnZm9ybUVkaXQnLFxuICAgICAgJ2RlbGV0ZV9hbGwnOiAnZm9ybURlbGV0ZSdcbiAgICB9O1xuICAgIHRoaXMub3duQWNjZXNzTWFwID0ge1xuICAgICAgJ3VwZGF0ZV9vd24nOiAnZm9ybUVkaXQnLFxuICAgICAgJ2RlbGV0ZV9vd24nOiAnZm9ybURlbGV0ZSdcbiAgICB9O1xuICAgIHRoaXMuYWN0aW9uQWxsb3dlZCA9IChhY3Rpb24pID0+IHRoaXMuaXNBY3Rpb25BbGxvd2VkKGFjdGlvbik7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgaXNBY3Rpb25BbGxvd2VkKGFjdGlvbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZXNzW2FjdGlvbl07XG4gIH1cblxuICBzZXRBY2Nlc3MoKSB7XG4gICAgdGhpcy5hY2Nlc3MgPSB7XG4gICAgICBmb3JtQ3JlYXRlOiB0cnVlLFxuICAgICAgZm9ybVZpZXc6IHRydWUsXG4gICAgICBmb3JtRWRpdDogdHJ1ZSxcbiAgICAgIGZvcm1EZWxldGU6IHRydWUsXG4gICAgICBzdWJtaXNzaW9uSW5kZXg6IHRydWVcbiAgICB9O1xuICAgIGlmICh0aGlzLmF1dGgpIHtcbiAgICAgIHRoaXMuYWNjZXNzID0ge1xuICAgICAgICBmb3JtQ3JlYXRlOiBmYWxzZSxcbiAgICAgICAgZm9ybVZpZXc6IGZhbHNlLFxuICAgICAgICBmb3JtRWRpdDogZmFsc2UsXG4gICAgICAgIGZvcm1EZWxldGU6IGZhbHNlLFxuICAgICAgICBzdWJtaXNzaW9uSW5kZXg6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWFkeSA9IHRoaXMuYXV0aC5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgYWRtaW5Sb2xlcyA9IFtdO1xuICAgICAgICBfZWFjaCh0aGlzLmF1dGgucm9sZXMsIChyb2xlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKHJvbGUuYWRtaW4pIHtcbiAgICAgICAgICAgIGFkbWluUm9sZXMucHVzaChyb2xlLl9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aC51c2VyICYmIHRoaXMuYXV0aC51c2VyLnJvbGVzKSB7XG4gICAgICAgICAgdGhpcy5hdXRoLnVzZXIucm9sZXMuZm9yRWFjaChyb2xlSWQgPT4ge1xuICAgICAgICAgICAgaWYgKGFkbWluUm9sZXMuaW5kZXhPZihyb2xlSWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLmFjY2Vzcy5mb3JtQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5hY2Nlc3MuZm9ybVZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmFjY2Vzcy5mb3JtRWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuYWNjZXNzLmZvcm1EZWxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmFjY2Vzcy5zdWJtaXNzaW9uSW5kZXggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjY2Vzcy5mb3JtQ3JlYXRlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWNjZXNzLmZvcm1DcmVhdGUgPSAodGhpcy5hdXRoLmZvcm1BY2Nlc3MuY3JlYXRlX2FsbC5pbmRleE9mKHJvbGVJZCkgIT09IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5hY2Nlc3MuZm9ybVZpZXcpIHtcbiAgICAgICAgICAgICAgdGhpcy5hY2Nlc3MuZm9ybVZpZXcgPSAodGhpcy5hdXRoLmZvcm1BY2Nlc3MucmVhZF9hbGwuaW5kZXhPZihyb2xlSWQpICE9PSAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXNzLmZvcm1FZGl0KSB7XG4gICAgICAgICAgICAgIHRoaXMuYWNjZXNzLmZvcm1FZGl0ID0gKHRoaXMuYXV0aC5mb3JtQWNjZXNzLnVwZGF0ZV9hbGwuaW5kZXhPZihyb2xlSWQpICE9PSAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXNzLmZvcm1EZWxldGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5hY2Nlc3MuZm9ybURlbGV0ZSA9ICh0aGlzLmF1dGguZm9ybUFjY2Vzcy5kZWxldGVfYWxsLmluZGV4T2Yocm9sZUlkKSAhPT0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjY2Vzcy5zdWJtaXNzaW9uSW5kZXgpIHtcbiAgICAgICAgICAgICAgdGhpcy5hY2Nlc3Muc3VibWlzc2lvbkluZGV4ID0gKHRoaXMuYXV0aC5mb3JtQWNjZXNzLnJlYWRfYWxsLmluZGV4T2Yocm9sZUlkKSAhPT0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWFkeSA9IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQocm91dGU/OiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIGlmIChyb3V0ZSkge1xuICAgICAgcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLmlkKSB7XG4gICAgICAgICAgdGhpcy5mb3JtaW8gPSBuZXcgRm9ybWlvKGAke3RoaXMuZm9ybWlvLmZvcm1zVXJsfS8ke3BhcmFtcy5pZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1pbyA9IG5ldyBGb3JtaW8odGhpcy5hcHBDb25maWcuYXBwVXJsKTtcbiAgICAgIHRoaXMuc2V0QWNjZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFzQWNjZXNzKHJvbGVzKSB7XG4gICAgaWYgKCF0aGlzLmF1dGgudXNlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISFfaW50ZXJzZWN0aW9uKHJvbGVzLCB0aGlzLmF1dGgudXNlci5yb2xlcykubGVuZ3RoO1xuICB9XG5cbiAgc2V0Rm9ybShmb3JtOiBhbnkpIHtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIGlmIChmb3JtLmFjY2Vzcykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGFjY2VzcyBoZXJlLlxuICAgICAgZm9ybS5hY2Nlc3MuZm9yRWFjaChhY2Nlc3MgPT4ge1xuICAgICAgICAvLyBDaGVjayBmb3IgYWxsIGFjY2Vzcy5cbiAgICAgICAgaWYgKHRoaXMuYWxsQWNjZXNzTWFwW2FjY2Vzcy50eXBlXSAmJiAhdGhpcy5hY2Nlc3NbdGhpcy5hbGxBY2Nlc3NNYXBbYWNjZXNzLnR5cGVdXSkge1xuICAgICAgICAgIHRoaXMuYWNjZXNzW3RoaXMuYWxsQWNjZXNzTWFwW2FjY2Vzcy50eXBlXV0gPSB0aGlzLmhhc0FjY2VzcyhhY2Nlc3Mucm9sZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIG93biBhY2Nlc3MuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmF1dGggJiYgdGhpcy5hdXRoLnVzZXIgJiZcbiAgICAgICAgICAoZm9ybS5faWQgPT09IHRoaXMuYXV0aC51c2VyLl9pZCkgJiZcbiAgICAgICAgICB0aGlzLm93bkFjY2Vzc01hcFthY2Nlc3MudHlwZV0gJiZcbiAgICAgICAgICAhdGhpcy5hY2Nlc3NbdGhpcy5vd25BY2Nlc3NNYXBbYWNjZXNzLnR5cGVdXVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmFjY2Vzc1t0aGlzLm93bkFjY2Vzc01hcFthY2Nlc3MudHlwZV1dID0gdGhpcy5oYXNBY2Nlc3MoYWNjZXNzLnJvbGVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgbG9hZEZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWlvLmxvYWRGb3JtKCkudGhlbihmb3JtID0+IHRoaXMuc2V0Rm9ybShmb3JtKSk7XG4gIH1cblxuICBzZXRTdWJtaXNzaW9uKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmZvcm1pbyA9IG5ldyBGb3JtaW8oYCR7dGhpcy5mb3JtaW8uc3VibWlzc2lvbnNVcmx9LyR7cGFyYW1zLmlkfWApO1xuICAgICAgICByZXNvbHZlKHRoaXMuZm9ybWlvKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3VibWlzc2lvbkxvYWRlZChzdWJtaXNzaW9uOiBhbnkpIHtcbiAgICB0aGlzLmF1dGgucmVhZHkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmZvcm1pby51c2VyUGVybWlzc2lvbnModGhpcy5hdXRoLnVzZXIsIHRoaXMuZm9ybSwgc3VibWlzc2lvbikudGhlbigocGVybXMpID0+IHtcbiAgICAgICAgdGhpcy5wZXJtcy5kZWxldGUgPSBwZXJtcy5kZWxldGU7XG4gICAgICAgIHRoaXMucGVybXMuZWRpdCA9IHBlcm1zLmVkaXQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGb3JtcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtaW8ubG9hZEZvcm1zKHtwYXJhbXM6IHtcbiAgICAgIHRhZ3M6IHRoaXMuY29uZmlnLnRhZ1xuICAgIH19KTtcbiAgfVxuXG4gIGNyZWF0ZUZvcm0oZm9ybTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWlvLmNyZWF0ZWZvcm0oZm9ybSk7XG4gIH1cbn1cbiJdfQ==