import { Component } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-card-sample-3',
    styleUrls: ['./card-sample-3.component.scss'],
    templateUrl: './card-sample-3.component.html',
    imports: [IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxAvatarComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxCardMediaDirective]
})
export class CardSample3Component {
    public horizontal = true;

    public card = new Card({
        avatarUrl: 'assets/images/card/avatars/mellow_d.jpg',
        buttons: ['play album'],
        content: `Far far away, behind the word mountains,
        far from the countries Vokalia and Consonantia,
        there live the blind texts.`,
        imageUrl: 'assets/images/card/media/here_media.jpg',
        subtitle: 'by Mellow D',
        title: 'HERE'
    });
}
