import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxTreeGridComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-column-selection',
    templateUrl: './tree-grid-column-selection.component.html',
    styleUrls: ['./tree-grid-column-selection.component.scss'],
    standalone: false
})
export class TreeGridColumnSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxTreeGridComponent)
    public tGrid: IgxTreeGridComponent;
    public data;
    public currentColumnSelection: GridSelectionMode = 'single';
    public columnConfig = [
        { field: 'ID', header: 'ID', selectable: true },
        { field: 'Name', header: 'Order Product', selectable: true },
        { field: 'Category', header: 'Category', selectable: true },
        { field: 'Units', header: 'Units', selectable: false },
        { field: 'UnitPrice', header: 'Unit Price', selectable: false, formatter: this.formatCurrency },
        { field: 'Price', header: 'Price', selectable: true, formatter: this.formatCurrency },
        { field: 'OrderDate', header: 'Order Date', selectable: true, formatter: this.formatDate },
        { field: 'Delivered', header: 'Delivered', selectable: false }
    ];

    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit(): void {
        this.tGrid.getColumnByName('ID').selected = true;
        this.cdr.detectChanges();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return `$${value.toFixed(2)}`;
    }
}
