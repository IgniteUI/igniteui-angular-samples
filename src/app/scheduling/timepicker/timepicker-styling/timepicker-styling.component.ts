
import { Component, ElementRef } from "@angular/core";
import { IgxOverlayService } from "igniteui-angular";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-styling.component.scss"],
    templateUrl: "./timepicker-styling.component.html"
})
export class TimePickerStylingComponent {
    constructor(public element: ElementRef, private overlayService: IgxOverlayService) { }
 }
