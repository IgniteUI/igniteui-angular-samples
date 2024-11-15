import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxExcelExporterOptions, IgxExcelExporterService, IgxGridComponent, IgxNumberSummaryOperand, IgxSummaryResult, IgxButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf, DatePipe } from '@angular/common';

class MySummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter((rec) => rec > 10 && rec < 30).length
        });

        return result;
    }
}
@Component({
    selector: 'app-grid-summary-export',
    styleUrls: ['./grid-summary-export.component.scss'],
    templateUrl: './grid-summary-export.component.html',
    imports: [IgxButtonDirective, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent, NgIf, DatePipe]
})
export class GridSummaryExportComponent {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    public mySummary = MySummary;
    public data;
    public productId = 0;

    constructor(private excelExportService: IgxExcelExporterService) {
        this.data = DATA;
        this.productId = DATA.length;
    }

    public toggleSummary(column: ColumnType) {
        column.hasSummary = !column.hasSummary;
    }

    public exportButtonHandler() {
        this.excelExportService.export(this.grid, new IgxExcelExporterOptions('ExportedFile'));
    }
}
