import { FormioResourceRouteConfig } from './resource.config';
import * as i0 from "@angular/core";
import * as i1 from "./resource.component";
import * as i2 from "./create/create.component";
import * as i3 from "./index/index.component";
import * as i4 from "./view/view.component";
import * as i5 from "./edit/edit.component";
import * as i6 from "./delete/delete.component";
import * as i7 from "@angular/common";
import * as i8 from "angular-formio";
import * as i9 from "angular-formio/grid";
import * as i10 from "@angular/router";
export declare class FormioResource {
    static forChild(config?: FormioResourceRouteConfig): any;
    static forRoot(config?: FormioResourceRouteConfig): any;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<FormioResource, [typeof i1.FormioResourceComponent, typeof i2.FormioResourceCreateComponent, typeof i3.FormioResourceIndexComponent, typeof i4.FormioResourceViewComponent, typeof i5.FormioResourceEditComponent, typeof i6.FormioResourceDeleteComponent], [typeof i7.CommonModule, typeof i8.FormioModule, typeof i9.FormioGrid, typeof i10.RouterModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<FormioResource>;
}
