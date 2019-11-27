import { Component } from "@angular/core";
import { SliderType } from "igniteui-angular";

@Component({
    selector: "app-slider-timeframe",
    styleUrls: ["./slider-timeframe.component.scss"],
    templateUrl: "./slider-timeframe.component.html"
})
export class SliderTimeframeComponent {
    public type: SliderType = SliderType.RANGE;
    public labels = ["04:00", "08:00", "12:00", "16:00", "20:00", "00:00"];
}
