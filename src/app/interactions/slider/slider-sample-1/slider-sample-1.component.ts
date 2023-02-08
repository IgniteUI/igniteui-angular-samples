import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
    selector: 'app-slider-sample-1',
    styleUrls: ['./slider-sample-1.component.scss'],
    templateUrl: './slider-sample-1.component.html'
})
export class SliderSample1Component {

    public sliderType = IgxSliderType;
    public priceRange = {
        lower: 200,
        upper: 800
    };

    constructor() { }
}
