import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-datepicker-sample-4",
  styleUrls: ["./datepicker-sample-4.component.css"],
  templateUrl: "./datepicker-sample-4.component.html"
})
export class DatepickerSample4Component implements AfterViewInit {

  public date: Date = new Date(Date.now());

  private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
  private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

  constructor() { }

  public formatter = (date: Date) => {
    // tslint:disable-next-line:max-line-length
    return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
  }

  public ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
