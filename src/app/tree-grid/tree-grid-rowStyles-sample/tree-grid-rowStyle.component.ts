import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, RowType, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tree-grid-row-styles-sample',
    styleUrls: ['tree-grid-rowStyle.component.scss'],
    templateUrl: 'tree-grid-rowStyle.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, NgFor, IgxColumnComponent]
})
export class TreeGridRowStylesComponent implements OnInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public background = (row: RowType) => row.data['Title'] === 'CEO' ? '#6c757d' :
        row.data['Title'].includes('President') ? '#adb5bd' :
        row.data['Title'].includes('Director') ?  '#ced4da' :
        row.data['Title'].includes('Manager') ? '#dee2e6' :
        row.data['Title'].includes('Lead') ? '#e9ecef' :
        row.data['Title'].includes('Senior') ? '#f8f9fa' : null;

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public  rowStyles = {
        background: this.background,
        'border-left': (row: RowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ?
            '2px solid' : null,
        'border-color': (row: RowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
        color: (row: RowType) => row.data['Title'] === 'CEO' ? '#fff' : null
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
