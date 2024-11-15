import { Component } from '@angular/core';
import { TicksOrientation, IgxSliderComponent } from 'igniteui-angular';

@Component({
    selector: 'app-slider-primary-ticks-top',
    styleUrls: ['./slider-primary-ticks-top.component.scss'],
    templateUrl: './slider-primary-ticks-top.component.html',
    imports: [IgxSliderComponent]
})
export class SliderPrimaryTicksTopComponent {
    public ticksOreintation = TicksOrientation.Top;
}
