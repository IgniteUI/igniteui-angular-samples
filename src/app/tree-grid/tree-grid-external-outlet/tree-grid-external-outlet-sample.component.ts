import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-external-outlet',
    styleUrls: ['./tree-grid-external-outlet-sample.component.scss'],
    templateUrl: 'tree-grid-external-outlet-sample.component.html'
})

export class TreeGridExternalOutletComponent implements OnInit {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA();
    }
}
