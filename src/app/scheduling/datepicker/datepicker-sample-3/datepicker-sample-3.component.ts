import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datepicker-sample-3',
    styleUrls: ['./datepicker-sample-3.component.scss'],
    templateUrl: './datepicker-sample-3.component.html',
    imports: [IgxDatePickerComponent, FormsModule]
})
export class DatepickerSample3Component {
    public date = new Date();
}
