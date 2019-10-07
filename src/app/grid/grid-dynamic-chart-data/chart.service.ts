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
import { IgxRingSeriesComponent } from "igniteui-angular-charts/ES5/igx-ring-series-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";

import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IGridDataSelection } from "./grid-dynamic-chart-data.component";
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

  public valueMemberPath: string;
  public labelMemberPath: string;
  private selectionData: IGridDataSelection[];

  constructor(private factoryResolver: ComponentFactoryResolver) {
      this.dataChartSeries.set("Column", IgxColumnSeriesComponent);
      this.dataChartSeries.set("Area", IgxAreaSeriesComponent);
      this.dataChartSeries.set("Line", IgxLineSeriesComponent);

      this.scatterChartSeries.set("Point", IgxScatterSeriesComponent);
      this.scatterChartSeries.set("Bubble", IgxBubbleSeriesComponent);
      this.scatterChartSeries.set("Line", IgxScatterLineSeriesComponent);
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
      const itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
      const legendComponentRef = viewContainerRef.createComponent(legendFactory);

      switch (chartType) {
           case "doughnut":
            componentFactory =  this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.initDoughnutChart(componentRef.instance, itemLegendComponentRef.instance);
            break;
            case "pie":
            componentFactory =  this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.initPieChart(componentRef.instance, itemLegendComponentRef.instance);
            break;
           case "datachart":
            const catoryXAxisFactory = this.factoryResolver.resolveComponentFactory(IgxCategoryXAxisComponent);
            const catoryXAxisComponentRef = viewContainerRef.createComponent(catoryXAxisFactory);
            componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.initColumnChart(componentRef.instance, legendComponentRef.instance, catoryXAxisComponentRef.instance, yAxisComponentRef.instance, this.dataChartSeries.get(seriesType));
            break;
           case "scatter":
            const numericXAxisFactory = this.factoryResolver.resolveComponentFactory(IgxNumericXAxisComponent);
            const numericXAxisComponentRef = viewContainerRef.createComponent(numericXAxisFactory);
            componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.initScatterChart(componentRef.instance, legendComponentRef.instance, numericXAxisComponentRef.instance, yAxisComponentRef.instance, this.scatterChartSeries.get(seriesType));

        }
  }

  private getSeriesData(valueMemberPaths: string[], yAxisValueMemberPath?: string, radiusMemberPath?: string) {
      let dataValues;
      const chartData = [];
      this.labelMemberPath = this.selectionData[0].subjectArea;
      valueMemberPaths.forEach(valueMemberPath => {
          dataValues = [];
          this.selectionData.forEach(record => {
            // tslint:disable-next-line: max-line-length
            if (yAxisValueMemberPath && valueMemberPath !== yAxisValueMemberPath && radiusMemberPath && valueMemberPath !== radiusMemberPath) {
                dataValues.push({[this.labelMemberPath]: record.rowID[this.labelMemberPath], [valueMemberPath]: record.rowID[valueMemberPath], [yAxisValueMemberPath]: record.rowID[yAxisValueMemberPath], [radiusMemberPath]: record.rowID[radiusMemberPath]});
            } else {
                dataValues.push({[this.labelMemberPath]: record.rowID[this.labelMemberPath], [valueMemberPath]: record.rowID[valueMemberPath]});
            }
        });
          if (valueMemberPath && valueMemberPath !== yAxisValueMemberPath && radiusMemberPath && valueMemberPath !== radiusMemberPath) {
            chartData.push({data: dataValues, valueMemberPath, yAxisValueMemberPath, radiusMemberPath});
        } else {
            chartData.push({data: dataValues, valueMemberPath});
        }
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

  private initPieChart(chart: IgxPieChartComponent, legend: IgxItemLegendComponent) {
      debugger;
      chart.width = "600px";
      chart.height = "350px";
      chart.legendLabelMemberPath = this.labelMemberPath;
      const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
      chart.legend = legend;
      chart.formatLabel = (value) => "";
      chart.othersCategoryThreshold = -100000;
      chart.labelsPosition = 4;
      chart.sliceClick.subscribe((evt) => {evt.args.isExploded = !evt.args.isExploded; });
      chart.allowSliceExplosion = true;
      chart.dataSource = this.getSeriesData(valueMemberPaths)[0].data;
      chart.valueMemberPath  = valueMemberPaths[0];
      chart.labelMemberPath   = this.labelMemberPath;
  }
  private initDoughnutChart(chart: IgxDoughnutChartComponent, legend: IgxItemLegendComponent): IgxDoughnutChartComponent {
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
        const data = this.getSeriesData(valueMemberPaths);
        data.forEach(dataArray => {
            const series = new IgxRingSeriesComponent();
            series.dataSource = dataArray.data;
            series.labelMemberPath = this.labelMemberPath;
            series.valueMemberPath = dataArray.valueMemberPath;
            series.showDefaultTooltip = true;
            series.formatLabel = (value) =>  "";
            chart.series.add(series);
        });
        chart.width = "600px";
        chart.height = "350px";
        chart.series.toArray()[0].legend = legend;
        chart.series.toArray()[0].labelsPosition = 4;
        chart.series.toArray()[0].othersCategoryThreshold = -10000;
        return chart;
  }

  private initColumnChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, xAxis: IgxCategoryXAxisComponent, yAxis: IgxNumericYAxisComponent, seriesType: Type<any>) {
    const seriesFactory = new SeriesFactory();
    const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
    chart.axes.add(xAxis);
    chart.axes.add(yAxis);
    chart.width = "600px";
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
        series.thickness = 2;
        series.markerType = MarkerType.Tetragram;
        xAxis.label = this.labelMemberPath;
        series.yAxis = yAxis;
        series.showDefaultTooltip = true;
        series.valueMemberPath = dataArray.valueMemberPath;
        chart.series.add(series);
    });
    chart.legend = legend;

  }

  private initScatterChart(chart: IgxDataChartComponent, legend: IgxLegendComponent, xAxis: IgxNumericXAxisComponent, yAxis: IgxNumericYAxisComponent, seriesType: Type<any>) {
    const seriesFactory = new SeriesFactory();
    const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
    // xAxis.isLogarithmic = true;
    // yAxis.isLogarithmic = true;
    yAxis.formatLabel = (value) => `$${value.toFixed(2)}`;
    xAxis.formatLabel = (value) => `$${value.toFixed(2)}`;

    chart.axes.add(xAxis);
    chart.axes.add(yAxis);
    chart.width = "100%";
    chart.legend = legend;
    chart.isVerticalZoomEnabled = true;
    chart.isHorizontalZoomEnabled = true;
    chart.height = "600px";
    chart.width = "70%";
    this.getSeriesData(valueMemberPaths, "Price", "Open Price").forEach(dataArray => {
        const series = seriesFactory.create(seriesType);
        series.xAxis = xAxis;
        series.dataSource = dataArray.data;
        series.title = "Price vs " + dataArray.valueMemberPath;
        series.yMemberPath = dataArray.yAxisValueMemberPath;
        series.xMemberPath = dataArray.valueMemberPath;
        series.labelMemberPath = this.labelMemberPath;
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
  }

}
