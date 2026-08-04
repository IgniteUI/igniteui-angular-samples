import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCSVTextDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxExcelTextDirective, IgxGridExcelStyleFilteringComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { CurrencyPipe } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-grid-external-excel-style-filtering',
    templateUrl: './grid-external-excel-style-filtering.component.html',
    styleUrls: ['./grid-external-excel-style-filtering.component.scss'],
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxCSVTextDirective, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class GridExternalExcelStyleFilteringComponent implements OnInit {

    public data: any[];
    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }
}
