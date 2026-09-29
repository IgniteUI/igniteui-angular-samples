import { Component } from '@angular/core';
import {
    IgxCarouselComponent,
    IgxCarouselIndicatorDirective,
    IgxCarouselNextButtonDirective,
    IgxCarouselPrevButtonDirective,
    IgxSlideComponent
} from 'igniteui-angular/carousel';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-carousel-styling',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-styling.component.scss'],
    templateUrl: './carousel-styling.component.html',
    imports: [
        IgxCarouselComponent,
        IgxCarouselIndicatorDirective,
        IgxCarouselNextButtonDirective,
        IgxCarouselPrevButtonDirective,
        IgxIconComponent,
        IgxSlideComponent
    ]
})
export class CarouselStylingComponent {
    public readonly slides = [
        {
            alt: 'Wonderful coast',
            image: 'https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png',
            label: '01',
            subtitle: 'A quiet route along cliffs, beach towns, and open water.',
            title: 'Coastal retreat'
        },
        {
            alt: 'Cultural district',
            image: 'https://dl.infragistics.com/x/img/carousel/CulturalDip.png',
            label: '02',
            subtitle: 'Museums, galleries, and historic streets in one walkable plan.',
            title: 'Cultural district'
        },
        {
            alt: 'Golden beaches',
            image: 'https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png',
            label: '03',
            subtitle: 'A sunny itinerary built around swimming, dining, and sunsets.',
            title: 'Golden beaches'
        }
    ];
}
