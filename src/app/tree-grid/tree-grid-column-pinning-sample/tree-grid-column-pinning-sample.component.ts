import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-tree-grid-column-pinning-sample',
  styleUrls: ['./tree-grid-column-pinning-sample.component.scss'],
  templateUrl: './tree-grid-column-pinning-sample.component.html'
})
export class TreeGridColumnPinningSampleComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public toggleColumn(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
    }
}
