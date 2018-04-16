import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular/main";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-sample-3.component.scss"],
    templateUrl: "./timepicker-sample-3.component.html"
})
export class TimePickerSample3Component implements AfterViewInit {
    constructor() { }

    public ngAfterViewInit(): void {
        (document.getElementsByClassName("igx-input-group__input")[0] as HTMLElement).click();
    }
}
