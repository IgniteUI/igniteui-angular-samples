import { Component } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent, IgxLabelDirective, IgxDateRangeStartComponent, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxDateRangeEndComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-daterangepicker-validation',
    styleUrls: ['./daterangepicker-validation.scss'],
    templateUrl: './daterangepicker-validation.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxLabelDirective, IgxDateRangeStartComponent, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxDateRangeEndComponent]
})
export class DateRangePickerValidationComponent {
    public rangeSingle: DateRange;
    public rangeSeparate: DateRange;
    public startDate: Date;
    public endDate: Date;
}
