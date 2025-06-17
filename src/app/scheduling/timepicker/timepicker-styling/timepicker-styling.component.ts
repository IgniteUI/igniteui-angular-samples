
import { Component, ElementRef, inject } from '@angular/core';
import { IgxTimePickerComponent, IgxLabelDirective, IgxButtonDirective } from 'igniteui-angular';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-styling.component.scss'],
    templateUrl: './timepicker-styling.component.html',
    imports: [IgxTimePickerComponent, IgxLabelDirective, IgxButtonDirective]
})
export class TimePickerStylingComponent {    element = inject(ElementRef);

 }
