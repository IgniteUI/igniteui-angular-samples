import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxTreeGridComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-column-selection',
    templateUrl: './tree-grid-column-selection.component.html',
    styleUrls: ['./tree-grid-column-selection.component.scss']
})
export class TreeGridColumnSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxTreeGridComponent)
    public tGrid: IgxTreeGridComponent;
    public data;
    public currentColumnSelection: GridSelectionMode = 'single';
    public columnConfig = [
        { field: 'ID', selectable: true },
        { field: 'Name', selectable: true },
        { field: 'Category', selectable: true },
        { field: 'Units', selectable: false },
        { field: 'UnitPrice', selectable: false },
        { field: 'Price', selectable: false },
        { field: 'OrderDate', selectable: true, formatter: this.formatDate },
        { field: 'Delivered', selectable: false }
    ];

    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit(): void {
        this.data = ORDERS_DATA();
    }

    public ngAfterViewInit(): void {
        this.tGrid.getColumnByName('ID').selected = true;
        this.cdr.detectChanges();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

}
