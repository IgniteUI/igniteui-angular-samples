/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxTreeGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-row-editing-sample',
    styleUrls: ['tree-grid-row-editing-sample.component.scss'],
    templateUrl: 'tree-grid-row-editing-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridRowEditSampleComponent implements OnInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];
    public selectionMode: GridSelectionMode = 'multiple';

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            // tslint:disable:max-line-length
            { field: 'Name', label: 'Full Name', resizable: true, sortable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'Age', label: 'Age', resizable: false, sortable: false, filterable: false, editable: true, dataType: 'number' },
            { field: 'Title', label: 'Title', resizable: true, sortable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', resizable: true, sortable: true, filterable: true, editable: true, dataType: 'date' }
        ];
    }
}
