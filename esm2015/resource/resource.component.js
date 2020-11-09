import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./resource.service";
import * as i2 from "@angular/router";
import * as i3 from "angular-formio/auth";
import * as i4 from "@angular/common";
function FormioResourceComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵelementStart(1, "a", 7);
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function FormioResourceComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵelement(2, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class FormioResourceComponent {
    constructor(service, route, auth) {
        this.service = service;
        this.route = route;
        this.auth = auth;
        this.perms = { delete: false, edit: false };
        // subscribe to the route param changes, so that we could re-load the submission if navigation happens from one submission to another
        this.paramsSubscription = this.route.params.subscribe((params) => {
            this.init();
        });
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.service.loadResource(this.route);
        this.service.formLoaded.then((form) => {
            this.auth.ready.then(() => {
                this.service.resourceLoaded.then((resource) => {
                    this.service.formFormio.userPermissions(this.auth.user, form, resource).then((perms) => {
                        this.perms.delete = perms.delete;
                        this.perms.edit = perms.edit;
                    });
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
}
FormioResourceComponent.ɵfac = function FormioResourceComponent_Factory(t) { return new (t || FormioResourceComponent)(i0.ɵɵdirectiveInject(i1.FormioResourceService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormioAuthService)); };
FormioResourceComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioResourceComponent, selectors: [["ng-component"]], decls: 10, vars: 2, consts: [[1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function FormioResourceComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵelementStart(1, "li", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "li", 4);
        i0.ɵɵelementStart(5, "a", 5);
        i0.ɵɵtext(6, "View");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, FormioResourceComponent_li_7_Template, 3, 0, "li", 6);
        i0.ɵɵtemplate(8, FormioResourceComponent_li_8_Template, 3, 0, "li", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "router-outlet");
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.perms.edit);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.perms.delete);
    } }, directives: [i2.RouterLinkWithHref, i2.RouterLinkActive, i4.NgIf, i2.RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioResourceComponent, [{
        type: Component,
        args: [{
                templateUrl: './resource.component.html'
            }]
    }], function () { return [{ type: i1.FormioResourceService }, { type: i2.ActivatedRoute }, { type: i3.FormioAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJpMDAwMy9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9wcm9qZWN0cy9hbmd1bGFyLWZvcm1pby9yZXNvdXJjZS9zcmMvIiwic291cmNlcyI6WyJyZXNvdXJjZS5jb21wb25lbnQudHMiLCJyZXNvdXJjZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0czRCw2QkFBa0U7SUFBQSw0QkFBZ0U7SUFBQSxvQkFBSTtJQUFBLGlCQUFJO0lBQUEsaUJBQUs7OztJQUMvSSw2QkFBb0U7SUFBQSw0QkFBa0U7SUFBQSwwQkFBMkQ7SUFBQSxpQkFBSTtJQUFBLGlCQUFLOztBREs1TSxNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLFlBQ1MsT0FBOEIsRUFDOUIsS0FBcUIsRUFDckIsSUFBdUI7UUFGdkIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFMekIsVUFBSyxHQUFHLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFPMUMscUlBQXFJO1FBQ3JJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OEZBckNVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDVHBDLDZCQUNFO1FBQUEsNkJBQXFCO1FBQUEsNEJBQXFDO1FBQUEsdUJBQW1FO1FBQUEsaUJBQUk7UUFBQSxpQkFBSztRQUN0SSw2QkFBK0M7UUFBQSw0QkFBZ0U7UUFBQSxvQkFBSTtRQUFBLGlCQUFJO1FBQUEsaUJBQUs7UUFDNUgsc0VBQWtFO1FBQ2xFLHNFQUFvRTtRQUN0RSxpQkFBSztRQUNMLGdDQUErQjs7UUFIa0IsZUFBa0I7UUFBbEIscUNBQWtCO1FBQ2xCLGVBQW9CO1FBQXBCLHVDQUFvQjs7a0RES3hELHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLDJCQUEyQjthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWZvcm1pby9hdXRoJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlU2VydmljZSB9IGZyb20gJy4vcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNvdXJjZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvUmVzb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcGFyYW1zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBwZXJtcyA9IHtkZWxldGU6IGZhbHNlLCBlZGl0OiBmYWxzZX07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1pb1Jlc291cmNlU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBhdXRoOiBGb3JtaW9BdXRoU2VydmljZSxcbiAgKSB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIHRoZSByb3V0ZSBwYXJhbSBjaGFuZ2VzLCBzbyB0aGF0IHdlIGNvdWxkIHJlLWxvYWQgdGhlIHN1Ym1pc3Npb24gaWYgbmF2aWdhdGlvbiBoYXBwZW5zIGZyb20gb25lIHN1Ym1pc3Npb24gdG8gYW5vdGhlclxuICAgIHRoaXMucGFyYW1zU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5sb2FkUmVzb3VyY2UodGhpcy5yb3V0ZSk7XG4gICAgdGhpcy5zZXJ2aWNlLmZvcm1Mb2FkZWQudGhlbigoZm9ybSkgPT4ge1xuICAgICAgdGhpcy5hdXRoLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2UucmVzb3VyY2VMb2FkZWQudGhlbigocmVzb3VyY2UpID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2UuZm9ybUZvcm1pby51c2VyUGVybWlzc2lvbnModGhpcy5hdXRoLnVzZXIsIGZvcm0sIHJlc291cmNlKS50aGVuKChwZXJtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wZXJtcy5kZWxldGUgPSBwZXJtcy5kZWxldGU7XG4gICAgICAgICAgICB0aGlzLnBlcm1zLmVkaXQgPSBwZXJtcy5lZGl0O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucGFyYW1zU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCI+XG4gIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCIuLi9cIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdCBnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+PC9saT5cbiAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJ2aWV3XCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlZpZXc8L2E+PC9saT5cbiAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgKm5nSWY9XCJwZXJtcy5lZGl0XCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJlZGl0XCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkVkaXQ8L2E+PC9saT5cbiAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgKm5nSWY9XCJwZXJtcy5kZWxldGVcIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cImRlbGV0ZVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48c3BhbiBjbGFzcz1cImZhIGZhLXRyYXNoIGdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcIj48L3NwYW4+PC9hPjwvbGk+XG48L3VsPlxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIl19