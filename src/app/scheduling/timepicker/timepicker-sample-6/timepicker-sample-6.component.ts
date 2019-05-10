import { Component } from "@angular/core";

@Component({
  selector: "app-timepicker-sample-6",
  styleUrls: ["./timepicker-sample-6.component.scss"],
  templateUrl: "./timepicker-sample-6.component.html"
})
export class TimePickerSample6Component {

    public today: Date = new Date(Date.now());

    public onBlur(inputValue, timePickerValue) {
        const parts = inputValue.split(":");

        if (parts.length === 2) {
            timePickerValue.setHours(parts[0], parts[1]);
        }
    }
}
