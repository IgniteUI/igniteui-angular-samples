import { Component } from '@angular/core';
import { PickerInteractionMode } from 'igniteui-angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-timepicker-dropdown',
    styleUrls: ['./timepicker-dropdown.component.scss'],
    templateUrl: './timepicker-dropdown.component.html',
    imports: [IgxTimePickerComponent, FormsModule, IgxLabelDirective]
})
export class TimepickerDropdownComponent {
    public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
    public format = 'hh:mm tt';
    public date: Date = new Date();
}
