import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-sample-6',
    styleUrls: ['./slider-sample-6.component.scss'],
    templateUrl: './slider-sample-6.component.html',
    imports: [IgxSliderComponent, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective]
})
export class SliderSample6Component {
    public type: IgxSliderType = IgxSliderType.RANGE;

    public labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
