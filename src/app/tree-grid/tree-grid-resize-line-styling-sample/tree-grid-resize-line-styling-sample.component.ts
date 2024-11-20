import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    selector: 'app-tree-grid-resize-line-styling-sample',
    styleUrls: ['./tree-grid-resize-line-styling-sample.component.scss'],
    templateUrl: './tree-grid-resize-line-styling-sample.component.html',
    standalone: false
})
export class TreeGridResizeLineStylingSampleComponent {
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
