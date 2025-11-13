import { Component } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent, SortingDirection, GridCellMergeMode, DefaultMergeStrategy } from 'igniteui-angular';
import { HIERARCHICAL_DATA } from '../../data/hierarchical-data';
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
        FormsModule
    ]
})

export class HGridCellMergeCustomComponent {

    public localData = HIERARCHICAL_DATA;
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
