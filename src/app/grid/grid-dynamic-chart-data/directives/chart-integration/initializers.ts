// tslint:disable: max-line-length
import { EventEmitter, Type } from "@angular/core";
import { IgxBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-bar-series-component";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts/ES5/igx-category-y-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxStacked100BarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-component";
import { IgxStackedBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-bar-series-component";
import { IgxStackedFragmentSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-fragment-series-component";

class SeriesFactory {
    public create<T>(type: (new () => T)): T {
        return new type();
    }
}

export interface IOptions {
    [key: string]: any;
}

export interface IChartComponentOptions {
     chartOptions?: IOptions;
     seriesOptions?: IOptions[];
     xAxisOptions?: IOptions;
     seriesModel?: IOptions;
     yAxisOptions?: IOptions;
     stackedFragmentOptions?: IOptions;
}

export abstract class ChartInitializer {
    protected yAxis;
    protected xAxis;
    protected seriesFactory = new SeriesFactory();
    constructor() { }

    public applyOptions(target: any, options: IOptions) {
        if (options) {
            Object.keys(options).forEach(key => {
                if (target[key] instanceof EventEmitter) {
                    target[key].subscribe(options[key]);
                } else {
                    target[key] = options[key];
                }
            });
        }
    }

    public abstract initChart(chart: any, options?: IChartComponentOptions): any;
}

export class IgxPieChartInitializer extends ChartInitializer {
    constructor() {
        super();
    }

    public initChart(chart: IgxPieChartComponent, options: IChartComponentOptions) {

        this.applyOptions(chart, options.chartOptions);
        return chart;
    }
}

export class IgxDataChartInitializer extends ChartInitializer {
    public seriesType: Type<any>;

    constructor(seriesType: Type<any>) {
        super();
        switch (seriesType) {
            case IgxBarSeriesComponent:
                this.xAxis =  new IgxNumericXAxisComponent();
                this.yAxis =  new IgxCategoryYAxisComponent();
                break;
            case IgxScatterSeriesComponent:
            case IgxBubbleSeriesComponent:
            case IgxScatterLineSeriesComponent:
                this.xAxis =  new IgxNumericXAxisComponent();
                this.yAxis =  new IgxNumericYAxisComponent();
                break;
            default:
                this.xAxis =  new IgxCategoryXAxisComponent();
                this.yAxis =  new IgxNumericYAxisComponent();
        }

        this.seriesType = seriesType;
    }

    public initChart(chart: IgxDataChartComponent, options: IChartComponentOptions): IgxDataChartComponent {
        options.seriesOptions.forEach((option) => {
            const series = this.seriesFactory.create(this.seriesType);
            series.xAxis = this.xAxis;
            series.yAxis = this.yAxis;
            this.applyOptions(series, option);
            chart.series.add(series);
        });
        this.applyOptions(chart, options.chartOptions);
        this.applyOptions(this.xAxis, options.xAxisOptions);
        this.applyOptions(this.yAxis, options.yAxisOptions);
        chart.axes.add(this.xAxis);
        chart.axes.add(this.yAxis);
        return chart;
    }
}

export class IgxStackedDataChartInitializer extends ChartInitializer {
    public seriesType: Type<any>;

    constructor(seriesType: Type<any>) {
        super();
        if (seriesType === IgxStackedBarSeriesComponent || seriesType === IgxStacked100BarSeriesComponent) {
            this.xAxis = new IgxNumericXAxisComponent();
            this.yAxis = new IgxCategoryYAxisComponent();
         } else {
            this.xAxis = new IgxCategoryXAxisComponent();
            this.yAxis = new IgxNumericYAxisComponent();
         }
        this.seriesType = seriesType;
    }
    public initChart(chart: IgxDataChartComponent, options?: IChartComponentOptions): IgxDataChartComponent {
        const series = this.seriesFactory.create(this.seriesType);
        series.xAxis = this.xAxis;
        series.yAxis = this.yAxis;
        options.stackedFragmentOptions.forEach(fragOpt => {
            const frag = new IgxStackedFragmentSeriesComponent();
            this.applyOptions(frag, fragOpt);
            series.series.add(frag);
        });
        this.applyOptions(series, options.seriesOptions);
        this.applyOptions(chart, options.chartOptions);
        this.applyOptions(this.xAxis, options.xAxisOptions);
        this.applyOptions(this.yAxis, options.yAxisOptions);
        chart.series.add(series);
        chart.axes.add(this.xAxis);
        chart.axes.add(this.yAxis);
        return chart;
    }
}
