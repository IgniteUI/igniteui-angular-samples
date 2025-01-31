import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-resize-line-styling-sample',
    styleUrls: ['./tree-grid-resize-line-styling-sample.component.scss'],
    templateUrl: './tree-grid-resize-line-styling-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridResizeLineStylingSampleComponent {
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
