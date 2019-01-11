import { Component, OnInit } from "@angular/core";
import { SliderType } from "igniteui-angular";

@Component({
  selector: "app-slider-sample-1",
  styleUrls: ["./slider-sample-1.component.scss"],
  templateUrl: "./slider-sample-1.component.html"
})
export class SliderSample1Component implements OnInit {
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

  constructor() { }

  public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case "lowerInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
        }
        break;
      }
      case "upperInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(prevPriceRange.lower, event.value);
        }
        break;
      }
    }
  }

  public ngOnInit() {
  }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number
  ) {
  }
}
