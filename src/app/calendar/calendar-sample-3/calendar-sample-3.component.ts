import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent, IgxDialogComponent } from "igniteui-angular/main";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-3.component.css"],
  templateUrl: "./calendar-sample-3.component.html"
})
export class CalendarSample3Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    @ViewChild("alert") public dialog: IgxDialogComponent;

    public formatOptions: any;
    public formatViews: any;
    public select: HTMLSelectElement;
    public locale: string;

    constructor() { }

    public ngOnInit() {
      this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
      this.formatViews = { day: true, month: true, year: true };
      this.select = document.getElementById("locations") as HTMLSelectElement;
      this.locale = this.select.value;
    }

    public verifyRange(dates: Date[]) {
      if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
      }
    }
    public changeLocale(event) {
        this.locale = this.select.value;
    }
}
