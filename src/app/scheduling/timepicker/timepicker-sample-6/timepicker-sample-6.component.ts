import { Component } from '@angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { IgxPickerActionsDirective, IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxHintDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-timepicker-sample-6',
    styleUrls: ['./timepicker-sample-6.component.scss'],
    templateUrl: './timepicker-sample-6.component.html',
    imports: [IgxTimePickerComponent, FormsModule, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent, IgxHintDirective, IgxButtonDirective, IgxPickerActionsDirective]
})
export class TimePickerSample6Component {

    public today: Date = new Date();

    public selectNow(timePicker: IgxTimePickerComponent) {
        timePicker.value = new Date();
        timePicker.close();
    }
}
