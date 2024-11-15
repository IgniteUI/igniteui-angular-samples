import { Component, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent, IgxToastComponent, VerticalAlignment } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-multi-cell-selection-sample',
    styleUrls: ['./grid-multi-cell-selection.component.scss'],
    templateUrl: './grid-multi-cell-selection.component.html',
    standalone: false
})
export class GridMultiCellSelectionComponent {

    public sourceData = DATA;
    public targetData = [];

    public transferData(source: IgxGridComponent, target: IgxGridComponent,
                        notification: IgxToastComponent) {
        target.autoGenerate = true;
        target.clearCellSelection();
        this.targetData = source.getSelectedData();
        notification.positionSettings.verticalDirection = VerticalAlignment.Middle;
        notification.displayTime = 1000;
        notification.open(`Transfered ${this.targetData.length} rows`);
    }

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }

    public transferExpressions(source: IgxGridComponent, target: IgxGridComponent, type: string) {
        if (type === 'filter') {
            target.filteringExpressionsTree = source.filteringExpressionsTree;
        } else {
            target.sortingExpressions = source.sortingExpressions;
        }
    }
}
