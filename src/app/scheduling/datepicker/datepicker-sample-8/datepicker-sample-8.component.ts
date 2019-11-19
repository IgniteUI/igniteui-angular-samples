import { Component } from "@angular/core";
import { CalendarView, IgxDatePickerComponent } from "igniteui-angular";

@Component({
    selector: "app-datepicker-sample-8",
    styleUrls: ["./datepicker-sample-8.component.scss"],
    templateUrl: "./datepicker-sample-8.component.html"
})

export class DatepickerSample8Component {
    public date = new Date();
    public monthsView(datePicker: IgxDatePickerComponent) {
        datePicker.calendar.activeView = CalendarView.YEAR;
    }

    public yearsView(datePicker: IgxDatePickerComponent) {
        datePicker.calendar.activeView = CalendarView.DECADE;
    }
}
