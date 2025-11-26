import { Component } from '@angular/core';
import { IgxDatePickerComponent, IgxLabelDirective, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-datepicker-sample-6',
    styleUrls: ['./datepicker-sample-6.component.scss'],
    templateUrl: './datepicker-sample-6.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent]
})
export class DatepickerSample6Component {
    public date: Date = new Date(Date.now());
}
