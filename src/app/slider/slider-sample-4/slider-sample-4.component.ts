import { Component, OnInit } from '@angular/core';
import { SliderType } from 'igniteui-angular/main';

@Component({
  selector: 'app-slider-sample-4',
  templateUrl: './slider-sample-4.component.html',
  styleUrls: ['./slider-sample-4.component.css'],
})
export class SliderSample4Component implements OnInit {
  sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

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

