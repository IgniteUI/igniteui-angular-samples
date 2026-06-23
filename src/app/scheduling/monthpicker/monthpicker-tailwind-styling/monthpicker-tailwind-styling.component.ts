import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxMonthPickerComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-monthpicker-tailwind-styling',
    styleUrls: ['./monthpicker-tailwind-styling.component.scss'],
    templateUrl: './monthpicker-tailwind-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxMonthPickerComponent]
})
export class MonthpickerTailwindStylingComponent {
    public date = new Date();
}
