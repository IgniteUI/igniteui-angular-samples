import { Component } from "@angular/core";

@Component({
    selector: "mode-rangedatepicker",
    styleUrls: ["./daterangepicker-mode.scss"],
    templateUrl: "./daterangepicker-mode.html"
})
export class DateRangePickerModeComponent {
    public range = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
