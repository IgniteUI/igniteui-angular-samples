import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-styling-sample.component.scss'],
    templateUrl: './calendar-styling-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCalendarComponent]
})
export class CalendarStylingSampleComponent { }
