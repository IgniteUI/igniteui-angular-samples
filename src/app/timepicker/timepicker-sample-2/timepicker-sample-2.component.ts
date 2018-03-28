import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular/main";

@Component({
  selector: "app-timepicker",
  styleUrls: ["./timepicker-sample-2.component.scss"],
  templateUrl: "./timepicker-sample-2.component.html"
})
export class TimePickerSample2Component implements AfterViewInit {

  public date: Date = new Date(Date.now());

  constructor() { }

  public ngAfterViewInit(): void {
    (document.getElementsByClassName("igx-form-group__input")[0] as HTMLElement).click();
  }
}
