import { Component } from '@angular/core';
import { HIERARCHICAL_DATA_EXTENDED } from '../../data/hierarchical-data-extended';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { GridCellMergeMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { DefaultMergeStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-cell-merge-custom',
    styleUrls: ['./hierarchical-grid-cell-merge-custom.component.scss'],
    templateUrl: 'hierarchical-grid-cell-merge-custom.component.html',
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

export class HGridCellMergeCustomComponent {

    public localData = HIERARCHICAL_DATA_EXTENDED;
    public cellMergeMode: GridCellMergeMode = 'always';
    public perCountryMergeStrategy = new PerCountryMergeStrategy();
    public sortExpr = [
        {
            dir: SortingDirection.Asc, fieldName: 'ContactTitle'
        }
    ];
}

export class PerCountryMergeStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective countries */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['Country'];
        const projB = record['Country'];
        return a === b && projA === projB;
    }
}
