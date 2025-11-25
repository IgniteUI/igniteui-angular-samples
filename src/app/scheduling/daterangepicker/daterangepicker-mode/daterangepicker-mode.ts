import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular/core';
import { IgxDateRangePickerComponent } from 'igniteui-angular/date-picker';

@Component({
    selector: 'app-mode-rangedatepicker',
    styleUrls: ['./daterangepicker-mode.scss'],
    templateUrl: './daterangepicker-mode.html',
    imports: [IgxDateRangePickerComponent]
})
export class DateRangePickerModeComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
