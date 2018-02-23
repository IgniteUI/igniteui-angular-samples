import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-sample-5',
  templateUrl: './datepicker-sample-5.component.html',
  styleUrls: ['./datepicker-sample-5.component.css']
})
export class DatepickerSample5Component implements OnInit, AfterViewInit {

  public date: Date = new Date(Date.now());

  public allViews;

  constructor() { }

  ngOnInit() {
    this.allViews = { day: false, month: true, year: true };
  }

  ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
