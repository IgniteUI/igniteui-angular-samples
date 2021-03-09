import { Component, ElementRef } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'styled-rangedatepicker',
    styleUrls: ['./daterangepicker-styling.scss'],
    templateUrl: './daterangepicker-styling.html'
})
export class StyledDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };

    constructor(public element: ElementRef) { }
}
