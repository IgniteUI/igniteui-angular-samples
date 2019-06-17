import { Component } from "@angular/core";

@Component({
    selector: "app-timepicker-sample-8",
    styleUrls: ["./timepicker-sample-8.component.scss"],
    templateUrl: "./timepicker-sample-8.component.html"
})
export class TimePickerSample8Component {
    public date: Date;
    constructor() {
        this.date = new Date();
        this.date.setHours(19);
        this.date.setMinutes(5);
    }
}
