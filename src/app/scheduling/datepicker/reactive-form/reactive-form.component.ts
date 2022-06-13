import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-datetimepicker-reactive-form',
    styleUrls: ['./reactive-form.component.scss'],
    templateUrl: './reactive-form.component.html'
})
export class DateTimePickerRFSampleComponent {
    public dateTimeForm: UntypedFormGroup;
    public date = new Date(2021, 6, 12, 7, 30, 0);
    public minDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - 10);
    public maxDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 15);
    public minTime = '06:15:30';
    public maxTime = '15:15:30';

    constructor(fb: UntypedFormBuilder) {
        this.dateTimeForm = fb.group({
            date: [this.date, Validators.required],
            time: [this.date, Validators.required]
        });
    }
}
