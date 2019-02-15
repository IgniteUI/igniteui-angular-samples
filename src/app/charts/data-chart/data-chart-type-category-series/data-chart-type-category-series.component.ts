import { Component, OnInit } from "@angular/core";
import { IgxLegendComponent } from 'igniteui-angular-charts/ES5/igx-legend-component';
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxColumnComponent } from 'igniteui-angular';
import { IgxColumnSeriesModule } from 'igniteui-angular-charts/ES5/igx-column-series-module';
import { IgxColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-column-series-component";
import { IgxAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-area-series-component";
import { IgxBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-bar-series-component";
import { IgxLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-line-series-component";
import { IgxPointSeriesComponent } from "igniteui-angular-charts/ES5/igx-point-series-component";
import { IgxSplineSeriesComponent } from "igniteui-angular-charts/ES5/igx-spline-series-component";
import { IgxSplineAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-spline-area-series-component";
import { IgxStepAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-step-area-series-component";
import { IgxStepLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-step-line-series-component";
import { IgxWaterfallSeriesComponent } from "igniteui-angular-charts/ES5/igx-waterfall-series-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
// importing data datachart's modules:
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
@Component({
  selector: "app-data-chart-type-category-series",
  styleUrls: ["./data-chart-type-category-series.component.scss"],
  templateUrl: "./data-chart-type-category-series.component.html"
})
export class chartTypeCategorySeriesComponent implements OnInit {
  
  public seriesType: string;
  public legend: IgxLegendComponent;
  public datachart: IgxDataChartComponent;
  constructor() {  
        
   }
  
  public ngOnInit() {
    
  }
  public data = [
    {"Year": "1996", "USA": 148, "CHN": 110, "RUS": 95},
    {"Year": "2000", "USA": 142, "CHN": 115, "RUS": 91},
    {"Year": "2004", "USA": 134, "CHN": 121, "RUS": 86},
    {"Year": "2008", "USA": 131, "CHN": 129, "RUS": 65},
    {"Year": "2012", "USA": 135, "CHN": 115, "RUS": 77},
    {"Year": "2016", "USA": 146, "CHN": 112, "RUS": 88}
  ]

  public onSeriesTypeChanged(e: any) {
    const selectedSeries = e.target.value.toString();
    seriesType: selectedSeries;
    this.setSeries(selectedSeries);
}

public setSeries(seriesType: string)
{
    if (seriesType === "Column") {

        const series1 = new IgxColumnSeriesComponent();
        series1.name = "series1";
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";

        const series2 = new IgxColumnSeriesComponent();
        series2.name = "series2";
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "Line") {

        const series1 = new IgxLineSeriesComponent();
        series1.name = "series1";
        series1.markerType = MarkerType.Circle;
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;

        const series2 = new IgxLineSeriesComponent();
        series1.name = "series1";
        series2.markerType = MarkerType.Circle;
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";
        series2.thickness = 2;

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } 
    else if (seriesType === "Point") {

        const series1 = new IgxPointSeriesComponent();
        series1.name = "series1";
        series1.markerType = MarkerType.Circle;
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;

        const series2 = new IgxPointSeriesComponent();
        series1.name = "series2";
        series2.markerType = MarkerType.Circle;
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";
        series2.thickness = 2;

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "Area") {

        const series1 = new IgxAreaSeriesComponent();
        series1.name = "series1";
        series1.markerType = MarkerType.Circle;
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;


        const series2 = new IgxAreaSeriesComponent();
        series1.name = "series2";
        series2.markerType = MarkerType.Circle;
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";
        series2.thickness = 2;

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "Spline") {

        const series1 = new IgxSplineSeriesComponent();
        series1.name = "series1";
        series1.markerType = MarkerType.Circle;
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;


        const series2 = new IgxSplineSeriesComponent();
        series1.name = "series2";
        series2.markerType = MarkerType.Circle;
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "SplineArea") {

        const series1 = new IgxSplineAreaSeriesComponent();
        series1.name = "series1";
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;

        const series2 = new IgxSplineAreaSeriesComponent();
        series2.name = "series2"
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "StepArea") {

        const series1 = new IgxStepAreaSeriesComponent();
        series1.name = "series1";
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;


        const series2 = new IgxStepAreaSeriesComponent();
        series2.name = "series2"
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "StepLine") {

        const series1 = new IgxStepLineSeriesComponent();
        series1.name = "series1";
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;


        const series2 = new IgxStepLineSeriesComponent();
        series2.name = "series2"
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "Waterfall") {

        const series1 = new IgxWaterfallSeriesComponent();
        series1.name = "series1";
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;


        const series2 = new IgxWaterfallSeriesComponent();
        series2.name = "series2"
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    } else if (seriesType === "Bar") {

        const series1 = new IgxBarSeriesComponent();
        series1.name = "series1";
        series1.valueMemberPath = "USA";
        series1.title = "USA";
        series1.xAxis.name = "xAxis";
        series1.yAxis.name = "yAxis";
        series1.thickness = 2;


        const series2 = new IgxBarSeriesComponent();
        series2.name = "series2"
        series2.valueMemberPath = "RUS";
        series2.title = "Russia";
        series2.xAxis.name = "xAxis";
        series2.yAxis.name = "yAxis";

        this.datachart.series.clear();
        this.datachart.series.add(series1);
        this.datachart.series.add(series2);

    }
}

}
