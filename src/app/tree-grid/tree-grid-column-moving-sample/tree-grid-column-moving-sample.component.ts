import { Component, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-tree-grid-column-moving-sample',
  styleUrls: ['./tree-grid-column-moving-sample.component.scss'],
  templateUrl: './tree-grid-column-moving-sample.component.html'
})
export class TreeGridColumnMovingSampleComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        column.pinned ? column.unpin() : column.pin();
    }
}
