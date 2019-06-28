import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxRingSeriesComponent } from "igniteui-angular-charts/ES5/igx-ring-series-component";

@Component({
    selector: "app-doughnut-chart-explosion-sample",
    styleUrls: ["./doughnut-chart-explosion-sample.component.scss"],
    templateUrl: "./doughnut-chart-explosion-sample.component.html"
})
export class DoughnutChartExplosionSampleComponent implements AfterViewInit {

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
    }

    public pieSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }

    public ngAfterViewInit(): void {
        let series: IgxRingSeriesComponent;
        series = this.chart.actualSeries[0] as IgxRingSeriesComponent;
        series.explodedSlices.add(3);
    }
}
