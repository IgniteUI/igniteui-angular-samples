import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxStringFilteringOperand, IgxTreeGridComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-filtering-sample',
    styleUrls: ['./tree-grid-filtering-sample.component.scss'],
    templateUrl: 'tree-grid-filtering-sample.component.html'
})

export class TreeGridFilteringSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

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

    public filter(element: EventTarget) {
        this.treegrid1.filter('Name', (element as HTMLInputElement).value, IgxStringFilteringOperand.instance().condition('contains'));
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
}
