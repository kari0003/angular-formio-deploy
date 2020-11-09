import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../auth.service";
import * as i2 from "angular-formio";
export class FormioAuthLoginComponent {
    constructor(service) {
        this.service = service;
    }
}
FormioAuthLoginComponent.ɵfac = function FormioAuthLoginComponent_Factory(t) { return new (t || FormioAuthLoginComponent)(i0.ɵɵdirectiveInject(i1.FormioAuthService)); };
FormioAuthLoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAuthLoginComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "formio", 0);
        i0.ɵɵlistener("submit", function FormioAuthLoginComponent_Template_formio_submit_0_listener($event) { return ctx.service.onLoginSubmit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("src", ctx.service.loginForm);
    } }, directives: [i2.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioAuthLoginComponent, [{
        type: Component,
        args: [{
                templateUrl: './login.component.html'
            }]
    }], function () { return [{ type: i1.FormioAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9hdXRoL3NyYy8iLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImxvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLMUMsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFHLENBQUM7O2dHQUR0Qyx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ0xyQyxpQ0FBb0Y7UUFBbEQsNkdBQVUsaUNBQTZCLElBQUM7UUFBQyxpQkFBUzs7UUFBNUUsMkNBQXlCOztrRERLcEIsd0JBQXdCO2NBSHBDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsd0JBQXdCO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogRm9ybWlvQXV0aFNlcnZpY2UpIHt9XG59XG4iLCI8Zm9ybWlvIFtzcmNdPVwic2VydmljZS5sb2dpbkZvcm1cIiAoc3VibWl0KT1cInNlcnZpY2Uub25Mb2dpblN1Ym1pdCgkZXZlbnQpXCI+PC9mb3JtaW8+XG4iXX0=