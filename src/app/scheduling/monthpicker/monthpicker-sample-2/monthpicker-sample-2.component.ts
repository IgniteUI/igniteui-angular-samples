import { Component } from "@angular/core";

@Component({
    selector: "app-monthpicker-sample-2",
    styleUrls: ["./monthpicker-sample-2.component.scss"],
    templateUrl: "./monthpicker-sample-2.component.html"
})
export class MonthpickerSample2Component {
    public date = new Date();

    public numericFormatOptions = {
        month: "2-digit",
        year: "numeric"
    };

    public longFormatOptions = {
        month: "long",
        year: "numeric"
    };
}
