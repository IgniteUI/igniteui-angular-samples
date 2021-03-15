import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-sample-4.component.scss'],
    templateUrl: './timepicker-sample-4.component.html'
})
export class TimePickerSample4Component {
    @ViewChild('toast', { static: true })
    private toast;

    public min = '09:15:30 AM';
    public max = '06:15:30 PM';

    public onValidationFailed() {
        this.toast.open();
    }
}
