import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-calendar-tailwind-styling',
    styleUrls: ['./calendar-tailwind-styling-sample.component.scss'],
    templateUrl: './calendar-tailwind-styling-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCalendarComponent]
})
export class CalendarTailwindStylingSampleComponent { }
