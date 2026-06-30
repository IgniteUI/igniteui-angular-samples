import { Component, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-rtl-sample.component.scss'],
    templateUrl: './calendar-rtl-sample.component.html',
    imports: [IgxButtonDirective, IgxCalendarComponent]
})
export class CalendarRtlSampleComponent {
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public directionality = 'rtl';

    changeDirectionality(){
        this.directionality === 'rtl' ? this.directionality = 'ltr' : this.directionality = 'rtl';
    }
}
