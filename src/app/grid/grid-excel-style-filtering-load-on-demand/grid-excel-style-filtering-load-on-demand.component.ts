import { Component, OnInit } from '@angular/core';
import { IFilteringExpressionsTree, IgxColumnComponent, IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular';
import { RemoteValuesService } from './remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-excel-style-filtering-load-on-demand',
    styleUrls: ['./grid-excel-style-filtering-load-on-demand.component.scss'],
    templateUrl: './grid-excel-style-filtering-load-on-demand.component.html',
    providers: [RemoteValuesService],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})
export class GridExcelStyleFilteringLoadOnDemandComponent implements OnInit {

    public data: any[];

    constructor(private remoteValuesService: RemoteValuesService) { }

    public columnValuesStrategy = (column: IgxColumnComponent,
                                   columnExprTree: IFilteringExpressionsTree,
                                   done: (uniqueValues: any[]) => void) => {
        // Get specific column data.
        this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public ngOnInit() {
        // Get full data.
        this.data = this.remoteValuesService.getRecordsData();
    }
}
