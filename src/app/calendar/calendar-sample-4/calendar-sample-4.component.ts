import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent } from "igniteui-angular/main";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-4.component.scss"],
  templateUrl: "./calendar-sample-4.component.html"
})

export class CalendarSample4Component {
    public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
    public supportIntl: boolean = this.intlDateTimeFormat.formatToParts;
    public MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    public WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    constructor() { }

    public parseYear(val: any) {
      const date = val.date as Date;
      return date.getFullYear();
    }

    public parseMonth(val: any) {
      const date = val.date as Date;
      return this.MONTH_NAMES[date.getMonth()];
    }

    public parseHeaderTemplate(val: any) {
      const date = val.date as Date;
      return this.MONTH_NAMES[date.getMonth()] + " " + date.getDate() + ", "
        + this.WEEKDAYS[date.getDay()];
    }


 }
