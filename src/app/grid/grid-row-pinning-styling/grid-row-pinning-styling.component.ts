import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IPinningConfig, RowPinningPosition, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-row-pinning-styling',
    templateUrl: 'grid-row-pinning-styling.component.html',
    styleUrls: ['./grid-row-pinning-styling.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent]
})

export class GridRowPinningStylingSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid: IgxGridComponent;
    public data: any[];

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public ngOnInit() {
        this.grid.pinRow(this.data[0].ID);
        this.grid.pinRow(this.data[3].ID);
    }
}
