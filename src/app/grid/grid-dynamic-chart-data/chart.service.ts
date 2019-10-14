// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from "@angular/core";
import { IgxAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-area-series-component";
import { IgxBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-bar-series-component";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts/ES5/igx-category-y-axis-component";
import { IgxColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-column-series-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-line-series-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxRingSeriesComponent } from "igniteui-angular-charts/ES5/igx-ring-series-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-component";
import { IgxStacked100BarSeriesComponent} from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-component";
import {
    IgxStacked100ColumnSeriesComponent
} from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-component";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-component";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-area-series-component";
import { IgxStackedBarSeriesComponent} from "igniteui-angular-charts/ES5/igx-stacked-bar-series-component";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-column-series-component";
import { IgxStackedFragmentSeriesComponent } from 'igniteui-angular-charts/ES5/igx-stacked-fragment-series-component';
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-line-series-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { ChartInitializer, IChartOptions, IChartSeriesOptions, IgxDataChartInitializer, IChartComponentOptions, IgxBarDataChartInitializer, IgxScatterChartInitializer, IStackedFragmentOptions, IgxStackedDataChartInitializer, IgxStackedBarDataChartInitializer } from './initializers';
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
  public currentChartType;
  public labelMemberPath: string;
  private selectionData: IGridDataSelection[];
  private _chart;

  constructor(private factoryResolver: ComponentFactoryResolver) {
      this.dataChartSeries.set("columnGrouped", IgxColumnSeriesComponent);
      this.dataChartSeries.set("areaGrouped", IgxAreaSeriesComponent);
      this.dataChartSeries.set("lineGrouped", IgxLineSeriesComponent);
      this.dataChartSeries.set("barGrouped", IgxBarSeriesComponent);

      this.dataChartSeries.set("columnStacked", IgxStackedColumnSeriesComponent);
      this.dataChartSeries.set("areaStacked", IgxStackedAreaSeriesComponent);
      this.dataChartSeries.set("lineStacked", IgxStackedLineSeriesComponent);
      this.dataChartSeries.set("barStacked", IgxStackedBarSeriesComponent);

      this.dataChartSeries.set("column100Stacked", IgxStacked100ColumnSeriesComponent);
      this.dataChartSeries.set("area100Stacked", IgxStacked100AreaSeriesComponent);
      this.dataChartSeries.set("line100Stacked", IgxStacked100LineSeriesComponent);
      this.dataChartSeries.set("bar100Stacked", IgxStacked100BarSeriesComponent);

      this.scatterChartSeries.set("scatterPoint", IgxScatterSeriesComponent);
      this.scatterChartSeries.set("scatterBubble", IgxBubbleSeriesComponent);
      this.scatterChartSeries.set("scatterLine", IgxScatterLineSeriesComponent);
   }

  public chartFactory(chartType: string, data: IGridDataSelection[], viewContainerRef: ViewContainerRef, options: IChartComponentOptions, seriesMetaData?: {seriesType?: string, seriesModel: IChartSeriesOptions}) {
      this.selectionData = data;
      let componentFactory: ComponentFactory<any>;
      let componentRef: ComponentRef<any>;

      const itemLegendFactory = this.factoryResolver.resolveComponentFactory(IgxItemLegendComponent);
      const legendFactory = this.factoryResolver.resolveComponentFactory(IgxLegendComponent);

      viewContainerRef.clear();
      let itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
      let legendComponentRef = viewContainerRef.createComponent(legendFactory);

      switch (chartType) {
           case "doughnut":
                componentFactory =  this.factoryResolver.resolveComponentFactory(IgxDoughnutChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
                const doughnutChart = this.initDoughnutChart(componentRef.instance, itemLegendComponentRef.instance);
                this.chart = doughnutChart;
                break;
            case "pie":
                componentFactory =  this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
                const pieChart = this.initPieChart(componentRef.instance, itemLegendComponentRef.instance);
                this.chart = pieChart;
                break;
           case "column":
           case "area":
           case "line":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.xAxisOptions = {
                    label: this.selectionData[0].subjectArea
                };
                options.yAxisOptions = undefined;
                this.addDataChartDataOptions(options, false, seriesMetaData.seriesModel);
                if (seriesMetaData.seriesType.indexOf("Stacked") !== -1){
                    this.addDataChartDataOptions(options, true, seriesMetaData.seriesModel);
                    this.chart =   new IgxStackedDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesMetaData.seriesType}`)).initChart(componentRef.instance, options);
                } else {
                    this.addDataChartDataOptions(options, false, seriesMetaData.seriesModel);
                    this.chart = new IgxDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesMetaData.seriesType}`)).initChart(componentRef.instance, options);
                }
                break;
           case "bar":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.yAxisOptions = {
                    label: this.selectionData[0].subjectArea
                };
                options.xAxisOptions = null;
                if (seriesMetaData.seriesType.indexOf("Stacked") !== -1) {
                    this.addDataChartDataOptions(options, true, seriesMetaData.seriesModel);
                    this.chart = new IgxStackedBarDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesMetaData.seriesType}`)).initChart(componentRef.instance, options);
                } else {
                    this.addDataChartDataOptions(options, false, seriesMetaData.seriesModel);
                    this.chart = new IgxBarDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesMetaData.seriesType}`)).initChart(componentRef.instance, options);
                }
                break;
           case "scatter":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.chartOptions["legend"] = legendComponentRef.instance;
                this.addScatterChartDataOptions(options, seriesMetaData.seriesModel);
                this.chart = new IgxScatterChartInitializer(this.scatterChartSeries.get(`${chartType + seriesMetaData.seriesType}`)).initChart(componentRef.instance, options);                // this.chart = scatterChart;
                break;
        }
  }

  private chartInstance(initializer: ChartInitializer) {

  }

  public get chart() {
      return this._chart;
  }

  public set chart(chart) {
      this._chart = chart;
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
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
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
//   this.selectionData.forEach(record => {
//     // tslint:disable-next-line: max-line-length
//         dataValues.push({
//                 [this.labelMemberPath]: record.rowID[this.labelMemberPath],
//                 [valueMemberPath]: record.rowID[valueMemberPath],
//                 [yAxisValueMemberPath]: record.rowID[yAxisValueMemberPath],
//                 [radiusMemberPath]: record.rowID[radiusMemberPath]});
//         });
//   chartData.push({data: dataValues, valueMemberPath, yAxisValueMemberPath, radiusMemberPath});
// });

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

  private initPieChart(chart: IgxPieChartComponent, legend: IgxItemLegendComponent): IgxPieChartComponent {
      chart.width = "85%";
      chart.height = "400px";
      const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
      chart.legend = legend;
      chart.labelsPosition = 3;
      chart.sliceClick.subscribe((evt) => {evt.args.isExploded = !evt.args.isExploded; });
      chart.allowSliceExplosion = true;
    //   chart.dataSource = this.getSeriesData(valueMemberPaths)[0].data;
      chart.valueMemberPath  = valueMemberPaths[0];
      chart.legendLabelMemberPath = this.labelMemberPath;
      chart.othersCategoryThreshold = -1;
      return chart;
  }

  private initDoughnutChart(chart: IgxDoughnutChartComponent, legend: IgxItemLegendComponent): IgxDoughnutChartComponent {
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
        // const data = this.getSeriesData(valueMemberPaths);
        // data.forEach(dataArray => {
        //     const series = new IgxRingSeriesComponent();
        //     series.labelMemberPath = this.labelMemberPath;
        //     series.dataSource = dataArray.data;
        //     series.valueMemberPath = dataArray.valueMemberPath;
        //     series.showDefaultTooltip = true;
        //     series.formatLabel = (value) =>  "";
        //     chart.series.add(series);
        // });
        chart.width = "85%";
        chart.height = "400px";
        chart.series.toArray()[0].legend = legend;
        chart.series.toArray()[0].labelsPosition = 4;
        chart.series.toArray()[0].othersCategoryThreshold = -1;
        return chart;
  }

//   private initDataChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, seriesType: Type<any>): IgxDataChartComponent {
//     const seriesFactory = new SeriesFactory();
//     const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
//     legend.orientation = 0;
//     chart.dataSource = this.getDataChartData(valueMemberPaths);
//     this.getSeriesData(valueMemberPaths).forEach(dataArray => {
//         series.title = dataArray.valueMemberPath;
//         series.valueMemberPath = dataArray.valueMemberPath;
//     });
//     chart.legend = legend;
//     return chart;
//   }

//   private initStackedDataChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, seriesType: Type<any>): IgxDataChartComponent {
//     const xAxis = new IgxCategoryXAxisComponent();
//     const yAxis = new IgxNumericYAxisComponent();
//     xAxis.label = this.labelMemberPath;

//     const seriesFactory = new SeriesFactory();
//     const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
//     const stackSeries = seriesFactory.create(seriesType);
//     stackSeries.xAxis = xAxis;
//     stackSeries.yAxis = yAxis;
//     chart.legend = legend;
//     chart.dataSource = this.getDataChartData(valueMemberPaths);
//     chart.axes.add(xAxis);
//     chart.axes.add(yAxis);
//     chart.isVerticalZoomEnabled = true;
//     chart.isHorizontalZoomEnabled = true;
//     chart.width = "85%";
//     chart.height = "400px";
//     stackSeries.showDefaultTooltip = true;
//     stackSeries.isHighlightingEnabled = true;
//     this.getSeriesData(valueMemberPaths).forEach(dataArray => {
//           const frag = new IgxStackedFragmentSeriesComponent();
//           frag.valueMemberPath = dataArray.valueMemberPath;
//           frag.title = dataArray.valueMemberPath;
//           stackSeries.series.add(frag);
//       });

//     chart.series.add(stackSeries);
//     return chart;
//   }

//   private initScatterChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, seriesType: Type<any>): IgxDataChartComponent {
//     const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
//     chart.legend = legend;
//     this.getSeriesData(valueMemberPaths, "Price", "Open Price").forEach(dataArray => {
//         series.dataSource = dataArray.data;
//         series.title = "Price vs " + dataArray.valueMemberPath;
//         series.xMemberPath = dataArray.valueMemberPath;
//         series.labelMemberPath = this.labelMemberPath;
//         if (series instanceof IgxBubbleSeriesComponent) {
//             series.radiusMemberPath = dataArray.radiusMemberPath;
//             const sizeScale = new IgxSizeScaleComponent();
//             sizeScale.minimumValue = 10;
//             sizeScale.maximumValue = 60;
//             series.radiusScale = sizeScale;
//         }
//         chart.series.add(series);
//     });
//     return chart;
//   }

}
