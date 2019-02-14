import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

import {
    IgxCategoryHighlightLayerComponent
} from "igniteui-angular-charts/ES5/igx-category-highlight-layer-component";
import {
    IgxCategoryItemHighlightLayerComponent
} from "igniteui-angular-charts/ES5/igx-category-item-highlight-layer-component";

@Component({
    selector: "app-data-chart-series-highlighting",
    styleUrls: ["./data-chart-series-highlighting.component.scss"],
    templateUrl: "./data-chart-series-highlighting.component.html"
})
export class DataChartSeriesHighlightingComponent {

    public data: any[];

    public enableSeriesHighlight: boolean;
    public enableItemHighlight: boolean;
    public enableCategoryHighlight: boolean;

    public categoryHighlightLayer: IgxCategoryHighlightLayerComponent;
    public itemHighlightLayer: IgxCategoryItemHighlightLayerComponent;

    @ViewChild("xAxis")
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("chart")
    public chart: IgxDataChartComponent;

    constructor() {
        this.initData();
        this.enableSeriesHighlight = true;
        this.enableItemHighlight = false;
        this.enableCategoryHighlight = false;

        this.categoryHighlightLayer = new IgxCategoryHighlightLayerComponent();
        this.itemHighlightLayer = new IgxCategoryItemHighlightLayerComponent();
    }

    public initData() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }

    public enableItemHighlightChanged(e: any) {
        const checked: boolean = e.target.checked;

        if (checked) {
            this.chart.series.add(this.itemHighlightLayer);
        } else {
            this.chart.series.remove(this.itemHighlightLayer);
        }
    }

    public enableCategoryHighlightChanged(e: any) {

        const checked: boolean = e.target.checked;

        if (checked) {
            this.chart.series.add(this.categoryHighlightLayer);
        } else {
            this.chart.series.remove(this.categoryHighlightLayer);
        }
    }
}
