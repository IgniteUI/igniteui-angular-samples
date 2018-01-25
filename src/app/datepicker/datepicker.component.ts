import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-datepicker",
  styleUrls: ["./datepicker.component.css"],
  templateUrl: "./datepicker.component.html"
})
export class DatepickerComponent implements OnInit {

  public date: Date = new Date(Date.now());

  private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long"});
  private monthFormatter = new Intl.DateTimeFormat("en", { month: "long"});

  constructor() { }

  public formatter = (_: Date) => {
      // tslint:disable-next-line:max-line-length
      return `You selected ${this.dayFormatter.format(_)}, ${_.getDate()} ${this.monthFormatter.format(_)}, ${_.getFullYear()}`;
  }

  public ngOnInit() {
  }

}
