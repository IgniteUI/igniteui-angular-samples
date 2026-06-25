import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel-tailwind-sample.component.scss'],
    templateUrl: './carousel-tailwind-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselTailwindSampleComponent { }
