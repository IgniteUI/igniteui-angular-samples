import { Component } from '@angular/core';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-ripple-styling-sample',
    styleUrls: ['./ripple-styling-sample.component.scss'],
    templateUrl: './ripple-styling-sample.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent]
})
export class RippleStylingSampleComponent { }
