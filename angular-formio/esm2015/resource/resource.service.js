import { EventEmitter, Injectable, Optional } from '@angular/core';
import { FormioPromiseService } from 'angular-formio';
import { FormioAlerts } from 'angular-formio';
import Promise from 'native-promise-only';
import { Formio, Utils } from 'formiojs';
import _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "angular-formio";
import * as i2 from "./resource.config";
import * as i3 from "./resources.service";
export class FormioResourceService {
    constructor(appConfig, config, resourcesService, appRef) {
        this.appConfig = appConfig;
        this.config = config;
        this.resourcesService = resourcesService;
        this.appRef = appRef;
        this.initialized = false;
        this.isLoading = true;
        this.alerts = new FormioAlerts();
        this.refresh = new EventEmitter();
        this.formLoaded = new Promise((resolve, reject) => {
            this.formResolve = resolve;
            this.formReject = reject;
        });
        this.init();
    }
    initialize() {
        console.warn('FormioResourceService.initialize() has been deprecated.');
    }
    init() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
            Formio.formOnly = this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        // Create the form url and load the resources.
        this.formUrl = this.appConfig.appUrl + '/' + this.config.form;
        this.resource = { data: {} };
        // Add this resource service to the list of all resources in context.
        if (this.resourcesService) {
            this.resources = this.resourcesService.resources;
            this.resources[this.config.name] = this;
        }
        return this.loadForm();
    }
    onError(error) {
        this.alerts.setAlert({
            type: 'danger',
            message: error.message || error
        });
        if (this.resourcesService) {
            this.resourcesService.error.emit(error);
        }
        throw error;
    }
    onFormError(err) {
        this.formReject(err);
        this.onError(err);
    }
    setContext(route) {
        this.resourceId = route.snapshot.params['id'];
        this.resource = { data: {} };
        this.resourceUrl = this.appConfig.appUrl + '/' + this.config.form;
        if (this.resourceId) {
            this.resourceUrl += '/submission/' + this.resourceId;
        }
        this.formio = new FormioPromiseService(this.resourceUrl);
        if (this.resourcesService) {
            this.resources[this.config.name] = this;
        }
        this.loadParents();
    }
    loadForm() {
        this.formFormio = new FormioPromiseService(this.formUrl);
        this.isLoading = true;
        this.formLoading = this.formFormio
            .loadForm()
            .then((form) => {
            this.form = form;
            this.formResolve(form);
            this.isLoading = false;
            this.loadParents();
            return form;
        }, (err) => this.onFormError(err))
            .catch((err) => this.onFormError(err));
        return this.formLoading;
    }
    loadParents() {
        if (!this.config.parents || !this.config.parents.length) {
            return Promise.resolve([]);
        }
        if (!this.resourcesService) {
            console.warn('You must provide the FormioResources within your application to use nested resources.');
            return Promise.resolve([]);
        }
        return this.formLoading.then((form) => {
            // Iterate through the list of parents.
            const _parentsLoaded = [];
            this.config.parents.forEach((parent) => {
                const resourceName = parent.resource || parent;
                const resourceField = parent.field || parent;
                const filterResource = parent.hasOwnProperty('filter') ? parent.filter : true;
                if (this.resources.hasOwnProperty(resourceName) && this.resources[resourceName].resourceLoaded) {
                    _parentsLoaded.push(this.resources[resourceName].resourceLoaded.then((resource) => {
                        let parentPath = '';
                        Utils.eachComponent(form.components, (component, path) => {
                            if (component.key === resourceField) {
                                component.hidden = true;
                                component.clearOnHide = false;
                                _.set(this.resource.data, path, resource);
                                parentPath = path;
                                return true;
                            }
                        });
                        return {
                            name: parentPath,
                            filter: filterResource,
                            resource
                        };
                    }));
                }
            });
            // When all the parents have loaded, emit that to the onParents emitter.
            return Promise.all(_parentsLoaded).then((parents) => {
                this.refresh.emit({
                    form: form,
                    submission: this.resource
                });
                return parents;
            });
        });
    }
    onSubmissionError(err) {
        this.onError(err);
    }
    loadResource(route) {
        this.setContext(route);
        this.isLoading = true;
        this.resourceLoading = this.resourceLoaded = this.formio
            .loadSubmission(null, { ignoreCache: true })
            .then((resource) => {
            this.resource = resource;
            this.isLoading = false;
            this.refresh.emit({
                property: 'submission',
                value: this.resource
            });
            return resource;
        }, (err) => this.onSubmissionError(err))
            .catch((err) => this.onSubmissionError(err));
        return this.resourceLoading;
    }
    save(resource) {
        const formio = resource._id ? this.formio : this.formFormio;
        return formio
            .saveSubmission(resource)
            .then((saved) => {
            this.resource = saved;
            return saved;
        }, (err) => this.onError(err))
            .catch((err) => this.onError(err));
    }
    remove() {
        return this.formio
            .deleteSubmission()
            .then(() => {
            this.resource = null;
        }, (err) => this.onError(err))
            .catch((err) => this.onError(err));
    }
}
FormioResourceService.ɵfac = function FormioResourceService_Factory(t) { return new (t || FormioResourceService)(i0.ɵɵinject(i1.FormioAppConfig), i0.ɵɵinject(i2.FormioResourceConfig), i0.ɵɵinject(i3.FormioResources, 8), i0.ɵɵinject(i0.ApplicationRef)); };
FormioResourceService.ɵprov = i0.ɵɵdefineInjectable({ token: FormioResourceService, factory: FormioResourceService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceService, [{
        type: Injectable
    }], function () { return [{ type: i1.FormioAppConfig }, { type: i2.FormioResourceConfig }, { type: i3.FormioResources, decorators: [{
                type: Optional
            }] }, { type: i0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcmVzb3VyY2Uvc3JjLyIsInNvdXJjZXMiOlsicmVzb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWtCLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxPQUFPLE9BQU8sTUFBTSxxQkFBcUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7O0FBR3ZCLE1BQU0sT0FBTyxxQkFBcUI7SUFzQmhDLFlBQ1MsU0FBMEIsRUFDMUIsTUFBNEIsRUFDaEIsZ0JBQWlDLEVBQzdDLE1BQXNCO1FBSHRCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDN0MsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUF6QnhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBMkJ6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsTUFBVyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFdBQVcs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Q0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUNoQzthQUNBLEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OzBGQXpOVSxxQkFBcUI7NkRBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVOztzQkEwQk4sUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUNvbmZpZyB9IGZyb20gJy4vcmVzb3VyY2UuY29uZmlnJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWlvUHJvbWlzZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9SZWZyZXNoVmFsdWUgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICduYXRpdmUtcHJvbWlzZS1vbmx5JztcbmltcG9ydCB7IEZvcm1pbywgVXRpbHMgfSBmcm9tICdmb3JtaW9qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlIHtcbiAgcHVibGljIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHB1YmxpYyBmb3JtOiBhbnk7XG4gIHB1YmxpYyBhbGVydHM6IEZvcm1pb0FsZXJ0cztcbiAgcHVibGljIHJlc291cmNlOiBhbnk7XG4gIHB1YmxpYyByZXNvdXJjZVVybD86IHN0cmluZztcbiAgcHVibGljIGZvcm1Vcmw6IHN0cmluZztcbiAgcHVibGljIGZvcm1Gb3JtaW86IEZvcm1pb1Byb21pc2VTZXJ2aWNlO1xuICBwdWJsaWMgZm9ybWlvOiBGb3JtaW9Qcm9taXNlU2VydmljZTtcbiAgcHVibGljIHJlZnJlc2g6IEV2ZW50RW1pdHRlcjxGb3JtaW9SZWZyZXNoVmFsdWU+O1xuXG4gIHB1YmxpYyByZXNvdXJjZUxvYWRpbmc/OiBQcm9taXNlPGFueT47XG4gIHB1YmxpYyByZXNvdXJjZUxvYWRlZD86IFByb21pc2U8YW55PjtcbiAgcHVibGljIHJlc291cmNlSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyByZXNvdXJjZXM6IGFueTtcblxuICBwdWJsaWMgZm9ybUxvYWRpbmc/OiBQcm9taXNlPGFueT47XG4gIHB1YmxpYyBmb3JtTG9hZGVkOiBQcm9taXNlPGFueT47XG4gIHB1YmxpYyBmb3JtUmVzb2x2ZTogYW55O1xuICBwdWJsaWMgZm9ybVJlamVjdDogYW55O1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcHBDb25maWc6IEZvcm1pb0FwcENvbmZpZyxcbiAgICBwdWJsaWMgY29uZmlnOiBGb3JtaW9SZXNvdXJjZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmVzb3VyY2VzU2VydmljZTogRm9ybWlvUmVzb3VyY2VzLFxuICAgIHB1YmxpYyBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICApIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5hbGVydHMgPSBuZXcgRm9ybWlvQWxlcnRzKCk7XG4gICAgdGhpcy5yZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMuZm9ybUxvYWRlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgICB0aGlzLmZvcm1SZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuZm9ybVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc29sZS53YXJuKCdGb3JtaW9SZXNvdXJjZVNlcnZpY2UuaW5pdGlhbGl6ZSgpIGhhcyBiZWVuIGRlcHJlY2F0ZWQuJyk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmFwcENvbmZpZyAmJiB0aGlzLmFwcENvbmZpZy5hcHBVcmwpIHtcbiAgICAgIEZvcm1pby5zZXRCYXNlVXJsKHRoaXMuYXBwQ29uZmlnLmFwaVVybCk7XG4gICAgICBGb3JtaW8uc2V0UHJvamVjdFVybCh0aGlzLmFwcENvbmZpZy5hcHBVcmwpO1xuICAgICAgRm9ybWlvLmZvcm1Pbmx5ID0gdGhpcy5hcHBDb25maWcuZm9ybU9ubHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYW4gQXBwQ29uZmlnIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9uIScpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSB1cmwgYW5kIGxvYWQgdGhlIHJlc291cmNlcy5cbiAgICB0aGlzLmZvcm1VcmwgPSB0aGlzLmFwcENvbmZpZy5hcHBVcmwgKyAnLycgKyB0aGlzLmNvbmZpZy5mb3JtO1xuICAgIHRoaXMucmVzb3VyY2UgPSB7IGRhdGE6IHt9IH07XG5cbiAgICAvLyBBZGQgdGhpcyByZXNvdXJjZSBzZXJ2aWNlIHRvIHRoZSBsaXN0IG9mIGFsbCByZXNvdXJjZXMgaW4gY29udGV4dC5cbiAgICBpZiAodGhpcy5yZXNvdXJjZXNTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnJlc291cmNlcyA9IHRoaXMucmVzb3VyY2VzU2VydmljZS5yZXNvdXJjZXM7XG4gICAgICB0aGlzLnJlc291cmNlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZEZvcm0oKTtcbiAgfVxuXG4gIG9uRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIHRoaXMuYWxlcnRzLnNldEFsZXJ0KHtcbiAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvclxuICAgIH0pO1xuICAgIGlmICh0aGlzLnJlc291cmNlc1NlcnZpY2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VzU2VydmljZS5lcnJvci5lbWl0KGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBvbkZvcm1FcnJvcihlcnI6IGFueSkge1xuICAgIHRoaXMuZm9ybVJlamVjdChlcnIpO1xuICAgIHRoaXMub25FcnJvcihlcnIpO1xuICB9XG5cbiAgc2V0Q29udGV4dChyb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLnJlc291cmNlSWQgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgdGhpcy5yZXNvdXJjZSA9IHsgZGF0YToge30gfTtcbiAgICB0aGlzLnJlc291cmNlVXJsID0gdGhpcy5hcHBDb25maWcuYXBwVXJsICsgJy8nICsgdGhpcy5jb25maWcuZm9ybTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZUlkKSB7XG4gICAgICB0aGlzLnJlc291cmNlVXJsICs9ICcvc3VibWlzc2lvbi8nICsgdGhpcy5yZXNvdXJjZUlkO1xuICAgIH1cbiAgICB0aGlzLmZvcm1pbyA9IG5ldyBGb3JtaW9Qcm9taXNlU2VydmljZSh0aGlzLnJlc291cmNlVXJsKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZXNTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnJlc291cmNlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMubG9hZFBhcmVudHMoKTtcbiAgfVxuXG4gIGxvYWRGb3JtKCkge1xuICAgIHRoaXMuZm9ybUZvcm1pbyA9IG5ldyBGb3JtaW9Qcm9taXNlU2VydmljZSh0aGlzLmZvcm1VcmwpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZvcm1Mb2FkaW5nID0gdGhpcy5mb3JtRm9ybWlvXG4gICAgICAubG9hZEZvcm0oKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChmb3JtOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICAgIHRoaXMuZm9ybVJlc29sdmUoZm9ybSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvYWRQYXJlbnRzKCk7XG4gICAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gdGhpcy5vbkZvcm1FcnJvcihlcnIpXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB0aGlzLm9uRm9ybUVycm9yKGVycikpO1xuICAgIHJldHVybiB0aGlzLmZvcm1Mb2FkaW5nO1xuICB9XG5cbiAgbG9hZFBhcmVudHMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wYXJlbnRzIHx8ICF0aGlzLmNvbmZpZy5wYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5yZXNvdXJjZXNTZXJ2aWNlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdZb3UgbXVzdCBwcm92aWRlIHRoZSBGb3JtaW9SZXNvdXJjZXMgd2l0aGluIHlvdXIgYXBwbGljYXRpb24gdG8gdXNlIG5lc3RlZCByZXNvdXJjZXMuJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtTG9hZGluZy50aGVuKChmb3JtKSA9PiB7XG4gICAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIGxpc3Qgb2YgcGFyZW50cy5cbiAgICAgIGNvbnN0IF9wYXJlbnRzTG9hZGVkOiBBcnJheTxQcm9taXNlPGFueT4+ID0gW107XG4gICAgICB0aGlzLmNvbmZpZy5wYXJlbnRzLmZvckVhY2goKHBhcmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHBhcmVudC5yZXNvdXJjZSB8fCBwYXJlbnQ7XG4gICAgICAgIGNvbnN0IHJlc291cmNlRmllbGQgPSBwYXJlbnQuZmllbGQgfHwgcGFyZW50O1xuICAgICAgICBjb25zdCBmaWx0ZXJSZXNvdXJjZSA9IHBhcmVudC5oYXNPd25Qcm9wZXJ0eSgnZmlsdGVyJykgPyBwYXJlbnQuZmlsdGVyIDogdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VzLmhhc093blByb3BlcnR5KHJlc291cmNlTmFtZSkgJiYgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2VOYW1lXS5yZXNvdXJjZUxvYWRlZCkge1xuICAgICAgICAgIF9wYXJlbnRzTG9hZGVkLnB1c2goXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZU5hbWVdLnJlc291cmNlTG9hZGVkLnRoZW4oKHJlc291cmNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHBhcmVudFBhdGggPSAnJztcbiAgICAgICAgICAgICAgVXRpbHMuZWFjaENvbXBvbmVudChmb3JtLmNvbXBvbmVudHMsIChjb21wb25lbnQsIHBhdGgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmtleSA9PT0gcmVzb3VyY2VGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQuY2xlYXJPbkhpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIF8uc2V0KHRoaXMucmVzb3VyY2UuZGF0YSwgcGF0aCwgcmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9IHBhdGg7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFBhdGgsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJSZXNvdXJjZSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gV2hlbiBhbGwgdGhlIHBhcmVudHMgaGF2ZSBsb2FkZWQsIGVtaXQgdGhhdCB0byB0aGUgb25QYXJlbnRzIGVtaXR0ZXIuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoX3BhcmVudHNMb2FkZWQpLnRoZW4oKHBhcmVudHM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2guZW1pdCh7XG4gICAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgICBzdWJtaXNzaW9uOiB0aGlzLnJlc291cmNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXNzaW9uRXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgfVxuXG4gIGxvYWRSZXNvdXJjZShyb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLnNldENvbnRleHQocm91dGUpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlc291cmNlTG9hZGluZyA9IHRoaXMucmVzb3VyY2VMb2FkZWQgPSB0aGlzLmZvcm1pb1xuICAgICAgLmxvYWRTdWJtaXNzaW9uKG51bGwsIHtpZ25vcmVDYWNoZTogdHJ1ZX0pXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc291cmNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2guZW1pdCh7XG4gICAgICAgICAgICBwcm9wZXJ0eTogJ3N1Ym1pc3Npb24nLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucmVzb3VyY2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gdGhpcy5vblN1Ym1pc3Npb25FcnJvcihlcnIpXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB0aGlzLm9uU3VibWlzc2lvbkVycm9yKGVycikpO1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlTG9hZGluZztcbiAgfVxuXG4gIHNhdmUocmVzb3VyY2U6IGFueSkge1xuICAgIGNvbnN0IGZvcm1pbyA9IHJlc291cmNlLl9pZCA/IHRoaXMuZm9ybWlvIDogdGhpcy5mb3JtRm9ybWlvO1xuICAgIHJldHVybiBmb3JtaW9cbiAgICAgIC5zYXZlU3VibWlzc2lvbihyZXNvdXJjZSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoc2F2ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzb3VyY2UgPSBzYXZlZDtcbiAgICAgICAgICByZXR1cm4gc2F2ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycilcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtaW9cbiAgICAgIC5kZWxldGVTdWJtaXNzaW9uKClcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycilcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgfVxufVxuIl19