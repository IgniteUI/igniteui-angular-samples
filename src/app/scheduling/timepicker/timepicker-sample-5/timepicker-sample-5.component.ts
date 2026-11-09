import { Component } from '@angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { IgxHintDirective, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxPickerToggleComponent } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-timepicker-sample-5',
    styleUrls: ['./timepicker-sample-5.component.scss'],
    templateUrl: './timepicker-sample-5.component.html',
    imports: [IgxTimePickerComponent, FormsModule, IgxLabelDirective, IgxPickerToggleComponent, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})

export class TimePickerSample5Component {
    public date: Date = new Date();
}
