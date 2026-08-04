import { Component } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
@Component({
    selector: 'hierarchical-grid-column-autosizing',
    styleUrls: ['./hgrid-column-autosizing.component.scss'],
    templateUrl: './hgrid-column-autosizing.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridColumnAutoSizingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }
}
