import { GridBodyComponent } from '../GridBodyComponent';
import { FormioPromiseService } from 'angular-formio';
import { GridHeader } from '../types/grid-header';
import { FormioSubmission } from 'angular-formio';
import * as i0 from "@angular/core";
export declare class SubmissionGridBodyComponent extends GridBodyComponent {
    load(formio: FormioPromiseService, query?: any): Promise<any[]>;
    /**
     * Render the cell data.
     *
     * @param submission
     * @param header
     * @return any
     */
    view(submission: FormioSubmission, header: GridHeader): string;
    static ɵfac: i0.ɵɵFactoryDef<SubmissionGridBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SubmissionGridBodyComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=SubmissionGridBody.component.d.ts.map