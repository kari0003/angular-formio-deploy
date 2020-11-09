import { EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import * as i0 from "@angular/core";
export declare class FormioResourceEditComponent {
    service: FormioResourceService;
    route: ActivatedRoute;
    router: Router;
    config: FormioResourceConfig;
    triggerError: EventEmitter<any>;
    constructor(service: FormioResourceService, route: ActivatedRoute, router: Router, config: FormioResourceConfig);
    onSubmit(submission: any): void;
    static ɵfac: i0.ɵɵFactoryDef<FormioResourceEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormioResourceEditComponent, "ng-component", never, {}, {}, never, never>;
}
