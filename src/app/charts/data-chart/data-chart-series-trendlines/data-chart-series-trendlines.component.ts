import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

@Component({
  selector: "app-data-chart-series-trendlines",
  styleUrls: ["./data-chart-series-trendlines.component.scss"],
  templateUrl: "./data-chart-series-trendlines.component.html"
})
export class DataChartSeriesTrendlinesComponent {

    public data: any[];
    public trendlineType: string = "None";

    @ViewChild("xAxis")
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    constructor() {
      this.initData();
    }

    public initData() {
      let v = 10000;
      let o = 500;
      let h = o + (Math.random() * 20);
      let l = o - (Math.random() * 20);
      let c = l + (Math.random() * (h - l));

      const items = 100;
      const end = new Date(2020, 11, 1);
      let time = this.addDays(end, -items);

      this.data = [];

      for (let i = 0; i < items; i++) {
        const label = time.toDateString();
        // adding new data item
        this.data.push({ Date: time, Label: label, Close: c, Open: o, High: h, Low: l, Volume: v });
        // generating new values
        const mod = Math.random() - 0.4;
        o = o + (mod * 20 * 2);
        v = v + (mod * 20 * 100);
        h = o + (Math.random() * 20);
        l = o - (Math.random() * 20);
        c = l + (Math.random() * (h - l));
        time = this.addDays(time, 1);
      }
    }

    public addDays(date: Date, days: number): Date {
      return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
}
