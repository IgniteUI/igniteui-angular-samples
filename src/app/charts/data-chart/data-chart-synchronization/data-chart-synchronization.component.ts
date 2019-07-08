import { Component, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";

@Component({
    selector: "app-data-chart-synchronization",
    styleUrls: ["./data-chart-synchronization.component.scss"],
    templateUrl: "./data-chart-synchronization.component.html"
})
export class DataChartSynchronizationComponent {

    public data: any[];

    @ViewChild("chart1", { static: true })
    public chart1: IgxDataChartComponent;

    @ViewChild("chart2", { static: true })
    public chart2: IgxDataChartComponent;

    public syncHorizontally: boolean;
    public syncVertically: boolean;

    constructor() {
        this.initData();
        this.syncHorizontally = true;
        this.syncVertically = true;
    }

    public initData() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }

    public syncHorizontalChanged(e: any) {
        const checked = e.target.checked;

        this.chart1.synchronizeHorizontally = checked;
        this.chart2.synchronizeHorizontally = checked;
    }

    public syncVerticalChanged(e: any) {
        const checked = e.target.checked;

        this.chart1.synchronizeVertically = checked;
        this.chart2.synchronizeVertically = checked;
    }
}
