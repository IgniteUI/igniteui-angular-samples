import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-tooltip-template",
    styleUrls: ["./category-chart-tooltip-template.component.scss"],
    templateUrl: "./category-chart-tooltip-template.component.html"
})
export class CategoryChartTooltipTemplateComponent {

    public chartType: string = "Auto";
    public data: any;

    constructor() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }
}
