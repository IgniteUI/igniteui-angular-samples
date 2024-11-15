import { Component } from '@angular/core';

@Component({
    selector: 'app-datepicker-sample-1',
    styleUrls: ['./datepicker-sample-1.component.scss'],
    templateUrl: './datepicker-sample-1.component.html',
    standalone: false
})
export class DatepickerSample1Component {
    public date = new Date();
}
