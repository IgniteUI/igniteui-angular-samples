import { Component } from '@angular/core';
import { DateRange, IgxPickerClearComponent, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxDateRangeEndComponent, IgxDateRangePickerComponent, IgxDateRangeStartComponent } from 'igniteui-angular/date-picker';
import { IgxInputDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rangedatepicker-start-end',
    styleUrls: ['./daterangepicker-start-end.scss'],
    templateUrl: './daterangepicker-start-end.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxDateRangeStartComponent, IgxInputDirective, IgxDateTimeEditorDirective,
              IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxDateRangeEndComponent, IgxSuffixDirective,
              IgxPickerClearComponent]
})
export class DateRangePickerStartEndComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
