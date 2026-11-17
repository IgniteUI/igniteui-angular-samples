import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-interaction-states',
    styleUrls: ['./rating-interaction-states.component.scss'],
    templateUrl: './rating-interaction-states.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingInteractionStatesComponent { }
