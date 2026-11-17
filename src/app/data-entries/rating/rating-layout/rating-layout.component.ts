import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-layout',
    styleUrls: ['./rating-layout.component.scss'],
    templateUrl: './rating-layout.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingLayoutComponent { }
