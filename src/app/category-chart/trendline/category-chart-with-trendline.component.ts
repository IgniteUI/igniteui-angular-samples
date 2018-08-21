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
        // data source from wikipedia.org
        const usaMedals: any = [
            { Year: "1988", Gold: 36, Silver: 31, Bronze: 27 },
            { Year: "1992", Gold: 37, Silver: 34, Bronze: 37 },
            { Year: "1996", Gold: 44, Silver: 32, Bronze: 25 },
            { Year: "2000", Gold: 37, Silver: 24, Bronze: 33 },
            { Year: "2004", Gold: 36, Silver: 39, Bronze: 27 },
            { Year: "2008", Gold: 36, Silver: 39, Bronze: 37 },
            { Year: "2012", Gold: 46, Silver: 28, Bronze: 29 },
            { Year: "2016", Gold: 46, Silver: 37, Bronze: 38 }
        ];
        const chinaMedals: any = [
            { Year: "1988", Gold: 12, Silver: 10, Bronze: 11 },
            { Year: "1992", Gold: 16, Silver: 22, Bronze: 16 },
            { Year: "1996", Gold: 16, Silver: 22, Bronze: 12 },
            { Year: "2000", Gold: 28, Silver: 16, Bronze: 15 },
            { Year: "2004", Gold: 32, Silver: 17, Bronze: 14 },
            { Year: "2008", Gold: 48, Silver: 22, Bronze: 30 },
            { Year: "2012", Gold: 38, Silver: 31, Bronze: 22 },
            { Year: "2016", Gold: 26, Silver: 18, Bronze: 26 }
        ];
        const russiaMedals: any = [
            { Year: "1988", Gold: 55, Silver: 31, Bronze: 46 },
            { Year: "1992", Gold: 45, Silver: 38, Bronze: 29 },
            { Year: "1996", Gold: 26, Silver: 21, Bronze: 16 },
            { Year: "2000", Gold: 32, Silver: 28, Bronze: 28 },
            { Year: "2004", Gold: 27, Silver: 27, Bronze: 38 },
            { Year: "2008", Gold: 24, Silver: 13, Bronze: 23 },
            { Year: "2012", Gold: 20, Silver: 20, Bronze: 30 },
            { Year: "2016", Gold: 19, Silver: 17, Bronze: 19}
        ];

        const medals = [];
        for (let i = 0; i < 8; i++) {
            // flatting all medal arrays into a single array
            const result: any = {
                ChinaBronze: chinaMedals[i].Bronze,
                ChinaGold: chinaMedals[i].Gold,
                ChinaSilver: chinaMedals[i].Silver,

                RussiaBronze: russiaMedals[i].Bronze,
                RussiaGold: russiaMedals[i].Gold,
                RussiaSilver: russiaMedals[i].Silver,

                UsaBronze: usaMedals[i].Bronze,
                UsaGold: usaMedals[i].Gold,
                UsaSilver: usaMedals[i].Silver,
                Year: usaMedals[i].Year
            };
            // calculating all medals for each country
            result.ChinaMedals = result.ChinaGold + result.ChinaSilver + result.ChinaBronze;
            result.RussiaMedals = result.RussiaGold + result.RussiaSilver + result.RussiaBronze;
            result.UsaMedals = result.UsaGold + result.UsaSilver + result.UsaBronze;

            medals.push(result);
        }
        this.data = medals;
    }

    public ngAfterViewInit(): void {
        this.chart.includedProperties = ["Year",
        "UsaMedals", "ChinaMedals", "RussiaMedals"];
    }

    public seriesAddedEvent(e: any): void {
        let str: string = e.args.series.valueMemberPath;
        str = str.replace("Medals", "");
        str = str.replace("Usa", "USA");
        e.args.series.name = str;
        e.args.series.title = str;
    }
}
