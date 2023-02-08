import { Component, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent, IgxToastComponent, IgxTreeGridComponent, VerticalAlignment } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-tree-grid-multi-cell-selection-sample',
    styleUrls: ['./tree-grid-multi-cell-selection.component.scss'],
    templateUrl: './tree-grid-multi-cell-selection.component.html'
})
export class TreeGridMultiCellSelectionComponent {

    public sourceData = FOODS_DATA();
    public targetData = [];

    public transferData(source: IgxTreeGridComponent, target: IgxGridComponent,
                        notification: IgxToastComponent) {
        target.shouldGenerate = true;
        target.clearCellSelection();
        this.targetData = source.getSelectedData();
        notification.positionSettings.verticalDirection = VerticalAlignment.Middle;
        notification.displayTime = 1000;
        notification.open(`Transfered ${this.targetData.length} rows`);
    }

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }

    public transferExpressions(source: IgxTreeGridComponent, target: IgxGridComponent) {
        target.sortingExpressions = source.sortingExpressions;
    }
}
