import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-conditional-cell-style-sample',
    styleUrls: ['./tree-grid-conditional-cell-style-sample.component.scss'],
    templateUrl: './tree-grid-conditional-cell-style-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridConditionalCellStyleComponent implements OnInit {
    public data: any[];
    public allergenItems = ['Frozen Shrimps', 'Wild Salmon Fillets', 'Fresh Cheese', 'Skimmed Milk 1L', 'Butter'];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public ngOnInit() {
        this.data = ORDERS_DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    private upPriceCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 5;

    private downPriceCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 5;

    private allergenCondition = (rowData: any, columnKey: any): boolean => this.allergenItems.indexOf(rowData[columnKey]) >= 0;


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public priceClasses = {
        downPrice: this.downPriceCondition,
        upPrice: this.upPriceCondition
    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public allergenClasses = {
        'allergens allergensFont': this.allergenCondition
    };
}
