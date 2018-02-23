import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datepicker-sample-5",
  styleUrls: ["./datepicker-sample-5.component.css"],
  templateUrl: "./datepicker-sample-5.component.html"
})
export class DatepickerSample5Component implements OnInit, AfterViewInit {

  public date: Date = new Date(Date.now());

  public allViews;

  constructor() { }

  public ngOnInit() {
    this.allViews = { day: false, month: true, year: true };
  }

  public ngAfterViewInit(): void {
    (document.getElementById("date-picker")
      .getElementsByClassName("igx-date-picker__input-date")[0] as HTMLElement)
      .click();
  }
}
