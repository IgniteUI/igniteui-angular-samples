import { Component, OnInit } from "@angular/core";
import { SliderType } from "igniteui-angular/main";

@Component({
  selector: "app-slider-sample-4",
  styleUrls: ["./slider-sample-4.component.css"],
  templateUrl: "./slider-sample-4.component.html"
})
export class SliderSample4Component implements OnInit {
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

  constructor() { }

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
