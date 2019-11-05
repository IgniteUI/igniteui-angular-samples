// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, NgZone, Type, ViewContainerRef } from "@angular/core";
import { IgxAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-area-series-component";
import { IgxBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-bar-series-component";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-column-series-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-line-series-component";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-component";
import { IgxStacked100BarSeriesComponent} from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-component";
import { IgxStacked100ColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-component";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-component";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-area-series-component";
import { IgxStackedBarSeriesComponent} from "igniteui-angular-charts/ES5/igx-stacked-bar-series-component";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-column-series-component";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-line-series-component";
import { Subject } from "rxjs";
import { ChartInitializer,
         IChartComponentOptions,
         IChartSeriesOptions,
         IgxBarDataChartInitializer,
         IgxDataChartInitializer,
         IgxPieChartInitializer,
         IgxScatterChartInitializer,
         IgxStackedBarDataChartInitializer,
         IgxStackedDataChartInitializer,
         IStackedFragmentOptions} from "./initializers";
export interface IGridDataSelection {
    selectedData: any[];
    subjectArea: string;
    rowID: any;
}
@Injectable({
  providedIn: "root"
})
export class ChartService {

  public dataChartSeries = new Map<string, Type<any>>();
  public scatterChartSeries = new Map<string, Type<any>>();
  public labelMemberPath: string;
  public chartData = new Subject<any>();

  private selectionData: IGridDataSelection[];
  private _chart;
  constructor(private factoryResolver: ComponentFactoryResolver, private zone: NgZone) {
      this.dataChartSeries.set("ColumnGrouped", IgxColumnSeriesComponent);
      this.dataChartSeries.set("AreaGrouped", IgxAreaSeriesComponent);
      this.dataChartSeries.set("LineGrouped", IgxLineSeriesComponent);
      this.dataChartSeries.set("BarGrouped", IgxBarSeriesComponent);

      this.dataChartSeries.set("ColumnStacked", IgxStackedColumnSeriesComponent);
      this.dataChartSeries.set("AreaStacked", IgxStackedAreaSeriesComponent);
      this.dataChartSeries.set("LineStacked", IgxStackedLineSeriesComponent);
      this.dataChartSeries.set("BarStacked", IgxStackedBarSeriesComponent);

      this.dataChartSeries.set("Column100Stacked", IgxStacked100ColumnSeriesComponent);
      this.dataChartSeries.set("Area100Stacked", IgxStacked100AreaSeriesComponent);
      this.dataChartSeries.set("Line100Stacked", IgxStacked100LineSeriesComponent);
      this.dataChartSeries.set("Bar100Stacked", IgxStacked100BarSeriesComponent);

      this.scatterChartSeries.set("ScatterPoint", IgxScatterSeriesComponent);
      this.scatterChartSeries.set("ScatterBubble", IgxBubbleSeriesComponent);
      this.scatterChartSeries.set("ScatterLine", IgxScatterLineSeriesComponent);
   }

  public chartFactory(chartType: string, data: IGridDataSelection[], viewContainerRef: ViewContainerRef, options: IChartComponentOptions, seriesInfo?: {seriesType?: string, seriesModel?: IChartSeriesOptions}) {

      this.selectionData = data;
      let componentFactory: ComponentFactory<any>;
      let componentRef: ComponentRef<any>;
      const itemLegendFactory = this.factoryResolver.resolveComponentFactory(IgxItemLegendComponent);
      const legendFactory = this.factoryResolver.resolveComponentFactory(IgxLegendComponent);

      let legendComponentRef;
      let initializer: ChartInitializer;
      switch (chartType) {
        //    case "doughnut":
        //         componentFactory =  this.factoryResolver.resolveComponentFactory(IgxDoughnutChartComponent);
        //         componentRef = viewContainerRef.createComponent(componentFactory);
        //         itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
        //         const doughnutChart = this.initDoughnutChart(componentRef.instance, itemLegendComponentRef.instance);
        //         this._chart = doughnutChart;
        //         break;
            case "Pie":
                componentFactory =  this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                const itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
                options.chartOptions["legend"] = itemLegendComponentRef.instance;
                this.addPieChartDataOptions(options);
                initializer = new IgxPieChartInitializer();
                break;
           case "Column":
           case "Area":
           case "Line":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                options.xAxisOptions = {
                    label: this.selectionData[0].subjectArea
                };
                options.yAxisOptions = undefined;
                this.addDataChartDataOptions(options, false, seriesInfo.seriesModel);
                if (seriesInfo.seriesType.indexOf("Stacked") !== -1) {
                    this.addDataChartDataOptions(options, true, seriesInfo.seriesModel);
                    initializer =   new IgxStackedDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                } else {
                    this.addDataChartDataOptions(options, false, seriesInfo.seriesModel);
                    initializer = new IgxDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                }
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.chartOptions["legend"] = legendComponentRef.instance;
                break;
           case "Bar":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.yAxisOptions = {
                    label: this.selectionData[0].subjectArea
                };
                options.xAxisOptions = null;
                if (seriesInfo.seriesType.indexOf("Stacked") !== -1) {
                    this.addDataChartDataOptions(options, true, seriesInfo.seriesModel);
                    initializer = new IgxStackedBarDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                } else {
                    this.addDataChartDataOptions(options, false, seriesInfo.seriesModel);
                    initializer = new IgxBarDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                }
                options.chartOptions["legend"] = legendComponentRef.instance;
                break;
           case "Scatter":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                this.addScatterChartDataOptions(options, seriesInfo.seriesModel);
                options.chartOptions["legend"] = legendComponentRef.instance;
                initializer = new IgxScatterChartInitializer(this.scatterChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                break;
        }
      this.chartInstance(initializer, componentRef.instance, options);

      return this._chart;
  }

  private chartInstance(initializer: ChartInitializer, chart: any, options?: IChartComponentOptions) {
    if (options) {
        this._chart = initializer.initChart(chart, options);
    } else {
        this._chart = initializer.initChart(chart);
    }
  }

  private addPieChartDataOptions(options: IChartComponentOptions) {
      const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
      options.chartOptions["dataSource"] = this.getChartData(valueMemberPaths);
      options.chartOptions["valueMemberPath"]  = valueMemberPaths[0];
      options.chartOptions["labelMemberPath"] = this.labelMemberPath;
  }

  private addDataChartDataOptions(options: IChartComponentOptions, stacked: boolean,  model?: IChartSeriesOptions) {
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
        options.chartOptions["dataSource"] = this.getChartData(valueMemberPaths);
        if (stacked) {
            const fragmentOptions: IStackedFragmentOptions[] = [];
            valueMemberPaths.forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = valueMemberPath;
                tempObj["valueMemberPath"] = valueMemberPath;
                fragmentOptions.push({...tempObj});
            });
            options.stackedFragmentOptions = fragmentOptions;
        } else if (model) {
            const seriesOptions: IChartSeriesOptions[] = [];
            valueMemberPaths.forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = valueMemberPath;
                tempObj["valueMemberPath"] = valueMemberPath;
                seriesOptions.push({...tempObj, ...model});
            });
            options.seriesOptions = seriesOptions;
        }
    }
  private addScatterChartDataOptions(options: IChartComponentOptions, model?: IChartSeriesOptions) {
        const dataSubjects = new Set(Object.keys(this.selectionData[0].selectedData));
        dataSubjects.add(model["yMemberPath"]);
        if (model["radiusScale"]) {
            dataSubjects.add(model["radiusMemberPath"]);
         }
        const valueMemberPaths =  [...dataSubjects];
        options.chartOptions["dataSource"] = this.getChartData(valueMemberPaths);
        if (model) {

            const seriesOptions: IChartSeriesOptions[] = [];
            valueMemberPaths.filter(v => !(v === model["yMemberPath"] || v === model["radiusMemberPath"])).forEach(valueMemberPath => {
                    const tempObj = new Object();
                    tempObj["title"] = `${model["yMemberPath"]} vs ${valueMemberPath}`;
                    tempObj["xMemberPath"] = valueMemberPath;
                    tempObj["labelMemberPath"] = this.labelMemberPath;
                    seriesOptions.push({...tempObj, ...model});
            });
            options.seriesOptions = seriesOptions;
        }
    }

  private getChartData(valueMemberPaths: string[]) {
    const chartData = [];
    this.labelMemberPath = this.selectionData[0].subjectArea;
    this.selectionData.forEach(record => {
            const temp = {};
            temp[this.labelMemberPath] = record.rowID[this.labelMemberPath];
            valueMemberPaths.forEach(valueMemberPath => {
               temp[valueMemberPath] = record.rowID[valueMemberPath];
          });
            chartData.push(temp);
        });

    return chartData;
  }

//   private initDoughnutChart(chart: IgxDoughnutChartComponent, legend: IgxItemLegendComponent): IgxDoughnutChartComponent {
//         const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
//         // const data = this.getSeriesData(valueMemberPaths);
//         // data.forEach(dataArray => {
//         //     const series = new IgxRingSeriesComponent();
//         //     series.labelMemberPath = this.labelMemberPath;
//         //     series.dataSource = dataArray.data;
//         //     series.valueMemberPath = dataArray.valueMemberPath;
//         //     series.showDefaultTooltip = true;
//         //     series.formatLabel = (value) =>  "";
//         //     chart.series.add(series);
//         // });
//         chart.width = "85%";
//         chart.height = "400px";
//         chart.series.toArray()[0].legend = legend;
//         chart.series.toArray()[0].labelsPosition = 4;
//         chart.series.toArray()[0].othersCategoryThreshold = -1;
//         return chart;
//   }
}
