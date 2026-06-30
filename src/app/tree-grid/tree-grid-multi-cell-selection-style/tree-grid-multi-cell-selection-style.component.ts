import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-cell-selection-style-sample',
    styleUrls: ['./tree-grid-multi-cell-selection-style.component.scss'],
    templateUrl: './tree-grid-multi-cell-selection-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridMultiCellSelectionStyleComponent {
    public sourceData = ORDERS_DATA;

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }
}
