import { FormManagerService } from '../form-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioAlerts } from 'angular-formio';
import * as i0 from "@angular/core";
export declare class FormManagerDeleteComponent {
    service: FormManagerService;
    router: Router;
    route: ActivatedRoute;
    alerts: FormioAlerts;
    constructor(service: FormManagerService, router: Router, route: ActivatedRoute, alerts: FormioAlerts);
    onDelete(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDef<FormManagerDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormManagerDeleteComponent, "ng-component", never, {}, {}, never, never>;
}
