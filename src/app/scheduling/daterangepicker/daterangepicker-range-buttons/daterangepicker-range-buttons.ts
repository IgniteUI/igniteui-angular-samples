import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent, OverlaySettings, IgxPickerActionsDirective, IgxButtonDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rangdatepicker-range-buttons',
    styleUrls: ['./daterangepicker-range-buttons.scss'],
    templateUrl: './daterangepicker-range-buttons.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxPickerActionsDirective, IgxButtonDirective]
})
export class DateRangePickerRangeButtonsComponent {
    private element = inject(ElementRef);

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

    public selectDays(count: number) {
        const today: Date = new Date();
        this.range = {
            start: new Date(new Date().setDate(today.getDate() - count + 1)),
            end: today
        };
    }
}
