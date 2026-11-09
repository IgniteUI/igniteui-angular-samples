import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';

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

    constructor() {
        const fb = inject(FormBuilder);

        this.dateTimeForm = fb.group({
            date: [this.date, Validators.required],
            time: [this.date, Validators.required]
        });
    }
}
