import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
  selector: 'app-slider-sample-4',
  styleUrls: ['./slider-sample-4.component.scss'],
  templateUrl: './slider-sample-4.component.html'
})
export class SliderSample4Component {
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
