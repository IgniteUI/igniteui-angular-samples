import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-multi-cell-selection-style-sample',
    styleUrls: ['./tree-grid-multi-cell-selection-style.component.scss'],
    templateUrl: './tree-grid-multi-cell-selection-style.component.html'
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
