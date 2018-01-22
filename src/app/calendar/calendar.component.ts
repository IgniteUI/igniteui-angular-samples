import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  public val: Date;

  constructor() { }

  public ngOnInit() {
    this.val = new Date(Date.now());
  }

}
