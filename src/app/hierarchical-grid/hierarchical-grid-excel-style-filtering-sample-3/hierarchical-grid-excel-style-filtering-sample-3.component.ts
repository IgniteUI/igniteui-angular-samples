import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxExcelStyleHeaderIconDirective, IgxIconComponent, IgxGridExcelStyleFilteringComponent, IgxExcelStyleColumnOperationsTemplateDirective, IgxExcelStyleHeaderComponent, IgxExcelStyleSortingComponent, IgxExcelStyleFilterOperationsTemplateDirective, IgxExcelStyleSearchComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
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
