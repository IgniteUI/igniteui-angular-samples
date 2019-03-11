import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-calendar-views",
    styleUrls: ["./calendar-views.component.scss"],
    templateUrl: "./calendar-views.component.html"
})
export class CalendarViewsComponent {
    public date = new Date(2020, 6, 15);
}
