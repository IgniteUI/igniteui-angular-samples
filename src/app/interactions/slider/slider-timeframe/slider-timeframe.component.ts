import { Component } from '@angular/core';
import { IgxSliderType, IgxSliderComponent } from 'igniteui-angular';

@Component({
    selector: 'app-slider-timeframe',
    styleUrls: ['./slider-timeframe.component.scss'],
    templateUrl: './slider-timeframe.component.html',
    imports: [IgxSliderComponent]
})
export class SliderTimeframeComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
    public labels = ['04:00', '08:00', '12:00', '16:00', '20:00', '00:00'];
}
