import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
    selector: 'app-slider-sample-4',
    styleUrls: ['./slider-sample-4.component.scss'],
    templateUrl: './slider-sample-4.component.html',
    standalone: false
})
export class SliderSample4Component {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
