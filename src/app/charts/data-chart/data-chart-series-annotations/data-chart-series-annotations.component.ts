import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

import { IgxCalloutLayerComponent} from "igniteui-angular-charts/ES5/igx-callout-layer-component";
import { IgxCrosshairLayerComponent} from "igniteui-angular-charts/ES5/igx-crosshair-layer-component";
import { IgxFinalValueLayerComponent} from "igniteui-angular-charts/ES5/igx-final-value-layer-component";
import { IgxSeriesComponent } from "igniteui-angular-charts/ES5/igx-series-component";

import { FinalValueSelectionMode } from "igniteui-angular-charts/ES5/FinalValueSelectionMode";

@Component({
    selector: "app-data-chart-series-annotations",
    styleUrls: ["./data-chart-series-annotations.component.scss"],
    templateUrl: "./data-chart-series-annotations.component.html"
})
export class DataChartSeriesAnnotationsComponent {

    public data: any[];

    @ViewChild("chart")
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis")
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    public calloutLayer: IgxCalloutLayerComponent;
    public crosshairLayer: IgxCrosshairLayerComponent;
    public finalValueLayer: IgxFinalValueLayerComponent;

    public calloutsVisible: boolean = false;
    public crosshairsVisible: boolean = false;
    public finalValuesVisible: boolean = false;

    constructor() {
        this.initData();

        this.calloutLayer = new IgxCalloutLayerComponent();
        this.calloutLayer.xMemberPath = "index";
        this.calloutLayer.yMemberPath = "value";
        this.calloutLayer.labelMemberPath = "info";

        this.crosshairLayer = new IgxCrosshairLayerComponent();
        this.crosshairLayer.brush = "#9FB328";
        this.crosshairLayer.outline = "Black";

        this.finalValueLayer = new IgxFinalValueLayerComponent();
        this.finalValueLayer.axisAnnotationInterpolatedValuePrecision = 0;
        this.finalValueLayer.axisAnnotationBackground = "#9FB328";
        this.finalValueLayer.axisAnnotationOutline = "#9FB328";
        this.finalValueLayer.axisAnnotationTextColor = "White";
        this.finalValueLayer.finalValueSelectionMode = FinalValueSelectionMode.FinalVisibleInterpolated;

    }

    public initData() {
        const year: number = new Date().getFullYear();
        this.data = [
            { temperature: 74, date: new Date(year, 0, 1), month: "JAN" },
            { temperature: 74, date: new Date(year, 1, 1), month: "FEB" },
            { temperature: 76, date: new Date(year, 2, 1), month: "MAR" },
            { temperature: 78, date: new Date(year, 3, 1), month: "APR" },
            { temperature: 83, date: new Date(year, 4, 1), month: "MAY" },
            { temperature: 87, date: new Date(year, 5, 1), month: "JUN" },
            { temperature: 94, date: new Date(year, 6, 1), month: "JUL" },
            { temperature: 97, date: new Date(year, 7, 1), month: "AUG" },
            { temperature: 93, date: new Date(year, 8, 1), month: "SEP" },
            { temperature: 86, date: new Date(year, 9, 1), month: "OCT" },
            { temperature: 81, date: new Date(year, 10, 1), month: "NOV" },
            { temperature: 79, date: new Date(year, 11, 1), month: "DEC" }
        ];

        let minVal: number = Number.MAX_VALUE;
        let maxVal: number = Number.MIN_VALUE;

        let minIndex: number = 0;
        let maxIndex: number = 0;
        let idx: number = 0;

        for (const item of this.data) {

            if (minVal > item.temperature) {
                minVal = item.temperature;
                minIndex = idx;
            }
            if (maxVal < item.temperature) {
                maxVal = item.temperature;
                maxIndex = idx;
            }

            item.index = idx;
            item.value = item.temperature;

            const month = item.date.getMonth();
            if (month >= 11 || month < 3) {
                item.info = "WINTER";
            } else if (month >= 3 && month < 5) {
                item.info = "SPRING";
            } else if (month >= 5 && month < 8) {
                item.info = "SUMMER";
            } else if (month >= 8 && month < 11) {
                item.info = "FALL";
            }
            idx++;
        }

        this.data[minIndex].info = "MIN";
        this.data[maxIndex].info = "MAX";
    }

    public onFinalValueChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleFinalValues(isChecked);
    }

    public onCalloutChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleCallouts(isChecked);
    }

    public onCrosshairChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleCrosshairs(isChecked);
    }

    public toggleCrosshairs(isChecked: boolean) {
        this.toggleSeries(this.crosshairLayer, isChecked);
    }

    public toggleFinalValues(isChecked: boolean) {
        this.toggleSeries(this.finalValueLayer, isChecked);
    }

    public toggleCallouts(isChecked: boolean) {
        this.toggleSeries(this.calloutLayer, isChecked);
    }

    public toggleSeries(series: IgxSeriesComponent, isChecked: boolean) {
        if (isChecked) {
            this.chart.series.add(series);
        } else {
            this.chart.series.remove(series);
        }
    }

    public formatDateLabel(item: any): string {
        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        return months[item.date.getMonth()];
    }
}
