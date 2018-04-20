import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular/main";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-sample-2.component.scss"],
    templateUrl: "./timepicker-sample-2.component.html"
})
export class TimePickerSample2Component implements OnInit {

    public date: Date = new Date(Date.now());

    constructor() { }

    public ngOnInit(): void {}
}
