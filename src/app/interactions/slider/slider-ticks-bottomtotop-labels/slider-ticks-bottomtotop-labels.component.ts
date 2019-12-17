import { Component } from "@angular/core";
import { SliderType, TickLabelsOrientation } from "igniteui-angular";

@Component({
    selector: "app-slider-ticks-bottomtotop-labels",
    styleUrls: ["./slider-ticks-bottomtotop-labels.component.scss"],
    templateUrl: "./slider-ticks-bottomtotop-labels.component.html"
})
export class SliderTicksBottomtotopLabelsComponent {
    public type: SliderType = SliderType.RANGE;
    public labelsOrientation = TickLabelsOrientation.BottomToTop;

    public priceRange: PriceRange = new PriceRange(20, 40);
}

export class PriceRange {
    constructor(public lower: number, public upper: number) {}
}
