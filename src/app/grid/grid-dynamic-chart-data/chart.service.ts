// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from "@angular/core";
import { IgxAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-area-series-component";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
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
import {
    IgxStacked100ColumnSeriesComponent
} from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-component";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-component";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-area-series-component";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-column-series-component";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-line-series-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";

export interface IGridDataSelection {
    selectedData: any[];
    subjectArea: string;
    rowID: any;
}
class SeriesFactory {
    public create<T>(type: (new () => T)): T {
        return new type();
    }
}

@Injectable({
  providedIn: "root"
})
export class ChartService {

  public dataChartSeries = new Map<string, Type<any>>();
  public scatterChartSeries = new Map<string, Type<any>>();
  public currentChartType;
  public valueMemberPath: string;
  public labelMemberPath: string;
  private selectionData: IGridDataSelection[];
  private _chart;
  
  constructor(private factoryResolver: ComponentFactoryResolver) {
      this.dataChartSeries.set("columnGrouped", IgxColumnSeriesComponent);
      this.dataChartSeries.set("areaGrouped", IgxAreaSeriesComponent);
      this.dataChartSeries.set("lineGrouped", IgxLineSeriesComponent);

      this.dataChartSeries.set("columnStacked", IgxStackedColumnSeriesComponent);
      this.dataChartSeries.set("areaStacked", IgxStackedAreaSeriesComponent);
      this.dataChartSeries.set("lineStacked", IgxStackedLineSeriesComponent);

      this.dataChartSeries.set("column100Stacked", IgxStacked100ColumnSeriesComponent);
      this.dataChartSeries.set("area100Stacked", IgxStacked100AreaSeriesComponent);
      this.dataChartSeries.set("line100Stacked", IgxStacked100LineSeriesComponent);

      this.scatterChartSeries.set("scatterPoint", IgxScatterSeriesComponent);
      this.scatterChartSeries.set("scatterBubble", IgxBubbleSeriesComponent);
      this.scatterChartSeries.set("scatterLine", IgxScatterLineSeriesComponent);
   }

  public chartFactory(chartType: string, data: IGridDataSelection[], viewContainerRef: ViewContainerRef, seriesType?: string) {
      this.selectionData = data;
      let componentFactory: ComponentFactory<any>;
      let componentRef: ComponentRef<any>;

      const itemLegendFactory = this.factoryResolver.resolveComponentFactory(IgxItemLegendComponent);
      const legendFactory = this.factoryResolver.resolveComponentFactory(IgxLegendComponent);
      const yAxisFactory =  this.factoryResolver.resolveComponentFactory(IgxNumericYAxisComponent);

      viewContainerRef.clear();
      const yAxisComponentRef = viewContainerRef.createComponent(yAxisFactory);
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
                const categoryXAxisFactory = this.factoryResolver.resolveComponentFactory(IgxCategoryXAxisComponent);
                const catoryXAxisComponentRef = viewContainerRef.createComponent(categoryXAxisFactory);
                if (seriesType.indexOf("Stacked") !== -1) {
                    this.chart =  this.initDataChart(componentRef.instance, legendComponentRef.instance, catoryXAxisComponentRef.instance, yAxisComponentRef.instance, this.dataChartSeries.get(`${chartType + seriesType}`));
                } else {
                    this.chart =  this.initDataChart(componentRef.instance, legendComponentRef.instance, catoryXAxisComponentRef.instance, yAxisComponentRef.instance, this.dataChartSeries.get(`${chartType + seriesType}`));
                }
                break;
           case "scatter":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                const numericXAxisFactory = this.factoryResolver.resolveComponentFactory(IgxNumericXAxisComponent);
                const numericXAxisComponentRef = viewContainerRef.createComponent(numericXAxisFactory);
                const scatterChart = this.initScatterChart(componentRef.instance, legendComponentRef.instance, numericXAxisComponentRef.instance, yAxisComponentRef.instance, this.scatterChartSeries.get(`${chartType + seriesType}`));
                this.chart = scatterChart;
                break;
        }
  }

  public get chart() {
      return this._chart;
  }

  public set chart(chart) {
      this._chart = chart;
  }

  private getSeriesData(valueMemberPaths: string[], yAxisValueMemberPath?: string, radiusMemberPath?: string) {
      let dataValues;
      const chartData = [];
      this.labelMemberPath = this.selectionData[0].subjectArea;
      valueMemberPaths.filter(v => !(v === yAxisValueMemberPath || v === radiusMemberPath)).forEach(valueMemberPath => {
          dataValues = [];
          this.selectionData.forEach(record => {
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

  private getDataChartData(valueMemberPaths: string[]) {
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
      chart.dataSource = this.getSeriesData(valueMemberPaths)[0].data;
      chart.valueMemberPath  = valueMemberPaths[0];
      chart.legendLabelMemberPath = this.labelMemberPath;
      chart.othersCategoryThreshold = -1;
      return chart;
  }

  private initDoughnutChart(chart: IgxDoughnutChartComponent, legend: IgxItemLegendComponent): IgxDoughnutChartComponent {
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
        const data = this.getSeriesData(valueMemberPaths);
        data.forEach(dataArray => {
            const series = new IgxRingSeriesComponent();
            series.labelMemberPath = this.labelMemberPath;
            series.dataSource = dataArray.data;
            series.valueMemberPath = dataArray.valueMemberPath;
            series.showDefaultTooltip = true;
            series.formatLabel = (value) =>  "";
            chart.series.add(series);
        });
        chart.width = "85%";
        chart.height = "400px";
        chart.series.toArray()[0].legend = legend;
        chart.series.toArray()[0].labelsPosition = 4;
        chart.series.toArray()[0].othersCategoryThreshold = -1;
        return chart;
  }

  private initDataChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, xAxis: IgxCategoryXAxisComponent, yAxis: IgxNumericYAxisComponent, seriesType: Type<any>): IgxDataChartComponent {
    const seriesFactory = new SeriesFactory();
    const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
    chart.axes.add(xAxis);
    chart.axes.add(yAxis);
    chart.width = "85%";
    chart.height = "400px";
    chart.isVerticalZoomEnabled = true;
    chart.isHorizontalZoomEnabled = true;
    legend.orientation = 0;
    chart.dataSource = this.getDataChartData(valueMemberPaths);
    xAxis.label = this.labelMemberPath;
    this.getSeriesData(valueMemberPaths).forEach(dataArray => {
        const series = seriesFactory.create(seriesType);
        series.xAxis = xAxis;
        series.title = dataArray.valueMemberPath;
        series.isHighlightingEnabled = true;
        xAxis.label = this.labelMemberPath;
        series.yAxis = yAxis;
        series.areaFillOpacity = 0.4;
        series.markerType = MarkerType.Circle;
        series.showDefaultTooltip = true;
        series.valueMemberPath = dataArray.valueMemberPath;
        chart.series.add(series);
    });
    chart.legend = legend;
    return chart;
  }

  private initScatterChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, xAxis: IgxNumericXAxisComponent, yAxis: IgxNumericYAxisComponent, seriesType: Type<any>): IgxDataChartComponent {
    const seriesFactory = new SeriesFactory();
    const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
    yAxis.formatLabel = (value) => `$${value.toFixed(2)}`;
    xAxis.formatLabel = (value) => `$${value.toFixed(2)}`;
    chart.axes.add(xAxis);
    chart.axes.add(yAxis);
    chart.legend = legend;
    chart.isVerticalZoomEnabled = true;
    chart.isHorizontalZoomEnabled = true;
    chart.height = "400px";
    chart.width = "85%";
    this.getSeriesData(valueMemberPaths, "Price", "Open Price").forEach(dataArray => {
        const series = seriesFactory.create(seriesType);
        series.xAxis = xAxis;
        series.dataSource = dataArray.data;
        series.title = "Price vs " + dataArray.valueMemberPath;
        series.yMemberPath = dataArray.yAxisValueMemberPath;
        series.xMemberPath = dataArray.valueMemberPath;
        series.labelMemberPath = this.labelMemberPath;
        series.isHighlightingEnabled = true;
        series.markerType = MarkerType.Circle;
        series.yAxis = yAxis;
        series.showDefaultTooltip = true;
        if (series instanceof IgxBubbleSeriesComponent) {
            series.radiusMemberPath = dataArray.radiusMemberPath;
            const sizeScale = new IgxSizeScaleComponent();
            sizeScale.minimumValue = 10;
            sizeScale.maximumValue = 60;
            series.radiusScale = sizeScale;
        }
        chart.series.add(series);
    });
    return chart;
  }

}
