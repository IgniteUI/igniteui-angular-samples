import { Component, ElementRef, inject } from '@angular/core';
import { DateRange, IgxPickerClearComponent, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxDateRangeEndComponent, IgxDateRangePickerComponent, IgxDateRangeStartComponent } from 'igniteui-angular/date-picker';
import { IgxInputDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-styled-rangedatepicker',
    styleUrls: ['./daterangepicker-styling.scss'],
    templateUrl: './daterangepicker-styling.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxDateRangeStartComponent, IgxInputDirective, IgxDateTimeEditorDirective,
              IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxDateRangeEndComponent, IgxSuffixDirective, IgxPickerClearComponent]
})
export class StyledDateRangePickerComponent {
    element = inject(ElementRef);

    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
