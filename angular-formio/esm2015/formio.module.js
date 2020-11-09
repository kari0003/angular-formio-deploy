import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioComponent } from './components/formio/formio.component';
import { FormBuilderComponent } from './components/formbuilder/formbuilder.component';
import { FormioAlerts } from './components/alerts/formio.alerts';
import { ParseHtmlContentPipe } from './components/alerts/parse-html-content.pipe';
import { FormioAlertsComponent } from './components/alerts/formio.alerts.component';
import { FormioLoaderComponent } from './components/loader/formio.loader.component';
import { CustomTagsService } from './custom-component/custom-tags.service';
import * as i0 from "@angular/core";
export class FormioModule {
}
FormioModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormioModule });
FormioModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormioModule_Factory(t) { return new (t || FormioModule)(); }, providers: [
        FormioAlerts,
        CustomTagsService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormioModule, { declarations: [FormioComponent,
        FormBuilderComponent,
        FormioLoaderComponent,
        FormioAlertsComponent,
        ParseHtmlContentPipe], imports: [CommonModule], exports: [FormioComponent,
        FormBuilderComponent,
        FormioLoaderComponent,
        FormioAlertsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FormioComponent,
                    FormBuilderComponent,
                    FormioLoaderComponent,
                    FormioAlertsComponent,
                    ParseHtmlContentPipe
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    FormioComponent,
                    FormBuilderComponent,
                    FormioLoaderComponent,
                    FormioAlertsComponent
                ],
                providers: [
                    FormioAlerts,
                    CustomTagsService
                ],
                entryComponents: [
                    FormioComponent,
                    FormBuilderComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsiZm9ybWlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQTRCM0UsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxtQkFUWjtRQUNULFlBQVk7UUFDWixpQkFBaUI7S0FDbEIsWUFaUTtZQUNQLFlBQVk7U0FDYjt3RkFnQlUsWUFBWSxtQkF4QnJCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixvQkFBb0IsYUFHcEIsWUFBWSxhQUdaLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtrREFXWixZQUFZO2NBMUJ4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIscUJBQXFCO2lCQUN0QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixlQUFlO29CQUNmLG9CQUFvQjtpQkFDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1pby9mb3JtaW8uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1CdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1idWlsZGVyL2Zvcm1idWlsZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnRzL2Zvcm1pby5hbGVydHMnO1xuaW1wb3J0IHsgUGFyc2VIdG1sQ29udGVudFBpcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnRzL3BhcnNlLWh0bWwtY29udGVudC5waXBlJztcbmltcG9ydCB7IEZvcm1pb0FsZXJ0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydHMvZm9ybWlvLmFsZXJ0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci9mb3JtaW8ubG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21UYWdzU2VydmljZSB9IGZyb20gJy4vY3VzdG9tLWNvbXBvbmVudC9jdXN0b20tdGFncy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybWlvQ29tcG9uZW50LFxuICAgIEZvcm1CdWlsZGVyQ29tcG9uZW50LFxuICAgIEZvcm1pb0xvYWRlckNvbXBvbmVudCxcbiAgICBGb3JtaW9BbGVydHNDb21wb25lbnQsXG4gICAgUGFyc2VIdG1sQ29udGVudFBpcGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybWlvQ29tcG9uZW50LFxuICAgIEZvcm1CdWlsZGVyQ29tcG9uZW50LFxuICAgIEZvcm1pb0xvYWRlckNvbXBvbmVudCxcbiAgICBGb3JtaW9BbGVydHNDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRm9ybWlvQWxlcnRzLFxuICAgIEN1c3RvbVRhZ3NTZXJ2aWNlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEZvcm1pb0NvbXBvbmVudCxcbiAgICBGb3JtQnVpbGRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1pb01vZHVsZSB7fVxuIl19