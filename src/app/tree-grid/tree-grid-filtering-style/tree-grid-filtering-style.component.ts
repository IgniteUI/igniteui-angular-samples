import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-filtering-style',
    styleUrls: ['./tree-grid-filtering-style.component.scss'],
    templateUrl: './tree-grid-filtering-style.component.html',
    standalone: false
})
export class TreeGridFilteringStyleComponent implements OnInit {
    public data: any[];
    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;


    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
}
