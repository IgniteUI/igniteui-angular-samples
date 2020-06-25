import { Component, ViewChild } from "@angular/core";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-sample-4.component.scss"],
    templateUrl: "./timepicker-sample-4.component.html"
})
export class TimePickerSample4Component {

    public min: string = "09:00";
    public max: string = "18:00";

    @ViewChild("toast", { static: true })
    private toast;

    public onValidationFailed() {
        this.toast.show();
    }
}
