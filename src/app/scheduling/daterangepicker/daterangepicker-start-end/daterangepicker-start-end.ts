import { Component } from "@angular/core";

@Component({
    selector: "rangedatepicker-start-end",
    styleUrls: ["./daterangepicker-start-end.scss"],
    templateUrl: "./daterangepicker-start-end.html"
})
export class DateRangePickerStartEndComponent {
    public range: { start: Date, end: Date } =
        { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
