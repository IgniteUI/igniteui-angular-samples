import { Component } from '@angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-timepicker-sample-6',
    styleUrls: ['./timepicker-sample-6.component.scss'],
    templateUrl: './timepicker-sample-6.component.html',
    standalone: false
})
export class TimePickerSample6Component {

    public today: Date = new Date();

    public selectNow(timePicker: IgxTimePickerComponent) {
        timePicker.value = new Date();
        timePicker.close();
    }
}
