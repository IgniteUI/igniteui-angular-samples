import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts/ES5/igx-category-y-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-component";
import { IgxStacked100BarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-component";
import {
    IgxStacked100ColumnSeriesComponent
} from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-component";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-component";
import {
    IgxStacked100SplineSeriesComponent
} from "igniteui-angular-charts/ES5/igx-stacked-100-spline-series-component";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-area-series-component";
import { IgxStackedBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-bar-series-component";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-column-series-component";
import { IgxStackedFragmentSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-fragment-series-component";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-line-series-component";
import { IgxStackedSplineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-spline-series-component";

@Component({
    selector: "app-data-chart-type-stacked-series",
    styleUrls: ["./data-chart-type-stacked-series.component.scss"],
    templateUrl: "./data-chart-type-stacked-series.component.html"
})
export class DataChartTypeStackedSeriesComponent implements OnInit {

    public data: any[];

    public catXAxis: IgxCategoryXAxisComponent;
    public numYAxis: IgxNumericYAxisComponent;

    public catYAxis: IgxCategoryYAxisComponent;
    public numXAxis: IgxNumericXAxisComponent;

    @ViewChild("chart")
    public chart: IgxDataChartComponent;

    constructor() {
        this.catXAxis = new IgxCategoryXAxisComponent();
        this.catXAxis.label = "Country";

        this.catYAxis = new IgxCategoryYAxisComponent();
        this.catYAxis.label = "Country";

        this.numXAxis = new IgxNumericXAxisComponent();
        this.numYAxis = new IgxNumericYAxisComponent();

        this.initData();
    }

    public ngOnInit() {
        this.setSeries("Stacked Column Series");
    }

    public getFragments(): IgxStackedFragmentSeriesComponent[] {
        let fragments: IgxStackedFragmentSeriesComponent[] = [];

        const fragment1 = new IgxStackedFragmentSeriesComponent();
        fragment1.valueMemberPath = "Coal";
        fragment1.title = "Coal";

        const fragment2 = new IgxStackedFragmentSeriesComponent();
        fragment2.valueMemberPath = "Hydro";
        fragment2.title = "Hydro";

        const fragment3 = new IgxStackedFragmentSeriesComponent();
        fragment3.valueMemberPath = "Nuclear";
        fragment3.title = "Nuclear";

        const fragment4 = new IgxStackedFragmentSeriesComponent();
        fragment4.valueMemberPath = "Gas";
        fragment4.title = "Gas";

        const fragment5 = new IgxStackedFragmentSeriesComponent();
        fragment5.valueMemberPath = "Oil";
        fragment5.title = "Oil";

        fragments.push(fragment1);
        fragments.push(fragment2);
        fragments.push(fragment3);
        fragments.push(fragment4);
        fragments.push(fragment5);

        return fragments;
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.chart.series.clear();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {

        this.chart.axes.clear();
        this.chart.series.clear();

        const fragments = this.getFragments();

        if (seriesType === "Stacked Column Series") {
            const stack = new IgxStackedColumnSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Column Series") {
            const stack = new IgxStacked100ColumnSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);

        } else if (seriesType === "Stacked Area Series") {
            const stack = new IgxStackedAreaSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);

        } else if (seriesType === "Stacked 100 Area Series") {
            const stack = new IgxStacked100AreaSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        } else if (seriesType === "Stacked Line Series") {
            const stack = new IgxStackedLineSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        } else if (seriesType === "Stacked 100 Line Series") {
            const stack = new IgxStacked100LineSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        } else if (seriesType === "Stacked Spline Series") {
            const stack = new IgxStackedSplineSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        } else if (seriesType === "Stacked 100 Spline Series") {
            const stack = new IgxStacked100SplineSeriesComponent();

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        } else if (seriesType === "Stacked Bar Series") {
            const stack = new IgxStackedBarSeriesComponent();

            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;

            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        } else if (seriesType === "Stacked 100 Bar Series") {
            const stack = new IgxStacked100BarSeriesComponent();

            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;

            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
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
}
