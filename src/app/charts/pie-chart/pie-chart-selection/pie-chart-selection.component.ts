import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";

@Component({
    selector: "app-pie-chart-selection",
    styleUrls: ["./pie-chart-selection.component.scss"],
    templateUrl: "./pie-chart-selection.component.html"
})
export class PieChartSelectionComponent implements AfterViewInit {

    public selectionType: string;
    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;

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
        this.chart.selectedItem = this.data[3];
    }
}
