import { Component, ViewChild } from '@angular/core';
import { IgxSliderComponent, TicksOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'slider-tailwind-styling',
    styleUrls: ['./slider-tailwind-styling.component.scss'],
    templateUrl: './slider-tailwind-styling.component.html',
    imports: [IgxSliderComponent]
})
export class SliderTailwindStylingComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
