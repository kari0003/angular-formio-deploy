import { Component, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../resource.service";
import * as i2 from "@angular/router";
import * as i3 from "../resource.config";
import * as i4 from "@angular/common";
import * as i5 from "angular-formio";
function FormioResourceCreateComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 2);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" | New ", ctx_r0.service.form.title, "\n");
} }
export class FormioResourceCreateComponent {
    constructor(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.onError = new EventEmitter();
        this.onSuccess = new EventEmitter();
    }
    ngOnInit() {
        this.service.setContext(this.route);
    }
    onSubmit(submission) {
        this.service
            .save(submission)
            .then(() => {
            this.router.navigate(['../', this.service.resource._id, 'view'], {
                relativeTo: this.route
            });
        })
            .catch((err) => this.onError.emit(err));
    }
}
FormioResourceCreateComponent.ɵfac = function FormioResourceCreateComponent_Factory(t) { return new (t || FormioResourceCreateComponent)(i0.ɵɵdirectiveInject(i1.FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.FormioResourceConfig)); };
FormioResourceCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceCreateComponent, selectors: [["ng-component"]], decls: 2, vars: 6, consts: [["style", "margin-top:0;", 4, "ngIf"], [3, "form", "submission", "refresh", "error", "success", "submit"], [2, "margin-top", "0"], ["routerLink", "../", 1, "back-button"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"]], template: function FormioResourceCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormioResourceCreateComponent_h3_0_Template, 4, 1, "h3", 0);
        i0.ɵɵelementStart(1, "formio", 1);
        i0.ɵɵlistener("submit", function FormioResourceCreateComponent_Template_formio_submit_1_listener($event) { return ctx.onSubmit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.service.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("error", ctx.onError)("success", ctx.onSuccess);
    } }, directives: [i4.NgIf, i5.FormioComponent, i2.RouterLinkWithHref], styles: [".back-button[_ngcontent-%COMP%]{font-size:.8em}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceCreateComponent, [{
        type: Component,
        args: [{
                styleUrls: ['./create.component.scss'],
                templateUrl: './create.component.html'
            }]
    }], function () { return [{ type: i1.FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.FormioResourceConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyaTAwMDMvcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcHJvamVjdHMvYW5ndWxhci1mb3JtaW8vcmVzb3VyY2Uvc3JjLyIsInNvdXJjZXMiOlsiY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQudHMiLCJjcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0FoRSw2QkFDRTtJQUFBLDRCQUNFO0lBQUEsdUJBQW1FO0lBQ3JFLGlCQUFJO0lBQUMsWUFDUDtJQUFBLGlCQUFLOzs7SUFERSxlQUNQO0lBRE8saUVBQ1A7O0FES0EsTUFBTSxPQUFPLDZCQUE2QjtJQUd4QyxZQUNTLE9BQThCLEVBQzlCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUE0QjtRQUg1QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWU7UUFDdEIsSUFBSSxDQUFDLE9BQU87YUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQy9ELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSzthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7MEdBMUJVLDZCQUE2QjtrRUFBN0IsNkJBQTZCO1FDVDFDLDRFQUNFO1FBSUYsaUNBT1U7UUFEUixrSEFBVSxvQkFBZ0IsSUFBQztRQUM1QixpQkFBUzs7UUFaTix1Q0FBb0I7UUFNdEIsZUFBcUI7UUFBckIsdUNBQXFCLG9DQUFBLGdDQUFBLHNCQUFBLDBCQUFBOztrRERHViw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxXQUFXLEVBQUUseUJBQXlCO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlQ29uZmlnIH0gZnJvbSAnLi4vcmVzb3VyY2UuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHN0eWxlVXJsczogWycuL2NyZWF0ZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBvbkVycm9yOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgcHVibGljIG9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3JtaW9SZXNvdXJjZVNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGNvbmZpZzogRm9ybWlvUmVzb3VyY2VDb25maWdcbiAgKSB7XG4gICAgdGhpcy5vbkVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMub25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldENvbnRleHQodGhpcy5yb3V0ZSk7XG4gIH1cblxuICBvblN1Ym1pdChzdWJtaXNzaW9uOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZpY2VcbiAgICAgIC5zYXZlKHN1Ym1pc3Npb24pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vJywgdGhpcy5zZXJ2aWNlLnJlc291cmNlLl9pZCwgJ3ZpZXcnXSwge1xuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGVcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yLmVtaXQoZXJyKSk7XG4gIH1cbn1cbiIsIjxoMyAqbmdJZj1cInNlcnZpY2UuZm9ybVwiIHN0eWxlPVwibWFyZ2luLXRvcDowO1wiPlxuICA8YSByb3V0ZXJMaW5rPVwiLi4vXCIgY2xhc3M9XCJiYWNrLWJ1dHRvblwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0IGdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9pPlxuICA8L2E+IHwgTmV3IHt7IHNlcnZpY2UuZm9ybS50aXRsZSB9fVxuPC9oMz5cbjxmb3JtaW9cbiAgW2Zvcm1dPVwic2VydmljZS5mb3JtXCJcbiAgW3N1Ym1pc3Npb25dPVwic2VydmljZS5yZXNvdXJjZVwiXG4gIFtyZWZyZXNoXT1cInNlcnZpY2UucmVmcmVzaFwiXG4gIFtlcnJvcl09XCJvbkVycm9yXCJcbiAgW3N1Y2Nlc3NdPVwib25TdWNjZXNzXCJcbiAgKHN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCJcbj48L2Zvcm1pbz5cbiJdfQ==