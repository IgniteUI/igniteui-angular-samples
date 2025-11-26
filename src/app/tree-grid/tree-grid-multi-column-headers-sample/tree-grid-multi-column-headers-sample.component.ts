import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxTreeGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxButtonDirective } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-column-headers-sample',
    styleUrls: ['./tree-grid-multi-column-headers-sample.component.scss'],
    templateUrl: './tree-grid-multi-column-headers-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxButtonDirective]
})
export class TreeGridMultiColumnHeadersSampleComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data = generateEmployeeDetailedFlatData();
    public selectionMode: GridSelectionMode = 'none';

    public pinUnpinGroup() {
        const firstColumnGroup = this.treeGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public showHideGroup() {
        const firstColumnGroup = this.treeGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }
}
