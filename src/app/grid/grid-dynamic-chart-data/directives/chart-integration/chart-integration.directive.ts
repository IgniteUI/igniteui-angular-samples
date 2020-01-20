// tslint:disable: member-ordering
// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, Output, Type, ViewContainerRef } from "@angular/core";
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
import { CHART_TYPE } from "./chart-types";
import {
    ChartInitializer,
    IChartComponentOptions,
    IgxBarDataChartInitializer,
    IgxDataChartInitializer,
    IgxPieChartInitializer,
    IgxScatterChartInitializer,
    IgxStackedBarDataChartInitializer,
    IgxStackedDataChartInitializer,
    IOptions
} from "./initializers";

export interface IDeterminedChartTypesArgs {
    chartsAvailabilty: Map<CHART_TYPE, boolean>;
    chartsForCreation: CHART_TYPE[];
}

@Directive({
    selector: "[chartHost]"
})
export class ChartHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
@Directive({
    selector: "[chartIntegration]"
})
export class ChartIntegrationDirective {
    @Input()
    public get chartData() {
        return this._chartData;
    }

    public set chartData(selectedData: any[]) {
        const charts = new Set(this._dataChartTypes);
        const dataModel = selectedData[0];
        const args: IDeterminedChartTypesArgs = {
            chartsAvailabilty: new Map<CHART_TYPE, boolean>(),
            chartsForCreation: []
        };

        let labelMemberPaths: string[] = [];

        if (selectedData.length === 0) {
            this.onChartTypesDetermined.emit(args);
            return;
        } else if (selectedData.length === 1) {
            charts.forEach((chart, _, set) => {
                const isColumnChart = chart.indexOf("Column") !== -1;
                const isBarChart = chart.indexOf("Bar") !== -1;
                const isPieChart = chart.indexOf("Pie") !== -1;
                if (!(isColumnChart || isBarChart || isPieChart)) {
                    set.delete(chart);
                }
            });
        }

        this._chartData = selectedData.map((dataRecord, index) => this.addIndexMemberPath(dataRecord, index + 1));

        labelMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === "string");
        this._valueMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === "number");

        if (this._valueMemberPaths.length === 0) {
            this.onChartTypesDetermined.emit(args);
            return;
        }

        // Label member paths config
        if (this.defaultLabelMemberPath) {
            this._labelMemberPath = labelMemberPaths.indexOf(this.defaultLabelMemberPath) !== -1 ? this.defaultLabelMemberPath : this._indexMemberPath;
        } else if (labelMemberPaths.length !== 0) {
            this._labelMemberPath = labelMemberPaths[0];
        } else {
            this._labelMemberPath = this._indexMemberPath;
        }

        // Config pie chart
        const cannotCreatePieChart = selectedData.some(record => record[this._valueMemberPaths[0]] <= 0);

        if (cannotCreatePieChart) {
            charts.delete(CHART_TYPE.PIE);
        }

        // Config scatter chart member paths
        const canCreateScatterChart = this._valueMemberPaths.length >= 2;
        const canCreateBubbleChart = this._valueMemberPaths.length >= 3;

        if (canCreateScatterChart) {
           this.resolveScatterChartsYAxisValueMemberPath();
        } else {
            charts.delete(CHART_TYPE.SCATTER_BUBBLE);
            charts.delete(CHART_TYPE.SCATTER_LINE);
            charts.delete(CHART_TYPE.SCATTER_POINT);
        }

        if (canCreateBubbleChart) {
            this.resolveBubbleChartRadiusMemberpath();
        } else {
            charts.delete(CHART_TYPE.SCATTER_BUBBLE);
        }

        args.chartsAvailabilty = this.chartTypesAvailability;
        args.chartsForCreation = [...charts];
        this.onChartTypesDetermined.emit(args);

    }

    @Output()
    public onChartTypesDetermined = new EventEmitter<IDeterminedChartTypesArgs>();

    @Output()
    public onChartCreationDone = new EventEmitter<any>();

    @Input()
    public useLegend: boolean = true;

    @Input()
    public defaultLabelMemberPath: string = undefined;

    @Input()
    public set scatterChartYAxisValueMemberPath(path: string) {
        this._scatterChartYAxisValueMemberPath = path;
        this.getChartAvailabilityByType("Scatter").filter(chart => chart.available).forEach(scatterChart => {
            this.chartComponentOptions.get(scatterChart.type).seriesModel["yMemberPath"] = path;
        });
    }

    public get scatterChartYAxisValueMemberPath() {
        return this._scatterChartYAxisValueMemberPath;
    }

    @Input()
    public set bubbleChartRadiusMemberPath(path: string) {
        this._bubbleChartRadiusMemberPath = path;
        if (this.getChartAvailabilityByType("ScatterBubble").available) {
            this.chartComponentOptions.get("ScatterBubble").seriesModel["radiusMemberPath"] = path;
        }
    }

    public get bubbleChartRadiusMemberPath() {
        return this._bubbleChartRadiusMemberPath;
    }

    private chartComponentOptions = new Map<string, IChartComponentOptions>();
    private chartTypesAvailability = new Map<CHART_TYPE, boolean>();
    private dataCharts = new Map<string, Type<any>>();

    private _scatterChartYAxisValueMemberPath = undefined;
    private _bubbleChartRadiusMemberPath = undefined;
    private _indexMemberPath: string = "Index";
    private _labelMemberPath: string;
    private _chart;
    private _valueMemberPaths = [];
    private _chartData: any[];
    private _sizeScale = new IgxSizeScaleComponent();

    private _dataChartTypes = new Set<CHART_TYPE>();

    private pieChartOptions: IOptions = {
        width: "85%",
        height: "75%",
        labelsPosition: 3,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; }
    };

    private dataChartSeriesOptionsModel: IOptions = {
        isHighlightingEnabled: true,
        areaFillOpacity: .4,
        markerType: 3,
        showDefaultTooltip: true
    };

    private scatterChartSeriesOptionsModel: IOptions = {
        markerType: 3,
        showDefaultTooltip: true
    };

    private bubbleChartSeriesOptionsModel: IOptions = {
        radiusScale: this._sizeScale
    };

    private scatterChartXAxisOptions: IOptions = {
        formatLabel: (value) => "$" + value.toFixed(3)
    };

    private scatterChartYAxisOptions: IOptions = {
        formatLabel: (value) => "$" + value.toFixed(3)
    };

    private dataChartOptions: IOptions = {
        width: "100%",
        height: "85%",
        autoMarginWidth: 50,
        isVerticalZoomEnabled: true,
        isHorizontalZoomEnabled: true
    };

    constructor(private factoryResolver: ComponentFactoryResolver) {
        let iterable;
        this.dataCharts.set(CHART_TYPE.COLUMN_GROUPED, IgxColumnSeriesComponent);
        this.dataCharts.set(CHART_TYPE.AREA_GROUPED, IgxAreaSeriesComponent);
        this.dataCharts.set(CHART_TYPE.LINE_GROUPED, IgxLineSeriesComponent);
        this.dataCharts.set(CHART_TYPE.BAR_GROUPED, IgxBarSeriesComponent);

        this.dataCharts.set(CHART_TYPE.COLUMN_STACKED, IgxStackedColumnSeriesComponent);
        this.dataCharts.set(CHART_TYPE.AREA_STACKED, IgxStackedAreaSeriesComponent);
        this.dataCharts.set(CHART_TYPE.LINE_STACKED, IgxStackedLineSeriesComponent);
        this.dataCharts.set(CHART_TYPE.BAR_STACKED, IgxStackedBarSeriesComponent);

        this.dataCharts.set(CHART_TYPE.COLUMN_100_STACKED, IgxStacked100ColumnSeriesComponent);
        this.dataCharts.set(CHART_TYPE.AREA_100_STACKED, IgxStacked100AreaSeriesComponent);
        this.dataCharts.set(CHART_TYPE.LINE_100_STACKED, IgxStacked100LineSeriesComponent);
        this.dataCharts.set(CHART_TYPE.BAR_100_STACKED, IgxStacked100BarSeriesComponent);

        this.dataCharts.set(CHART_TYPE.SCATTER_POINT, IgxScatterSeriesComponent);
        this.dataCharts.set(CHART_TYPE.SCATTER_BUBBLE, IgxBubbleSeriesComponent);
        this.dataCharts.set(CHART_TYPE.SCATTER_LINE, IgxScatterLineSeriesComponent);

        this.dataCharts.set(CHART_TYPE.PIE, IgxPieChartComponent);

        iterable = this.dataCharts.keys();
        for (let head = iterable.next().value; head !== undefined; head = iterable.next().value) {
            this._dataChartTypes.add(head);
            this.chartComponentOptions.set(head, {} as IChartComponentOptions);
            this.chartTypesAvailability.set(head, true);
        }

        this.setChartOptions();
    }

    public getAvailableCharts() {
        const res = [];
        this.chartTypesAvailability.forEach((isAvailable, chartType) => {
            if (isAvailable) {
                res.push(chartType);
            }
        });
        return res;
    }

    public disableCharts(...types: CHART_TYPE[]) {
        types.forEach(type => {
            if (this.chartTypesAvailability.get(type)) {
                this.chartTypesAvailability.set(type, false);
            }
        });
    }

    public enableCharts(...types: CHART_TYPE[]) {
        types.forEach(type => {
            if (!this.chartTypesAvailability.get(type)) {
                 this.chartTypesAvailability.set(type, true);
            }
        });
    }

    public disableChart(type: CHART_TYPE) {
        if (this.chartTypesAvailability.get(type)) {
            this.chartTypesAvailability.set(type, false);
        }
    }

    public enableChart(type: CHART_TYPE) {
        if (!this.chartTypesAvailability.get(type)) {
            this.chartTypesAvailability.set(type, true);
        }
    }

    public chartFactory(type: CHART_TYPE, viewContainerRef: ViewContainerRef) {

        let componentFactory: ComponentFactory<any>;
        let componentRef: ComponentRef<any>;
        let initializer: ChartInitializer;

        const options = this.chartComponentOptions.get(type);
        const chartType = this.dataCharts.get(type);

        if (type === CHART_TYPE.PIE) {
            componentFactory = this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.addPieChartDataOptions(options);
            initializer = new IgxPieChartInitializer();
        } else {
            componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            switch (type) {
                case CHART_TYPE.COLUMN_GROUPED:
                case CHART_TYPE.AREA_GROUPED:
                case CHART_TYPE.LINE_GROUPED:
                    options.xAxisOptions = {
                        label: this._labelMemberPath
                    };
                    this.addDataChartDataOptions(options, false);
                    initializer = new IgxDataChartInitializer(chartType);
                    break;
                case CHART_TYPE.COLUMN_100_STACKED:
                case CHART_TYPE.COLUMN_STACKED:
                case CHART_TYPE.AREA_100_STACKED:
                case CHART_TYPE.AREA_STACKED:
                case CHART_TYPE.LINE_100_STACKED:
                case CHART_TYPE.LINE_STACKED:
                    options.xAxisOptions = {
                        label: this._labelMemberPath
                    };
                    this.addDataChartDataOptions(options, true);
                    initializer = new IgxStackedDataChartInitializer(chartType);
                    break;
                case CHART_TYPE.BAR_GROUPED:
                    options.yAxisOptions = {
                        label: this._labelMemberPath
                    };
                    this.addDataChartDataOptions(options, false);
                    initializer = new IgxBarDataChartInitializer(chartType);
                    break;
                case CHART_TYPE.BAR_STACKED:
                case CHART_TYPE.BAR_100_STACKED:
                    options.yAxisOptions = {
                        label: this._labelMemberPath
                    };
                    this.addDataChartDataOptions(options, true);
                    initializer = new IgxStackedBarDataChartInitializer(chartType);
                    break;
                case CHART_TYPE.SCATTER_BUBBLE:
                case CHART_TYPE.SCATTER_LINE:
                case CHART_TYPE.SCATTER_POINT:
                    this.addScatterChartDataOptions(options);
                    initializer = new IgxScatterChartInitializer(chartType);
                    break;
            }
        }
        if (this.useLegend) {
            const legendFactory: ComponentFactory<any> = type === CHART_TYPE.PIE ? this.factoryResolver.resolveComponentFactory(IgxItemLegendComponent) :
                                                                                   this.factoryResolver.resolveComponentFactory(IgxLegendComponent);
            const legendComponentRef: ComponentRef<any> = viewContainerRef.createComponent(legendFactory);
            options.chartOptions["legend"] = legendComponentRef.instance;
        }

        if (options) {
            this._chart = initializer.initChart(componentRef.instance, options);
        } else {
            this._chart = initializer.initChart(componentRef.instance);
        }

        this.onChartCreationDone.emit(this._chart);
    }

    private addPieChartDataOptions(options: IChartComponentOptions) {
        options.chartOptions["dataSource"] = this._chartData;
        options.chartOptions["valueMemberPath"] = this._valueMemberPaths[0];
        options.chartOptions["labelMemberPath"] = this._labelMemberPath;
    }

    private addDataChartDataOptions(chartComponentOptions: IChartComponentOptions, stacked: boolean) {
        const model = chartComponentOptions.seriesModel;
        chartComponentOptions.chartOptions["dataSource"] = this.chartData;
        const options: IOptions[] = [];
        const tempObj = new Object();

        this._valueMemberPaths.forEach(valueMemberPath => {
            tempObj["title"] = valueMemberPath;
            tempObj["valueMemberPath"] = valueMemberPath;
            if (stacked) {
                options.push({ ...tempObj });
            } else {
                options.push({ ...tempObj, ...model });
            }
        });

        stacked ? chartComponentOptions.stackedFragmentOptions = options :
                           chartComponentOptions.seriesOptions = options;
    }

    private addScatterChartDataOptions(options: IChartComponentOptions) {
        const model = options.seriesModel;
        if (model) {
            options.chartOptions["dataSource"] = this.chartData;
            const seriesOptions: IOptions[] = [];
            this._valueMemberPaths.filter(v => !(v === model["yMemberPath"] || v === model["radiusMemberPath"])).forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = `${model["yMemberPath"]} vs ${valueMemberPath}`;
                tempObj["xMemberPath"] = valueMemberPath;
                tempObj["labelMemberPath"] = this._labelMemberPath;
                seriesOptions.push({ ...tempObj, ...model });
            });
            options.seriesOptions = seriesOptions;
        }
    }

    private addIndexMemberPath(dataRecord, index) {
        dataRecord = { ...{ [this._indexMemberPath]: index }, ...dataRecord };
        return dataRecord;
    }

    private getChartAvailabilityByType(type: string) {
        const res = [];
        const arr = [...this._dataChartTypes].filter(charts => charts.indexOf(type) !== -1);
        arr.forEach(chart => res.push({ type: chart, available: this.chartTypesAvailability.get(chart) }));

        return res.length === 1 ? res[0] : res;
    }

    private resolveScatterChartsYAxisValueMemberPath() {
        const isYAxisMemberPathOmitted = !this.scatterChartYAxisValueMemberPath;
        const isYAxisMemberPathMissing = this._valueMemberPaths.indexOf(this.scatterChartYAxisValueMemberPath) === -1;
        if (isYAxisMemberPathOmitted || isYAxisMemberPathMissing) {
            this.chartComponentOptions.forEach((value, key, map) => {
                if (key.indexOf("Scatter") !== -1) {
                    map.get(key).seriesModel["yMemberPath"] = this._valueMemberPaths[0];
                }
            });
        } else {
            this.chartComponentOptions.forEach((value, key, map) => {
                if (key.indexOf("Scatter") !== -1) {
                    map.get(key).seriesModel["yMemberPath"] = this.scatterChartYAxisValueMemberPath;
                }
            });
        }
    }

    private resolveBubbleChartRadiusMemberpath() {
        const isRadiusMemberPathOmitted = !this.bubbleChartRadiusMemberPath;
        const isRadiusMemberPathMissing = this._valueMemberPaths.indexOf(this.bubbleChartRadiusMemberPath) === -1;
        if (isRadiusMemberPathOmitted || isRadiusMemberPathMissing) {
            this.chartComponentOptions.get("ScatterBubble").seriesModel["radiusMemberPath"] = this._valueMemberPaths[1];
        } else {
            this.chartComponentOptions.get("ScatterBubble").seriesModel["radiusMemberPath"] = this.bubbleChartRadiusMemberPath;
        }
    }

    private setChartOptions() {
        this.chartComponentOptions.forEach((option, chart) => {
            if (chart === "Pie") {
                option.chartOptions = { ...this.pieChartOptions };
            } else if (chart.indexOf("Scatter") !== -1) {
                option.chartOptions = { ...this.dataChartOptions };
                option.xAxisOptions = { ...this.scatterChartXAxisOptions };
                option.yAxisOptions = { ...this.scatterChartYAxisOptions };
            } else {
                option.chartOptions = { ...this.dataChartOptions };
                option.seriesModel = { ...this.dataChartSeriesOptionsModel };
            }
        });
        this._sizeScale.maximumValue = 60;
        this._sizeScale.minimumValue = 10;
        this.chartComponentOptions.get("ScatterBubble").seriesModel = { ...this.scatterChartSeriesOptionsModel, ...this.bubbleChartSeriesOptionsModel };
        this.chartComponentOptions.get("ScatterLine").seriesModel = { ...this.scatterChartSeriesOptionsModel };
        this.chartComponentOptions.get("ScatterPoint").seriesModel = { ...this.scatterChartSeriesOptionsModel };
    }
}
