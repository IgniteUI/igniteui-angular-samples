import { Component } from "@angular/core";
import { SliderType } from "igniteui-angular";

@Component({
    selector: "app-discrete-slider-bottom-ticks",
    styleUrls: ["./discrete-slider-ticks-bottom.component.scss"],
    templateUrl: "./discrete-slider-ticks-bottom.component.html"
})
export class SliderDiscreteTicksBottomComponent {
    public type: SliderType = SliderType.RANGE;
}
