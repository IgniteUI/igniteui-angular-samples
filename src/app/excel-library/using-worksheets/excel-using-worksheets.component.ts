import {
    ChangeDetectionStrategy, Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef
} from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
// excel components:
import { TextFormatMode } from "igniteui-angular-excel/ES5/TextFormatMode";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector:  "app-excel-using-worksheets.component",
    styleUrls:  ["./excel-using-worksheets.component.scss"],
    templateUrl: "./excel-using-worksheets.component.html"
})

export class ExcelLibraryUsingWorksheetsComponent implements OnInit {

    public data: any;

    constructor() {

    }
    public ngOnInit() {
    }
}
