import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { IgxTimePickerComponent, IgxToastComponent } from "igniteui-angular";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-sample-4.component.scss"],
    templateUrl: "./timepicker-sample-4.component.html"
})
export class TimePickerSample4Component implements OnInit {

    public min: string = "09:00";
    public max: string = "18:00";

    @ViewChild("toast", {static: true})
    private toast: ElementRef;

    constructor() { }
    public show(toast) {
        toast.show();
    }

    public onValidationFailed(timepicker) {
        this.show(this.toast);
    }

    public ngOnInit(): void {}
}
