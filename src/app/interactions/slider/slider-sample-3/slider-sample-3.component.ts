import { Component, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxSliderComponent } from 'igniteui-angular/slider';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slider-sample-3',
    styleUrls: ['./slider-sample-3.component.scss'],
    templateUrl: './slider-sample-3.component.html',
    imports: [IgxSliderComponent, FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSuffixDirective]
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
