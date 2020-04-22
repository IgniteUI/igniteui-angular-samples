import { Component } from "@angular/core";
import { InteractionMode } from "igniteui-angular";

@Component({
    selector: "app-timepicker-dropdown",
    styleUrls: ["./timepicker-dropdown.component.scss"],
    templateUrl: "./timepicker-dropdown.component.html"
})
export class TimepickerDropdownComponent {
    public mode: InteractionMode = InteractionMode.DropDown;
    public format: string = "hh:mm tt";
    public date: Date = new Date();
}
