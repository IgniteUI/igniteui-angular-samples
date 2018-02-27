import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datepicker-sample-3",
  styleUrls: ["./datepicker-sample-3.component.scss"],
  templateUrl: "./datepicker-sample-3.component.html"
})
export class DatepickerSample3Component implements OnInit, AfterViewInit {

  public date: Date;

  constructor() { }

  public ngOnInit() {
    this.date = new Date(Date.now());
    // setting to yesterday
    this.date.setDate(this.date.getDate() - 1);
  }

  public ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
