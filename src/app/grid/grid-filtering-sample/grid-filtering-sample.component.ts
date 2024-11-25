import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxStringFilteringOperand, IgxInputGroupComponent, IgxInputDirective, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-filtering-sample.component.scss'],
    templateUrl: 'grid-filtering-sample.component.html',
    imports: [IgxInputGroupComponent, IgxInputDirective, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, NgIf, CurrencyPipe]
})

export class FilteringSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public filter(target: EventTarget) {
        const value = (target as HTMLInputElement).value;
        if (value) {
            this.grid1.filter('ProductName', value, IgxStringFilteringOperand.instance().condition('contains'));
        } else {
            this.grid1.clearFilter('ProductName');
        }
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
