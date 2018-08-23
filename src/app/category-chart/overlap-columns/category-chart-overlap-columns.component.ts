import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";

@Component({
    selector: "app-category-chart-overlap-columns",
    styleUrls: ["./category-chart-overlap-columns.component.scss"],
    templateUrl: "./category-chart-overlap-columns.component.html"
})

export class CategoryChartOverlapColumnsComponent implements AfterViewInit {

    @ViewChild("chart")
    public chart: IgxCategoryChartComponent;
    @ViewChild("legend")
    public legend: IgxLegendComponent;
    public data: any;
    public includedProperties: any;

    constructor() {
        this.data = [
            { Radio: 0.1, TV: 0.1, Press: 0.2, Social: 0.9, Blogging: 0.3, Country: "Japan" },
            { Radio: 0.2, TV: 0.3, Press: 0.2, Social: 1.2, Blogging: 0.5, Country: "Germany" },
            { Radio: 0.2, TV: 0.5, Press: 0.2, Social: 1.1, Blogging: 0.4, Country: "France" },
            { Radio: 0.3, TV: 0.5, Press: 0.2, Social: 1.4, Blogging: 0.5, Country: "Ireland" },
            { Radio: 0.4, TV: 0.5, Press: 0.3, Social: 1.3, Blogging: 0.6, Country: "Australia" },
            { Radio: 0.3, TV: 0.4, Press: 0.3, Social: 1.5, Blogging: 1.3, Country: "Sweden" },
            { Radio: 0.4, TV: 0.4, Press: 0.2, Social: 1.4, Blogging: 1.4, Country: "Poland" },
            { Radio: 0.5, TV: 0.4, Press: 0.3, Social: 1.4, Blogging: 1.5, Country: "UK" },
            { Radio: 0.4, TV: 0.5, Press: 0.3, Social: 1.4, Blogging: 1.6, Country: "Canada" },
            { Radio: 0.4, TV: 0.5, Press: 0.4, Social: 1.6, Blogging: 1.5, Country: "Spain" },
            { Radio: 0.5, TV: 0.7, Press: 0.3, Social: 1.3, Blogging: 1.5, Country: "Germany" },
            { Radio: 0.4, TV: 1.2, Press: 0.4, Social: 1.4, Blogging: 1.6, Country: "Taiwan" },
            { Radio: 0.5, TV: 1.3, Press: 0.3, Social: 1.4, Blogging: 1.5, Country: "Russia" },
            { Radio: 0.5, TV: 1.4, Press: 0.3, Social: 1.6, Blogging: 1.6, Country: "China" },
            { Radio: 0.6, TV: 1.5, Press: 0.4, Social: 1.8, Blogging: 1.6, Country: "USA" },
            { Radio: 0.5, TV: 1.4, Press: 0.7, Social: 2.2, Blogging: 2.1, Country: "Italy" },
            { Radio: 0.5, TV: 1.5, Press: 1.3, Social: 2.3, Blogging: 2.4, Country: "India" },
            { Radio: 0.6, TV: 1.5, Press: 1.4, Social: 2.4, Blogging: 2.3, Country: "Argentina" },
            { Radio: 0.6, TV: 1.6, Press: 1.5, Social: 2.5, Blogging: 2.4, Country: "Mexico" },
            { Radio: 0.7, TV: 1.6, Press: 1.5, Social: 2.6, Blogging: 2.4, Country: "Turkey" },
            { Radio: 0.8, TV: 1.7, Press: 1.4, Social: 2.7, Blogging: 2.5, Country: "Indonesia" },
            { Radio: 0.9, TV: 1.7, Press: 1.6, Social: 2.8, Blogging: 2.6, Country: "Thailand" },
            { Radio: 0.8, TV: 1.8, Press: 1.7, Social: 2.9, Blogging: 2.7, Country: "Brazil" }
        ];

        // category chart does not have stacked series yet but you can render the stacked chart
        // using multiple columns that are overlapping with each other and showing stacked values
        for (const item of this.data) {
            // stacking up values of data items
            item.StackBlogging = item.TV + item.Radio + item.Press + item.Social + item.Blogging;
            item.StackSocial = item.TV + item.Radio + item.Press + item.Social;
            item.StackOnlinePress = item.TV + item.Radio + item.Press;
            item.StackOnlineTV = item.TV + item.Radio;
            item.StackOnlineRadio = item.Radio;
            // rounding up stacked values
            item.StackBlogging = Math.round(item.StackBlogging * 10) / 10;
            item.StackSocial = Math.round(item.StackSocial * 10) / 10;
            item.StackOnlinePress = Math.round(item.StackOnlinePress * 10) / 10;
            item.StackOnlineTV = Math.round(item.StackOnlineTV * 10) / 10;
            item.StackOnlineRadio = Math.round(item.StackOnlineRadio * 10) / 10;
        }
    }

    public ngAfterViewInit(): void {
        // binding only properties with "stack" prefix
        this.chart.includedProperties = [
            "StackBlogging", "StackSocial",
            "StackOnlinePress", "StackOnlineTV",
            "StackOnlineRadio", "Country"
        ];
        this.chart.yAxisFormatLabel = this.formatYAxisLabel;
    }

    public formatYAxisLabel(item: any): string {
        return item + "h";
    }

    public onSeriesAdded(e: any): void {
        let str: string = e.args.series.valueMemberPath;

        // setting series title based on valueMemberPath
        str = str.replace("Stack", "");
        str = str.replace("Online", "Online ");
        str = str.replace("Social", "Social Networking");
        e.args.series.title = str;

    }
}
