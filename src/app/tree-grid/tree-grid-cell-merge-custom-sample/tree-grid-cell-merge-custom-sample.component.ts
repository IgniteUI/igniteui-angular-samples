import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, IgxColumnComponent, GridCellMergeMode, IgxGridToolbarComponent, IgxSelectComponent, IgxSelectItemComponent, IgxLabelDirective, SortingDirection, DefaultMergeStrategy } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { generateEmployeeDetailedFlatData2 } from '../data/employees-flat-detailed2';

@Component({
    selector: 'app-tree-grid-cell-merge-custom-sample',
    styleUrls: ['./tree-grid-cell-merge-custom-sample.component.scss'],
    templateUrl: './tree-grid-cell-merge-custom-sample.component.html',
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

export class TreeGridCellMergeCustomComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public childDataKey = 'Categories';
    public data = generateEmployeeDetailedFlatData2();
    public cellMergeMode: GridCellMergeMode = 'always';
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'Country'
        }
    ];
    //public mergeTypes = [{ name: 'Always', value: GridCellMergeMode.always }, { name: 'On sort', value: GridCellMergeMode.onSort }];

    //public mergeStrategies =  [{ name: 'Default Strategy', value: new DefaultTreeGridMergeStrategy() }, { name: 'By Level Strategy', value: new ByLevelTreeGridMergeStrategy() }];
    public mergeStrategy = new CustomTreeGridMergeStrategy();
    /* public strategySelection(e) {
        this.mergeStrategy = e.newSelection.value;
    } */
}

export class CustomTreeGridMergeStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective countries and levels */
    public override comparer(prevRecord: any, record: any, field: string, isDate = false, isTime = false): boolean {
        const a = this.getFieldValue(prevRecord.data, field, isDate, isTime);
        const b = this.getFieldValue(record.data, field, isDate, isTime);

        const levelA = prevRecord.level;
        const levelB = record.level;

        const countryA = prevRecord.data['Country'];
        const countryB = record.data['Country'];

        const an = (a === null || a === undefined);
        const bn = (b === null || b === undefined);

        if (an) {
            return bn; // both null/undefined → merge, else → no merge
        } else if (bn) {
            return false;
        }

        // Merge only if values match, level matches, and country matches
        return a === b && levelA === levelB && countryA === countryB;
    }
}
