import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-external-outlet',
    styleUrls: ['./tree-grid-external-outlet-sample.component.scss'],
    templateUrl: 'tree-grid-external-outlet-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxOverlayOutletDirective]
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
        this.data = ORDERS_DATA;
    }
}
