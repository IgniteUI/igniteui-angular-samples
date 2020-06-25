import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent, IgxDialogComponent } from "igniteui-angular";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-3.component.scss"],
  templateUrl: "./calendar-sample-3.component.html"
})

export class CalendarSample3Component {
    @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild("alert", { static: true }) public dialog: IgxDialogComponent;

    public verifyRange(dates: Date[]) {
      if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
      }
    }
}
