import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, TreeGridFormattedValuesFilteringStrategy, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-formatted-filtering-strategy',
    styleUrls: ['./tree-grid-formatted-filtering-strategy.component.scss'],
    templateUrl: 'tree-grid-formatted-filtering-strategy.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridFormattedFilteringStrategyComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public filterStrategy = new TreeGridFormattedValuesFilteringStrategy();

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public formatPrice(value: number) {
        return value ? value < 3 ? 'low' : value > 5 ? 'high' : 'medium' : '';
    }
}
