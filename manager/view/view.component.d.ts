import { OnInit, EventEmitter } from '@angular/core';
import { FormManagerConfig } from '../form-manager.config';
import { FormManagerService } from '../form-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';
import * as i0 from "@angular/core";
export declare class FormManagerViewComponent implements OnInit {
    service: FormManagerService;
    router: Router;
    route: ActivatedRoute;
    config: FormManagerConfig;
    auth: FormioAuthService;
    submission: any;
    currentForm: any;
    renderOptions: any;
    onSuccess: EventEmitter<object>;
    onError: EventEmitter<object>;
    constructor(service: FormManagerService, router: Router, route: ActivatedRoute, config: FormManagerConfig, auth: FormioAuthService);
    ngOnInit(): void;
    onSubmit(submission: any): void;
    static ɵfac: i0.ɵɵFactoryDef<FormManagerViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormManagerViewComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=view.component.d.ts.map