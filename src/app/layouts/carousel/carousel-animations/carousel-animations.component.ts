import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselAnimationType, IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-carousel-animations',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-animations.component.scss', '../carousel-bootstrap-theme.scss'],
    templateUrl: './carousel-animations.component.html',
    imports: [
        FormsModule,
        IgxCarouselComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxSlideComponent,
        IgxSwitchComponent
    ]
})
export class CarouselAnimationsComponent {
    public animationType: CarouselAnimationType = CarouselAnimationType.slide;
    public isCarouselVertical = false;
    public readonly animationTypes = [
        { label: 'Slide', value: CarouselAnimationType.slide },
        { label: 'Fade', value: CarouselAnimationType.fade },
        { label: 'None', value: CarouselAnimationType.none }
    ];
    public readonly slides = [
        {
            detail: 'Best for sequential browsing',
            label: '01',
            metric: '320ms',
            subtitle: 'Moves content horizontally or vertically to preserve directional context.',
            title: 'Slide transition'
        },
        {
            detail: 'Best for featured content',
            label: '02',
            metric: '240ms',
            subtitle: 'Cross-fades between slides when the relationship between items is looser.',
            title: 'Fade transition'
        },
        {
            detail: 'Best for direct state changes',
            label: '03',
            metric: '0ms',
            subtitle: 'Updates the active slide immediately for reduced motion or dense workflows.',
            title: 'No transition'
        }
    ];
}
