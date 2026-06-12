import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxSliderComponent, TicksOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-primary-ticks-top',
    styleUrls: ['./slider-primary-ticks-top.component.scss'],
    templateUrl: './slider-primary-ticks-top.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxSliderComponent]
})
export class SliderPrimaryTicksTopComponent {
    public ticksOreintation = TicksOrientation.Top;
}
