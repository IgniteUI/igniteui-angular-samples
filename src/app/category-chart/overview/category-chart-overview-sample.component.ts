import { Component, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    providers: [ DataService ],
    selector: "app-category-chart-overview-sample",
    styleUrls: ["./category-chart-overview-sample.component.scss"],
    templateUrl: "./category-chart-overview-sample.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryChartOverviewComponent {

    public chartType: string = "Auto";
    public data: any;

    constructor(private dataService: DataService) {
        this.data = this.dataService.getData();
    }
}
