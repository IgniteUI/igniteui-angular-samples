import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datepicker-sample-1',
    styleUrls: ['./datepicker-sample-1.component.scss'],
    templateUrl: './datepicker-sample-1.component.html',
    imports: [IgxDatePickerComponent, FormsModule, IgxLabelDirective]
})
export class DatepickerSample1Component {
    public date = new Date();
}
