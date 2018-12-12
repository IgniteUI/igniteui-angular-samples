import { Component  } from "@angular/core";
import { InteractionMode } from "igniteui-angular";

@Component({
  selector: "app-timepicker-dropdown-sample",
  styleUrls: ["./timepicker-dropdown-sample.component.scss"],
  templateUrl: "./timepicker-dropdown-sample.component.html"
})
export class TimepickerDropdownSampleComponent {

  public mode: InteractionMode = InteractionMode.dropdown;
  public format: string = "hh:mm tt";
  public date: Date = new Date(2018, 10, 27, 17, 45, 0, 0);

  constructor() { }

}
