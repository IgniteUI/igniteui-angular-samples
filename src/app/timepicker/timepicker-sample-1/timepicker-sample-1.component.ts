import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular/main";

@Component({
  selector: "app-timepicker-sample-1",
  styleUrls: ["./timepicker-sample-1.component.scss"],
  templateUrl: "./timepicker-sample-1.component.html"
})
export class TimePickerSample1Component implements AfterViewInit {
  constructor() { }

  public ngAfterViewInit(): void {
    (document.getElementById("time-picker")
      .getElementsByClassName("igx-time-picker")[0] as HTMLElement)
      .click();
  }
}
