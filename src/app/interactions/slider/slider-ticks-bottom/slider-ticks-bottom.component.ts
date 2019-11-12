import { Component } from "@angular/core";
import { SliderType } from 'igniteui-angular';

@Component({
    selector: "app-slider-bottom-ticks",
    styleUrls: ["./slider-ticks-bottom.component.scss"],
    templateUrl: "./slider-ticks-bottom.component.html"
})
export class SliderTicksBottom {
    public type: SliderType = SliderType.RANGE;
}
