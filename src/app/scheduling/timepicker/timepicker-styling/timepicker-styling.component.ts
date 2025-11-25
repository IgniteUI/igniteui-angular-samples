
import { Component, ElementRef, inject } from '@angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-styling.component.scss'],
    templateUrl: './timepicker-styling.component.html',
    imports: [IgxTimePickerComponent, IgxLabelDirective, IgxButtonDirective]
})
export class TimePickerStylingComponent {    element = inject(ElementRef);

 }
