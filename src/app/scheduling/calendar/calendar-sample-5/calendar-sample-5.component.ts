import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent, IgxDialogComponent } from "igniteui-angular";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-5.component.scss"],
  templateUrl: "./calendar-sample-5.component.html"
})
export class CalendarSample5Component {
    @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild("alert", { static: true }) public dialog: IgxDialogComponent;

    constructor() { }

    public verifyRange(dates: Date[]) {
      if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
      }
    }
}
