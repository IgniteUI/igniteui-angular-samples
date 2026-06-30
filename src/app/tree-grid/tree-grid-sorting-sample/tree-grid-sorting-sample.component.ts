import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DefaultSortingStrategy, ISortingOptions, SortingDirection } from 'igniteui-angular/core';
import { IgxTreeGridComponent, IgxTreeGridGroupByAreaComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxComboClearIconDirective, IgxComboItemDirective } from 'igniteui-angular/combo';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { TreeGridContextmenuComponent } from './tree-grid-contextmenu/tree-grid-contextmenu.component';

@Component({
    selector: 'app-tree-grid-sorting-sample',
    styleUrls: ['./tree-grid-sorting-sample.component.scss'],
    templateUrl: 'tree-grid-sorting-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxButtonDirective, IgxGridToolbarActionsComponent, IgxSimpleComboComponent, FormsModule, IgxComboClearIconDirective, IgxComboItemDirective, IgxTreeGridGroupByAreaComponent, IgxColumnComponent, IgxCellTemplateDirective, TreeGridContextmenuComponent, UpperCasePipe]
})

export class TreeGridSortingSampleComponent implements OnInit, AfterViewInit {
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
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit(): void {
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
