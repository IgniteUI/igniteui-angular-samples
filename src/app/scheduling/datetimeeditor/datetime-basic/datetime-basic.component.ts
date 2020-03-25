import { Component } from "@angular/core";

@Component({
    selector: "datetime-basic",
    styleUrls: ["./datetime-basic.component.scss"],
    templateUrl: "./datetime-basic.component.html"
})
export class DateТimeBasic {
    public date = new Date();

}
