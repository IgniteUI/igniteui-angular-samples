import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, RowType } from '@infragistics/igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-row-styles-sample',
    styleUrls: ['tree-grid-rowStyle.component.scss'],
    templateUrl: 'tree-grid-rowStyle.component.html'
})
export class TreeGridRowStylesComponent implements OnInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public background = (row: RowType) => row.data.data['Title'] === 'CEO' ? '#6c757d' :
        row.data.data['Title'].includes('President') ? '#adb5bd' : row.data.data['Title'].includes('Director') ?  '#ced4da' :
        row.data.data['Title'].includes('Manager') ? '#dee2e6' :
        row.data.data['Title'].includes('Lead') ? '#e9ecef' :
        row.data.data['Title'].includes('Senior') ? '#f8f9fa' : null;

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public  rowStyles = {
        background: this.background,
        'border-left': (row: RowType) => row.data.data['Title'] === 'CEO' || row.data.data['Title'].includes('President') ?
            '2px solid' : null,
        'border-color': (row: RowType) => row.data.data['Title'] === 'CEO' ? '#495057' : null,
        color: (row: RowType) => row.data.data['Title'] === 'CEO' ? '#fff' : null
    };

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', resizable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'Age', label: 'Age', resizable: false, filterable: false, editable: true, dataType: 'number' },
            { field: 'Title', label: 'Title', resizable: true,  filterable: true, editable: true, dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', resizable: true, filterable: true, editable: true, dataType: 'date' }
        ];
    }
}
