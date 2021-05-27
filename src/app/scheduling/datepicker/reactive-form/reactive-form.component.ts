import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-datetimepicker-reactive-form',
    styleUrls: ['./reactive-form.component.scss'],
    templateUrl: './reactive-form.component.html'
})
export class DateTimePickerRFSampleComponent implements OnInit {
    public dateTimeForm: FormGroup;
    public date = new Date();
    public minDate = new Date(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - 10));
    public maxDate = new Date(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 15));
    public minTime = '06:15:30';
    public maxTime = '15:15:30';

    constructor(fb: FormBuilder) {
        this.dateTimeForm = fb.group({
            date: [this.date, Validators.required],
            time: [this.date, Validators.required]
        });
    }

    ngOnInit() {
        this.dateTimeForm.get('date').valueChanges.subscribe(selectedDate => {
            this.dateTimeForm.get('time').setValue(selectedDate, { emitEvent: false });
        });

        this.dateTimeForm.get('time').valueChanges.subscribe(selectedTime => {
            this.dateTimeForm.get('date').setValue(selectedTime, { emitEvent: false });
        });
    }
}
