import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../auth.service";
import * as i2 from "angular-formio";
export class FormioAuthRegisterComponent {
    constructor(service) {
        this.service = service;
    }
}
FormioAuthRegisterComponent.ɵfac = function FormioAuthRegisterComponent_Factory(t) { return new (t || FormioAuthRegisterComponent)(i0.ɵɵdirectiveInject(i1.FormioAuthService)); };
FormioAuthRegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAuthRegisterComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "formio", 0);
        i0.ɵɵlistener("submit", function FormioAuthRegisterComponent_Template_formio_submit_0_listener($event) { return ctx.service.onRegisterSubmit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("src", ctx.service.registerForm);
    } }, directives: [i2.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioAuthRegisterComponent, [{
        type: Component,
        args: [{
                templateUrl: './register.component.html'
            }]
    }], function () { return [{ type: i1.FormioAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9hdXRoL3NyYy8iLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLMUMsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFHLENBQUM7O3NHQUR0QywyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRQ0x4QyxpQ0FBMEY7UUFBckQsZ0hBQVUsb0NBQWdDLElBQUM7UUFBQyxpQkFBUzs7UUFBbEYsOENBQTRCOztrRERLdkIsMkJBQTJCO2NBSHZDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsMkJBQTJCO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9BdXRoUmVnaXN0ZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogRm9ybWlvQXV0aFNlcnZpY2UpIHt9XG59XG4iLCI8Zm9ybWlvIFtzcmNdPVwic2VydmljZS5yZWdpc3RlckZvcm1cIiAoc3VibWl0KT1cInNlcnZpY2Uub25SZWdpc3RlclN1Ym1pdCgkZXZlbnQpXCI+PC9mb3JtaW8+XG4iXX0=