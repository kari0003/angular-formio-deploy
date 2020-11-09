import { FormioAuthComponent } from './auth.component';
import { FormioAuthLoginComponent } from './login/login.component';
import { FormioAuthRegisterComponent } from './register/register.component';
export function FormioAuthRoutes(config) {
    return [
        {
            path: '',
            component: config && config.auth ? config.auth : FormioAuthComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'login',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: config && config.login ? config.login : FormioAuthLoginComponent
                },
                {
                    path: 'register',
                    component: config && config.register ? config.register : FormioAuthRegisterComponent
                }
            ]
        }
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2F1dGgvc3JjLyIsInNvdXJjZXMiOlsiYXV0aC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE1BQThCO0lBQzdELE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7WUFDcEUsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLFVBQVUsRUFBRSxPQUFPO29CQUNuQixTQUFTLEVBQUUsTUFBTTtpQkFDbEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7aUJBQzVFO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtpQkFDckY7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgZnVuY3Rpb24gRm9ybWlvQXV0aFJvdXRlcyhjb25maWc/OiBGb3JtaW9BdXRoUm91dGVDb25maWcpOiBSb3V0ZXMge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBjb25maWcgJiYgY29uZmlnLmF1dGggPyBjb25maWcuYXV0aCA6IEZvcm1pb0F1dGhDb21wb25lbnQsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgcmVkaXJlY3RUbzogJ2xvZ2luJyxcbiAgICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZyAmJiBjb25maWcubG9naW4gPyBjb25maWcubG9naW4gOiBGb3JtaW9BdXRoTG9naW5Db21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdyZWdpc3RlcicsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcgJiYgY29uZmlnLnJlZ2lzdGVyID8gY29uZmlnLnJlZ2lzdGVyIDogRm9ybWlvQXV0aFJlZ2lzdGVyQ29tcG9uZW50XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG59XG4iXX0=