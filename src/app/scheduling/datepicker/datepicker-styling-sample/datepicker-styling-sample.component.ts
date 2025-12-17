import { Component, ElementRef, inject } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-datepicker-sample-1',
    styleUrls: ['./datepicker-styling-sample.component.scss'],
    templateUrl: './datepicker-styling-sample.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective]
})
export class DatepickerStylingSampleComponent {    element = inject(ElementRef);
    private overlayService = inject(IgxOverlayService);

 }
