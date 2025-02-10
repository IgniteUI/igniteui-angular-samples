import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnGroupComponent, IgxHierarchicalGridComponent, IgxIconComponent, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-column-template',
    styleUrls: ['./hierarchical-grid-multi-column-template.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-template.component.html',
    imports: [IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent]
})

export class HGridMultiHeaderTemplateSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true})
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localData: any[];
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();

    constructor() {
    }

    public ngOnInit(): void {
        this.localData = CUSTOMERS;
        for (const item of this.localData) {
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
        } else {
            for (let i = 1; i < columns.length; i++) {
                const col = columns[i];
                col.hidden = !col.hidden;
            }
        }

        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
}
