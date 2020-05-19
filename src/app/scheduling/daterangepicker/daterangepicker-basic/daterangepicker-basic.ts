import { Component } from "@angular/core";

@Component({
    selector: "basic-rangedatepicker",
    styleUrls: ["./daterangepicker-basic.scss"],
    templateUrl: "./daterangepicker-basic.html"
})
export class BasicDateRangePickerComponent {
    public range: { start: Date, end: Date } =
        { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
