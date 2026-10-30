import { Component } from '@angular/core';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective
} from 'igniteui-angular/card';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-card-position',
    styleUrls: ['./card-position.component.scss'],
    templateUrl: './card-position.component.html',
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
export class CardPositionComponent {
    public roomImage = 'https://dl.infragistics.com/x/img/card/card-2.png';
}
