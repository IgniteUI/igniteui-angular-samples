import { Component } from '@angular/core';
import { IgxMonthPickerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-monthpicker-tailwind-styling',
    styleUrls: ['./monthpicker-tailwind-styling.component.scss'],
    templateUrl: './monthpicker-tailwind-styling.component.html',
    imports: [IgxMonthPickerComponent]
})
export class MonthpickerTailwindStylingComponent {
    public date = new Date();
}
