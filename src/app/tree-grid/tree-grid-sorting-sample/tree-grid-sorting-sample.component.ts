import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxTreeGridComponent, ISortingOptions, SortingDirection } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-sorting-sample',
    styleUrls: ['./tree-grid-sorting-sample.component.scss'],
    templateUrl: 'tree-grid-sorting-sample.component.html'
})

export class TreeGridSortingSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;
    public data: any[];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public sortingTypes: ISortingOptions[] = [
        {
            mode: 'single'
        }, {
            mode: 'multiple'
        }
    ];
    public sortingOptions: ISortingOptions = this.sortingTypes[1];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() { }

    public ngOnInit(): void {
        this.data = ORDERS_DATA();
        this.treegrid1.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'UnitPrice',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public rightClick(eventArgs) {
      eventArgs.event.preventDefault();
      this.contextmenuX = eventArgs.event.clientX;
      this.contextmenuY = eventArgs.event.clientY;
      this.contextmenu = true;
      this.clickedCell = eventArgs.cell;
    }

    public disableContextMenu() {
      this.contextmenu = false;
    }

    handleSearchResults(event: KeyboardEvent) {
        event.preventDefault();
    }
}
