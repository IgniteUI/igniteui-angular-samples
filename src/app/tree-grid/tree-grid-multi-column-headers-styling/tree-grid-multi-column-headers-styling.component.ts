import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-column-headers-styling',
    styleUrls: ['./tree-grid-multi-column-headers-styling.component.scss'],
    templateUrl: './tree-grid-multi-column-headers-styling.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class TreeGridMultiColumnHeadersStylingComponent {

    public data = generateEmployeeDetailedFlatData();
}
