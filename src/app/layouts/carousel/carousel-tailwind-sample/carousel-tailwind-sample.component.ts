import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent} from 'igniteui-angular';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel-tailwind-sample.component.scss'],
    templateUrl: './carousel-tailwind-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselTailwindSampleComponent { }
