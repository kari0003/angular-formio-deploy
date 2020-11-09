import { FormManagerIndexComponent } from './index/index.component';
import { FormManagerCreateComponent } from './create/create.component';
import { FormManagerFormComponent } from './form/form.component';
import { FormManagerViewComponent } from './view/view.component';
import { FormManagerEditComponent } from './edit/edit.component';
import { FormManagerDeleteComponent } from './delete/delete.component';
import { SubmissionEditComponent } from './submission/edit/edit.component';
import { SubmissionDeleteComponent } from './submission/delete/delete.component';
import { SubmissionViewComponent } from './submission/view/view.component';
import { SubmissionIndexComponent } from './submission/index/index.component';
import { SubmissionComponent } from './submission/submission/submission.component';
export function FormManagerRoutes(config) {
    return [
        {
            path: '',
            component: config && config.formIndex ? config.formIndex : FormManagerIndexComponent
        },
        {
            path: 'create',
            component: config && config.formCreate ? config.formCreate : FormManagerCreateComponent
        },
        {
            path: ':id',
            component: config && config.form ? config.form : FormManagerFormComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: config && config.formView ? config.formView : FormManagerViewComponent
                },
                {
                    path: 'edit',
                    component: config && config.formEdit ? config.formEdit : FormManagerEditComponent
                },
                {
                    path: 'delete',
                    component: config && config.formDelete ? config.formDelete : FormManagerDeleteComponent
                },
                {
                    path: 'submission',
                    component: config && config.submissionIndex ? config.submissionIndex : SubmissionIndexComponent
                },
                {
                    path: 'submission/:id',
                    component: config && config.submission ? config.submission : SubmissionComponent,
                    children: [
                        {
                            path: '',
                            redirectTo: 'view',
                            pathMatch: 'full'
                        },
                        {
                            path: 'view',
                            component: config && config.submissionView ? config.submissionView : SubmissionViewComponent
                        },
                        {
                            path: 'edit',
                            component: config && config.submissionEdit ? config.submissionEdit : SubmissionEditComponent
                        },
                        {
                            path: 'delete',
                            component: config && config.submissionDelete ? config.submissionDelete : SubmissionDeleteComponent
                        }
                    ]
                }
            ]
        }
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tYW5hZ2VyLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vbWFuYWdlci9zcmMvIiwic291cmNlcyI6WyJmb3JtLW1hbmFnZXIucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUErQjtJQUMvRCxPQUFPO1FBQ0w7WUFDRSxJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMseUJBQXlCO1NBQ3JGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1NBQ3hGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1lBQ3pFLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsRUFBRTtvQkFDUixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsU0FBUyxFQUFFLE1BQU07aUJBQ2xCO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO2lCQUNsRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtpQkFDbEY7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7aUJBQ3hGO2dCQUNEO29CQUNFLElBQUksRUFBRSxZQUFZO29CQUNsQixTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtpQkFDaEc7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7b0JBQ2hGLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxJQUFJLEVBQUUsRUFBRTs0QkFDUixVQUFVLEVBQUUsTUFBTTs0QkFDbEIsU0FBUyxFQUFFLE1BQU07eUJBQ2xCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxNQUFNOzRCQUNaLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO3lCQUM3Rjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsTUFBTTs0QkFDWixTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLHVCQUF1Qjt5QkFDN0Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMseUJBQXlCO3lCQUNuRztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtTWFuYWdlckluZGV4Q29tcG9uZW50IH0gZnJvbSAnLi9pbmRleC9pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1NYW5hZ2VyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU1hbmFnZXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1NYW5hZ2VyRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uRWRpdENvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi9lZGl0L2VkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25EZWxldGVDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pc3Npb24vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pc3Npb24vdmlldy92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uSW5kZXhDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pc3Npb24vaW5kZXgvaW5kZXguY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25Db21wb25lbnQgfSBmcm9tICcuL3N1Ym1pc3Npb24vc3VibWlzc2lvbi9zdWJtaXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTWFuYWdlclJvdXRlQ29uZmlnIH0gZnJvbSAnLi9mb3JtLW1hbmFnZXIuY29uZmlnJztcbmV4cG9ydCBmdW5jdGlvbiBGb3JtTWFuYWdlclJvdXRlcyhjb25maWc/OiBGb3JtTWFuYWdlclJvdXRlQ29uZmlnKTogUm91dGVzIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5mb3JtSW5kZXggPyBjb25maWcuZm9ybUluZGV4IDogRm9ybU1hbmFnZXJJbmRleENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2NyZWF0ZScsXG4gICAgICBjb21wb25lbnQ6IGNvbmZpZyAmJiBjb25maWcuZm9ybUNyZWF0ZSA/IGNvbmZpZy5mb3JtQ3JlYXRlIDogRm9ybU1hbmFnZXJDcmVhdGVDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6aWQnLFxuICAgICAgY29tcG9uZW50OiBjb25maWcgJiYgY29uZmlnLmZvcm0gPyBjb25maWcuZm9ybSA6IEZvcm1NYW5hZ2VyRm9ybUNvbXBvbmVudCxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICByZWRpcmVjdFRvOiAndmlldycsXG4gICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICd2aWV3JyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZyAmJiBjb25maWcuZm9ybVZpZXcgPyBjb25maWcuZm9ybVZpZXcgOiBGb3JtTWFuYWdlclZpZXdDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdlZGl0JyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZyAmJiBjb25maWcuZm9ybUVkaXQgPyBjb25maWcuZm9ybUVkaXQgOiBGb3JtTWFuYWdlckVkaXRDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdkZWxldGUnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5mb3JtRGVsZXRlID8gY29uZmlnLmZvcm1EZWxldGUgOiBGb3JtTWFuYWdlckRlbGV0ZUNvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ3N1Ym1pc3Npb24nLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5zdWJtaXNzaW9uSW5kZXggPyBjb25maWcuc3VibWlzc2lvbkluZGV4IDogU3VibWlzc2lvbkluZGV4Q29tcG9uZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnc3VibWlzc2lvbi86aWQnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5zdWJtaXNzaW9uID8gY29uZmlnLnN1Ym1pc3Npb24gOiBTdWJtaXNzaW9uQ29tcG9uZW50LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICByZWRpcmVjdFRvOiAndmlldycsXG4gICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAndmlldycsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5zdWJtaXNzaW9uVmlldyA/IGNvbmZpZy5zdWJtaXNzaW9uVmlldyA6IFN1Ym1pc3Npb25WaWV3Q29tcG9uZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnZWRpdCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5zdWJtaXNzaW9uRWRpdCA/IGNvbmZpZy5zdWJtaXNzaW9uRWRpdCA6IFN1Ym1pc3Npb25FZGl0Q29tcG9uZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBjb25maWcgJiYgY29uZmlnLnN1Ym1pc3Npb25EZWxldGUgPyBjb25maWcuc3VibWlzc2lvbkRlbGV0ZSA6IFN1Ym1pc3Npb25EZWxldGVDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG59XG4iXX0=