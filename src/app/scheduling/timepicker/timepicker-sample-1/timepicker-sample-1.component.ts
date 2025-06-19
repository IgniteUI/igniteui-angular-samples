import { Component } from '@angular/core';
import { IgxTimePickerComponent, IgxLabelDirective } from 'igniteui-angular';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-sample-1.component.scss'],
    templateUrl: './timepicker-sample-1.component.html',
    imports: [IgxTimePickerComponent, IgxLabelDirective]
})
export class TimePickerSample1Component { }
