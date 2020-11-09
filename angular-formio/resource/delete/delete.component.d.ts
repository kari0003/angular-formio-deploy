import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import * as i0 from "@angular/core";
export declare class FormioResourceDeleteComponent {
    service: FormioResourceService;
    route: ActivatedRoute;
    router: Router;
    constructor(service: FormioResourceService, route: ActivatedRoute, router: Router);
    onDelete(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDef<FormioResourceDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormioResourceDeleteComponent, "ng-component", never, {}, {}, never, never>;
}
