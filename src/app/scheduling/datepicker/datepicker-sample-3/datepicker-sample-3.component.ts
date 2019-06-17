import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-datepicker-sample-3",
    styleUrls: ["./datepicker-sample-3.component.scss"],
    templateUrl: "./datepicker-sample-3.component.html"
})
export class DatepickerSample3Component implements OnInit {

    public date1 = new Date();
    public date2 = new Date();

    constructor() { }

    public ngOnInit() {
        // setting to yesterday
        this.date1.setDate(this.date1.getDate() - 1);
        this.date2.setDate(this.date2.getDate() - 1);
    }
}
