import { Component } from '@angular/core';
import { IgxDatePickerComponent, IgxLabelDirective, IgxTimePickerComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datetimepicker-template-driven-form',
    styleUrls: ['./template-driven-form.component.scss'],
    templateUrl: './template-driven-form.component.html',
    imports: [IgxDatePickerComponent, FormsModule, IgxLabelDirective, IgxTimePickerComponent]
})
export class DateTimePickerTDFSampleComponent {
    public date = new Date();
}
