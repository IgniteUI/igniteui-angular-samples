import { Component } from '@angular/core';
import { IgxTimePickerComponent, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxHintDirective, IgxButtonDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-timepicker-sample-6',
    styleUrls: ['./timepicker-sample-6.component.scss'],
    templateUrl: './timepicker-sample-6.component.html',
    imports: [IgxTimePickerComponent, FormsModule, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxHintDirective, IgxButtonDirective]
})
export class TimePickerSample6Component {

    public today: Date = new Date();

    public selectNow(timePicker: IgxTimePickerComponent) {
        timePicker.value = new Date();
        timePicker.close();
    }
}
