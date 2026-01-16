import { Component, ViewChild, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridExcelStyleFilteringComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-tree-grid-external-excel-style-filtering',
    templateUrl: './tree-grid-external-excel-style-filtering.component.html',
    styleUrls: ['./tree-grid-external-excel-style-filtering.component.scss'],
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridExternalExcelStyleFilteringComponent implements OnInit {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() { }

    public ngOnInit() {
        this.data = ORDERS_DATA;
    }
}
