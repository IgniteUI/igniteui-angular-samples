import { Component } from '@angular/core';
import { IgxDatePickerComponent, IgxLabelDirective } from 'igniteui-angular';

@Component({
    selector: 'app-datepicker-sample-2',
    styleUrls: ['./datepicker-sample-2.component.scss'],
    templateUrl: './datepicker-sample-2.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective]
})
export class DatepickerSample2Component {
  public date: Date = new Date();
}
