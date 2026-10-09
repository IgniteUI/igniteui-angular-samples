import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-overview',
    styleUrls: ['./rating-overview.component.scss'],
    templateUrl: './rating-overview.component.html',
    imports: [
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardContentDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingOverviewComponent { }
