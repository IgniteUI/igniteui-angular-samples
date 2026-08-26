import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective, IgxDividerComponent, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { berealIcon, instagramIcon, plusIcon, threadsIcon } from './icons';

@Component({
    selector: 'app-avatar-tailwind-styling',
    styleUrls: ['./avatar-tailwind-styling.component.scss'],
    templateUrl: './avatar-tailwind-styling.component.html',
    imports: [
        IgxAvatarComponent,
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxCardThumbnailDirective,
        IgxDividerComponent,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxRippleDirective
    ]
})
export class AvatarTailwindStylingSampleComponent {
    private iconService = inject(IgxIconService);

    public profileStats = [
        { value: '23.9K', label: 'Likes' },
        { value: '163', label: 'Posts' },
        { value: '23.9K', label: 'Views' }
    ];

    constructor() {
        this.iconService.addSvgIconFromText('instagram', instagramIcon, 'material');
        this.iconService.addSvgIconFromText('bereal', berealIcon, 'material');
        this.iconService.addSvgIconFromText('threads', threadsIcon, 'material');
        this.iconService.addSvgIconFromText('plus', plusIcon, 'material');
    }
}
