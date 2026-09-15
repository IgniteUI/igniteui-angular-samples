import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxCarouselIndicatorDirective, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel-thumbnail',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-thumbnail.component.scss', '../carousel-bootstrap-theme.scss'],
    templateUrl: './carousel-thumbnail.component.html',
    imports: [IgxCarouselComponent, IgxCarouselIndicatorDirective, IgxSlideComponent]
})
export class CarouselThumbnailComponent {
    public readonly slides = [
        { alt: 'Wonderful coast', image: 'assets/images/carousel/WonderfulCoast.png', thumbnail: 'assets/images/carousel/WonderfulCoastThumb.png' },
        { alt: 'Cultural district', image: 'assets/images/carousel/CulturalDip.png', thumbnail: 'assets/images/carousel/CulturalDipThumb.png' },
        { alt: 'Golden beaches', image: 'assets/images/carousel/GoldenBeaches.png', thumbnail: 'assets/images/carousel/GoldenBeachesThumb.png' },
        { alt: 'Island of history', image: 'assets/images/carousel/IslandOfHistory.png', thumbnail: 'assets/images/carousel/IslandOfHistoryThumb.png' },
        { alt: 'Amazing bridge', image: 'assets/images/carousel/AmazingBridge.png', thumbnail: 'assets/images/carousel/AmazingBridgeThumb.png' }
    ];
}
