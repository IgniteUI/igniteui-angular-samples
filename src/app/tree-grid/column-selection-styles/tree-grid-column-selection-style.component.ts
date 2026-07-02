import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-column-selection-style',
    templateUrl: './tree-grid-column-selection-style.component.html',
    styleUrls: ['./tree-grid-column-selection-style.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    private cd = inject(ChangeDetectorRef);

    @ViewChild(IgxTreeGridComponent)
    public tGrid: IgxTreeGridComponent;
    public data;

    public columnConfig = [
        { field: 'ID', header: 'ID', selectable: true },
        { field: 'Name', header: 'Order Product', selectable: true },
        { field: 'Category', header: 'Category', selectable: true },
        { field: 'Units', header: 'Units', selectable: true },
        { field: 'UnitPrice', header: 'Unit Price', selectable: true, formatter: this.formatCurrency },
        { field: 'Price', header: 'Price', selectable: true, formatter: this.formatCurrency },
        { field: 'OrderDate', header: 'Order Date', selectable: false, formatter: this.formatDate },
        { field: 'Delivered', header: 'Delivered', selectable: true }
    ];

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit() {
        this.tGrid.selectColumns(['ID', 'UnitPrice']);
        this.cd.detectChanges();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return `$${value.toFixed(2)}`;
    }
}
