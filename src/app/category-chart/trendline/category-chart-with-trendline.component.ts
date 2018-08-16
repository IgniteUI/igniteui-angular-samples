import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";

@Component({
    selector: "app-category-chart-with-trendline",
    styleUrls: ["./category-chart-with-trendline.component.scss"],
    templateUrl: "./category-chart-with-trendline.component.html"
})
export class CategoryChartWithTrendlineComponent implements AfterViewInit {

    public data: any;
    public includedProperties: any;

    @ViewChild("chart")
    public chart: IgxCategoryChartComponent;

    constructor() {

        const medals: any = [
            {
                ChinaBronze: 100,
                ChinaGold: 100,
                ChinaMedals: 110,
                ChinaSilver: 100,
                RussiaBronze: 100,
                RussiaGold: 100,
                RussiaMedals: 95,
                RussiaSilver: 100,
                USABronze: 100,
                USAGold: 100,
                USAMedals: 148,
                USASilver: 100,
                Year: "1996"
            },
            {
                ChinaBronze: 100,
                ChinaGold: 100,
                ChinaMedals: 115,
                ChinaSilver: 100,
                RussiaBronze: 100,
                RussiaGold: 100,
                RussiaMedals: 91,
                RussiaSilver: 100,
                USABronze: 100,
                USAGold: 100,
                USAMedals: 142,
                USASilver: 100,
                Year: "2000"
            },
            {
                ChinaBronze: 100,
                ChinaGold: 100,
                ChinaMedals: 121,
                ChinaSilver: 100,
                RussiaBronze: 100,
                RussiaGold: 100,
                RussiaMedals: 86,
                RussiaSilver: 100,
                USABronze: 100,
                USAGold: 100,
                USAMedals: 134,
                USASilver: 100,
                Year: "2004"
            },
            {
                ChinaBronze: 100,
                ChinaGold: 100,
                ChinaMedals: 129,
                ChinaSilver: 100,
                RussiaBronze: 100,
                RussiaGold: 100,
                RussiaMedals: 65,
                RussiaSilver: 100,
                USABronze: 100,
                USAGold: 100,
                USAMedals: 131,
                USASilver: 100,
                Year: "2008"
            },
            {
                ChinaBronze: 100,
                ChinaGold: 100,
                ChinaMedals: 115,
                ChinaSilver: 100,
                RussiaBronze: 100,
                RussiaGold: 100,
                RussiaMedals: 77,
                RussiaSilver: 100,
                USABronze: 100,
                USAGold: 100,
                USAMedals: 135,
                USASilver: 100,
                Year: "2012"
            },
            {
                ChinaBronze: 100,
                ChinaGold: 100,
                ChinaMedals: 112,
                ChinaSilver: 100,
                RussiaBronze: 100,
                RussiaGold: 100,
                RussiaMedals: 88,
                RussiaSilver: 100,
                USABronze: 100,
                USAGold: 100,
                USAMedals: 146,
                USASilver: 100,
                Year: "2016"
            }
        ];

        this.data = medals;
    }

    public ngAfterViewInit(): void {
        this.chart.includedProperties = ["Year", "USAMedals", "ChinaMedals", "RussiaMedals"];
    }

    public seriesAddedEvent(e: any): void {
        let str: string = e.args.series.valueMemberPath;
        str = str.replace("Medals", "");
        e.args.series.name = str;
    }
}
