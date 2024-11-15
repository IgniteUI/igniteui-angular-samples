import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxGridComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxBadgeComponent } from 'igniteui-angular';
import { DATA } from '../../data/financialData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-grid-moving-sample',
    styleUrls: ['./grid-moving-sample.component.scss'],
    templateUrl: './grid-moving-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, NgIf, IgxBadgeComponent]
})

export class GridMovingSampleComponent {
    @ViewChild('dataGrid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public toggleColumnPinning(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
    }
}
