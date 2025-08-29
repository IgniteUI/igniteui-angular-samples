import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, GridSelectionMode, IgxGridComponent, ISortingExpression, SortingDirection, IgxColumnComponent, IgxCellTemplateDirective, IgxGroupByRowTemplateDirective, IgxIconComponent, IgxBadgeComponent, GridCellMergeMode, IgxSelectComponent, IgxSelectItemComponent, IgxGridToolbarComponent, IgxLabelDirective } from 'igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-groupby-sample',
    styleUrls: ['./grid-cell-merge-sample.component.scss'],
    templateUrl: './grid-cell-merge-sample.component.html',
    imports: [
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective,
        IgxGridToolbarComponent,
        FormsModule
        ]
})
export class GridCellMergeSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public selectionMode: GridSelectionMode = 'single';
    public cellMergeMode: GridCellMergeMode = 'always';
    public mergeTypes = [{ name: 'Merge always', value: GridCellMergeMode.always }, { name: 'Merge on sort', value: GridCellMergeMode.onSort }];
    constructor() {
        this.data = INVOICE_DATA;
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
