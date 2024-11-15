import { Component } from '@angular/core';
import { DateRange, IgxDateRangePickerComponent, IgxLabelDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-basic-rangedatepicker',
    styleUrls: ['./daterangepicker-basic.scss'],
    templateUrl: './daterangepicker-basic.html',
    imports: [IgxDateRangePickerComponent, FormsModule, IgxLabelDirective]
})
export class BasicDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
