// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxRingSeriesComponent } from "igniteui-angular-charts/ES5/igx-ring-series-component";
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

  public valueMemberPath: string;
  public labelMemberPath: string;
  private selectionData: IGridDataSelection[];

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public chartFactory(type: string, data: IGridDataSelection[], viewContainerRef: ViewContainerRef, legend: any, seriesType?: Type<any>) {
      this.selectionData = data;
      let componentFactory: ComponentFactory<any>;
      let componentRef: ComponentRef<any>;

      let xAxisFactory: ComponentFactory<IgxCategoryXAxisComponent>;
      let xAxisComponentRef: ComponentRef<any>;

      let yAxisFactory: ComponentFactory<IgxNumericYAxisComponent>;
      let yAxisComponentRef: ComponentRef<any>;
      switch (type) {
            case "doughnut":
           componentFactory =  this.factoryResolver.resolveComponentFactory(IgxDoughnutChartComponent);
           viewContainerRef.clear();
           componentRef = viewContainerRef.createComponent(componentFactory);
           this.initDoughnutChart(componentRef.instance, legend);
           break;
           case "datachart":
            xAxisFactory =  this.factoryResolver.resolveComponentFactory(IgxCategoryXAxisComponent);
            yAxisFactory =  this.factoryResolver.resolveComponentFactory(IgxNumericYAxisComponent);
            componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
            viewContainerRef.clear();
            xAxisComponentRef = viewContainerRef.createComponent(xAxisFactory);
            yAxisComponentRef = viewContainerRef.createComponent(yAxisFactory);
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.initColumnChart(componentRef.instance, legend, xAxisComponentRef.instance, yAxisComponentRef.instance, seriesType);
            break;
        }
  }

  private getDoughnutChartChartData(valueMemberPaths: string[]) {
      let dataValues;
      const chartData = [];
      this.labelMemberPath = this.selectionData[0].subjectArea;
      valueMemberPaths.forEach(valueMemberPath => {
          dataValues = [];
          this.selectionData.forEach(record => {
            // tslint:disable-next-line: max-line-length
            dataValues.push({[this.labelMemberPath]: record.rowID[this.labelMemberPath], [valueMemberPath]: record.rowID[valueMemberPath]});
        });
          chartData.push({data: dataValues, valueMemberPath});
      });
      return chartData;
  }

  private getDataChartData(valueMemberPaths: string[]) {
    const chartData = [];
    const dataValues = []
    this.labelMemberPath = this.selectionData[0].subjectArea;
    this.selectionData.forEach(record => {
        const temp = {};
        temp[this.labelMemberPath] = record.rowID[this.labelMemberPath]
        valueMemberPaths.forEach(valueMemberPath => {
           temp[valueMemberPath] = record.rowID[valueMemberPath];
      });
        chartData.push(temp);
    });
    return chartData;
  }

  private initDoughnutChart(chart: IgxDoughnutChartComponent, legend: any): IgxDoughnutChartComponent {
        const maxRadiusFactor = 1.0;
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
        const data = this.getDoughnutChartChartData(valueMemberPaths);
        data.forEach(dataArray => {
            const series = new IgxRingSeriesComponent();
            series.dataSource = dataArray.data;
            series.labelMemberPath = this.labelMemberPath;
            series.valueMemberPath = dataArray.valueMemberPath;
            series.formatLabel = (value) =>  "";
            chart.series.add(series);
        });
        chart.width = "500px";
        chart.height = "350px";
        chart.series.toArray()[0].legend = legend;
        chart.series.toArray()[0].labelsPosition = 4;
        chart.series.toArray()[0].othersCategoryThreshold = -10000;
        return chart;
  }

  private initColumnChart(chart: IgxDataChartComponent, legend: any, xAxis: IgxCategoryXAxisComponent, yAxis: IgxNumericYAxisComponent, seriesType: Type<any>) {
    const seriesFactory = new SeriesFactory();
    const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
    chart.axes.add(xAxis);
    chart.axes.add(yAxis);
    chart.width = "500px";
    chart.height = "400px";
    chart.legend = legend;
    chart.dataSource = this.getDataChartData(valueMemberPaths);
    xAxis.label = this.labelMemberPath;
    this.getDoughnutChartChartData(valueMemberPaths).forEach(dataArray => {
        const series = seriesFactory.create(seriesType);
        series.xAxis = xAxis;
        series.yAxis = yAxis;
        series.valueMemberPath = dataArray.valueMemberPath;
        chart.series.add(series);
    });
  }
}
