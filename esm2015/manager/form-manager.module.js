import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormioModule } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormManagerIndexComponent } from './index/index.component';
import { FormManagerCreateComponent } from './create/create.component';
import { FormManagerFormComponent } from './form/form.component';
import { FormManagerViewComponent } from './view/view.component';
import { FormManagerEditComponent } from './edit/edit.component';
import { FormManagerDeleteComponent } from './delete/delete.component';
import { SubmissionComponent } from './submission/submission/submission.component';
import { SubmissionEditComponent } from './submission/edit/edit.component';
import { SubmissionDeleteComponent } from './submission/delete/delete.component';
import { SubmissionViewComponent } from './submission/view/view.component';
import { SubmissionIndexComponent } from './submission/index/index.component';
import { FormManagerRoutes } from './form-manager.routes';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { extendRouter } from 'angular-formio';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "ngx-bootstrap/pagination";
export class FormManagerModule {
    static forChild(config) {
        return extendRouter(FormManagerModule, config, FormManagerRoutes);
    }
    static forRoot(config) {
        return extendRouter(FormManagerModule, config, FormManagerRoutes);
    }
}
FormManagerModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormManagerModule });
FormManagerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormManagerModule_Factory(t) { return new (t || FormManagerModule)(); }, imports: [[
            CommonModule,
            FormioModule,
            RouterModule,
            FormsModule,
            FormioGrid,
            ModalModule.forRoot(),
            PaginationModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormManagerModule, { declarations: [FormManagerIndexComponent,
        FormManagerCreateComponent,
        FormManagerFormComponent,
        FormManagerViewComponent,
        FormManagerEditComponent,
        FormManagerDeleteComponent,
        SubmissionComponent,
        SubmissionEditComponent,
        SubmissionDeleteComponent,
        SubmissionViewComponent,
        SubmissionIndexComponent], imports: [CommonModule,
        FormioModule,
        RouterModule,
        FormsModule,
        FormioGrid, i1.ModalModule, i2.PaginationModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormManagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    RouterModule,
                    FormsModule,
                    FormioGrid,
                    ModalModule.forRoot(),
                    PaginationModule.forRoot()
                ],
                declarations: [
                    FormManagerIndexComponent,
                    FormManagerCreateComponent,
                    FormManagerFormComponent,
                    FormManagerViewComponent,
                    FormManagerEditComponent,
                    FormManagerDeleteComponent,
                    SubmissionComponent,
                    SubmissionEditComponent,
                    SubmissionDeleteComponent,
                    SubmissionViewComponent,
                    SubmissionIndexComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vbWFuYWdlci9zcmMvIiwic291cmNlcyI6WyJmb3JtLW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBeUI5QyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBK0I7UUFDN0MsT0FBTyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBK0I7UUFDNUMsT0FBTyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7cURBTlUsaUJBQWlCO2lIQUFqQixpQkFBaUIsa0JBdkJuQjtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxVQUFVO1lBQ1YsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7U0FDM0I7d0ZBZVUsaUJBQWlCLG1CQWIxQix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsd0JBQXdCLGFBbkJ4QixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtrREFrQkQsaUJBQWlCO2NBeEI3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsMEJBQTBCO29CQUMxQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuaW1wb3J0IHsgRm9ybWlvR3JpZCB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvL2dyaWQnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJJbmRleENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgvaW5kZXguY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1NYW5hZ2VyQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1NYW5hZ2VyRWRpdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlckRlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXNzaW9uL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvbkRlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25JbmRleENvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi9pbmRleC9pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJSb3V0ZUNvbmZpZyB9IGZyb20gJy4vZm9ybS1tYW5hZ2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclJvdXRlcyB9IGZyb20gJy4vZm9ybS1tYW5hZ2VyLnJvdXRlcyc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBleHRlbmRSb3V0ZXIgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1pb01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRm9ybWlvR3JpZCxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgUGFnaW5hdGlvbk1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybU1hbmFnZXJJbmRleENvbXBvbmVudCxcbiAgICBGb3JtTWFuYWdlckNyZWF0ZUNvbXBvbmVudCxcbiAgICBGb3JtTWFuYWdlckZvcm1Db21wb25lbnQsXG4gICAgRm9ybU1hbmFnZXJWaWV3Q29tcG9uZW50LFxuICAgIEZvcm1NYW5hZ2VyRWRpdENvbXBvbmVudCxcbiAgICBGb3JtTWFuYWdlckRlbGV0ZUNvbXBvbmVudCxcbiAgICBTdWJtaXNzaW9uQ29tcG9uZW50LFxuICAgIFN1Ym1pc3Npb25FZGl0Q29tcG9uZW50LFxuICAgIFN1Ym1pc3Npb25EZWxldGVDb21wb25lbnQsXG4gICAgU3VibWlzc2lvblZpZXdDb21wb25lbnQsXG4gICAgU3VibWlzc2lvbkluZGV4Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1hbmFnZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnPzogRm9ybU1hbmFnZXJSb3V0ZUNvbmZpZyk6IGFueSB7XG4gICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtTWFuYWdlck1vZHVsZSwgY29uZmlnLCBGb3JtTWFuYWdlclJvdXRlcyk7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybU1hbmFnZXJSb3V0ZUNvbmZpZyk6IGFueSB7XG4gICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtTWFuYWdlck1vZHVsZSwgY29uZmlnLCBGb3JtTWFuYWdlclJvdXRlcyk7XG4gIH1cbn1cbiJdfQ==