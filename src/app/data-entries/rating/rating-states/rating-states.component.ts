import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-states',
    styleUrls: ['./rating-states.component.scss'],
    templateUrl: './rating-states.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingStatesComponent { }
