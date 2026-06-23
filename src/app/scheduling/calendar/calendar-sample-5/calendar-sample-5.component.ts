import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-5.component.scss'],
    templateUrl: './calendar-sample-5.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCalendarComponent]
})
export class CalendarSample5Component { }
