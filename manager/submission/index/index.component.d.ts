import { Router, ActivatedRoute } from '@angular/router';
import { FormManagerService } from '../../form-manager.service';
import * as i0 from "@angular/core";
export declare class SubmissionIndexComponent {
    service: FormManagerService;
    route: ActivatedRoute;
    router: Router;
    constructor(service: FormManagerService, route: ActivatedRoute, router: Router);
    onSelect(row: any): void;
    static ɵfac: i0.ɵɵFactoryDef<SubmissionIndexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SubmissionIndexComponent, "ng-component", never, {}, {}, never, never>;
}
