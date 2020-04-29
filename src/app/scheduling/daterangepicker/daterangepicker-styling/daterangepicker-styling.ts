import { Component } from "@angular/core";

@Component({
    selector: "styled-rangedatepicker",
    styleUrls: ["./daterangepicker-styling.scss"],
    templateUrl: "./daterangepicker-styling.html"
})
export class StyledDateRangePickerComponent {
    public range = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
