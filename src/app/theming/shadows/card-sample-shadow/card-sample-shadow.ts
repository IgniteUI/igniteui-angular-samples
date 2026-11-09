import {Component} from '@angular/core';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-card-sample-shadow',
    styleUrls: ['./card-sample-shadow.scss'],
    templateUrl: './card-sample-shadow.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective]
})
export class CardSampleShadowComponent { }
