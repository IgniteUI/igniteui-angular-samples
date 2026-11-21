import { Component, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { ColumnPinningPosition, IColumnPipeArgs, IGroupingExpression, ISortingExpression, SortingDirection } from 'igniteui-angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import {
    IgxCellTemplateDirective,
    IgxColumnComponent,
    IgxExporterEvent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarAdvancedFilteringComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarExporterComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarTitleComponent,
    RowType
} from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { ORGANIC_FOODS, OrganicFood, StorageType } from '../../data/organic-foods';

@Component({
    selector: 'app-grid-overview',
    styleUrls: ['./grid-overview.component.scss'],
    templateUrl: './grid-overview.component.html',
    imports: [
        IgxGridComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarTitleComponent,
        IgxGridToolbarActionsComponent,
        IgxGridToolbarHidingComponent,
        IgxGridToolbarPinningComponent,
        IgxGridToolbarExporterComponent,
        IgxGridToolbarAdvancedFilteringComponent,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxPaginatorComponent,
        IgxChipComponent,
        IgxPrefixDirective,
        IgxIconComponent,
        IgxLinearProgressBarComponent,
        IgxBadgeComponent,
        IgxIconButtonDirective
    ]
})
export class GridOverviewComponent {
    @ViewChild(IgxGridComponent, { static: true })
    public grid: IgxGridComponent;

    public data: OrganicFood[] = ORGANIC_FOODS;
    public photoFolder = 'assets/images/products/organic/';

    public sorting: ISortingExpression[] = [{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }];
    public grouping: IGroupingExpression[] = [{ fieldName: 'Category', dir: SortingDirection.Asc, ignoreCase: true }];
    public euro: IColumnPipeArgs = { currencyCode: 'EUR', digitsInfo: '1.2-2' };
    public pinToEnd = ColumnPinningPosition.End;

    public storageIcons: Record<StorageType, string> = {
        Chilled: 'ac_unit',
        Dry: 'format_color_reset',
        Ambient: 'thermostat'
    };

    /** Starts row editing in the first editable cell, the same as a double click on that cell. */
    public editRow(row: RowType): void {
        const [column] = this.grid.visibleColumns
            .filter((c) => c.editable)
            .sort((a, b) => a.visibleIndex - b.visibleIndex);
        // Activate the cell first, so that Tab, Enter and Escape work in the row as usual.
        this.grid.navigateTo(row.index, column.visibleIndex, ({ target }) => {
            target.activate();
            this.grid.getCellByKey(row.key, column.field).editMode = true;
        });
    }

    /** The Actions column holds only buttons, so it is left out of the exported file. */
    public excludeActions({ exporter }: IgxExporterEvent): void {
        const columns = exporter.columnExporting.subscribe((column) => {
            column.cancel = column.header === 'Actions';
        });
        exporter.exportEnded.pipe(first()).subscribe(() => columns.unsubscribe());
    }
}
