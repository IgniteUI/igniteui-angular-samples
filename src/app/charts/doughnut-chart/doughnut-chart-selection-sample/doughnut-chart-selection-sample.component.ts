import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxRingSeriesComponent } from "igniteui-angular-charts/ES5/igx-ring-series-component";

@Component({
    selector: "app-doughnut-chart-selection-sample",
    styleUrls: ["./doughnut-chart-selection-sample.component.scss"],
    templateUrl: "./doughnut-chart-selection-sample.component.html"
})
export class DoughnutChartSelectionSampleComponent implements AfterViewInit {

    public selectionType: string;
    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxDoughnutChartComponent;

    constructor() {
        this.data = [
            { Label: "Administration", Value: 2 },
            { Label: "Sales", Value: 8 },
            { Label: "IT", Value: 3 },
            { Label: "Marketing", Value: 8 },
            { Label: "Development", Value: 4 },
            { Label: "Customer Support", Value: 6 }
        ];

        this.selectionType = "Single";
    }

    public ngAfterViewInit(): void {
        let series: IgxRingSeriesComponent;
        series = this.chart.actualSeries[0] as IgxRingSeriesComponent;
        series.selectedSlices.add(3);
    }
}
