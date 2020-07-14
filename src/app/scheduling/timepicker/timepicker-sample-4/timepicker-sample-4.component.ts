import { Component, ViewChild } from "@angular/core";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-sample-4.component.scss"],
    templateUrl: "./timepicker-sample-4.component.html"
})
export class TimePickerSample4Component {

    public min: string = "09:15:30 AM";
    public max: string = "06:15:30 PM";

    @ViewChild("toast", { static: true })
    private toast;

    public onValidationFailed() {
        this.toast.show();
    }
}
