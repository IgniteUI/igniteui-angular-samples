import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-multi-cell-selection-style-sample',
    styleUrls: ['./grid-multi-cell-selection-style.component.scss'],
    templateUrl: './grid-multi-cell-selection-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective]
})
export class GridMultiCellSelectionStyleComponent {

    public sourceData = DATA;

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }
}
