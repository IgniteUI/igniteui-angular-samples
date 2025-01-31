import { Component } from '@angular/core';
import { IgxCalendarComponent, IgxCalendarView, IgxDatePickerComponent, IgxLabelDirective, IgxButtonDirective } from 'igniteui-angular';
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
