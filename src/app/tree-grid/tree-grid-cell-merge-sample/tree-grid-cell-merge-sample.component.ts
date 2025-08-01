import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, IgxColumnComponent, GridCellMergeMode, IgxGridToolbarComponent, IgxSelectComponent, IgxSelectItemComponent, IgxLabelDirective, SortingDirection, DefaultTreeGridMergeStrategy, ByLevelTreeGridMergeStrategy } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tree-grid-cell-merge-sample',
    styleUrls: ['./tree-grid-cell-merge-sample.component.scss'],
    templateUrl: './tree-grid-cell-merge-sample.component.html',
    imports: [
        IgxTreeGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective,
        IgxGridToolbarComponent,
        FormsModule
    ]
})

export class TreeGridCellMergeComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public childDataKey = 'Categories';
    public data = generateEmployeeDetailedFlatData();
    public cellMergeMode: GridCellMergeMode = 'always';
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'Country'
        }
    ];
    public mergeTypes = [{ name: 'Merge always', value: GridCellMergeMode.always }, { name: 'Merge on sort', value: GridCellMergeMode.onSort }];

    public mergeStrategies =  [{ name: 'Default Merge Strategy', value: new DefaultTreeGridMergeStrategy() }, { name: 'By Level Merge Strategy', value: new ByLevelTreeGridMergeStrategy() }];
    public mergeStrategy = this.mergeStrategies[0].value;
    public strategySelection(e) {
        this.mergeStrategy = e.newSelection.value;
    }
}
