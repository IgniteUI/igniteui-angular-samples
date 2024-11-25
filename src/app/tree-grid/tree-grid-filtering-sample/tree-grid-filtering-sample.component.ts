import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxStringFilteringOperand, IgxTreeGridComponent, IgxInputGroupComponent, IgxInputDirective, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-tree-grid-filtering-sample',
    styleUrls: ['./tree-grid-filtering-sample.component.scss'],
    templateUrl: 'tree-grid-filtering-sample.component.html',
    imports: [IgxInputGroupComponent, IgxInputDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, NgIf]
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
        this.data = ORDERS_DATA;
    }

    public filter(element: EventTarget) {
        const value = (element as HTMLInputElement).value;
        if (value) {
            this.treegrid1.filter('Name', value, IgxStringFilteringOperand.instance().condition('contains'));
        } else {
            this.treegrid1.clearFilter('Name');
        }
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
}
