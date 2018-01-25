import { Component, OnInit } from '@angular/core';
import { SliderType } from 'igniteui-angular/main';

@Component({
  selector: 'app-slider-sample-5',
  templateUrl: './slider-sample-5.component.html',
  styleUrls: ['./slider-sample-5.component.css'],
})
export class SliderSample5Component implements OnInit {
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
