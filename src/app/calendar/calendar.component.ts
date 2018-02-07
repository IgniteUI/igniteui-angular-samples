import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendar",
  styleUrls: ["./calendar.component.css"],
  templateUrl: "./calendar.component.html"
})
export class CalendarComponent implements OnInit {

  public val: Date;

  constructor() { }

  public ngOnInit() {
    this.val = new Date(Date.now());
  }

}
