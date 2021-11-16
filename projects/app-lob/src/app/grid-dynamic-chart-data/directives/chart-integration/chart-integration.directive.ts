import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive,
    EventEmitter, Input, Output, Type, ViewContainerRef } from '@angular/core';
import {
    IgxAreaSeriesComponent, IgxBarSeriesComponent, IgxBubbleSeriesComponent, IgxColumnSeriesComponent,
    IgxDataChartComponent, IgxItemLegendComponent, IgxLegendComponent, IgxLineSeriesComponent, IgxPieChartComponent,
    IgxScatterLineSeriesComponent, IgxScatterSeriesComponent, IgxSizeScaleComponent, IgxStacked100AreaSeriesComponent,
    IgxStacked100BarSeriesComponent, IgxStacked100ColumnSeriesComponent, IgxStacked100LineSeriesComponent,
    IgxStackedAreaSeriesComponent, IgxStackedBarSeriesComponent, IgxStackedColumnSeriesComponent,
    IgxStackedLineSeriesComponent
} from 'igniteui-angular-charts';
import { CHART_TYPE } from './chart-types';
import { ChartInitializer, IChartComponentOptions, IgxDataChartInitializer,
    IgxPieChartInitializer, IgxStackedDataChartInitializer, IOptions } from './initializers';

export interface IDeterminedChartTypesArgs {
    chartsAvailability: Map<CHART_TYPE, boolean>;
    chartsForCreation: CHART_TYPE[];
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[chartHost]'
})
export class ChartHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[chartIntegration]'
})
export class ChartIntegrationDirective {
    @Input()
    public get chartData() {
        return this._chartData;
    }

    public set chartData(selectedData: any[]) {
        const charts = new Set(this._dataChartTypes);
        const dataModel = selectedData.length ? selectedData[0] : {};
        this._labelMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === 'string');
        this._valueMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === 'number');
        this._chartData = selectedData.map((dataRecord, index) => this.addIndexMemberPath(dataRecord, index + 1));
        const args: IDeterminedChartTypesArgs = {
            chartsAvailability: new Map<CHART_TYPE, boolean>(),
            chartsForCreation: []
        };

        if (selectedData.length === 0 || this._valueMemberPaths.length === 0) {
            this.chartTypesDetermined.emit(args);
            return;
        }
        if (selectedData.length === 1) {
            charts.forEach((chart, _, set) => {
                const isColumnChart = chart.indexOf('Column') !== -1;
                const isBarChart = chart.indexOf('Bar') !== -1;
                const isPieChart = chart.indexOf('Pie') !== -1;
                if (!(isColumnChart || isBarChart || isPieChart)) {
                    set.delete(chart);
                }
            });
        }
        // Config pie chart
        const cannotCreatePieChart = selectedData.some(record => record[this._valueMemberPaths[0]] <= 0);
        if (cannotCreatePieChart) {
            charts.delete(CHART_TYPE.PIE);
        }
        // Config scatter chart member paths
        const canCreateScatterChart = this._valueMemberPaths.length >= 2;
        const canCreateBubbleChart = this._valueMemberPaths.length >= 3;
        if (!canCreateScatterChart) {
            charts.delete(CHART_TYPE.SCATTER_BUBBLE);
            charts.delete(CHART_TYPE.SCATTER_LINE);
            charts.delete(CHART_TYPE.SCATTER_POINT);
        }
        if (!canCreateBubbleChart) {
            charts.delete(CHART_TYPE.SCATTER_BUBBLE);
        }

        args.chartsAvailability = this.chartTypesAvailability;
        args.chartsForCreation = [...charts];
        this.chartTypesDetermined.emit(args);
    }

    @Output()
    public chartTypesDetermined = new EventEmitter<IDeterminedChartTypesArgs>();

    @Output()
    public chartCreationDone = new EventEmitter<any>();

    @Input()
    public useLegend = true;

    @Input()
    public defaultLabelMemberPath: string = undefined;

    @Input()
    public set scatterChartYAxisValueMemberPath(path: string) {
        this._scatterChartYAxisValueMemberPath = path;
    }

    public get scatterChartYAxisValueMemberPath() {
        return this._scatterChartYAxisValueMemberPath &&
            this._valueMemberPaths.indexOf(this._scatterChartYAxisValueMemberPath) !== -1 ?
            this._scatterChartYAxisValueMemberPath : this._valueMemberPaths[0];
    }

    @Input()
    public set bubbleChartRadiusMemberPath(path: string) {
        this._bubbleChartRadiusMemberPath = path;
    }

    public get bubbleChartRadiusMemberPath() {
        return this._bubbleChartRadiusMemberPath &&
            this._valueMemberPaths.indexOf(this._bubbleChartRadiusMemberPath) !== -1 ?
            this._bubbleChartRadiusMemberPath : this._valueMemberPaths[1];
    }

    private chartTypesAvailability = new Map<CHART_TYPE, boolean>();
    private dataCharts = new Map<string, Type<any>>();
    private _scatterChartYAxisValueMemberPath = undefined;
    private _bubbleChartRadiusMemberPath = undefined;
    private _valueMemberPaths = [];
    private _labelMemberPaths = [];
    private _chartData: any[];
    private _sizeScale = new IgxSizeScaleComponent();
    private _dataChartTypes = new Set<CHART_TYPE>();
    private get _labelMemberPath(): string {
        return this.defaultLabelMemberPath && this._chartData.some(r => r[this.defaultLabelMemberPath] !== undefined) ?
            this.defaultLabelMemberPath : this._labelMemberPaths.length > 0 ? this._labelMemberPaths[0] : 'Index';
    }

    private get pieChartOptions(): IOptions {
        return {
            width: '85%',
            height: '75%',
            labelsPosition: 3,
            allowSliceExplosion: true,
            dataSource: this.chartData,
            valueMemberPath: this._valueMemberPaths[0],
            labelMemberPath: this._labelMemberPath,
            sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; }
        };
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    private dataChartSeriesOptionsModel: IOptions = {
        isHighlightingEnabled: true,
        areaFillOpacity: .4,
        markerType: 3,
        showDefaultTooltip: true
    };

    // eslint-disable-next-line @typescript-eslint/member-ordering
    private scatterChartSeriesOptionsModel: IOptions = {
        markerType: 3,
        showDefaultTooltip: true
    };

    // eslint-disable-next-line @typescript-eslint/member-ordering
    private bubbleChartSeriesOptionsModel: IOptions = {
        radiusScale: this._sizeScale
    };

    private get dataChartOptions(): IOptions {
        return {
            width: '100%',
            height: '85%',
            autoMarginWidth: 50,
            isVerticalZoomEnabled: true,
            isHorizontalZoomEnabled: true,
            dataSource: this.chartData
        };
    }
    constructor(private factoryResolver: ComponentFactoryResolver) {
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
        const iterable = this.dataCharts.keys();
        for (let head = iterable.next().value; head !== undefined; head = iterable.next().value) {
            this._dataChartTypes.add(head);
            this.chartTypesAvailability.set(head, true);
        }
    }

    public getAllChartTypes() {
        return Array.from(this._dataChartTypes);
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

    public disableCharts(types: CHART_TYPE[]) {
        types.forEach(type => {
            if (this.chartTypesAvailability.get(type)) {
                this.chartTypesAvailability.set(type, false);
            }
        });
    }

    public enableCharts(types: CHART_TYPE[]) {
        types.forEach(type => {
            if (!this.chartTypesAvailability.get(type)) {
                this.chartTypesAvailability.set(type, true);
            }
        });
    }

    public chartFactory(type: CHART_TYPE, viewContainerRef?: ViewContainerRef, createdChart?: any) {
        if (!this.chartTypesAvailability.get(type)) {
            return;
        }
        const chartType = this.dataCharts.get(type);
        const options: IChartComponentOptions = this.getChartOptions(type);
        const initializer: ChartInitializer = this.getInitializer(type, chartType);
        let chart;
        if (viewContainerRef) {
            let componentFactory: ComponentFactory<any>;
            let componentRef: ComponentRef<any>;
            this._sizeScale.maximumValue = 60;
            this._sizeScale.minimumValue = 10;

            if (type === CHART_TYPE.PIE) {
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
            } else {
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
            }

            if (this.useLegend) {
                const legendType = type === CHART_TYPE.PIE ? IgxItemLegendComponent : IgxLegendComponent;
                const legendFactory = this.factoryResolver.resolveComponentFactory(legendType as any);
                const legendComponentRef: ComponentRef<any> = viewContainerRef.createComponent(legendFactory);
                options.chartOptions['legend'] = legendComponentRef.instance;
            }
            chart = initializer.initChart(componentRef.instance, options);
        } else if (createdChart) {
            chart = initializer.initChart(createdChart, options);
        }
        this.chartCreationDone.emit(chart);
        return chart;
    }

    private getInitializer(chartType: CHART_TYPE, componentClassRef): ChartInitializer {
        if (chartType.includes('Pie')) {
            return new IgxPieChartInitializer();
        } else if (chartType.includes('Stacked')) {
            return new IgxStackedDataChartInitializer(componentClassRef);
        } else {
            return new IgxDataChartInitializer(componentClassRef);
        }
    }

    private getChartOptions(type: CHART_TYPE): IChartComponentOptions {
        const chartOptions: IChartComponentOptions = {};
        return type === CHART_TYPE.PIE ? this.addPieChartDataOptions(chartOptions) :
            this.addDataChartDataOptions(type, chartOptions, type.includes('Stacked'));
    }

    private addPieChartDataOptions(chartOptions: IChartComponentOptions) {
        chartOptions.chartOptions = this.pieChartOptions;
        return chartOptions;
    }

    private addDataChartDataOptions(type: CHART_TYPE, chartOptions: IChartComponentOptions, stacked: boolean) {
        if (type.indexOf('Scatter') !== -1) {
            chartOptions.chartOptions = this.dataChartOptions;
            this.addScatterChartDataOptions(type, chartOptions);
        } else {
            chartOptions.chartOptions = this.dataChartOptions;
            chartOptions.seriesModel = this.dataChartSeriesOptionsModel;
            this.setAxisLabelOption(type, chartOptions);
            const options: IOptions[] = [];
            this._valueMemberPaths.forEach(valueMemberPath => {
                const dataOptions = {
                    title: valueMemberPath,
                    valueMemberPath
                };
                if (stacked) {
                    options.push({ ...dataOptions });
                } else {
                    options.push({ ...dataOptions, ...chartOptions.seriesModel });
                }
            });
            stacked ? chartOptions.stackedFragmentOptions = options : chartOptions.seriesOptions = options;
        }
        return chartOptions;
    }

    private addScatterChartDataOptions(scatterChart: CHART_TYPE, chartComponentOptions: IChartComponentOptions) {
        chartComponentOptions.seriesModel = this.scatterChartSeriesOptionsModel;
        chartComponentOptions.seriesModel['yMemberPath'] = this.scatterChartYAxisValueMemberPath;
        if (scatterChart === CHART_TYPE.SCATTER_BUBBLE) {
            chartComponentOptions.seriesModel = {
                ...this.scatterChartSeriesOptionsModel,
                ...this.bubbleChartSeriesOptionsModel
            };
            chartComponentOptions.seriesModel['radiusMemberPath'] = this.bubbleChartRadiusMemberPath;
        }
        const model = chartComponentOptions.seriesModel;
        const seriesOptions: IOptions[] = [];
        this._valueMemberPaths.filter(v => !(v === model['yMemberPath'] ||
            v === model['radiusMemberPath'])).forEach(valueMemberPath => {
                const dataOptions = {
                    title: `${model['yMemberPath']} vs ${valueMemberPath}`,
                    xMemberPath: valueMemberPath,
                    labelMemberPath: this._labelMemberPath
                };
                seriesOptions.push({ ...dataOptions, ...model });
            });
        chartComponentOptions.seriesOptions = seriesOptions;
    }

    private addIndexMemberPath(dataRecord, index) {
        dataRecord = { ...{ [this._labelMemberPath]: index }, ...dataRecord };
        return dataRecord;
    }

    private setAxisLabelOption(type: CHART_TYPE, options: IChartComponentOptions) {
        if (type.indexOf('Bar') !== -1) {
            options.yAxisOptions = {
                label: this._labelMemberPath
            };
        } else {
            options.xAxisOptions = {
                label: this._labelMemberPath
            };
        }
    }
}
