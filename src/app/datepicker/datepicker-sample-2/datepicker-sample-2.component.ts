import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-sample-2',
  templateUrl: './datepicker-sample-2.component.html',
  styleUrls: ['./datepicker-sample-2.component.css']
})
export class DatepickerSample2Component implements AfterViewInit {

  public date: Date = new Date(Date.now());

  constructor() { }

  ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
