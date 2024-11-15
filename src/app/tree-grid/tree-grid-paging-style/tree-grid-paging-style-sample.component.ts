import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-style-sample.component.scss'],
    templateUrl: 'tree-grid-paging-style-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, NgIf]
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
