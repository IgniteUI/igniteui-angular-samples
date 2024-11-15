import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging-style.component.scss'],
    templateUrl: 'hierarchical-grid-paging-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective]
})

export class HGridPagingStyleSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
