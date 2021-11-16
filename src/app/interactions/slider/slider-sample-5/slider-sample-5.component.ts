import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
  selector: 'app-slider-sample-5',
  styleUrls: ['./slider-sample-5.component.scss'],
  templateUrl: './slider-sample-5.component.html'
})
export class SliderSample5Component {
  public sliderType = IgxSliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

  constructor() { }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number
  ) {
  }
}
