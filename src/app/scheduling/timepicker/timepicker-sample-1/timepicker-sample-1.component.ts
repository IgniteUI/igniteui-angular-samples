import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-sample-1.component.scss'],
    templateUrl: './timepicker-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxTimePickerComponent, IgxLabelDirective]
})
export class TimePickerSample1Component { }
