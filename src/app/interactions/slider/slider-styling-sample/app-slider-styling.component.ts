import { Component, ViewChild } from '@angular/core';
import { IgxSliderComponent, TicksOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-styling',
    styleUrls: ['./app-slider-styling.component.scss'],
    templateUrl: './app-slider-styling.component.html',
    imports: [IgxSliderComponent]
})
export class AppSliderStylingComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
