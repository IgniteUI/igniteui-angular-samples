import { Component, ViewChild } from '@angular/core';
import {
    ColumnType,
    IgxExcelExporterOptions,
    IgxExcelExporterService,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/nwindData';

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
  templateUrl: './grid-summary-export.component.html'
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
