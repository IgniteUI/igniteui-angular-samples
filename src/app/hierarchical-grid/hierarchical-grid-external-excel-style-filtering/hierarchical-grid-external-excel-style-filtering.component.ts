import { ChangeDetectionStrategy, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';

import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-hierarchical-grid-external-excel-style-filtering',
    templateUrl: './hierarchical-grid-external-excel-style-filtering.component.html',
    styleUrls: ['./hierarchical-grid-external-excel-style-filtering.component.scss'],
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HGridExternalExcelStyleFilteringComponent implements AfterViewInit{

    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true })
    public hgrid: IgxHierarchicalGridComponent;

    public columns: any[];
    public localdata: any[];

    constructor() {
        this.localdata = SINGERS;
    }

    public ngAfterViewInit() {
        this.columns = this.hgrid.columnList.filter(c => c.filterable);
    }
}
