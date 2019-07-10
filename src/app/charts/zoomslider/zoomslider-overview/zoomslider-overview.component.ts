import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { StockDataService } from "../../financial-chart/services/stock-data.service";

// import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";

@Component({
    providers: [ StockDataService ],
    selector: "app-zoomslider-overviewn",
    styleUrls: ["./zoomslider-overview.component.scss"],
    templateUrl: "./zoomslider-overview.component.html"
})
export class ZoomSliderOverviewComponent implements AfterViewInit {

    public data: any;

    // @ViewChild("chart", { static: true })
    // public chart: IgxPieChartComponent;

    constructor(private dataService: StockDataService) {

        this.data = this.dataService.GetStockTSLA();

    }

    public ngAfterViewInit(): void {
        // this.chart.selectedItem = this.data[3];
    }
}
