import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-column-selection-style',
    templateUrl: './tree-grid-column-selection-style.component.html',
    styleUrls: ['./tree-grid-column-selection-style.component.scss'],
    standalone: false
})
export class TreeGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
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

    constructor(private cd: ChangeDetectorRef) {
    }

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
