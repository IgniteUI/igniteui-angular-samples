import { Component } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-mode-rangedatepicker',
    styleUrls: ['./daterangepicker-mode.scss'],
    templateUrl: './daterangepicker-mode.html',
    imports: [IgxDateRangePickerComponent]
})
export class DateRangePickerModeComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
