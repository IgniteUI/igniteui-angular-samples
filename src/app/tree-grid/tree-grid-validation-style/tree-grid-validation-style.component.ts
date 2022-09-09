import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, RowType } from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-validation-style',
    styleUrls: ['tree-grid-validation-style.component.scss'],
    templateUrl: 'tree-grid-validation-style.component.html'
})
export class TreeGridValidationStyleComponent implements OnInit {

    @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true }) public treeGrid: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];
    public selectionMode = 'multiple';
    public rowStyles = {
        background: (row: RowType) => row.cells.find(c => c.validation.errors !== null && c.validation.errors !== undefined) ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey) => {
            const pKey = this.treeGrid.primaryKey;
            const cell = this.treeGrid.getCellByKey(rowData[pKey], columnKey);
            return cell && cell.validation.status === 'INVALID';
        }
    }
    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            // tslint:disable:max-line-length
            { field: 'Name', label: 'Full Name', dataType: 'string', required: true },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string', required: true },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date', required: true }
        ];
    }
}
