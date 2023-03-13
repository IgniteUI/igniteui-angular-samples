import { Component, ViewChild, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-tree-grid-external-excel-style-filtering',
    templateUrl: './tree-grid-external-excel-style-filtering.component.html',
    styleUrls: ['./tree-grid-external-excel-style-filtering.component.scss']
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
