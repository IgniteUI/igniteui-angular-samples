import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel-overview-sample',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-overview-sample.component.scss', '../carousel-bootstrap-theme.scss'],
    templateUrl: './carousel-overview-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})
export class CarouselOverviewSampleComponent {
    public readonly slides = [
        {
            alt: 'Ignite UI Angular Indigo Design',
            src: 'https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-indigo-design.png'
        },
        {
            alt: 'Chart preview',
            src: 'https://dl.infragistics.com/x/img/carousel/slider-image-chart.png'
        },
        {
            alt: 'Ignite UI Angular Charts',
            src: 'https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-charts.png'
        }
    ];
}
