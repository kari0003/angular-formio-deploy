import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormioModule } from 'angular-formio';
import { FormioAlerts } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormioResourceComponent } from './resource.component';
import { FormioResourceViewComponent } from './view/view.component';
import { FormioResourceEditComponent } from './edit/edit.component';
import { FormioResourceDeleteComponent } from './delete/delete.component';
import { FormioResourceCreateComponent } from './create/create.component';
import { FormioResourceIndexComponent } from './index/index.component';
import { FormioResourceRoutes } from './resource.routes';
import { extendRouter } from 'angular-formio';
import * as i0 from "@angular/core";
export class FormioResource {
    static forChild(config) {
        return extendRouter(FormioResource, config, FormioResourceRoutes);
    }
    static forRoot(config) {
        return extendRouter(FormioResource, config, FormioResourceRoutes);
    }
}
FormioResource.ɵmod = i0.ɵɵdefineNgModule({ type: FormioResource });
FormioResource.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioResource_Factory(t) { return new (t || FormioResource)(); }, providers: [
        FormioAlerts
    ], imports: [[
            CommonModule,
            FormioModule,
            FormioGrid,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioResource, { declarations: [FormioResourceComponent,
        FormioResourceCreateComponent,
        FormioResourceIndexComponent,
        FormioResourceViewComponent,
        FormioResourceEditComponent,
        FormioResourceDeleteComponent], imports: [CommonModule,
        FormioModule,
        FormioGrid,
        RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResource, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    FormioGrid,
                    RouterModule
                ],
                declarations: [
                    FormioResourceComponent,
                    FormioResourceCreateComponent,
                    FormioResourceIndexComponent,
                    FormioResourceViewComponent,
                    FormioResourceEditComponent,
                    FormioResourceDeleteComponent
                ],
                providers: [
                    FormioAlerts
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9yZXNvdXJjZS9zcmMvIiwic291cmNlcyI6WyJyZXNvdXJjZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFxQjlDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBa0M7UUFDaEQsT0FBTyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWtDO1FBQy9DLE9BQU8sWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDOztrREFOVSxjQUFjOzJHQUFkLGNBQWMsbUJBSmQ7UUFDVCxZQUFZO0tBQ2IsWUFoQlE7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZO1NBQ2I7d0ZBYVUsY0FBYyxtQkFYdkIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiw2QkFBNkIsYUFYN0IsWUFBWTtRQUNaLFlBQVk7UUFDWixVQUFVO1FBQ1YsWUFBWTtrREFjSCxjQUFjO2NBbkIxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixVQUFVO29CQUNWLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsNkJBQTZCO29CQUM3Qiw0QkFBNEI7b0JBQzVCLDJCQUEyQjtvQkFDM0IsMkJBQTJCO29CQUMzQiw2QkFBNkI7aUJBQzlCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtaW9Nb2R1bGUgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9HcmlkIH0gZnJvbSAnYW5ndWxhci1mb3JtaW8vZ3JpZCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tICcuL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50IH0gZnJvbSAnLi9pbmRleC9pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcmVzb3VyY2UuY29uZmlnJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlUm91dGVzIH0gZnJvbSAnLi9yZXNvdXJjZS5yb3V0ZXMnO1xuaW1wb3J0IHsgZXh0ZW5kUm91dGVyIH0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1pb01vZHVsZSxcbiAgICBGb3JtaW9HcmlkLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudCxcbiAgICBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LFxuICAgIEZvcm1pb1Jlc291cmNlVmlld0NvbXBvbmVudCxcbiAgICBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQsXG4gICAgRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRm9ybWlvQWxlcnRzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvUmVzb3VyY2Uge1xuICBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnPzogRm9ybWlvUmVzb3VyY2VSb3V0ZUNvbmZpZyk6IGFueSB7XG4gICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtaW9SZXNvdXJjZSwgY29uZmlnLCBGb3JtaW9SZXNvdXJjZVJvdXRlcyk7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybWlvUmVzb3VyY2VSb3V0ZUNvbmZpZyk6IGFueSB7XG4gICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtaW9SZXNvdXJjZSwgY29uZmlnLCBGb3JtaW9SZXNvdXJjZVJvdXRlcyk7XG4gIH1cbn1cbiJdfQ==