import { EventEmitter, TemplateRef } from '@angular/core';
import { GridHeaderComponent } from './GridHeaderComponent';
import { FormioPromiseService } from 'angular-formio';
import * as i0 from "@angular/core";
export declare abstract class GridBodyComponent {
    header: GridHeaderComponent;
    actionAllowed: any;
    rowSelect: EventEmitter<any>;
    rowAction: EventEmitter<any>;
    template: TemplateRef<any>;
    rows: Array<any>;
    loading: Boolean;
    firstItem: number;
    lastItem: number;
    skip: number;
    limit: number;
    total: number;
    constructor();
    load(formio: FormioPromiseService, query?: any): Promise<any>;
    onRowSelect(event: any, row: any): void;
    onRowAction(event: any, row: any, action: any): void;
    /**
     * Set the rows for this Grid body.
     *
     * @param query
     * @param items
     * @return any
     */
    setRows(query: any, items: any): any[];
    static ɵfac: i0.ɵɵFactoryDef<GridBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GridBodyComponent, "ng-component", never, { "header": "header"; "actionAllowed": "actionAllowed"; }, { "rowSelect": "rowSelect"; "rowAction": "rowAction"; }, never, never>;
}
//# sourceMappingURL=GridBodyComponent.d.ts.map