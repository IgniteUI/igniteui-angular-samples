import { Component } from "@angular/core";
import { DateRange } from "igniteui-angular";

@Component({
    selector: "daterangepicker-validation",
    styleUrls: ["./daterangepicker-validation.scss"],
    templateUrl: "./daterangepicker-validation.html"
})
export class DateRangePickerValidationComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
