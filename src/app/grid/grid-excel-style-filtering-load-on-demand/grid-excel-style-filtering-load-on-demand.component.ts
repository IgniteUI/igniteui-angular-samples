import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { ColumnType, IFilteringExpressionsTree } from 'igniteui-angular/core';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { RemoteValuesService } from './remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-excel-style-filtering-load-on-demand',
    styleUrls: ['./grid-excel-style-filtering-load-on-demand.component.scss'],
    templateUrl: './grid-excel-style-filtering-load-on-demand.component.html',
    providers: [RemoteValuesService],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})
export class GridExcelStyleFilteringLoadOnDemandComponent implements OnInit {
    private remoteValuesService = inject(RemoteValuesService);


    public data: any[];

    public columnValuesStrategy = (column: ColumnType,
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
