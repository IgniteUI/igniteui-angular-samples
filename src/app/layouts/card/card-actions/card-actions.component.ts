import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { linkedinIcon } from './icons';

@Component({
    selector: 'app-card-actions',
    styleUrls: ['./card-actions.component.scss'],
    templateUrl: './card-actions.component.html',
    imports: [
        IgxAvatarComponent,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardThumbnailDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxSuffixDirective
    ]
})
export class CardActionsComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText('linkedin', linkedinIcon, 'material');
    }
}
