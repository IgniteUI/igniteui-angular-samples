import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-excel-style-filtering-sample-2.component.scss'],
    templateUrl: 'grid-excel-style-filtering-sample-2.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})

export class ExcelStyleFilteringSample2Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
