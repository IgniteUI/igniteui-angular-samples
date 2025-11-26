import { Component } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxPaginatorComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-moving-styled',
    styleUrls: ['./hierarchical-grid-moving-styled.component.scss'],
    templateUrl: 'hierarchical-grid-moving-styled.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridColumnMovingSampleStyledComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}
