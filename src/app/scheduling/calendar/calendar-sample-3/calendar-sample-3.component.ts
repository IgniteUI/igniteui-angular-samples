import { Component, ViewChild } from "@angular/core";
import { IgxCalendarComponent, IgxDialogComponent, CalendarView } from "igniteui-angular";
import { IViewDateChangeEventArgs } from "igniteui-angular/lib/calendar/calendar-base";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar-sample-3.component.scss"],
  templateUrl: "./calendar-sample-3.component.html"
})

export class CalendarSample3Component {
    @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild("alert", { static: true }) public dialog: IgxDialogComponent;

    public onSelection(dates: Date[]) {
      const logger: HTMLElement = document.querySelector(".logger");
      logger.innerHTML += `<span>'onSelectionChanged': ${dates.length} dates selected.<br>`;
    }

    public viewDateChanged(event: IViewDateChangeEventArgs) {
        const logger: HTMLElement = document.querySelector(".logger");
        const eventArgs = `event.prevousValue: ${this.parseDate(event.previousValue)} | event.currentValue: ${this.parseDate(event.currentValue)}`;
        logger.innerHTML += `<span>'viewDateChanged': ${eventArgs}</span><br>`;
    }

    public activeViewChanged(event: CalendarView) {
        const logger: HTMLElement = document.querySelector(".logger");
        logger.innerHTML += `<span>'activeViewChanged':. Active view is: ${CalendarView[event]}</span><br>`;
    }

    private parseDate(date: Date) {
        const monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });
        return `${monthFormatter.format(date)} ${date.getFullYear()}`;
    }
}
