import { Component } from "@angular/core";
import { DatePart } from "igniteui-angular";

@Component({
    selector: "app-datetime-advanced",
    styleUrls: ["./datetime-advanced.scss"],
    templateUrl: "./datetime-advanced.html"
})

export class DateTimeAdvancedComponent {
    public date = new Date();
    public datePart: typeof DatePart = DatePart;
}
