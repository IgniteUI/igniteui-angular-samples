import { Component, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxSliderComponent } from 'igniteui-angular';

@Component({
    selector: 'app-slider-sample-3',
    styleUrls: ['./slider-sample-3.component.scss'],
    templateUrl: './slider-sample-3.component.html',
    standalone: false
})
export class SliderSample3Component {
    @ViewChild(IgxInputDirective, { static: true })
    public input: IgxInputDirective;

    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;

    public task = {
        completion: 10
    };

    constructor() { }
}
