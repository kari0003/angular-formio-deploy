import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FormioAuthConfig {
}
FormioAuthConfig.ɵfac = function FormioAuthConfig_Factory(t) { return new (t || FormioAuthConfig)(); };
FormioAuthConfig.ɵprov = i0.ɵɵdefineInjectable({ token: FormioAuthConfig, factory: FormioAuthConfig.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioAuthConfig, [{
        type: Injectable
    }], null, null); })();
export var FormioOauthType;
(function (FormioOauthType) {
    FormioOauthType["okta"] = "okta";
    FormioOauthType["saml"] = "saml";
})(FormioOauthType || (FormioOauthType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2F1dGgvc3JjLyIsInNvdXJjZXMiOlsiYXV0aC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlM0MsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7O0FBZVgsTUFBTSxDQUFOLElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN6QixnQ0FBYSxDQUFBO0lBQ2IsZ0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxlQUFlLEtBQWYsZUFBZSxRQUcxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtaW9BdXRoRm9ybUNvbmZpZyB7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGZvcm0/OiBzdHJpbmc7XG4gIGNvbXBvbmVudD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtaW9BdXRoUm91dGVDb25maWcge1xuICBhdXRoPzogYW55O1xuICBsb2dpbj86IGFueTtcbiAgcmVnaXN0ZXI/OiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtaW9BdXRoQ29uZmlnIHtcbiAgY29tcG9uZW50PzogYW55O1xuICBkZWxheUF1dGg/OiBhbnk7XG4gIGxvZ2luPzogRm9ybWlvQXV0aEZvcm1Db25maWc7XG4gIHJlZ2lzdGVyPzogRm9ybWlvQXV0aEZvcm1Db25maWc7XG4gIG9hdXRoPzogRm9ybWlvT0F1dGhDb25maWc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtaW9PQXV0aENvbmZpZyB7XG4gIHR5cGU6IEZvcm1pb09hdXRoVHlwZTtcbiAgb3B0aW9uczogRm9ybWlvT2t0YUNvbmZpZyB8IEZvcm1pb1NhbWxDb25maWc7XG59XG5cbmV4cG9ydCBlbnVtIEZvcm1pb09hdXRoVHlwZSB7XG4gIG9rdGEgPSAnb2t0YScsXG4gIHNhbWwgPSAnc2FtbCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWlvT2t0YUNvbmZpZyBleHRlbmRzIE9rdGFDb25maWcge1xuICBmb3JtaW8/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWlvU2FtbENvbmZpZyB7XG4gIHJlbGF5OiBzdHJpbmc7XG59XG5cbi8vIGZvciBtb3JlIGRldGFpbHMgYWJvdXQgT2t0YSBjb25maWd1cmF0aW9uIG9wdGlvbnMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9va3RhL29rdGEtYXV0aC1qcyNjb25maWd1cmF0aW9uLXJlZmVyZW5jZVxuZXhwb3J0IGludGVyZmFjZSBPa3RhQ29uZmlnIHtcbiAgdXJsPzogc3RyaW5nO1xuICB0b2tlbk1hbmFnZXI/OiBPa3RhVG9rZW5NYW5hZ2VyQ29uZmlnO1xuICBpc3N1ZXI/OiBzdHJpbmc7XG4gIGNsaWVudElkPzogc3RyaW5nO1xuICByZWRpcmVjdFVyaT86IHN0cmluZztcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpPzogc3RyaW5nO1xuICBwa2NlPzogYm9vbGVhbjtcbiAgYXV0aG9yaXplVXJsPzogc3RyaW5nO1xuICB1c2VyaW5mb1VybD86IHN0cmluZztcbiAgdG9rZW5Vcmw/OiBzdHJpbmc7XG4gIGlnbm9yZVNpZ25hdHVyZT86IGJvb2xlYW47XG4gIG1heENsb2NrU2tldz86IG51bWJlcjtcbiAgc2NvcGVzPzogc3RyaW5nW107XG4gIGh0dHBSZXF1ZXN0Q2xpZW50PzogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2t0YVRva2VuTWFuYWdlckNvbmZpZyB7XG4gIHN0b3JhZ2U/OiBzdHJpbmcgfCB7XG4gICAgZ2V0SXRlbT86IEZ1bmN0aW9uO1xuICAgIHNldEl0ZW0/OiBGdW5jdGlvbjtcbiAgfTtcbiAgc2VjdXJlPzogYm9vbGVhbjtcbiAgYXV0b1JlbmV3PzogYm9vbGVhbjtcbiAgZXhwaXJlRWFybHlTZWNvbmRzPzogbnVtYmVyO1xuICBzdG9yYWdlS2V5Pzogc3RyaW5nO1xufVxuIl19