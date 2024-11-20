import { Component } from '@angular/core';

@Component({
    selector: 'app-monthpicker-styling',
    styleUrls: ['./monthpicker-styling.component.scss'],
    templateUrl: './monthpicker-styling.component.html',
    standalone: false
})
export class MonthpickerStylingComponent {
    public date = new Date();
}
