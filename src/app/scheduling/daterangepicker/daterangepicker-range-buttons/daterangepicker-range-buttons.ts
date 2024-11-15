import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent, OverlaySettings } from 'igniteui-angular';

@Component({
    selector: 'app-rangdatepicker-range-buttons',
    styleUrls: ['./daterangepicker-range-buttons.scss'],
    templateUrl: './daterangepicker-range-buttons.html',
    standalone: false
})
export class DateRangePickerRangeButtonsComponent {
    @ViewChild('rangePicker')
    public dateRangePicker: IgxDateRangePickerComponent;

    public range: DateRange = {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 2))
    };

    public overlaySettings: OverlaySettings = {
        outlet: this.element,
        modal: true
    };

    constructor(private element: ElementRef) { }

    public selectDays(count: number) {
        const today: Date = new Date();
        this.range = {
            start: new Date(new Date().setDate(today.getDate() - count + 1)),
            end: today
        };
    }
}
