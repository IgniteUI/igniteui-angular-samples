import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxAdvancedFilteringDialogComponent, IgxTreeGridComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-external-advanced-filtering',
    templateUrl: './tree-grid-external-advanced-filtering.component.html',
    styleUrls: ['./tree-grid-external-advanced-filtering.component.scss'],
    imports: [IgxAdvancedFilteringDialogComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridExternalAdvancedFilteringComponent {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() {
        this.data = ORDERS_DATA;
    }
}
