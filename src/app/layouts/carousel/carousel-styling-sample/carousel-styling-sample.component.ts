import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-styling-sample.component.scss'],
    templateUrl: './carousel-styling-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselStylingSampleComponent { }
