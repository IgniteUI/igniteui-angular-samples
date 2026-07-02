import { Component } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-datepicker-dropdown',
    styleUrls: ['./datepicker-dropdown.component.scss'],
    templateUrl: './datepicker-dropdown.component.html',
    imports: [IgxDatePickerComponent, FormsModule, IgxLabelDirective, DatePipe]
})
export class DatepickerDropdownComponent {
    public date = new Date(2019, 4, 15);
}
