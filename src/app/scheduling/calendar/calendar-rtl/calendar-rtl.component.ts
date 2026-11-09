import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-calendar-rtl',
    styleUrls: ['./calendar-rtl.component.scss'],
    templateUrl: './calendar-rtl.component.html',
    imports: [IgxButtonDirective, IgxCalendarComponent]
})
export class CalendarRtlComponent {
    public direction: 'ltr' | 'rtl' = 'rtl';

    public toggleDirection(): void {
        this.direction = this.direction === 'rtl' ? 'ltr' : 'rtl';
    }
}
