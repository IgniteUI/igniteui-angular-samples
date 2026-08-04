import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel-with-components-sample.component.scss'],
    templateUrl: './carousel-with-components-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent, FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective, IgxInputDirective, IgxButtonDirective]
})

export class CarouselWithComponentsSampleComponent { }
