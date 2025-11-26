import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-ripple-styling-sample',
    styleUrls: ['./ripple-styling-sample.component.scss'],
    templateUrl: './ripple-styling-sample.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent]
})
export class RippleStylingSampleComponent { }
