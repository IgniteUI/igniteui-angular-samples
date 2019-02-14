import { Component, OnInit, ViewChild } from "@angular/core";
import { SampleRangeData } from '../SampleRangeData';
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxRangeColumnSeriesComponent } from 'igniteui-angular-charts/ES5/igx-range-column-series-component';
import { IgxRangeAreaSeriesComponent } from 'igniteui-angular-charts/ES5/igx-range-area-series-component'; 
import { IgxDataChartComponent } from 'igniteui-angular-charts/ES5/igx-data-chart-component';

@Component({
  selector: "app-data-chart-type-range-series",
  styleUrls: ["./data-chart-type-range-series.component.scss"],
  templateUrl: "./data-chart-type-range-series.component.html"
})
export class DataChartTypeRangeSeriesComponent implements OnInit {

    public data: any = SampleRangeData.create();
    public seriesType: string = "Column";
    
    @ViewChild("chart")  
    public chart: IgxDataChartComponent;
    
    @ViewChild("xAxis")
  public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

constructor() { } 

  public ngOnInit() {
    this.setSeries("Column");
}

public onSeriesTypeChanged(e: any) {
    const selectedSeries = e.value.toString();    
    this.setSeries(selectedSeries);
}

public setSeries(seriesType: string)
{
     if (seriesType === "Area") 
     {
      const series1 = new IgxRangeAreaSeriesComponent();
       series1.name="series1" ;    
        series1.highMemberPath = "High";
        series1.lowMemberPath  = "Low";
        series1.xAxis = this.xAxis;
        series1.yAxis = this.yAxis;
        series1.thickness = 0;
     this.chart.series.clear();
     this.chart.series.add(series1);

    } else if (seriesType === "Column") {

       const series1 = new IgxRangeColumnSeriesComponent();
        series1.name= "series1";
        series1.highMemberPath = "High";
        series1.lowMemberPath  = "Low";
        series1.xAxis = this.xAxis;
        series1.yAxis = this.yAxis;
        this.chart.series.clear();
        this.chart.series.add(series1);
    }
}
}