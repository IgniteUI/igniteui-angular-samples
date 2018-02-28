import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxDatePickerComponent } from "igniteui-angular/main";

@Component({
  selector: "app-datepicker-sample-1",
  styleUrls: ["./datepicker-sample-1.component.scss"],
  templateUrl: "./datepicker-sample-1.component.html"
})
export class DatepickerSample1Component implements AfterViewInit {
  constructor() { }

  public ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
