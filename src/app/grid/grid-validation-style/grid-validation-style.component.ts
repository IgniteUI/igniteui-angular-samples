import { Component, ViewChild } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, RowType } from 'igniteui-angular';

@Component({
    selector: 'app-grid-validation-style',
    styleUrls: [`grid-validation-style.component.scss`],
    templateUrl: 'grid-validation-style.component.html'
})
export class GridValidationStyleComponent {
    @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    public data: any[];
    public rowStyles = {
        background: (row: RowType) => row.cells.find(c => c.errors !== null && c.errors !== undefined) ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey, cellValue, rowIndex) => {
            const pKey = this.grid.primaryKey;
            const cell = this.grid.getCellByKey(rowData[pKey], columnKey);
            return cell && cell.errors !== null && cell.errors !== undefined;
        }
    }

    constructor() {
        this.data = DATA;
    }
}
