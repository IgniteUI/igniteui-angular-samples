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
                ChinaBronze: 30,
                ChinaGold: 40,
                ChinaMedals: 110,
                ChinaSilver: 40,
                RussiaBronze: 15,
                RussiaGold: 45,
                RussiaMedals: 95,
                RussiaSilver: 35,
                USABronze: 48,
                USAGold: 52,
                USAMedals: 148,
                USASilver: 48,
                Year: "1996"
            },
            {
                ChinaBronze: 45,
                ChinaGold: 30,
                ChinaMedals: 115,
                ChinaSilver: 40,
                RussiaBronze: 21,
                RussiaGold: 30,
                RussiaMedals: 91,
                RussiaSilver: 40,
                USABronze: 42,
                USAGold: 58,
                USAMedals: 142,
                USASilver: 42,
                Year: "2000"
            },
            {
                ChinaBronze: 21,
                ChinaGold: 40,
                ChinaMedals: 121,
                ChinaSilver: 60,
                RussiaBronze: 26,
                RussiaGold: 20,
                RussiaMedals: 86,
                RussiaSilver: 40,
                USABronze: 46,
                USAGold: 34,
                USAMedals: 134,
                USASilver: 54,
                Year: "2004"
            },
            {
                ChinaBronze: 29,
                ChinaGold: 20,
                ChinaMedals: 129,
                ChinaSilver: 80,
                RussiaBronze: 5,
                RussiaGold: 33,
                RussiaMedals: 65,
                RussiaSilver: 27,
                USABronze: 30,
                USAGold: 31,
                USAMedals: 131,
                USASilver: 70,
                Year: "2008"
            },
            {
                ChinaBronze: 45,
                ChinaGold: 55,
                ChinaMedals: 115,
                ChinaSilver: 15,
                RussiaBronze: 17,
                RussiaGold: 22,
                RussiaMedals: 77,
                RussiaSilver: 38,
                USABronze: 35,
                USAGold: 43,
                USAMedals: 135,
                USASilver: 57,
                Year: "2012"
            },
            {
                ChinaBronze: 32,
                ChinaGold: 50,
                ChinaMedals: 112,
                ChinaSilver: 30,
                RussiaBronze: 30,
                RussiaGold: 38,
                RussiaMedals: 88,
                RussiaSilver: 20,
                USABronze: 46,
                USAGold: 52,
                USAMedals: 146,
                USASilver: 48,
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
