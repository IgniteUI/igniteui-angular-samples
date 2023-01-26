import { Component } from '@angular/core';
import { IgxSliderType } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-slider-sample-4',
  styleUrls: ['./slider-sample-4.component.scss'],
  templateUrl: './slider-sample-4.component.html'
})
export class SliderSample4Component {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
