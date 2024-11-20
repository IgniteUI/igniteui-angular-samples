import { Component } from '@angular/core';

@Component({
    selector: 'app-datepicker-sample-2',
    styleUrls: ['./datepicker-sample-2.component.scss'],
    templateUrl: './datepicker-sample-2.component.html',
    standalone: false
})
export class DatepickerSample2Component {
  public date: Date = new Date();
}
