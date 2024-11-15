import { Component } from '@angular/core';
import { IgxDatePickerComponent, IgxLabelDirective } from 'igniteui-angular';
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
