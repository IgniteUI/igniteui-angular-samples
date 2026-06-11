import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IgxSliderComponent, TicksOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-bottom-ticks',
    styleUrls: ['./slider-secondary-ticks-mirror.component.scss'],
    templateUrl: './slider-secondary-ticks-mirror.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxSliderComponent]
})
export class SliderSecondaryTicksMirrorComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
