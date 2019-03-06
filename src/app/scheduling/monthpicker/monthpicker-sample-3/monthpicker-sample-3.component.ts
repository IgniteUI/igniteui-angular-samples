import { Component, ViewChild } from "@angular/core";

@Component({
    selector: "app-monthpicker-sample-3",
    styleUrls: ["./monthpicker-sample-3.component.scss"],
    templateUrl: "./monthpicker-sample-3.component.html"
})
export class MonthpickerSample3Component {
    public formatOptions = {
        month: "long",
        year: "numeric"
    };

    public date = new Date();
    public locales = ["en", "de", "fr", "ar", "zh"];
    public locale = "en";
}
