import { Component } from "@angular/core";

@Component({
    selector: "app-datepicker-sample-3",
    styleUrls: ["./datepicker-sample-3.component.scss"],
    templateUrl: "./datepicker-sample-3.component.html"
})
export class DatepickerSample3Component {

    public date = new Date();

    public ngOnInit() {
        // setting to yesterday
        this.date.setDate(this.date.getDate() - 1);
    }
}
