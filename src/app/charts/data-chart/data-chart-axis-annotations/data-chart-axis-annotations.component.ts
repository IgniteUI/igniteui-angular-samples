import { Component, OnInit, ViewChild } from "@angular/core";

import { IgxCrosshairLayerComponent } from "igniteui-angular-charts/ES5/igx-crosshair-layer-component";
import { IgxFinalValueLayerComponent } from "igniteui-angular-charts/ES5/igx-final-value-layer-component";
import { IgxSeriesComponent } from "igniteui-angular-charts/ES5/igx-series-component";
import { IgxValueOverlayComponent } from "igniteui-angular-charts/ES5/igx-value-overlay-component";

import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

@Component({
    selector: "app-data-chart-axis-annotations",
    styleUrls: ["./data-chart-axis-annotations.component.scss"],
    templateUrl: "./data-chart-axis-annotations.component.html"
})
export class DataChartAxisAnnotationsComponent implements OnInit {

    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    public crosshairLayer: IgxCrosshairLayerComponent;
    public finalValueLayer: IgxFinalValueLayerComponent;
    public valueOverlay: IgxValueOverlayComponent;

    constructor() {
        this.initData();

        this.valueOverlay = new IgxValueOverlayComponent();
        this.valueOverlay.thickness = 3;
        this.valueOverlay.value = 85;
        this.valueOverlay.brush = "Green";
        this.valueOverlay.isAxisAnnotationEnabled = true;

        this.crosshairLayer = new IgxCrosshairLayerComponent();
        this.crosshairLayer.isAxisAnnotationEnabled = true;

        this.finalValueLayer = new IgxFinalValueLayerComponent();
    }

    public ngOnInit() {
        this.valueOverlay.axis = this.yAxis;
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

    public onValueOverlayChange = (e: any) => {
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
        this.toggleSeries(this.valueOverlay, isChecked);
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
