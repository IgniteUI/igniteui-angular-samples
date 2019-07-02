import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-doughnut-chart-rings",
    styleUrls: ["./doughnut-chart-rings.component.scss"],
    templateUrl: "./doughnut-chart-rings.component.html"
})
export class DoughnutChartRingsComponent {

    public months: any[];
    public seasons: any[];

    constructor() {

        this.months = [
            { Value: 1, Label: "December" },
            { Value: 1, Label: "January" },
            { Value: 1, Label: "February" },
            { Value: 1, Label: "March" },
            { Value: 1, Label: "April" },
            { Value: 1, Label: "May" },
            { Value: 1, Label: "June" },
            { Value: 1, Label: "July" },
            { Value: 1, Label: "August" },
            { Value: 1, Label: "September" },
            { Value: 1, Label: "October" },
            { Value: 1, Label: "November" }
        ];
        this.seasons = [
            { Value: 4, Label: "Winter" },
            { Value: 4, Label: "Spring" },
            { Value: 4, Label: "Summer" },
            { Value: 4, Label: "Fall" }
        ];
    }

}
