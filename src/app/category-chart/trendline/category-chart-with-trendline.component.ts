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
            { Year: "1952", Gold: 40, Silver: 19, Bronze: 17 },
            { Year: "1956", Gold: 32, Silver: 25, Bronze: 17 },
            { Year: "1960", Gold: 34, Silver: 21, Bronze: 16 },
            { Year: "1964", Gold: 36, Silver: 26, Bronze: 28 },
            { Year: "1968", Gold: 45, Silver: 28, Bronze: 34 },
            { Year: "1972", Gold: 33, Silver: 31, Bronze: 30 },
            { Year: "1976", Gold: 34, Silver: 35, Bronze: 25 },
            // USA did not participate in 1980 olympics
            { Year: "1980", Gold:  0, Silver:  0, Bronze: 0  },
            { Year: "1984", Gold: 83, Silver: 61, Bronze: 30 },
            { Year: "1988", Gold: 36, Silver: 31, Bronze: 27 },
            { Year: "1992", Gold: 37, Silver: 34, Bronze: 37 },
            { Year: "1996", Gold: 44, Silver: 32, Bronze: 25 },
            { Year: "2000", Gold: 37, Silver: 24, Bronze: 33 },
            { Year: "2004", Gold: 36, Silver: 39, Bronze: 27 },
            { Year: "2008", Gold: 36, Silver: 39, Bronze: 37 },
            { Year: "2012", Gold: 46, Silver: 28, Bronze: 29 },
            { Year: "2016", Gold: 46, Silver: 37, Bronze: 38 }
        ];

        const russiaMedals: any = [
            { Year: "1952", Gold: 22, Silver: 30, Bronze: 19 },
            { Year: "1956", Gold: 37, Silver: 29, Bronze: 32 },
            { Year: "1960", Gold: 43, Silver: 29, Bronze: 31 },
            { Year: "1964", Gold: 30, Silver: 31, Bronze: 35 },
            { Year: "1968", Gold: 29, Silver: 32, Bronze: 30 },
            { Year: "1972", Gold: 50, Silver: 27, Bronze: 22 },
            { Year: "1976", Gold: 49, Silver: 41, Bronze: 35 },
            { Year: "1980", Gold: 80, Silver: 69, Bronze: 46 },
            // Russia did not participate in 1984 olympics
            { Year: "1984", Gold:  0, Silver:  0, Bronze:  0 },
            { Year: "1988", Gold: 55, Silver: 31, Bronze: 46 },
            { Year: "1992", Gold: 45, Silver: 38, Bronze: 29 },
            { Year: "1996", Gold: 26, Silver: 21, Bronze: 16 },
            { Year: "2000", Gold: 32, Silver: 28, Bronze: 28 },
            { Year: "2004", Gold: 27, Silver: 27, Bronze: 38 },
            { Year: "2008", Gold: 24, Silver: 13, Bronze: 23 },
            { Year: "2012", Gold: 20, Silver: 20, Bronze: 30 },
            { Year: "2016", Gold: 19, Silver: 17, Bronze: 19 }
        ];

        const ukMedals: any = [
            { Year: "1952", Gold:  1, Silver:  2, Bronze: 8 },
            { Year: "1956", Gold:  6, Silver:  7, Bronze: 11 },
            { Year: "1960", Gold:  2, Silver:  6, Bronze: 12 },
            { Year: "1964", Gold:  4, Silver: 12, Bronze: 2 },
            { Year: "1968", Gold:  5, Silver:  5, Bronze: 3 },
            { Year: "1972", Gold:  4, Silver:  5, Bronze: 9 },
            { Year: "1976", Gold:  3, Silver:  5, Bronze: 5 },
            { Year: "1980", Gold:  5, Silver:  7, Bronze: 9 },
            { Year: "1984", Gold:  5, Silver: 11, Bronze: 21 },
            { Year: "1988", Gold:  5, Silver: 10, Bronze: 9 },
            { Year: "1992", Gold:  5, Silver:  3, Bronze: 12 },
            { Year: "1996", Gold:  1, Silver:  8, Bronze: 6 },
            { Year: "2000", Gold: 11, Silver: 10, Bronze: 7 },
            { Year: "2004", Gold:  9, Silver:  9, Bronze: 12 },
            { Year: "2008", Gold: 19, Silver: 13, Bronze: 17 },
            { Year: "2012", Gold: 29, Silver: 17, Bronze: 19  },
            { Year: "2016", Gold: 27, Silver: 23, Bronze: 17 }
        ];

        const olympics = [];
        for (let i = 0; i < usaMedals.length; i++) {
            // flatting all medal arrays into a single array
            const result: any = {
                UKBronze: ukMedals[i].Bronze,
                UKGold: ukMedals[i].Gold,
                UKSilver: ukMedals[i].Silver,

                RussiaBronze: russiaMedals[i].Bronze,
                RussiaGold: russiaMedals[i].Gold,
                RussiaSilver: russiaMedals[i].Silver,

                USABronze: usaMedals[i].Bronze,
                USAGold: usaMedals[i].Gold,
                USASilver: usaMedals[i].Silver,
                Year: usaMedals[i].Year
            };
            // calculating all medals for each country
            result.UKMedals = result.UKGold + result.UKSilver + result.UKBronze;
            result.RussiaMedals = result.RussiaGold + result.RussiaSilver + result.RussiaBronze;
            result.USAMedals = result.USAGold + result.USASilver + result.USABronze;

            olympics.push(result);
        }
        this.data = olympics;
    }

    public ngAfterViewInit(): void {
        this.chart.includedProperties = ["Year",
        "USAMedals", "UKMedals", "RussiaMedals"];
    }

    public seriesAddedEvent(e: any): void {
        let str: string = e.args.series.valueMemberPath;
        str = str.replace("Medals", "");
        e.args.series.name = str;
        e.args.series.title = str;
    }
}
