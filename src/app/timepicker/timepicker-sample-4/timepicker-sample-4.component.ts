import { AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";
import { IgxTimePickerComponent, IgxToastComponent } from "igniteui-angular/main";

@Component({
  selector: "app-timepicker-sample-4",
  styleUrls: ["./timepicker-sample-4.component.scss"],
  templateUrl: "./timepicker-sample-4.component.html"
})
export class TimePickerSample4Component implements AfterViewInit {

  public min: string = "09:00";
  public max: string = "18:00";

  @ViewChild("toast")
  private toast: ElementRef;

  constructor() {}
  public show(toast) {
    toast.show();
  }

  public onValidationFailed(timepicker) {
      this.show(this.toast);
  }

  public ngAfterViewInit(): void {
    (document.getElementById("time-picker")
      .getElementsByClassName("igx-time-picker")[0] as HTMLElement)
      .click();
  }
}
