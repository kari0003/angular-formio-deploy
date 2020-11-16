import { FormManagerService } from '../../form-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioAlerts } from 'angular-formio';
import * as i0 from "@angular/core";
export declare class SubmissionDeleteComponent {
    service: FormManagerService;
    router: Router;
    route: ActivatedRoute;
    alerts: FormioAlerts;
    constructor(service: FormManagerService, router: Router, route: ActivatedRoute, alerts: FormioAlerts);
    onDelete(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDef<SubmissionDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SubmissionDeleteComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=delete.component.d.ts.map