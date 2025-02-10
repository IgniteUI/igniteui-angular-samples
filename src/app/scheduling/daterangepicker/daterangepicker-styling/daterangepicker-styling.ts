import { Component, ElementRef } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent, IgxDateRangeStartComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxDateRangeEndComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-styled-rangedatepicker',
    styleUrls: ['./daterangepicker-styling.scss'],
    templateUrl: './daterangepicker-styling.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxDateRangeStartComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxDateRangeEndComponent]
})
export class StyledDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };

    constructor(public element: ElementRef) { }
}
