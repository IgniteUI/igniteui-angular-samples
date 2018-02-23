import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/main';

@Component({
  selector: 'app-datepicker-sample-1',
  templateUrl: './datepicker-sample-1.component.html',
  styleUrls: ['./datepicker-sample-1.component.css']
})
export class DatepickerSample1Component implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
