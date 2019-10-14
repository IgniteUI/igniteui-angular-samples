import { Type } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts/ES5/igx-category-y-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

    // tslint:disable: max-line-length
function  getSeriesData(valueMemberPaths: string[], data: any[],  yAxisValueMemberPath?: string, radiusMemberPath?: string) {
    let dataValues;
    const chartData = [];
    valueMemberPaths.filter(v => !(v === yAxisValueMemberPath || v === radiusMemberPath)).forEach(valueMemberPath => {
        dataValues = [];
        data.forEach(record => {
          // tslint:disable-next-line: max-line-length
              dataValues.push({
                      [this.labelMemberPath]: record.rowID[this.labelMemberPath],
                      [valueMemberPath]: record.rowID[valueMemberPath],
                      [yAxisValueMemberPath]: record.rowID[yAxisValueMemberPath],
                      [radiusMemberPath]: record.rowID[radiusMemberPath]});
              });
        chartData.push({data: dataValues, valueMemberPath, yAxisValueMemberPath, radiusMemberPath});
    });
    return chartData;
}
function applyXAxisOptions(xAxis: any, options: IXAxesSeriesOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            options[key] = xAxis[key];
        });
    }
}

function applyYAxisOptions(yAxis: any, options: IYAxesSeriesOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            options[key] = yAxis[key];
        });
    }
}

function applyChartOptions(chart: any, options: IChartOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            options[key] = chart[key];
        });
    }
}

function applySeriesOptions(series: any, options: IChartSeriesOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            options[key] = series[key];
        });
    }
}

class SeriesFactory {
    public create<T>(type: (new () => T)): T {
        return new type();
    }
}

export interface IChartOptions {
    [key: string]: any;
}

export interface IChartSeriesOptions {
    [key: string]: any;
}

export interface IXAxesSeriesOptions {
    [key: string]: any;
}

export interface IYAxesSeriesOptions {
    [key: string]: any;
}

export interface IChartComponentOptions {
    chartOptions?: IChartOptions;
    seriesOptions?: IChartSeriesOptions;
    xAxisOptions?: IXAxesSeriesOptions;
    yAxisOptions?: IYAxesSeriesOptions;
}

export abstract class ChartInitializer {
    protected yAxis;
    protected xAxis;
    protected seriesFactory = new SeriesFactory();
    constructor() {}
    public abstract initChart(chart: any, data: any[], options?: IChartComponentOptions): any;
}

export class IgxDataChartInitializer extends ChartInitializer {
    public seriesType: Type<any>;

    constructor(seriesType: Type<any>, xAxis?: IgxNumericXAxisComponent | IgxCategoryXAxisComponent, yAxis?: IgxCategoryYAxisComponent | IgxNumericYAxisComponent) {
        super();

        this.xAxis = xAxis ? xAxis : new IgxCategoryXAxisComponent();
        this.yAxis = yAxis ? yAxis : new IgxNumericYAxisComponent();
        this.seriesType = seriesType;
    }

    public initChart(chart: IgxDataChartComponent, data: any[], options?: IChartComponentOptions): IgxDataChartComponent {
        data.forEach(dataObject => {
            const series = this.seriesFactory.create(this.seriesType);
            series.xAxis = this.xAxis;
            series.yAxis = this.yAxis;
            applySeriesOptions(series, options.seriesOptions);
        });
        applyChartOptions(chart, options.chartOptions);
        applyXAxisOptions(this.xAxis, options.xAxisOptions);
        applyYAxisOptions(this.yAxis, options.yAxisOptions);
        chart.axes.add(this.xAxis);
        chart.axes.add(this.yAxis);
        return chart;
        }
}

export class IgxBarDataChartInitializer extends IgxDataChartInitializer {
    constructor(seriesType: Type<any>, xAxis = new IgxNumericXAxisComponent(), yAxis = new IgxCategoryYAxisComponent()) {
        super(seriesType, xAxis, yAxis);
    }
}

export class IgxScatterChartInitializer extends IgxDataChartInitializer {
    constructor(seriesType: Type<any>, xAxis = new IgxNumericXAxisComponent(), yAxis = new IgxNumericYAxisComponent()) {
        super(seriesType, xAxis, yAxis);
    }
}

export class IgxStackedDataChartInitializer extends IgxDataChartInitializer {

    public initChart(chart: IgxDataChartComponent, data: any[], options?: IChartComponentOptions): IgxDataChartComponent {
        const series = this.seriesFactory.create(this.seriesType);
        data.forEach(dataObject => {
            Object.keys(options.chartOptions).forEach(key => {
                chart[key] = options.chartOptions.chartOptions[key];
            });
        });

        chart.axes.add(this.xAxis);
        chart.axes.add(this.yAxis);
        return chart;
    }
}
