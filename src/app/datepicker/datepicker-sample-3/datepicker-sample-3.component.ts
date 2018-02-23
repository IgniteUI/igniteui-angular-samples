import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-sample-3',
  templateUrl: './datepicker-sample-3.component.html',
  styleUrls: ['./datepicker-sample-3.component.css']
})
export class DatepickerSample3Component implements OnInit, AfterViewInit {

  public date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date(Date.now());
    // setting to yesterday
    this.date.setDate(this.date.getDate() - 1);
  }

  ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
