
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-size',
    styleUrls: ['./icon-button-size.component.scss'],
    templateUrl: './icon-button-size.component.html',
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonSizeComponent { }
