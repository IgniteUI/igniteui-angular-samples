// tslint:disable: member-ordering
// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Inject, Input, NgZone, Output, Type, ViewContainerRef } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { IgxAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-area-series-component";
import { IgxBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-bar-series-component";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-column-series-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-line-series-component";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-component";
import { IgxStacked100BarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-component";
import { IgxStacked100ColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-component";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-component";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-area-series-component";
import { IgxStackedBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-bar-series-component";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-column-series-component";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-line-series-component";
import { ChartComponentOptions,
         ChartInitializer,
         IChartOptions,
         IChartSeriesOptions,
         IgxBarDataChartInitializer,
         IgxDataChartInitializer,
         IgxPieChartInitializer,
         IgxScatterChartInitializer,
         IgxStackedBarDataChartInitializer,
         IgxStackedDataChartInitializer,
         IStackedFragmentOptions,
         IXAxesOptions,
         IYAxesOptions } from "./initializers";
export interface IChartArgs {
    chartType: string;
    seriesType: string;
}
@Directive({
    selector: "[chartIntegration]"
})
export class ChartIntegrationDirective {
    public get chartData() {
        return this._chartData;
    }

    public set chartData(selectedData: any[]) {
        const dataModel = selectedData[0];
        this.labelMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === "string");
        this.valueMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === "number");
        this.selectedRows = this.grid.filteredSortedData.slice(this.range.rowStart, this.range.rowEnd + 1);
        this._chartData = selectedData;
        if (this.labelMemberPaths.length !== 0) {
            this.labelMemberPath = this.labelMemberPaths[0];
        } else if (this.defaultLabelMemberPath !== "") {
            this.labelMemberPath = this.defaultLabelMemberPath;
            this._chartData = this._chartData.map((dataRecord, index) => this.addMemberPath(dataRecord, this.selectedRows[index], this.labelMemberPath));
        } else {
            this.labelMemberPath = undefined;
        }

        if (this.valueMemberPaths.indexOf(this._bubbleChartRadiusMemberPath) === -1) {
            this._chartData = this._chartData.map((dataRecord, index) => this.addMemberPath(dataRecord, this.selectedRows[index], this.bubbleChartRadiusMemberPath));
            }

        if (this.valueMemberPaths.indexOf(this.scatterChartYAxisValueMemberPath) === -1) {
            this._chartData = this._chartData.map((dataRecord, index) => this.addMemberPath(dataRecord, this.selectedRows[index], this.scatterChartYAxisValueMemberPath));
            }
    }

    public range;

    @Output()
    public onChartTypesDetermined = new EventEmitter<string[]>();

    @Input()
    public useLegend: boolean = true;

    @Input()
    public defaultLabelMemberPath: string = "";

    @Input()
    public set scatterChartYAxisValueMemberPath(path: string) {
        this._scatterChartYAxisValueMemberPath = path;
        this.chartComponentOptions.get("ScatterPoint").seriesModel["yMemberPath"] = path;
        this.chartComponentOptions.get("ScatterBubble").seriesModel["yMemberPath"] = path;
        this.chartComponentOptions.get("ScatterLine").seriesModel["yMemberPath"] = path;
    }

    public get scatterChartYAxisValueMemberPath() {
        return this._scatterChartYAxisValueMemberPath;
    }

    @Input()
    public set bubbleChartRadiusMemberPath(path: string) {
        this._bubbleChartRadiusMemberPath = path;
        this.chartComponentOptions.get("ScatterBubble").seriesModel["radiusMemberPath"] = path;

    }

    public get bubbleChartRadiusMemberPath() {
        return this._bubbleChartRadiusMemberPath;
    }

    public chartComponentOptions = new Map<string, ChartComponentOptions>();

    private _scatterChartYAxisValueMemberPath = "";
    private _bubbleChartRadiusMemberPath = "";
    private labelMemberPath: string;
    private selectedRows;
    private _chart;
    private dataCharts = new Map<string, Type<any>>();
    private labelMemberPaths = [];
    private valueMemberPaths = [];
    private _chartData: any[];
    private _dataChartTypes = [];
    private bubbleChartSizeScale = new IgxSizeScaleComponent();

    private pieChartOptions: IChartOptions = {
        width: "85%",
        height: "75%",
        labelsPosition: 3,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; }
    };

    private dataChartSeriesOptionsModel: IChartSeriesOptions = {
        isHighlightingEnabled: true,
        areaFillOpacity: .4,
        markerType: 3,
        showDefaultTooltip: true
    };

    private scatterChartSeriesOptionsModel: IChartSeriesOptions = {
        markerType: 3,
        showDefaultTooltip: true
    };

    private bubbleChartSeriesOptionsModel: IChartSeriesOptions = {
        radiusScale: this.bubbleChartSizeScale
    };

    private scatterChartXAxisOptions: IXAxesOptions = {
        formatLabel: (value) => "$" + value.toFixed(3)
    };

    private scatterChartYAxisOptions: IYAxesOptions = {
        formatLabel: (value) => "$" + value.toFixed(3)
    };

    private dataChartOptions: IChartOptions = {
        width: "100%",
        height: "85%",
        autoMarginWidth: 50,
        isVerticalZoomEnabled: true,
        isHorizontalZoomEnabled: true
    };

    constructor(@Inject(IgxGridComponent) private grid: IgxGridComponent, private factoryResolver: ComponentFactoryResolver, private zone: NgZone) {
        let iterable;
        this.dataCharts.set("Pie", IgxPieChartComponent);
        this.dataCharts.set("ColumnGrouped", IgxColumnSeriesComponent);
        this.dataCharts.set("AreaGrouped", IgxAreaSeriesComponent);
        this.dataCharts.set("LineGrouped", IgxLineSeriesComponent);
        this.dataCharts.set("BarGrouped", IgxBarSeriesComponent);

        this.dataCharts.set("ColumnStacked", IgxStackedColumnSeriesComponent);
        this.dataCharts.set("AreaStacked", IgxStackedAreaSeriesComponent);
        this.dataCharts.set("LineStacked", IgxStackedLineSeriesComponent);
        this.dataCharts.set("BarStacked", IgxStackedBarSeriesComponent);

        this.dataCharts.set("Column100Stacked", IgxStacked100ColumnSeriesComponent);
        this.dataCharts.set("Area100Stacked", IgxStacked100AreaSeriesComponent);
        this.dataCharts.set("Line100Stacked", IgxStacked100LineSeriesComponent);
        this.dataCharts.set("Bar100Stacked", IgxStacked100BarSeriesComponent);

        this.dataCharts.set("ScatterPoint", IgxScatterSeriesComponent);
        this.dataCharts.set("ScatterBubble", IgxBubbleSeriesComponent);
        this.dataCharts.set("ScatterLine", IgxScatterLineSeriesComponent);

        iterable = this.dataCharts.keys();
        for (let head = iterable.next().value; head !== undefined; head = iterable.next().value) {
            this._dataChartTypes.push(head);
        }

        [...this._dataChartTypes].forEach(type => {
            this.chartComponentOptions.set(type, new ChartComponentOptions());
        });
        this.bubbleChartSizeScale.maximumValue = 60;
        this.bubbleChartSizeScale.minimumValue = 10;

        this.setChartOptions();
    }

    public chartFactory(chartArgs: IChartArgs, viewContainerRef: ViewContainerRef) {

        const chartType = chartArgs.chartType;
        const seriesType = chartArgs.seriesType;

        let componentFactory: ComponentFactory<any>;
        let componentRef: ComponentRef<any>;

        let initializer: ChartInitializer;

        const options = this.chartComponentOptions.get(`${chartType + (seriesType || "")}`);
        const type = this.dataCharts.get(`${chartType + (seriesType || "")}`);

        if (!seriesType) {
            componentFactory = this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.addPieChartDataOptions(options);
            initializer = new IgxPieChartInitializer();
        } else {

            componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            switch (chartType) {
                case "Column":
                case "Area":
                case "Line":
                    options.xAxisOptions = {
                        label: this.labelMemberPath
                    };
                    if (seriesType.indexOf("Stacked") !== -1) {
                        this.addDataChartDataOptions(options, true);
                        initializer = new IgxStackedDataChartInitializer(type);
                    } else {
                        this.addDataChartDataOptions(options, false);
                        initializer = new IgxDataChartInitializer(type);
                    }
                    break;
                case "Bar":
                    options.yAxisOptions = {
                        label: this.labelMemberPath
                    };
                    if (seriesType.indexOf("Stacked") !== -1) {
                        this.addDataChartDataOptions(options, true);
                        initializer = new IgxStackedBarDataChartInitializer(type);
                    } else {
                        this.addDataChartDataOptions(options, false);
                        initializer = new IgxBarDataChartInitializer(type);
                    }
                    break;
                case "Scatter":
                    this.addScatterChartDataOptions(options);
                    initializer = new IgxScatterChartInitializer(type);
                    break;
            }
        }
        if (this.useLegend) {
            const legendFactory: ComponentFactory<any> = chartType === "Pie" ? this.factoryResolver.resolveComponentFactory(IgxItemLegendComponent) :
                this.factoryResolver.resolveComponentFactory(IgxLegendComponent);
            const legendComponentRef: ComponentRef<any> = viewContainerRef.createComponent(legendFactory);
            options.chartOptions["legend"] = legendComponentRef.instance;
        }
        this.chartInstance(initializer, componentRef.instance, options);

        return this._chart;
    }

    private chartInstance(initializer: ChartInitializer, chart: any, options?: ChartComponentOptions) {
        if (options) {
            this._chart = initializer.initChart(chart, options);
        } else {
            this._chart = initializer.initChart(chart);
        }
    }

    private addPieChartDataOptions(options: ChartComponentOptions) {
        options.chartOptions["dataSource"] = this.chartData;
        options.chartOptions["valueMemberPath"] = this.valueMemberPaths[0];
        if (!this.labelMemberPath) {
            options.chartOptions["labelMemberPath"] = this.valueMemberPaths[0];
        } else {
            options.chartOptions["labelMemberPath"] = this.labelMemberPath;
        }
    }

    private addDataChartDataOptions(options: ChartComponentOptions, stacked: boolean) {
        const model = options.seriesModel;
        options.chartOptions["dataSource"] = this.chartData;
        if (stacked) {
            const fragmentOptions: IStackedFragmentOptions[] = [];
            this.valueMemberPaths.forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = valueMemberPath;
                tempObj["valueMemberPath"] = valueMemberPath;
                fragmentOptions.push({ ...tempObj });
            });
            options.stackedFragmentOptions = fragmentOptions;
        } else if (model) {
            const seriesOptions: IChartSeriesOptions[] = [];
            this.valueMemberPaths.forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = valueMemberPath;
                tempObj["valueMemberPath"] = valueMemberPath;
                seriesOptions.push({ ...tempObj, ...model });
            });
            options.seriesOptions = seriesOptions;
        }
    }

    private addScatterChartDataOptions(options: ChartComponentOptions) {
        const model = options.seriesModel;
        if (model) {
            options.chartOptions["dataSource"] = this.chartData;
            const seriesOptions: IChartSeriesOptions[] = [];
            this.valueMemberPaths.filter(v => !(v === model["yMemberPath"] || v === model["radiusMemberPath"])).forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = `${model["yMemberPath"]} vs ${valueMemberPath}`;
                tempObj["xMemberPath"] = valueMemberPath;
                tempObj["labelMemberPath"] = this.labelMemberPath;
                seriesOptions.push({ ...tempObj, ...model });
            });
            options.seriesOptions = seriesOptions;
        }
    }

    private addMemberPath(dataRecord, selectedRow, path) {
        dataRecord = { ...{ [path]: selectedRow[path] }, ...dataRecord };
        return dataRecord;
    }

    private setChartOptions() {
        this.chartComponentOptions.forEach((option, chart) => {
            if (chart === "Pie") {
                option.chartOptions = {...this.pieChartOptions};
            } else if (chart.indexOf("Scatter") !== -1) {
                option.chartOptions = {...this.dataChartOptions};
                option.xAxisOptions = {...this.scatterChartXAxisOptions};
                option.yAxisOptions = {...this.scatterChartYAxisOptions};
            } else {
                option.chartOptions = {...this.dataChartOptions};
                option.seriesModel = {...this.dataChartSeriesOptionsModel};
            }
        });
        this.chartComponentOptions.get("ScatterBubble").seriesModel = {...this.scatterChartSeriesOptionsModel, ...this.bubbleChartSeriesOptionsModel};
        this.chartComponentOptions.get("ScatterLine").seriesModel = {...this.scatterChartSeriesOptionsModel};
        this.chartComponentOptions.get("ScatterPoint").seriesModel = {...this.scatterChartSeriesOptionsModel};
    }
}