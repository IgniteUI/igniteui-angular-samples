import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-tailwind-sample.component.scss', '../carousel-bootstrap-theme.scss'],
    templateUrl: './carousel-tailwind-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselTailwindSampleComponent { }
