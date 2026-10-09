import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { configureTheme, defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./rating-tailwind-styling.component.scss'],
    templateUrl: './rating-tailwind-styling.component.html',
    imports: [IgxButtonDirective, IgxIconComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingTailwindStylingComponent {
    constructor() {
        // The sample loads the Bootstrap light theme in its styles, so the
        // rating takes the matching shadow DOM styles regardless of the theme
        // the documentation posts down before the sample renders.
        configureTheme('bootstrap', 'light');
    }
}
