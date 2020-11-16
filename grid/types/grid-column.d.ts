import { ComponentInstance } from 'angular-formio';
export interface GridColumn {
    label?: string;
    path: string;
    renderCell?(cellValue: any, component?: ComponentInstance): string;
}
//# sourceMappingURL=grid-column.d.ts.map