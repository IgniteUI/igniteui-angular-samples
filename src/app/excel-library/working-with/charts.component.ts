import {
    AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef
} from "@angular/core";

// TODO import either CategoryChart or DataChart component:
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
// import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";

// TODO import Excel components that the sample will be showcasing:
import { TextFormatMode } from "igniteui-angular-excel/ES5/TextFormatMode";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";
import { WorkbookSaveOptions } from "igniteui-angular-excel/ES5/WorkbookSaveOptions";
import { WorksheetRegion } from 'igniteui-angular-excel/ES5/WorksheetRegion';
import { ChartType } from 'igniteui-angular-excel/ES5/ChartType';
import { saveAs } from 'file-saver';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-charts",
    styleUrls: ["./charts.component.scss"],
    templateUrl: "./charts.component.html"
})
export class ExcelLibraryWorkingWithChartsComponent implements AfterViewInit {

    public data: any[];
    public chartData: any[];

    constructor() {
        this.initData();
    }

    private initData() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var groups = ["Expense 1", "Expense 2", "Expense 3", "Expense 4", "Expense 5"];
        var data = new Array<any>();

        for (var group of groups) {
            const r = {};
            r["Expense"] = group;
            for (let month of months) {
                r[month] = this.getRandomBetween(100, 400);
            }
            data.push(r);
        }

        this.data = data;

        // since we will export the data transposed (plotByRows will be true) if 
        // we want to show the data that way in the ui then we need a transposed 
        // version of the data for the category chart to bind to
        var chartData = new Array<any>();

        for (var month of months) {
            const r = {};
            r["Month"] = month;
            for (let item of data) {
                r[item["Expense"]] = item[month];
            }
            chartData.push(r);
        }

        this.chartData = chartData;
    }

    private static getRandomBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    createFile() {
        var wb = new Workbook(WorkbookFormat.Excel2007);
        var ws = wb.worksheets().add("Sheet1");
        ws.defaultColumnWidth = 200 * 20;
        var data = this.data;
        var headers = Object.keys(data[0]);

        // reserving the [0] row where we will place the chart shape
        // the [1] will be the headers. so data will start on [2]
        const firstDataRow = 2;

        var headerRow = ws.rows(firstDataRow - 1);
        for (let c = 0; c < headers.length; c++) {
            headerRow.setCellValue(c, headers[c]);
        }

        for (var r = 0; r < data.length; r++) {
            var xlRow = ws.rows(r + firstDataRow);
            var dataRow = data[r];
            for (let c = 0; c < headers.length; c++) {
                xlRow.setCellValue(c, dataRow[headers[c]]);
            }
        }

        var tableRegion = new WorksheetRegion(ws, firstDataRow - 1, 0, firstDataRow + data.length - 1, headers.length - 1);
        var table = ws.tables().add(tableRegion.toString(), true);

        // set some extra height for the row where the chart will be
        ws.rows(0).height = 5000;

        var chart = ws.shapes().addChart(ChartType.ColumnClustered,
            ws.rows(0).cells(0), { x: 0, y: 0 },
            ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });
        chart.setSourceData(table.wholeTableRegion.toString(), true);

        this.save(wb, "chartSample");
    }

    public save(workbook: Workbook, fileNameWithoutExtension: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
          var opt = new WorkbookSaveOptions();
          opt.type = "blob";
  
          workbook.save(opt, (d) => {
            var fileName = fileNameWithoutExtension + this.getFileExtension(workbook.currentFormat);
            saveAs(<Blob>d, fileName);
            resolve(fileName);
          }, (e) => {
            reject(e);
          });
        });
      }

    public ngAfterViewInit(): void {
        // TODO bind excel data to the chart
        // this.chart.dataSource = this.data;
    }

    private getRandomBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getFileExtension(format: WorkbookFormat) {
        switch (format) {
            case WorkbookFormat.StrictOpenXml:
            case WorkbookFormat.Excel2007:
              return ".xlsx";
            case WorkbookFormat.Excel2007MacroEnabled:
              return ".xlsm";
            case WorkbookFormat.Excel2007MacroEnabledTemplate:
              return ".xltm";
            case WorkbookFormat.Excel2007Template:
              return ".xltx";
            case WorkbookFormat.Excel97To2003:
              return ".xls";
            case WorkbookFormat.Excel97To2003Template:
              return ".xlt";
          }
    }
}
