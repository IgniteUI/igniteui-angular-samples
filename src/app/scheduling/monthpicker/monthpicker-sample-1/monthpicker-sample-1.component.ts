import { Component } from '@angular/core';
import { IgxCardComponent } from 'igniteui-angular/card';
import { IgxMonthPickerComponent } from 'igniteui-angular/calendar';

@Component({
    selector: 'app-monthpicker-sample-1',
    styleUrls: ['./monthpicker-sample-1.component.scss'],
    templateUrl: './monthpicker-sample-1.component.html',
    imports: [IgxCardComponent, IgxMonthPickerComponent]
})
export class MonthpickerSample1Component {
    public date = new Date();
}
