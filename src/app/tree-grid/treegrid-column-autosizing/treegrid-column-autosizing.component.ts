import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'tree-grid-columnAutoSizing-sample',
    styleUrls: ['./treegrid-column-autosizing.component.scss'],
    templateUrl: './treegrid-column-autosizing.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnAutoSizingSampleComponent {
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

}
