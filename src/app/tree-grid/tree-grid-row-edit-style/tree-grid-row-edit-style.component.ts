import { Component, OnInit } from '@angular/core';
import { GridSelectionMode } from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-row-edit-style',
    styleUrls: ['tree-grid-row-edit-style.component.scss'],
    templateUrl: 'tree-grid-row-edit-style.component.html',
    standalone: false
})
export class TreeGridRowEditStyleComponent implements OnInit {

    public data: IEmployee[];
    public columns: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            // tslint:disable:max-line-length
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];
    }
}
