import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular/core';
import { IgxDateRangePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
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
