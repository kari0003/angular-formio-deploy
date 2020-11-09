import { FormioResourceComponent } from './resource.component';
import { FormioResourceViewComponent } from './view/view.component';
import { FormioResourceEditComponent } from './edit/edit.component';
import { FormioResourceDeleteComponent } from './delete/delete.component';
import { FormioResourceCreateComponent } from './create/create.component';
import { FormioResourceIndexComponent } from './index/index.component';
export function FormioResourceRoutes(config) {
    return [
        {
            path: '',
            component: config && config.index ? config.index : FormioResourceIndexComponent
        },
        {
            path: 'new',
            component: config && config.create ? config.create : FormioResourceCreateComponent
        },
        {
            path: ':id',
            component: config && config.resource ? config.resource : FormioResourceComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: config && config.view ? config.view : FormioResourceViewComponent
                },
                {
                    path: 'edit',
                    component: config && config.edit ? config.edit : FormioResourceEditComponent
                },
                {
                    path: 'delete',
                    component: config && config.delete ? config.delete : FormioResourceDeleteComponent
                }
            ]
        }
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Uucm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9yZXNvdXJjZS9zcmMvIiwic291cmNlcyI6WyJyZXNvdXJjZS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE1BQWtDO0lBQ3JFLE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7U0FDaEY7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7U0FDbkY7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7WUFDaEYsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLFVBQVUsRUFBRSxNQUFNO29CQUNsQixTQUFTLEVBQUUsTUFBTTtpQkFDbEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7aUJBQzdFO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsMkJBQTJCO2lCQUM3RTtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtpQkFDbkY7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VJbmRleENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgvaW5kZXguY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlUm91dGVDb25maWcgfSBmcm9tICcuL3Jlc291cmNlLmNvbmZpZyc7XG5leHBvcnQgZnVuY3Rpb24gRm9ybWlvUmVzb3VyY2VSb3V0ZXMoY29uZmlnPzogRm9ybWlvUmVzb3VyY2VSb3V0ZUNvbmZpZyk6IFJvdXRlcyB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IGNvbmZpZyAmJiBjb25maWcuaW5kZXggPyBjb25maWcuaW5kZXggOiBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnbmV3JyxcbiAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5jcmVhdGUgPyBjb25maWcuY3JlYXRlIDogRm9ybWlvUmVzb3VyY2VDcmVhdGVDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6aWQnLFxuICAgICAgY29tcG9uZW50OiBjb25maWcgJiYgY29uZmlnLnJlc291cmNlID8gY29uZmlnLnJlc291cmNlIDogRm9ybWlvUmVzb3VyY2VDb21wb25lbnQsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgcmVkaXJlY3RUbzogJ3ZpZXcnLFxuICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAndmlldycsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcgJiYgY29uZmlnLnZpZXcgPyBjb25maWcudmlldyA6IEZvcm1pb1Jlc291cmNlVmlld0NvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ2VkaXQnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5lZGl0ID8gY29uZmlnLmVkaXQgOiBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdkZWxldGUnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnICYmIGNvbmZpZy5kZWxldGUgPyBjb25maWcuZGVsZXRlIDogRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnRcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcbn1cbiJdfQ==