import { Component } from '@angular/core';

@Component({
    selector: 'app-monthpicker-sample-1',
    styleUrls: ['./monthpicker-sample-1.component.scss'],
    templateUrl: './monthpicker-sample-1.component.html',
    standalone: false
})
export class MonthpickerSample1Component {
    public date = new Date();
}
