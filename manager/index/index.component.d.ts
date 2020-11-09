import { OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormManagerService } from '../form-manager.service';
import { FormManagerConfig } from '../form-manager.config';
import { FormioGridComponent } from 'angular-formio/grid';
import * as i0 from "@angular/core";
export declare class FormManagerIndexComponent implements OnInit {
    service: FormManagerService;
    route: ActivatedRoute;
    router: Router;
    config: FormManagerConfig;
    formGrid: FormioGridComponent;
    gridQuery: any;
    refreshGrid: EventEmitter<object>;
    search: string;
    constructor(service: FormManagerService, route: ActivatedRoute, router: Router, config: FormManagerConfig);
    loadGrid(): void;
    ngOnInit(): void;
    onSearch(): void;
    clearSearch(): void;
    onAction(action: any): void;
    onSelect(row: any): void;
    onCreateItem(): void;
    static ɵfac: i0.ɵɵFactoryDef<FormManagerIndexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormManagerIndexComponent, "ng-component", never, {}, {}, never, never>;
}
