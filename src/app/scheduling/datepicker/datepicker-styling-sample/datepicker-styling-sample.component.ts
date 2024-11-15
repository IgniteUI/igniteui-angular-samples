import { Component, ElementRef } from '@angular/core';
import { IgxOverlayService, IgxDatePickerComponent, IgxLabelDirective } from 'igniteui-angular';

@Component({
    selector: 'app-datepicker-sample-1',
    styleUrls: ['./datepicker-styling-sample.component.scss'],
    templateUrl: './datepicker-styling-sample.component.html',
    imports: [IgxDatePickerComponent, IgxLabelDirective]
})
export class DatepickerStylingSampleComponent {
    constructor(public element: ElementRef, private overlayService: IgxOverlayService) { }
 }
