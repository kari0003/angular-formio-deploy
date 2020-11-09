import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { FormioAlerts } from 'angular-formio';
import { FormioGridComponent } from './grid.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormGridHeaderComponent } from './form/FormGridHeader.component';
import { FormGridBodyComponent } from './form/FormGridBody.component';
import { FormGridFooterComponent } from './form/FormGridFooter.component';
import { SubmissionGridHeaderComponent } from './submission/SubmissionGridHeader.component';
import { SubmissionGridBodyComponent } from './submission/SubmissionGridBody.component';
import { SubmissionGridFooterComponent } from './submission/SubmissionGridFooter.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/pagination";
export class FormioGrid {
}
FormioGrid.ɵmod = i0.ɵɵdefineNgModule({ type: FormioGrid });
FormioGrid.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioGrid_Factory(t) { return new (t || FormioGrid)(); }, providers: [
        FormioAlerts
    ], imports: [[
            CommonModule,
            FormsModule,
            FormioModule,
            RouterModule,
            PaginationModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioGrid, { declarations: [FormioGridComponent,
        FormGridHeaderComponent,
        FormGridBodyComponent,
        FormGridFooterComponent,
        SubmissionGridHeaderComponent,
        SubmissionGridBodyComponent,
        SubmissionGridFooterComponent], imports: [CommonModule,
        FormsModule,
        FormioModule,
        RouterModule, i1.PaginationModule], exports: [FormioGridComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioGrid, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FormioModule,
                    RouterModule,
                    PaginationModule.forRoot()
                ],
                declarations: [
                    FormioGridComponent,
                    FormGridHeaderComponent,
                    FormGridBodyComponent,
                    FormGridFooterComponent,
                    SubmissionGridHeaderComponent,
                    SubmissionGridBodyComponent,
                    SubmissionGridFooterComponent
                ],
                exports: [
                    FormioGridComponent
                ],
                entryComponents: [
                    FormGridHeaderComponent,
                    FormGridBodyComponent,
                    FormGridFooterComponent,
                    SubmissionGridHeaderComponent,
                    SubmissionGridBodyComponent,
                    SubmissionGridFooterComponent
                ],
                providers: [
                    FormioAlerts
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2dyaWQvc3JjLyIsInNvdXJjZXMiOlsiZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7QUFpQzVGLE1BQU0sT0FBTyxVQUFVOzs4Q0FBVixVQUFVO21HQUFWLFVBQVUsbUJBSlY7UUFDVCxZQUFZO0tBQ2IsWUE3QlE7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1NBQzNCO3dGQXlCVSxVQUFVLG1CQXZCbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsNkJBQTZCLGFBYjdCLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVksa0NBYVosbUJBQW1CO2tEQWNWLFVBQVU7Y0FoQ3RCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0IsMkJBQTJCO29CQUMzQiw2QkFBNkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRTtvQkFDZix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLDJCQUEyQjtvQkFDM0IsNkJBQTZCO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9Nb2R1bGUgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICdhbmd1bGFyLWZvcm1pbyc7XG5pbXBvcnQgeyBGb3JtaW9HcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IEZvcm1HcmlkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtL0Zvcm1HcmlkSGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtR3JpZEJvZHlDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0vRm9ybUdyaWRCb2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtR3JpZEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS9Gb3JtR3JpZEZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pc3Npb24vU3VibWlzc2lvbkdyaWRIZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25HcmlkQm9keUNvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi9TdWJtaXNzaW9uR3JpZEJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25HcmlkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXNzaW9uL1N1Ym1pc3Npb25HcmlkRm9vdGVyLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEZvcm1pb01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUGFnaW5hdGlvbk1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudCxcbiAgICBGb3JtR3JpZEhlYWRlckNvbXBvbmVudCxcbiAgICBGb3JtR3JpZEJvZHlDb21wb25lbnQsXG4gICAgRm9ybUdyaWRGb290ZXJDb21wb25lbnQsXG4gICAgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQsXG4gICAgU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50LFxuICAgIFN1Ym1pc3Npb25HcmlkRm9vdGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEZvcm1HcmlkSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvcm1HcmlkQm9keUNvbXBvbmVudCxcbiAgICBGb3JtR3JpZEZvb3RlckNvbXBvbmVudCxcbiAgICBTdWJtaXNzaW9uR3JpZEhlYWRlckNvbXBvbmVudCxcbiAgICBTdWJtaXNzaW9uR3JpZEJvZHlDb21wb25lbnQsXG4gICAgU3VibWlzc2lvbkdyaWRGb290ZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRm9ybWlvQWxlcnRzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvR3JpZCB7fVxuIl19