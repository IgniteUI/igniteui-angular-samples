import { Component } from '@angular/core';
import { IgxMonthPickerComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-monthpicker-styling',
    styleUrls: ['./monthpicker-styling.component.scss'],
    templateUrl: './monthpicker-styling.component.html',
    imports: [IgxMonthPickerComponent]
})
export class MonthpickerStylingComponent {
    public date = new Date();
}
