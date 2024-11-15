import { Component } from '@angular/core';
import { IgxSliderType, IgxSliderComponent } from 'igniteui-angular';

@Component({
    selector: 'app-slider-sample-5',
    styleUrls: ['./slider-sample-5.component.scss'],
    templateUrl: './slider-sample-5.component.html',
    imports: [IgxSliderComponent]
})
export class SliderSample5Component {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
