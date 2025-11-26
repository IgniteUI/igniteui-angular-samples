import { ChangeDetectorRef, Component, ContentChild, inject, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent, SortingDirection, GridCellMergeMode, IgxGridToolbarComponent, IgxSelectComponent, IgxSelectItemComponent, IgxLabelDirective } from 'igniteui-angular';
import { HIERARCHICAL_DATA } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-cell-merge',
    styleUrls: ['./hierarchical-grid-cell-merge.component.scss'],
    templateUrl: 'hierarchical-grid-cell-merge.component.html',
    imports: [
        IgxHierarchicalGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxRowIslandComponent,
        IgxGridToolbarComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective,
        FormsModule
    ]
})

export class HGridCellMergeComponent {

    public localData = HIERARCHICAL_DATA;
    public cellMergeMode: GridCellMergeMode = 'always';
    public cellMergeModeRowIsland: GridCellMergeMode= 'always';
    public mergeTypes = [{ name: 'Merge always', value: GridCellMergeMode.always }, { name: 'Merge on sort', value: GridCellMergeMode.onSort }];
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'ContactTitle'
        }
    ];

    public strategySelection(e, hgrid: IgxHierarchicalGridComponent) {
        this.cellMergeModeRowIsland = e.newSelection.value;
        hgrid.getChildGrids().forEach(x => x.notifyChanges(true));
    }
}
