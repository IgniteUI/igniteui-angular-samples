import { Component } from '@angular/core';
import { DateRange } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-basic-rangedatepicker',
    styleUrls: ['./daterangepicker-basic.scss'],
    templateUrl: './daterangepicker-basic.html'
})
export class BasicDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
