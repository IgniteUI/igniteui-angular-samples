import { Component } from '@angular/core';

@Component({
    selector: 'app-datetimepicker-template-driven-form',
    styleUrls: ['./template-driven-form.component.scss'],
    templateUrl: './template-driven-form.component.html'
})
export class DateTimePickerTDFSampleComponent {
    public date = new Date();
}
