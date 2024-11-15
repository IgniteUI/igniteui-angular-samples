import { Component } from '@angular/core';
import { IgxGridComponent, IgxAdvancedFilteringDialogComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf, CurrencyPipe } from '@angular/common';
@Component({
    selector: 'app-grid-external-advanced-filtering',
    templateUrl: './grid-external-advanced-filtering.component.html',
    styleUrls: ['./grid-external-advanced-filtering.component.scss'],
    imports: [IgxAdvancedFilteringDialogComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, NgIf, CurrencyPipe]
})
export class GridExternalAdvancedFilteringComponent {

    public data: any;

    constructor() {
        this.data = DATA;
    }
}
