import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType, TickLabelsOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-ticks-bottomtotop-labels',
    styleUrls: ['./slider-ticks-bottomtotop-labels.component.scss'],
    templateUrl: './slider-ticks-bottomtotop-labels.component.html',
    imports: [IgxSliderComponent]
})
export class SliderTicksBottomtotopLabelsComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
    public labelsOrientation = TickLabelsOrientation.BottomToTop;
}

export class PriceRange {}
