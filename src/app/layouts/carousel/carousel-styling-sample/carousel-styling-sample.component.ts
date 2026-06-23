import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel-styling-sample.component.scss'],
    templateUrl: './carousel-styling-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselStylingSampleComponent { }
