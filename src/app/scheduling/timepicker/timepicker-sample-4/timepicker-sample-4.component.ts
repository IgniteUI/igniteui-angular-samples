import { Component, ViewChild } from '@angular/core';
import { IgxTimePickerComponent, IgxLabelDirective, IgxToastComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-sample-4.component.scss'],
    templateUrl: './timepicker-sample-4.component.html',
    imports: [IgxTimePickerComponent, FormsModule, IgxLabelDirective, IgxToastComponent]
})
export class TimePickerSample4Component {
    @ViewChild('toast', { static: true })
    private toast;

    public time = '10:00:00';
    public min = '08:15:30';
    public max = '18:15:30';

    public onValidationFailed() {
        this.toast.open();
    }
}
