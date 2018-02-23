import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent, IgxDialogComponent } from "igniteui-angular/main";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-5.component.css"],
  templateUrl: "./calendar-sample-5.component.html"
})
export class CalendarSample5Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    @ViewChild("alert") public dialog: IgxDialogComponent;

    constructor() { }

    public verifyRange(dates: Date[]) {
      if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
      }
    }
}
