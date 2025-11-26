import {Component} from '@angular/core';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';

@Component({
    selector: 'app-card-sample-shadow',
    styleUrls: ['./card-sample-shadow.scss'],
    templateUrl: './card-sample-shadow.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardContentDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective]
})
export class CardSampleShadowComponent { }
