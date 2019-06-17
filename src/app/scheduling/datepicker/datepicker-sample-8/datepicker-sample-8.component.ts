import { Component } from "@angular/core";
import { IgxDatePickerComponent } from "igniteui-angular";

@Component({
    selector: "app-datepicker-sample-8",
    styleUrls: ["./datepicker-sample-8.component.scss"],
    templateUrl: "./datepicker-sample-8.component.html"
})

export class DatepickerSample8Component {
    public date = new Date();
    public monthsView(datePicker: IgxDatePickerComponent) {
        datePicker.calendar.activeViewYear();
    }

    public yearsView(datePicker: IgxDatePickerComponent) {
        datePicker.calendar.activeViewDecade();
    }
}
