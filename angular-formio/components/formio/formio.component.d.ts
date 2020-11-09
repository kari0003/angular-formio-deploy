import { OnInit, NgZone, OnChanges } from '@angular/core';
import { FormioAppConfig } from '../../formio.config';
import { FormioBaseComponent } from '../../FormioBaseComponent';
import { CustomTagsService } from '../../custom-component/custom-tags.service';
import * as i0 from "@angular/core";
export declare class FormioComponent extends FormioBaseComponent implements OnInit, OnChanges {
    ngZone: NgZone;
    config: FormioAppConfig;
    customTags?: CustomTagsService;
    constructor(ngZone: NgZone, config: FormioAppConfig, customTags?: CustomTagsService);
    getRenderer(): any;
    static ɵfac: i0.ɵɵFactoryDef<FormioComponent, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormioComponent, "formio", never, {}, {}, never, never>;
}
