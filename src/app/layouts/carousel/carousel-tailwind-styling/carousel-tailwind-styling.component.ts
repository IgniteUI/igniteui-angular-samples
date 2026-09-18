import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import {
    IgxCarouselComponent,
    IgxCarouselIndicatorDirective,
    IgxCarouselNextButtonDirective,
    IgxCarouselPrevButtonDirective,
    IgxSlideComponent
} from 'igniteui-angular/carousel';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-carousel-tailwind-styling',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-tailwind-styling.component.scss', '../carousel-bootstrap-theme.scss'],
    templateUrl: './carousel-tailwind-styling.component.html',
    imports: [
        IgxButtonDirective,
        IgxCarouselComponent,
        IgxCarouselIndicatorDirective,
        IgxCarouselNextButtonDirective,
        IgxCarouselPrevButtonDirective,
        IgxIconComponent,
        IgxSlideComponent
    ]
})
export class CarouselTailwindStylingComponent {
    public readonly slides = [
        {
            alt: 'Scenic travel destination',
            details: ['3 days', '8 stops', 'Flexible dates'],
            image: 'https://dl.infragistics.com/x/img/carousel/AdobeStock_1937350575-s.png',
            label: '01',
            subtitle: 'A flexible travel plan built around memorable views and time to explore.',
            tags: ['Scenic route', 'Flexible pace'],
            title: 'Scenic getaway'
        },
        {
            alt: 'Mountain trail ride',
            details: ['1 day', '12 km', 'Advanced'],
            image: 'https://dl.infragistics.com/x/img/carousel/AdobeStock_215535179-s.png',
            label: '02',
            subtitle: 'A high-energy route through rugged terrain, with technical descents and open trail views.',
            tags: ['Mountain bike', 'Trail ride'],
            title: 'Mountain trail ride'
        },
        {
            alt: 'Weekend escape',
            details: ['Weekend', '5 highlights', 'Year round'],
            image: 'https://dl.infragistics.com/x/img/carousel/AdobeStock_637533323-s.png',
            label: '03',
            subtitle: 'A short break with unhurried moments, fresh perspectives, and room to recharge.',
            tags: ['Unwind', 'Go at your pace'],
            title: 'Weekend escape'
        }
    ];
}
