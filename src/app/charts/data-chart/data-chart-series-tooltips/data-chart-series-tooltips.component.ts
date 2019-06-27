import { Component, ViewChild } from "@angular/core";

import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

import { IgxCategoryToolTipLayerComponent } from "igniteui-angular-charts/ES5/igx-category-tool-tip-layer-component";
import { IgxItemToolTipLayerComponent } from "igniteui-angular-charts/ES5/igx-item-tool-tip-layer-component";

@Component({
    selector: "app-data-chart-series-tooltips",
    styleUrls: ["./data-chart-series-tooltips.component.scss"],
    templateUrl: "./data-chart-series-tooltips.component.html"
})
export class DataChartSeriesTooltipsComponent {

    public data: any[];

    public showDefaultTooltip: boolean = true;
    public showItemTooltipLayer: boolean = false;
    public showCategoryTooltipLayer: boolean = false;

    public itemTooltipLayer: IgxItemToolTipLayerComponent;
    public categoryTooltipLayer: IgxCategoryToolTipLayerComponent;

    public set toolTipType(val: string) {
        const oldValue = this._toolTipType;
        this._toolTipType = val;
        if (oldValue !== val) {
            this.onTooltipTypeChanged();
        }
    }
    public get toolTipType(): string {
        return this._toolTipType;
    }

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    private _toolTipType: string = "Default";

    constructor() {
        this.initData();

        this.itemTooltipLayer = new IgxItemToolTipLayerComponent();
        this.categoryTooltipLayer = new IgxCategoryToolTipLayerComponent();
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

    public onTooltipTypeChanged() {
        switch (this.toolTipType) {
            case "Default": {
                this.chart.series.remove(this.itemTooltipLayer);
                this.chart.series.remove(this.categoryTooltipLayer);
                break;
            }
            case "Item": {
                this.chart.series.remove(this.categoryTooltipLayer);
                this.chart.series.add(this.itemTooltipLayer);
                break;
            }
            case "Category": {
                this.chart.series.remove(this.itemTooltipLayer);
                this.chart.series.add(this.categoryTooltipLayer);
                break;
            }
        }
    }
}
