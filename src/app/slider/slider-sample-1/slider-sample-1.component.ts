import { Component, OnInit } from '@angular/core';
import { SliderType } from 'igniteui-angular/main';

@Component({
  selector: 'app-slider-sample-1',
  templateUrl: './slider-sample-1.component.html',
  styleUrls: ['./slider-sample-1.component.css']
})
export class SliderSample1Component implements OnInit {
  sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

  updatePriceRange(event) {
    let prevPriceRange = this.priceRange;
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
  constructor() { }

  ngOnInit() {
  }

}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number,
  ) {
  }
}
