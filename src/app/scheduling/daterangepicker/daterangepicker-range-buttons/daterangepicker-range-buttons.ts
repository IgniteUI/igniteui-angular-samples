import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent, OverlaySettings, IgxPickerActionsDirective, IgxButtonDirective, IChangeCheckboxEventArgs, CustomDateRange } from 'igniteui-angular';
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

    public today = new Date();

    public nextSeven = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDate() + 7
    );

    public customRanges: CustomDateRange[] = [
      {
        label: 'Next 7 days',
        dateRange: {
          start: this.today,
          end: this.nextSeven
        }
      }
    ];

    public overlaySettings: OverlaySettings = {
        outlet: this.element,
        modal: true
    };
}
