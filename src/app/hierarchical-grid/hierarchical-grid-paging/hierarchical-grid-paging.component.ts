import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective, IgxPaginatorComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging.component.scss'],
    templateUrl: 'hierarchical-grid-paging.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective, IgxPaginatorComponent]
})

export class HGridPagingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
