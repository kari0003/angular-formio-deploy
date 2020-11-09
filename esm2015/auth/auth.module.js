import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { FormioAuthComponent } from './auth.component';
import { FormioAuthLoginComponent } from './login/login.component';
import { FormioAuthRegisterComponent } from './register/register.component';
import { FormioAuthRoutes } from './auth.routes';
import { extendRouter } from 'angular-formio';
import * as i0 from "@angular/core";
export class FormioAuth {
    static forRoot(config) {
        return extendRouter(FormioAuth, config, FormioAuthRoutes);
    }
    static forChild(config) {
        return extendRouter(FormioAuth, config, FormioAuthRoutes);
    }
}
FormioAuth.ɵmod = i0.ɵɵdefineNgModule({ type: FormioAuth });
FormioAuth.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioAuth_Factory(t) { return new (t || FormioAuth)(); }, imports: [[
            CommonModule,
            FormioModule,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioAuth, { declarations: [FormioAuthComponent,
        FormioAuthLoginComponent,
        FormioAuthRegisterComponent], imports: [CommonModule,
        FormioModule,
        RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioAuth, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2F1dGgvc3JjLyIsInNvdXJjZXMiOlsiYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQWM5QyxNQUFNLE9BQU8sVUFBVTtJQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQThCO1FBQzNDLE9BQU8sWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUE4QjtRQUM1QyxPQUFPLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OENBTlUsVUFBVTttR0FBVixVQUFVLGtCQVhaO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1NBQ2I7d0ZBT1UsVUFBVSxtQkFMbkIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QiwyQkFBMkIsYUFQM0IsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO2tEQVFILFVBQVU7Y0FadEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQix3QkFBd0I7b0JBQ3hCLDJCQUEyQjtpQkFDNUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1pb01vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCB7IEZvcm1pb0F1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb0F1dGhMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb0F1dGhSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb0F1dGhSb3V0ZUNvbmZpZyB9IGZyb20gJy4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFJvdXRlcyB9IGZyb20gJy4vYXV0aC5yb3V0ZXMnO1xuaW1wb3J0IHsgZXh0ZW5kUm91dGVyIH0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1pb01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybWlvQXV0aENvbXBvbmVudCxcbiAgICBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQsXG4gICAgRm9ybWlvQXV0aFJlZ2lzdGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvQXV0aCB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEZvcm1pb0F1dGhSb3V0ZUNvbmZpZyk6IGFueSB7XG4gICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtaW9BdXRoLCBjb25maWcsIEZvcm1pb0F1dGhSb3V0ZXMpO1xuICB9XG4gIHN0YXRpYyBmb3JDaGlsZChjb25maWc/OiBGb3JtaW9BdXRoUm91dGVDb25maWcpOiBhbnkge1xuICAgIHJldHVybiBleHRlbmRSb3V0ZXIoRm9ybWlvQXV0aCwgY29uZmlnLCBGb3JtaW9BdXRoUm91dGVzKTtcbiAgfVxufVxuIl19