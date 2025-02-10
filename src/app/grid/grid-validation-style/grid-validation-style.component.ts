import { Component, ViewChild } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, RowType, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-grid-validation-style',
    styleUrls: [`grid-validation-style.component.scss`],
    templateUrl: 'grid-validation-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective, NgTemplateOutlet]
})
export class GridValidationStyleComponent {
    @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    public data: any[];
    public rowStyles = {
        background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey) => {
            const pKey = this.grid.primaryKey;
            const cell = this.grid.getCellByKey(rowData[pKey], columnKey);
            return cell && cell.validation.status === 'INVALID';
        }
    }

    constructor() {
        this.data = DATA;
    }
}
