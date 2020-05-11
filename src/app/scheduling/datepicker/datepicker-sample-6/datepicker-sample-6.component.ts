import { Component } from "@angular/core";

@Component({
    selector: "app-datepicker-sample-6",
    styleUrls: ["./datepicker-sample-6.component.scss"],
    templateUrl: "./datepicker-sample-6.component.html"
})
export class DatepickerSample6Component {
    public date: Date = new Date(Date.now());
}
