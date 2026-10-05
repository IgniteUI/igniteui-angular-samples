import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-card-overview',
    styleUrls: ['./card-overview.component.scss'],
    templateUrl: './card-overview.component.html',
    imports: [
        IgxAvatarComponent,
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxCardThumbnailDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective,
        IgxSwitchComponent
    ]
})
export class CardOverviewComponent {
    public media = true;
    public header = true;
    public content = true;
    public actions = true;
}
