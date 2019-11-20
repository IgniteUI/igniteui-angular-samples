import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-daterange-sample",
  styleUrls: ["./daterange-formatter-sample.component.scss"],
  templateUrl: "./daterange-formatter-sample.component.html"
})
export class DateRangeFormatterSampleComponent implements OnInit {
  private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
  private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

  constructor() { }

  public formatter = (date: Date) => {
    // tslint:disable-next-line:max-line-length
    return `${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
  }

  public ngOnInit(): void {}
}
