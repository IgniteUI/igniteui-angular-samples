import { Component } from "@angular/core";
import { DatePart } from "igniteui-angular";

@Component({
    selector: "app-date-time-advanced",
    styleUrls: ["./date-time-advanced.scss"],
    templateUrl: "./date-time-advanced.html"
})

export class DateTimeAdvancedComponent {
    public date = new Date();
    public datePart: typeof DatePart = DatePart;
}
