import { Component } from '@angular/core';
import { Card } from './card.blueprint';
import { IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent } from 'igniteui-angular';


@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html',
    imports: [IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent]
})
export class CardComponent {
    public card = new Card({
        buttons: ['read more'],
        content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that's among the world's major commercial,
                  financial and cultural centers.`,
        icons: ['favorite', 'share'],
        imageUrl: 'assets/images/card/media/ny.jpg',
        subtitle: 'City in New York',
        title: 'New York City'
    });
}
