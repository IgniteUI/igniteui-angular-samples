import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDatePickerComponent, IgxLabelDirective, IgxTimePickerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-datetimepicker-reactive-form',
    styleUrls: ['./reactive-form.component.scss'],
    templateUrl: './reactive-form.component.html',
    imports: [FormsModule, ReactiveFormsModule, IgxDatePickerComponent, IgxLabelDirective, IgxTimePickerComponent]
})
export class DateTimePickerRFSampleComponent {
    public dateTimeForm: FormGroup;
    public date = new Date(2021, 6, 12, 7, 30, 0);
    public minDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - 10);
    public maxDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 15);
    public minTime = '06:15:30';
    public maxTime = '15:15:30';

    constructor(fb: FormBuilder) {
        this.dateTimeForm = fb.group({
            date: [this.date, Validators.required],
            time: [this.date, Validators.required]
        });
    }
}
