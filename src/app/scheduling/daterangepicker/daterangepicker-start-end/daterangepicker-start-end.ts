import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'rangedatepicker-start-end',
    styleUrls: ['./daterangepicker-start-end.scss'],
    templateUrl: './daterangepicker-start-end.html'
})
export class DateRangePickerStartEndComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
