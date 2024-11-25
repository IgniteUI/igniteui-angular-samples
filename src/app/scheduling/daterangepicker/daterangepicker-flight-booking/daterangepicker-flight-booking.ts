import { Component, Pipe, PipeTransform } from '@angular/core';
import { DateRange, IgxSelectComponent, IgxPrefixDirective, IgxIconComponent, IgxSelectItemComponent, IgxDateRangePickerComponent, IgxLabelDirective, IgxHintDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { PipeWithoutTownFrom as PipeWithoutTownFrom_1 } from '../../datepicker/datepicker-sample-9/datepicker-sample-9.component';

@Component({
    selector: 'app-flight-booking',
    styleUrls: ['./daterangepicker-flight-booking.scss'],
    templateUrl: './daterangepicker-flight-booking.html',
    imports: [FormsModule, IgxSelectComponent, IgxPrefixDirective, IgxIconComponent, NgFor, IgxSelectItemComponent, IgxDateRangePickerComponent, IgxLabelDirective, NgIf, IgxHintDirective, PipeWithoutTownFrom_1]
})
export class FlightBookingComponent {
    public towns: string[] = [
        'New York',
        'Washington, D.C.',
        'London',
        'Berlin',
        'Sofia',
        'Rome',
        'Kiev',
        'Copenhagen',
        'Paris',
        'Barcelona',
        'Vienna',
        'Athens',
        'Dublin',
        'Yerevan',
        'Oslo',
        'Helsinki',
        'Stockholm',
        'Prague',
        'Istanbul'
    ];
    public townFrom = 'Barcelona';
    public townTo = 'New York';
    public minDate: Date;
    public maxDate: Date;
    public range: DateRange;

    constructor() {
        this.minDate = new Date();

        this.maxDate = new Date();
        this.maxDate.setMonth(this.maxDate.getMonth() + 1);
    }
}

@Pipe({
    name: 'withoutTownFrom',
    standalone: false
})
export class PipeWithoutTownFrom implements PipeTransform {
    public transform(collection: any[], townFrom: string) {
        return collection.filter((item) => item !== townFrom);
    }
}
