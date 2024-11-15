import { Component } from '@angular/core';
import { IgxCardComponent, IgxMonthPickerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-monthpicker-sample-1',
    styleUrls: ['./monthpicker-sample-1.component.scss'],
    templateUrl: './monthpicker-sample-1.component.html',
    imports: [IgxCardComponent, IgxMonthPickerComponent]
})
export class MonthpickerSample1Component {
    public date = new Date();
}
