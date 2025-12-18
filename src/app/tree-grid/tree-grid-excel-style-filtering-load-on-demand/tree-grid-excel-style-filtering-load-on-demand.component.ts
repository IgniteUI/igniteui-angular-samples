import { Component, OnInit, inject } from '@angular/core';
import { IFilteringExpressionsTree } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { RemoteValuesService } from './remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-excel-style-filtering-load-on-demand',
    styleUrls: ['./tree-grid-excel-style-filtering-load-on-demand.component.scss'],
    templateUrl: './tree-grid-excel-style-filtering-load-on-demand.component.html',
    providers: [RemoteValuesService],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent]
})
export class TreeGridExcelStyleFilteringLoadOnDemandComponent implements OnInit {
    private remoteValuesService = inject(RemoteValuesService);


    public data: any[];

    public ngOnInit() {
        this.data = this.remoteValuesService.getRecordsData();
    }

    public columnValuesStrategy = (column: IgxColumnComponent,
                                   columnExprTree: IFilteringExpressionsTree,
                                   done: (uniqueValues: any[]) => void) => {
        // Get specific column data.
        this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
    };
}
