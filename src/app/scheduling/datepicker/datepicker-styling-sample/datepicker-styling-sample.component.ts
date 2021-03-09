import { Component, ElementRef } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular';

@Component({
  selector: 'app-datepicker-sample-1',
  styleUrls: ['./datepicker-styling-sample.component.scss'],
  templateUrl: './datepicker-styling-sample.component.html'
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DatepickerStylingSample {
    constructor(public element: ElementRef, private overlayService: IgxOverlayService) { }
 }
