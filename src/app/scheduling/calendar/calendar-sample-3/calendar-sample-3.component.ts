import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent, IgxCalendarView, IViewDateChangeEventArgs } from 'igniteui-angular';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-3.component.scss'],
    templateUrl: './calendar-sample-3.component.html',
    imports: [IgxCalendarComponent]
})
export class CalendarSample3Component {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
    public loggerHeader = `Interact with the calendar to see the events logged here in sequence:`;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    public onSelection(dates: Date | Date[]) {
      const logger: HTMLElement = this.document.querySelector('.logger');
      dates = dates as Date[];
      logger.innerHTML = `<span> => 'onSelectionChanged': ${dates.length} dates selected.<br>${logger.innerHTML}`;
    }

    public viewDateChanged(event: IViewDateChangeEventArgs) {
        const logger: HTMLElement = this.document.querySelector('.logger');
        // eslint-disable-next-line max-len
        const eventArgs = `event.previousValue: ${this.parseDate(event.previousValue)} | event.currentValue: ${this.parseDate(event.currentValue)}`;
        logger.innerHTML = `<span> => 'viewDateChanged': ${eventArgs}</span><br>${logger.innerHTML}`;
    }

    public activeViewChanged(event: IgxCalendarView) {
        const logger: HTMLElement = this.document.querySelector('.logger');
        logger.innerHTML = `<span> => 'activeViewChanged':. Active view is: ${IgxCalendarView[event]}</span><br>${logger.innerHTML}`;
    }

    private parseDate(date: Date) {
        const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
        return `${monthFormatter.format(date)} ${date.getFullYear()}`;
    }
}
