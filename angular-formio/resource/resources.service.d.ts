import { EventEmitter } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import * as i0 from "@angular/core";
export interface FormioResourceMap {
    [name: string]: any;
}
export declare class FormioResources {
    auth?: FormioAuthService;
    resources: FormioResourceMap;
    error: EventEmitter<any>;
    onError: EventEmitter<any>;
    constructor(auth?: FormioAuthService);
    static ɵfac: i0.ɵɵFactoryDef<FormioResources, never>;
    static ɵprov: i0.ɵɵInjectableDef<FormioResources>;
}
