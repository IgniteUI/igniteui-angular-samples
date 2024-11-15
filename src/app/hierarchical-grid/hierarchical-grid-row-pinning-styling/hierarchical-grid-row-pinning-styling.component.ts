import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnPinningPosition, IgxHierarchicalGridComponent, IPinningConfig, RowPinningPosition, IgxColumnComponent, IgxCellTemplateDirective, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-row-pinning-styling',
    styleUrls: ['./hierarchical-grid-row-pinning-styling.component.scss'],
    templateUrl: 'hierarchical-grid-row-pinning-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxRowIslandComponent]
})

export class HGridRowPinningStylingSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid1', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;
    public localData;
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;

    public ngOnInit() {
        this.hierarchicalGrid.pinRow(SINGERS[0].Photo);
        this.hierarchicalGrid.pinRow(SINGERS[3].Photo);
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}
