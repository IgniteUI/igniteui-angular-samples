import { Component } from '@angular/core';
import { IgxCalendarComponent, IgxCalendarView } from 'igniteui-angular/calendar';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datepicker-sample-8',
    styleUrls: ['./datepicker-sample-8.component.scss'],
    templateUrl: './datepicker-sample-8.component.html',
    imports: [IgxDatePickerComponent, FormsModule, IgxLabelDirective, IgxButtonDirective]
})

export class DatepickerSample8Component {
    public date = new Date();
    public monthsView(calendar: IgxCalendarComponent) {
        calendar.activeView = IgxCalendarView.Year;
    }

    public yearsView(calendar: IgxCalendarComponent) {
        calendar.activeView = IgxCalendarView.Decade;
    }
}
