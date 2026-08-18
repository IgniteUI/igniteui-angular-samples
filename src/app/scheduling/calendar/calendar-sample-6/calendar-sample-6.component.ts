import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DateRangeDescriptor, DateRangeType } from 'igniteui-angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-6.component.scss'],
    templateUrl: './calendar-sample-6.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCalendarComponent, DatePipe]
})

export class CalendarSample6Component {
    public today = new Date(Date.now());

    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public disabledDates: DateRangeDescriptor[] = [
        { type: DateRangeType.Between, dateRange: this.range }
    ];
}
