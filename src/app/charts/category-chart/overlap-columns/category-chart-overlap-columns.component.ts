import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ViewChild
} from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-overlap-columns",
    styleUrls: ["./category-chart-overlap-columns.component.scss"],
    templateUrl: "./category-chart-overlap-columns.component.html"
})

export class CategoryChartOverlapColumnsComponent implements AfterViewInit {

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;
    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;
    public data: any;
    public includedProperties: any;

    constructor() {
        const stats: any = [
            { Music: 0.1, News: 0.2, TV: 1.1, Social: 0.9, Blogging: 0.3, Country: "Japan" },
            { Music: 0.2, News: 0.2, TV: 1.3, Social: 1.2, Blogging: 0.5, Country: "Germany" },
            { Music: 0.2, News: 0.2, TV: 1.5, Social: 1.1, Blogging: 0.4, Country: "France" },
            { Music: 0.3, News: 0.2, TV: 1.5, Social: 1.4, Blogging: 0.5, Country: "Ireland" },
            { Music: 0.4, News: 0.3, TV: 1.5, Social: 1.3, Blogging: 0.6, Country: "Australia" },
            { Music: 0.3, News: 0.3, TV: 1.4, Social: 1.5, Blogging: 1.3, Country: "Sweden" },
            { Music: 0.4, News: 0.2, TV: 1.4, Social: 1.4, Blogging: 1.4, Country: "Poland" },
            { Music: 0.5, News: 0.3, TV: 1.4, Social: 1.4, Blogging: 1.5, Country: "UK" },
            { Music: 0.4, News: 0.3, TV: 1.5, Social: 1.4, Blogging: 1.3, Country: "Canada" },
            { Music: 0.4, News: 0.4, TV: 1.5, Social: 1.6, Blogging: 1.5, Country: "Spain" },
            { Music: 0.5, News: 0.3, TV: 1.7, Social: 1.3, Blogging: 1.5, Country: "Germany" },
            { Music: 0.4, News: 0.4, TV: 2.2, Social: 1.4, Blogging: 1.6, Country: "Taiwan" },
            { Music: 0.5, News: 0.3, TV: 2.3, Social: 1.4, Blogging: 1.5, Country: "Russia" },
            { Music: 0.5, News: 0.3, TV: 2.4, Social: 1.6, Blogging: 1.3, Country: "China" },
            { Music: 0.6, News: 0.4, TV: 2.5, Social: 1.8, Blogging: 1.4, Country: "USA" },
            { Music: 0.5, News: 0.5, TV: 2.4, Social: 2.2, Blogging: 1.5, Country: "Italy" },
            { Music: 0.5, News: 0.6, TV: 2.5, Social: 2.3, Blogging: 1.4, Country: "India" },
            { Music: 0.6, News: 0.5, TV: 2.5, Social: 2.4, Blogging: 1.3, Country: "Argentina" },
            { Music: 0.6, News: 0.6, TV: 2.6, Social: 2.5, Blogging: 1.4, Country: "Mexico" },
            { Music: 0.7, News: 0.5, TV: 2.6, Social: 2.6, Blogging: 1.4, Country: "Turkey" },
            { Music: 0.8, News: 0.7, TV: 2.7, Social: 2.7, Blogging: 1.5, Country: "Indonesia" },
            { Music: 0.9, News: 0.7, TV: 2.7, Social: 2.8, Blogging: 1.6, Country: "Thailand" },
            { Music: 0.8, News: 0.8, TV: 2.8, Social: 2.9, Blogging: 1.7, Country: "Brazil" }
        ];

        // category chart does not have stacked series yet but you can render the stacked chart
        // using multiple columns that are overlapping with each other and showing stacked values
        for (const item of stats) {
            // stacking up values of data items
            item.StackBlogging = item.TV + item.Music + item.News + item.Social + item.Blogging;
            item.StackSocial = item.TV + item.Music + item.News + item.Social;
            item.StackNews = item.TV + item.Music + item.News;
            item.StackMusic = item.TV + item.Music;
            item.StackTV = item.TV;
            // rounding up stacked values
            item.StackBlogging = Math.round(item.StackBlogging * 10) / 10;
            item.StackSocial = Math.round(item.StackSocial * 10) / 10;
            item.StackNews = Math.round(item.StackNews * 10) / 10;
            item.StackTV = Math.round(item.StackTV * 10) / 10;
            item.StackMusic = Math.round(item.StackMusic * 10) / 10;
        }
        this.data = stats;
    }

    public ngAfterViewInit(): void {
        // binding only properties with "stack" prefix
        this.chart.includedProperties = [
            "StackBlogging", "StackSocial",
            "StackNews", "StackTV",
            "StackMusic", "Country"
        ];
        this.chart.yAxisFormatLabel = this.formatYAxisLabel;
        this.chart.legend = this.legend;
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
        str = str.replace("News", "Reading News");
        str = str.replace("TV", "Watching TV");
        str = str.replace("Music", "Listing Music");
        e.args.series.title = str;

    }
}
