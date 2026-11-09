import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleHeaderIconDirective, IgxExcelStyleSearchComponent, IgxExcelStyleSortingComponent, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-3',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-3.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-3.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxExcelStyleHeaderIconDirective, IgxIconComponent, IgxGridExcelStyleFilteringComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleSortingComponent, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleSearchComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridExcelStyleFilteringSample3Component {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
