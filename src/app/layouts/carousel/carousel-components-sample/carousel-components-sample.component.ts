import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-carousel-components-sample',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-components-sample.component.scss'],
    templateUrl: './carousel-components-sample.component.html',
    imports: [
        IgxButtonDirective,
        IgxCarouselComponent,
        IgxCheckboxComponent,
        IgxIconComponent,
        IgxInputDirective,
        IgxInputGroupComponent,
        IgxPrefixDirective,
        IgxSlideComponent
    ]
})
export class CarouselComponentsSampleComponent { }
