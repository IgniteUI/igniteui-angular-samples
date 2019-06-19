import { Component } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular";

@Component({
    selector: "app-timepicker-sample-7",
    styleUrls: ["./timepicker-sample-7.component.scss"],
    templateUrl: "./timepicker-sample-7.component.html"
})
export class TimePickerSample7Component {
    public selectNow(timePicker: IgxTimePickerComponent) {
        timePicker.value = new Date(Date.now());
        timePicker.close();
    }
}
