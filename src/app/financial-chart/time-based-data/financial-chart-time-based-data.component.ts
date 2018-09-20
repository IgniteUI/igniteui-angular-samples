import { Component, ViewChild } from "@angular/core";
import { IgxFinancialChartComponent } from "igniteui-angular-charts/ES5/igx-financial-chart-component";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
  selector: "app-financial-chart-time-based-data",
  styleUrls: ["./financial-chart-time-based-data.component.scss"],
  templateUrl: "./financial-chart-time-based-data.component.html"
})

export class FinancialChartTimeBasedDataComponent {

    public selectedXAxisMode: string = "Ordinal";
    public selectedYAxisMode: string = "Numeric";

    public data: any;

    @ViewChild("chart")
    public chart: IgxFinancialChartComponent;

    constructor(private dataService: FinancialDataService) {
        this.data = [
            this.dataService.getAmzn(),
            this.dataService.getGoog()
        ];
    }

    public onSeriesAdded(e: any): void {
        const seriesName: string = e.args.series.name.toString();
        const seriesTitle: string = e.args.series.title.toString();

        if (seriesName.endsWith("FinancialPrice")) {
            //e.args.series.title = seriesTitle + " Price";
            e.args.series.type = "price";
        }

        if (seriesName.startsWith("volumeSeries")) {
            e.args.series.title = seriesTitle.replace("Price Volume", "Volume");
            e.args.series.type = "volume";
            e.args.series.legendItemVisibility = 1;
        }

        // hide legend item for series in the zoom slider
        if (seriesName.startsWith("zoomSliderSeries")) {
            e.args.series.title = "";
            e.args.series.legendItemVisibility = 1;
            e.args.series.legendItemBadgeTemplate = null;
            e.args.series.legendItemTemplate = null;
            e.args.series.legend = null;
        }
    }
}
