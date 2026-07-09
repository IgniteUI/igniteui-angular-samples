import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IViewDateChangeEventArgs, IgxCalendarComponent, IgxCalendarView } from 'igniteui-angular/calendar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { DatePipe } from '@angular/common';

type CalendarEventType = 'selected' | 'viewDateChanged' | 'activeViewChanged';

interface CalendarEventLog {
    id: number;
    type: CalendarEventType;
    message: string;
    time: Date;
}

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-3.component.scss'],
    templateUrl: './calendar-sample-3.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCalendarComponent, IgxButtonDirective, DatePipe]
})
export class CalendarSample3Component {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;

    public events: CalendarEventLog[] = [];

    private nextId = 0;

    public onSelection(dates: Date | Date[]) {
        const selected = dates as Date[];
        const count = selected.length;
        this.log('selected', `${count} date${count === 1 ? '' : 's'} selected`);
    }

    public viewDateChanged(event: IViewDateChangeEventArgs) {
        this.log('viewDateChanged', `${this.parseDate(event.previousValue)} → ${this.parseDate(event.currentValue)}`);
    }

    public activeViewChanged(event: IgxCalendarView) {
        this.log('activeViewChanged', `Active view is: ${IgxCalendarView[event]}`);
    }

    public clearLog() {
        this.events = [];
    }

    private log(type: CalendarEventType, message: string) {
        this.events = [{ id: this.nextId++, type, message, time: new Date() }, ...this.events];
    }

    private parseDate(date: Date) {
        const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
        return `${monthFormatter.format(date)} ${date.getFullYear()}`;
    }
}
