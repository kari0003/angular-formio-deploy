import { Component } from '@angular/core';
import { each } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../resource.service";
import * as i2 from "@angular/router";
import * as i3 from "../resource.config";
import * as i4 from "angular-formio";
import * as i5 from "angular-formio/grid";
export class FormioResourceIndexComponent {
    constructor(service, route, router, config, cdr, ngZone) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.cdr = cdr;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.gridQuery = {};
        this.service.setContext(this.route);
        this.service.formLoaded.then(() => {
            if (this.service &&
                this.config.parents &&
                this.config.parents.length) {
                this.service.loadParents().then((parents) => {
                    each(parents, (parent) => {
                        if (parent && parent.filter) {
                            this.gridQuery['data.' + parent.name + '._id'] =
                                parent.resource._id;
                        }
                    });
                    // Set the source to load the grid.
                    this.gridSrc = this.service.formUrl;
                    this.createText = `New ${this.service.form.title}`;
                });
            }
            else if (this.service.formUrl) {
                this.gridSrc = this.service.formUrl;
                this.createText = `New ${this.service.form.title}`;
            }
            this.cdr.detectChanges();
        });
    }
    onSelect(row) {
        this.ngZone.run(() => {
            this.router.navigate([row._id, 'view'], { relativeTo: this.route });
        });
    }
    onCreateItem() {
        this.ngZone.run(() => {
            this.router.navigate(['new'], { relativeTo: this.route });
        });
    }
}
FormioResourceIndexComponent.ɵfac = function FormioResourceIndexComponent_Factory(t) { return new (t || FormioResourceIndexComponent)(i0.ɵɵdirectiveInject(i1.FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.FormioResourceConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
FormioResourceIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceIndexComponent, selectors: [["ng-component"]], decls: 2, vars: 5, consts: [[3, "alerts"], [3, "src", "query", "onForm", "createText", "rowSelect", "error", "createItem"]], template: function FormioResourceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "formio-alerts", 0);
        i0.ɵɵelementStart(1, "formio-grid", 1);
        i0.ɵɵlistener("rowSelect", function FormioResourceIndexComponent_Template_formio_grid_rowSelect_1_listener($event) { return ctx.onSelect($event); })("error", function FormioResourceIndexComponent_Template_formio_grid_error_1_listener($event) { return ctx.service.onError($event); })("createItem", function FormioResourceIndexComponent_Template_formio_grid_createItem_1_listener() { return ctx.onCreateItem(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("alerts", ctx.service.alerts);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.gridSrc)("query", ctx.gridQuery)("onForm", ctx.service.formLoaded)("createText", ctx.createText);
    } }, directives: [i4.FormioAlertsComponent, i5.FormioGridComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceIndexComponent, [{
        type: Component,
        args: [{
                templateUrl: './index.component.html'
            }]
    }], function () { return [{ type: i1.FormioResourceService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.FormioResourceConfig }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9yZXNvdXJjZS9zcmMvIiwic291cmNlcyI6WyJpbmRleC9pbmRleC5jb21wb25lbnQudHMiLCJpbmRleC9pbmRleC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUk3RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBSzlCLE1BQU0sT0FBTyw0QkFBNEI7SUFLdkMsWUFDUyxPQUE4QixFQUM5QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsTUFBNEIsRUFDNUIsR0FBc0IsRUFDdEIsTUFBYztRQUxkLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXZCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEMsSUFDRSxJQUFJLENBQUMsT0FBTztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDMUI7Z0JBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO3dCQUM1QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFOzRCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQ0FDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILG1DQUFtQztvQkFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyRCxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVE7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dHQXZEVSw0QkFBNEI7aUVBQTVCLDRCQUE0QjtRQ1R6QyxtQ0FBeUQ7UUFDekQsc0NBUWU7UUFKYiw0SEFBYSxvQkFBZ0IsSUFBQyx1R0FDckIsMkJBQXVCLElBREYsMkdBRWhCLGtCQUFjLElBRkU7UUFJL0IsaUJBQWM7O1FBVEEsMkNBQXlCO1FBRXRDLGVBQWU7UUFBZixpQ0FBZSx3QkFBQSxrQ0FBQSw4QkFBQTs7a0RET0osNEJBQTRCO2NBSHhDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsd0JBQXdCO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUNvbmZpZyB9IGZyb20gJy4uL3Jlc291cmNlLmNvbmZpZyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9pbmRleC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvUmVzb3VyY2VJbmRleENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBncmlkU3JjPzogc3RyaW5nO1xuICBwdWJsaWMgZ3JpZFF1ZXJ5OiBhbnk7XG4gIHB1YmxpYyBjcmVhdGVUZXh0OiBTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1pb1Jlc291cmNlU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgY29uZmlnOiBGb3JtaW9SZXNvdXJjZUNvbmZpZyxcbiAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ncmlkUXVlcnkgPSB7fTtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0Q29udGV4dCh0aGlzLnJvdXRlKTtcbiAgICB0aGlzLnNlcnZpY2UuZm9ybUxvYWRlZC50aGVuKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZXJ2aWNlICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnBhcmVudHMgJiZcbiAgICAgICAgdGhpcy5jb25maWcucGFyZW50cy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNlcnZpY2UubG9hZFBhcmVudHMoKS50aGVuKChwYXJlbnRzOiBhbnkpID0+IHtcbiAgICAgICAgICBlYWNoKHBhcmVudHMsIChwYXJlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuZmlsdGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ3JpZFF1ZXJ5WydkYXRhLicgKyBwYXJlbnQubmFtZSArICcuX2lkJ10gPVxuICAgICAgICAgICAgICAgIHBhcmVudC5yZXNvdXJjZS5faWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTZXQgdGhlIHNvdXJjZSB0byBsb2FkIHRoZSBncmlkLlxuICAgICAgICAgIHRoaXMuZ3JpZFNyYyA9IHRoaXMuc2VydmljZS5mb3JtVXJsO1xuICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dCA9IGBOZXcgJHt0aGlzLnNlcnZpY2UuZm9ybS50aXRsZX1gO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXJ2aWNlLmZvcm1VcmwpIHtcbiAgICAgICAgdGhpcy5ncmlkU3JjID0gdGhpcy5zZXJ2aWNlLmZvcm1Vcmw7XG4gICAgICAgIHRoaXMuY3JlYXRlVGV4dCA9IGBOZXcgJHt0aGlzLnNlcnZpY2UuZm9ybS50aXRsZX1gO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdChyb3c6IGFueSkge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm93Ll9pZCwgJ3ZpZXcnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGVJdGVtKCkge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25ldyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxmb3JtaW8tYWxlcnRzIFthbGVydHNdPVwic2VydmljZS5hbGVydHNcIj48L2Zvcm1pby1hbGVydHM+XG48Zm9ybWlvLWdyaWRcbiAgW3NyY109XCJncmlkU3JjXCJcbiAgW3F1ZXJ5XT1cImdyaWRRdWVyeVwiXG4gIFtvbkZvcm1dPVwic2VydmljZS5mb3JtTG9hZGVkXCJcbiAgKHJvd1NlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcbiAgKGVycm9yKT1cInNlcnZpY2Uub25FcnJvcigkZXZlbnQpXCJcbiAgKGNyZWF0ZUl0ZW0pPVwib25DcmVhdGVJdGVtKClcIlxuICBbY3JlYXRlVGV4dF09XCJjcmVhdGVUZXh0XCJcbj48L2Zvcm1pby1ncmlkPlxuIl19