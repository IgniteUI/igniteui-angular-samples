import { Component } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular";

@Component({
  selector: "app-timepicker-sample-6",
  styleUrls: ["./timepicker-sample-6.component.css"],
  templateUrl: "./timepicker-sample-6.component.html"
})
export class TimePickerSample6Component {

    public today: Date = new Date();

    public onBlur(inputValue: string, value: Date, picker: IgxTimePickerComponent) {
        const parts = inputValue.split(/[\s:]+/);

        const hour = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);

        if (picker.validHourEntries.indexOf(hour) !== -1 && picker.validMinuteEntries.indexOf(minutes) !== -1) {
            value.setHours(hour, minutes);
        } else {
            throw new Error("This is not a valid hour.");
        }
    }

    public selectNow(timePicker: IgxTimePickerComponent) {
        timePicker.value = this.today;
        timePicker.close();
    }
}
