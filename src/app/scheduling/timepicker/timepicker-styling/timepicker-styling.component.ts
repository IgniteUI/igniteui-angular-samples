
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-styling.component.scss'],
    templateUrl: './timepicker-styling.component.html',
    standalone: false
})
export class TimePickerStylingComponent {
    constructor(public element: ElementRef) { }
 }
