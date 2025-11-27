import { Component } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-card-tailwind-styling-sample',
    templateUrl: './card-tailwind-styling-sample.component.html',
    styleUrls: ['./card-tailwind-styling-sample.component.scss'],
    imports: [IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent]
})
export class CardTailwindStylingSampleComponent {
    public card = new Card({
        content: `Hi! I'm Jane, photographer and filmmaker.
        Photography is a way of feeling, of touching,
        of loving. What you have caught on film is captured forever...
        it remembers little things, long after you have
        forgotten everything.`,
        icons: ['person', 'favorite', 'share'],
        imageUrl: 'https://images.unsplash.com/'
        + 'photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        subtitle: 'Professional Photographer',
        title: 'Jane Doe'
    });
}
