import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class FormioAuthComponent {
}
FormioAuthComponent.ɵfac = function FormioAuthComponent_Factory(t) { return new (t || FormioAuthComponent)(); };
FormioAuthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormioAuthComponent, selectors: [["ng-component"]], decls: 11, vars: 0, consts: [[1, "card", "card-primary", "panel", "panel-default"], [1, "card-header", "panel-heading"], [1, "nav", "nav-tabs", "card-header-tabs"], ["role", "presentation", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "register", "routerLinkActive", "active", 1, "nav-link"], [1, "card-body", "panel-body"]], template: function FormioAuthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "ul", 2);
        i0.ɵɵelementStart(3, "li", 3);
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵtext(5, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "li", 3);
        i0.ɵɵelementStart(7, "a", 5);
        i0.ɵɵtext(8, "Register");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelement(10, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterLinkActive, i1.RouterLinkWithHref, i1.RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormioAuthComponent, [{
        type: Component,
        args: [{
                templateUrl: './auth.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmkwMDAzL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL3Byb2plY3RzL2FuZ3VsYXItZm9ybWlvL2F1dGgvc3JjLyIsInNvdXJjZXMiOlsiYXV0aC5jb21wb25lbnQudHMiLCJhdXRoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUkxQyxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNKaEMsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLDZCQUNFO1FBQUEsNkJBQW1FO1FBQUEsNEJBQWlFO1FBQUEscUJBQUs7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQ2xKLDZCQUFtRTtRQUFBLDRCQUFvRTtRQUFBLHdCQUFRO1FBQUEsaUJBQUk7UUFBQSxpQkFBSztRQUMxSixpQkFBSztRQUNQLGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSxpQ0FBK0I7UUFDakMsaUJBQU07UUFDUixpQkFBTTs7a0RETk8sbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsdUJBQXVCO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1pb0F1dGhDb21wb25lbnQge31cbiIsIjxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtcHJpbWFyeSBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBwYW5lbC1oZWFkaW5nXCI+XG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIGNhcmQtaGVhZGVyLXRhYnNcIj5cbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cImxvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkxvZ2luPC9hPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJyZWdpc3RlclwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5SZWdpc3RlcjwvYT48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHBhbmVsLWJvZHlcIj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=