import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ DataService ],
    selector: "app-category-chart-overview-sample",
    styleUrls: ["./category-chart-overview-sample.component.scss"],
    templateUrl: "./category-chart-overview-sample.component.html"
})
export class CategoryChartOverviewComponent {

    public chartType: string = "Auto";
    public data: any;

    constructor(private dataService: DataService) {
        this.data = this.dataService.getData();
    }
}
