import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective, IgxInputDirective, IgxButtonDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel-with-components-sample.component.scss'],
    templateUrl: './carousel-with-components-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent, FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective, IgxInputDirective, IgxButtonDirective]
})

export class CarouselWithComponentsSampleComponent { }
