import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-size',
    styleUrls: ['./rating-size.component.scss'],
    templateUrl: './rating-size.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingSizeComponent { }
