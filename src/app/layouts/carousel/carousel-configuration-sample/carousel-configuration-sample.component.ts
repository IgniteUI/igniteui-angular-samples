import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-carousel-configuration-sample',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-configuration-sample.component.scss'],
    templateUrl: './carousel-configuration-sample.component.html',
    imports: [FormsModule, IgxCarouselComponent, IgxSlideComponent, IgxSwitchComponent]
})
export class CarouselConfigurationSampleComponent {
    public hideNavigation = false;
    public hideIndicators = false;
    public disableLoop = false;
}
