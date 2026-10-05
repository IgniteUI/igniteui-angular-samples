import { Component, inject } from '@angular/core';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective
} from 'igniteui-angular/card';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { pinRightIcon } from './icons';

@Component({
    selector: 'app-card-media',
    styleUrls: ['./card-media.component.scss'],
    templateUrl: './card-media.component.html',
    imports: [
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective
    ]
})
export class CardMediaComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText('pin-right', pinRightIcon, 'material');
    }
}
