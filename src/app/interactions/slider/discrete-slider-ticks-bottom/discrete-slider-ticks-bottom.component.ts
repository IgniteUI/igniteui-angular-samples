import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';

@Component({
    selector: 'app-discrete-slider-bottom-ticks',
    styleUrls: ['./discrete-slider-ticks-bottom.component.scss'],
    templateUrl: './discrete-slider-ticks-bottom.component.html',
    imports: [IgxSliderComponent]
})
export class SliderDiscreteTicksBottomComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
}
