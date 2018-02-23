import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-datepicker-sample-2",
  styleUrls: ["./datepicker-sample-2.component.css"],
  templateUrl: "./datepicker-sample-2.component.html"
})
export class DatepickerSample2Component implements AfterViewInit {

  public date: Date = new Date(Date.now());

  constructor() { }

  public ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
