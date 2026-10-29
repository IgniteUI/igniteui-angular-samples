import { Component, ViewEncapsulation } from '@angular/core';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective
} from 'igniteui-angular/card';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-card-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./card-styling.component.scss'],
    templateUrl: './card-styling.component.html',
    imports: [
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxChipComponent,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective
    ]
})
export class CardStylingComponent { }
