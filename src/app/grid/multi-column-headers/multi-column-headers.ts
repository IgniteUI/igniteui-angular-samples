import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-multi-column-headers',
    styleUrls: [ 'multi-column-headers.scss' ],
    templateUrl: 'multi-column-headers.html'
})
export class GridMultiColumnHeadersComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
    public selectionMode: GridSelectionMode = 'none';
    public pinGroup() {
        const firstColumnGroup = this.grid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public hideGroup() {
        const firstColumnGroup = this.grid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }
}
