import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { IgxDoughnutChartComponent} from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxRingSeriesComponent} from "igniteui-angular-charts/ES5/igx-ring-series-component";
import { GridDynamicChartDataComponent, IGridDataSelection } from "./grid-dynamic-chart-data.component";
@Injectable({
  providedIn: GridDynamicChartDataComponent
})
export class ChartService {

  public valueMemberPath: string;
  public labelMemberPath: string;
  private selectionData: IGridDataSelection[];
  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public chartFactory(type: string, data: IGridDataSelection[], viewContainerRef: ViewContainerRef, legend: any) {
      this.selectionData = data;
      let componentFactory: ComponentFactory<any>;
      let componentRef: ComponentRef<any>;
      let chart: any;
      switch (type) {
            case "doughnut":
           componentFactory =  this.factoryResolver.resolveComponentFactory(IgxDoughnutChartComponent);
           viewContainerRef.clear();
           componentRef = viewContainerRef.createComponent(componentFactory);
           this.initDoughnutChart(componentRef.instance, legend);
        }
  }

  private getChartData(valueMemberPaths: string[]) {
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

  private initDoughnutChart(chart: IgxDoughnutChartComponent, legend: any): IgxDoughnutChartComponent {
        const maxRadiusFactor = 1.0;
        const valueMemberPaths = Object.keys(this.selectionData[0].selectedData);
        const data = this.getChartData(valueMemberPaths);
        data.forEach(dataArray => {
            const series = new IgxRingSeriesComponent();
            series.dataSource = dataArray.data;
            series.labelMemberPath = this.labelMemberPath;
            series.valueMemberPath = dataArray.valueMemberPath;
            series.formatLabel = (value) => { return ""}
            chart.series.add(series);
        });
        chart.width = "500px";
        chart.height = "350px";
        chart.series.toArray()[0].legend = legend;
        return chart;
  }

}
