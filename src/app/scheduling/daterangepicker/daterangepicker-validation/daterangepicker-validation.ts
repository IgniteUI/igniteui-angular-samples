import { Component } from "@angular/core";

@Component({
    selector: "daterangepicker-validation",
    styleUrls: ["./daterangepicker-validation.scss"],
    templateUrl: "./daterangepicker-validation.html"
})
export class DateRangePickerValidationComponent {
    public range: { start: Date, end: Date } =
        { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
    }
