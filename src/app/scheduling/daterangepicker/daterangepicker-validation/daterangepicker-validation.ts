import { Component } from '@angular/core';
import { DateRange, IgxPickerClearComponent, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxDateRangeEndComponent, IgxDateRangePickerComponent, IgxDateRangeStartComponent } from 'igniteui-angular/date-picker';
import { IgxInputDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-daterangepicker-validation',
    styleUrls: ['./daterangepicker-validation.scss'],
    templateUrl: './daterangepicker-validation.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxLabelDirective, IgxDateRangeStartComponent, IgxPickerToggleComponent,
              IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxDateRangeEndComponent,
              IgxSuffixDirective, IgxPickerClearComponent]
})
export class DateRangePickerValidationComponent {
    public rangeSingle: DateRange;
    public rangeSeparate: DateRange;
    public startDate: Date;
    public endDate: Date;
}
