import { Component, OnInit } from '@angular/core';
import { IFilteringExpressionsTree, IgxColumnComponent, IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { RemoteValuesService } from '../../services/remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-load-on-demand',
    templateUrl: './hierarchical-grid-excel-style-filtering-load-on-demand.component.html',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-load-on-demand.component.scss'],
    providers: [RemoteValuesService],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HierarchicalGridExcelStyleFilteringLoadOnDemandComponent implements OnInit {

    public localdata: any[];

    constructor(private remoteValuesService: RemoteValuesService) { }

    public singersColumnValuesStrategy = (column: IgxColumnComponent,
                                          columnExprTree: IFilteringExpressionsTree,
                                          done: (uniqueValues: any[]) => void) => {
        // Get specific column data for the singers.
        this.remoteValuesService.getColumnData(
            null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                         columnExprTree: IFilteringExpressionsTree,
                                         done: (uniqueValues: any[]) => void) => {
    // Get specific column data for the albums of a specific singer.
    const parentRowId = (column.grid as any).foreignKey;
    this.remoteValuesService.getColumnData(
        parentRowId, 'Albums', column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public ngOnInit() {
        this.localdata = this.remoteValuesService.getSingersData();
    }
}
