import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-sample.component.scss'],
    templateUrl: 'tree-grid-paging-sample.component.html',
    standalone: false
})

export class TreeGridPagingSampleComponent implements OnInit {
    @ViewChild('treegrid1', { static: true }) public grid1: IgxTreeGridComponent;
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
