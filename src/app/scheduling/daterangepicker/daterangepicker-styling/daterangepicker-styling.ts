import { Component, ElementRef } from '@angular/core';
import { DateRange } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-styled-rangedatepicker',
    styleUrls: ['./daterangepicker-styling.scss'],
    templateUrl: './daterangepicker-styling.html'
})
export class StyledDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };

    constructor(public element: ElementRef) { }
}
