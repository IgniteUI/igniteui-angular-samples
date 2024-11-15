import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-grid-conditional-cell-style-2',
    styleUrls: ['./tree-grid-conditional-cell-style-2.component.scss'],
    templateUrl: './tree-grid-conditional-cell-style-2.component.html',
    standalone: false
})
export class TreeGridConditionalCellStyle2Component implements OnInit {
    @ViewChild('grid1', { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;
    public data: any[];
    public columns: any[];

    public oddColStyles = {
        background: 'linear-gradient(to right, #b993d6, #8ca6db)',
        color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
        animation: '0.75s popin'
    };

    public evenColStyles = {
        background: 'linear-gradient(to right, #8ca6db, #b993d6)',
        color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
        animation: '0.75s popin'
    };

    public ngOnInit() {
        this.data = ORDERS_DATA;
        this.columns = [
            { field: 'ID' },
            { field: 'Name', header: 'Order Product' },
            { field: 'UnitPrice', header: 'Unit Price' },
            { field: 'OrderDate', header: 'Order Date' }
        ];

        this.applyCSS();
    }
    public applyCSS() {
        this.columns.forEach((column, index) => {
            column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
        });
    }

    public updateCSS(css: string) {
        this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
        this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
        this.applyCSS();
    }

    public formatCurrency(value: number) {
        return `$${value.toFixed(2)}`;
    }

    public formatDate(value) {
            return new Intl.DateTimeFormat('en-US').format(value);
    }

    public init(column: IgxColumnComponent) {
        console.log(column);
        switch (column.field) {
            case 'UnitPrice':
                column.formatter = this.formatCurrency;
                break;
            case 'OrderDate':
                column.formatter = this.formatDate;
                break;
            default:
                return;
        }
    }
}
