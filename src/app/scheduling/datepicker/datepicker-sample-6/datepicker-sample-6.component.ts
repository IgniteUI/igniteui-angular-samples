import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-datepicker-sample-6',
    styleUrls: ['./datepicker-sample-6.component.scss'],
    templateUrl: './datepicker-sample-6.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective, IgxPickerToggleComponent, IgxPrefixDirective, IgxIconComponent]
})
export class DatepickerSample6Component {
    public date: Date = new Date(Date.now());
}
