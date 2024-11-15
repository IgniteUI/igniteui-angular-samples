import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnGroupComponent, IgxGridComponent, IgxIconComponent, IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-multi-column-header-template',
    styleUrls: ['multi-column-header-template.scss'],
    templateUrl: 'multi-column-header-template.html',
    imports: [IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class GridMultiColumnHeaderTemplateComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[] = DATA;
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();
    public selectionMode: GridSelectionMode = 'multiple';

    constructor() {
        for (const item of this.data) {
            item.Location = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }

    public toggleColumnGroup(columnGroup: IgxColumnGroupComponent) {
        const columns = columnGroup.childColumns;

        if (columnGroup.header === 'General Information') {
            const col = columns[1];
            col.hidden = !col.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const col of columns) {
                col.hidden = !col.hidden;
            }
        }

        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
}
