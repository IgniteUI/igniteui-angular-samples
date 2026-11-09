import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-styling',
    styleUrls: ['./button-group-styling.component.scss'],
    templateUrl: './button-group-styling.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStylingComponent {
    public rippleColor = 'gray';
    public layouts = ['Left', 'Center', 'Right'];
}
