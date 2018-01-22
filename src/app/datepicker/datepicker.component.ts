import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {

  public date: Date = new Date(Date.now());

  private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long"});
  private monthFormatter = new Intl.DateTimeFormat("en", { month: "long"});

  public formatter = (_: Date) => {
      return `You selected ${this.dayFormatter.format(_)}, ${_.getDate()} ${this.monthFormatter.format(_)}, ${_.getFullYear()}`;
  }
  constructor() { }

  public ngOnInit() {
  }

}
