import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slider-sample-1',
    styleUrls: ['./slider-sample-1.component.scss'],
    templateUrl: './slider-sample-1.component.html',
    imports: [IgxSliderComponent, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, FormsModule, IgxInputDirective]
})
export class SliderSample1Component {

    public sliderType = IgxSliderType;
    public priceRange = {
        lower: 200,
        upper: 800
    };

    constructor() { }
}
