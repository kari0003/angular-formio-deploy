import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "angular-formio/auth";
export class FormioResources {
    constructor(auth) {
        this.auth = auth;
        this.resources = {};
        this.error = new EventEmitter();
        this.onError = this.error;
        this.resources = {
            currentUser: {
                resourceLoaded: this.auth.userReady
            }
        };
    }
}
FormioResources.ɵfac = function FormioResources_Factory(t) { return new (t || FormioResources)(i0.ɵɵinject(i1.FormioAuthService)); };
FormioResources.ɵprov = i0.ɵɵdefineInjectable({ token: FormioResources, factory: FormioResources.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResources, [{
        type: Injectable
    }], function () { return [{ type: i1.FormioAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Jlc291cmNlL3NyYy8iLCJzb3VyY2VzIjpbInJlc291cmNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRekQsTUFBTSxPQUFPLGVBQWU7SUFJMUIsWUFDUyxJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUpqQyxjQUFTLEdBQXNCLEVBQUUsQ0FBQztRQU1oQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixXQUFXLEVBQUU7Z0JBQ1gsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzthQUNwQztTQUNGLENBQUM7SUFDSixDQUFDOzs4RUFkVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWZvcm1pby9hdXRoJztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtaW9SZXNvdXJjZU1hcCB7XG4gIFtuYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtaW9SZXNvdXJjZXMge1xuICByZXNvdXJjZXM6IEZvcm1pb1Jlc291cmNlTWFwID0ge307XG4gIGVycm9yOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgb25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhdXRoPzogRm9ybWlvQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5lcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLm9uRXJyb3IgPSB0aGlzLmVycm9yO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge1xuICAgICAgY3VycmVudFVzZXI6IHtcbiAgICAgICAgcmVzb3VyY2VMb2FkZWQ6IHRoaXMuYXV0aC51c2VyUmVhZHlcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=