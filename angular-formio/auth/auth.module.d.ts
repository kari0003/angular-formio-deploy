import { FormioAuthRouteConfig } from './auth.config';
import * as i0 from "@angular/core";
import * as i1 from "./auth.component";
import * as i2 from "./login/login.component";
import * as i3 from "./register/register.component";
import * as i4 from "@angular/common";
import * as i5 from "angular-formio";
import * as i6 from "@angular/router";
export declare class FormioAuth {
    static forRoot(config?: FormioAuthRouteConfig): any;
    static forChild(config?: FormioAuthRouteConfig): any;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<FormioAuth, [typeof i1.FormioAuthComponent, typeof i2.FormioAuthLoginComponent, typeof i3.FormioAuthRegisterComponent], [typeof i4.CommonModule, typeof i5.FormioModule, typeof i6.RouterModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<FormioAuth>;
}
