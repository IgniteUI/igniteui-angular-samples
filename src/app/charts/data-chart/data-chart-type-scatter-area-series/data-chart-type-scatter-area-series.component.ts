import { Component, OnInit, ViewChild } from "@angular/core";
import { ColorScaleInterpolationMode } from "igniteui-angular-charts/ES5/ColorScaleInterpolationMode";
import { IgxCustomPaletteColorScaleComponent
} from "igniteui-angular-charts/ES5/igx-custom-palette-color-scale-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxScatterAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-area-series-component";

import { SampleScatterData } from "../SampleScatterData";

@Component({
  selector: "app-data-chart-type-scatter-area-series",
  styleUrls: ["./data-chart-type-scatter-area-series.component.scss"],
  templateUrl: "./data-chart-type-scatter-area-series.component.html"
})
export class DataChartTypeScatterAreaSeriesComponent implements OnInit {

    @ViewChild("chart", {static: true})
    public chart: IgxDataChartComponent;
    @ViewChild("series", {static: true})
    public series: IgxScatterAreaSeriesComponent;

    public data: any[];
    public colorScale: IgxCustomPaletteColorScaleComponent;
    public seriesScaleMode: string;
    public seriesScaleMin: number;
    public seriesScaleMax: number;

    constructor() {
        this.data = SampleScatterData.create();

        this.seriesScaleMax = 2;
        this.seriesScaleMin = -2;
        this.seriesScaleMode = "InterpolateHSV";
     }

    public ngOnInit() {

        this.colorScale = new IgxCustomPaletteColorScaleComponent();
        this.colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        this.colorScale.minimumValue = -2;
        this.colorScale.maximumValue = 2;
        this.colorScale.palette = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];

        this.series.colorScale = this.colorScale;
    }

    public seriesScaleMinChanged(e: any) {
        const num: number = e.target.value.toString();
        this.colorScale.minimumValue = num;
        this.seriesScaleMin = num;
    }
    public seriesScaleMaxChanged(e: any) {
        const num: number = e.target.value.toString();
        this.colorScale.maximumValue = num;
        this.seriesScaleMax = num;
    }
    public seriesScaleModeChanged(e: any) {
        const mode = e.target.value.toString();
        this.colorScale.interpolationMode = mode;
        this.seriesScaleMode = mode;
    }
}
