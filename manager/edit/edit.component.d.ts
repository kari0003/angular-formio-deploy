import { ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormManagerService } from '../form-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormManagerConfig } from '../form-manager.config';
import { FormioAlerts } from 'angular-formio';
import { FormBuilderComponent } from 'angular-formio';
import * as i0 from "@angular/core";
export declare class FormManagerEditComponent implements AfterViewInit {
    service: FormManagerService;
    router: Router;
    route: ActivatedRoute;
    config: FormManagerConfig;
    ref: ChangeDetectorRef;
    alerts: FormioAlerts;
    builder: FormBuilderComponent;
    formTitle: ElementRef;
    formType: ElementRef;
    form: any;
    loading: Boolean;
    formReady: Boolean;
    editMode: Boolean;
    constructor(service: FormManagerService, router: Router, route: ActivatedRoute, config: FormManagerConfig, ref: ChangeDetectorRef, alerts: FormioAlerts);
    initBuilder(editing: any): any;
    ngAfterViewInit(): void;
    onDisplaySelect(event: any): void;
    saveForm(): any;
    onSave(): any;
    static ɵfac: i0.ɵɵFactoryDef<FormManagerEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormManagerEditComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=edit.component.d.ts.map