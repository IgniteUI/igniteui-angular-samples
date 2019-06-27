import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent } from "igniteui-angular";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-2.component.scss"],
  templateUrl: "./calendar-sample-2.component.html"
})
export class CalendarSample2Component {
    @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;

    public formatOptions: any;
    public formatViews: any;
    public locale: string;
    public select: HTMLSelectElement;

    constructor() { }

    public ngOnInit() {
      this.select = document.getElementById("locations") as HTMLSelectElement;
      this.locale = this.select.value;
      this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
      this.formatViews = { day: true, month: true, year: true };
    }

    public changeLocale(event) {
        this.locale = this.select.value;
    }
}
