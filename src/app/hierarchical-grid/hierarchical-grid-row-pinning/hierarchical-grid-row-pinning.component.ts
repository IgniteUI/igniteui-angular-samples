import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IPinningConfig, IgxCellTemplateDirective, IgxColumnComponent, IgxGridPinningActionsComponent, RowPinningPosition } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-row-pinning',
    styleUrls: ['./hierarchical-grid-row-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-row-pinning.component.html',
    imports: [IgxSwitchComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxRowIslandComponent]
})

export class HGridRowPinningSampleComponent implements OnInit {
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
