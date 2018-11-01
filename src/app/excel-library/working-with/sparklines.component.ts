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

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-sparklines",
    styleUrls: ["./sparklines.component.scss"],
    templateUrl: "./sparklines.component.html"
})
export class ExcelLibraryWorkingWithSparklinesComponent implements AfterViewInit {

    // TODO if needed, uncomment to get access to chart control
    // @ViewChild("chart")
    // public chart: IgxCategoryChartComponent;
    // @ViewChild("chart")
    // public chart: IgxDataChartComponent;

    public data: any;

    constructor() {

        // TODO generate excel data or load data from .xls file
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 }
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 }
        ];
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
        // TODO bind excel data to the chart
        // this.chart.dataSource = this.data;
    }

}
