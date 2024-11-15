import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-style-sample.component.scss'],
    templateUrl: 'tree-grid-paging-style-sample.component.html',
    standalone: false
})

export class TreeGridPagingStyleSampleComponent implements OnInit {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;


    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }
}
