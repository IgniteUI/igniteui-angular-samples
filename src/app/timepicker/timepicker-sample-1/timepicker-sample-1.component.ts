import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular/main";

@Component({
  selector: "app-timepicker",
  styleUrls: ["./timepicker-sample-1.component.scss"],
  templateUrl: "./timepicker-sample-1.component.html"
})
export class TimePickerSample1Component implements AfterViewInit {
  constructor() { }

  public ngAfterViewInit(): void {
    (document.getElementsByClassName("igx-form-group__input")[0] as HTMLElement).click();
  }
}
