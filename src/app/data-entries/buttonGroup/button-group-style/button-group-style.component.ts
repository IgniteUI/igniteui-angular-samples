import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-button-group-style',
    styleUrls: ['./button-group-style.component.scss'],
    templateUrl: './button-group-style.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStyleComponent {
    public alignment = ButtonGroupAlignment.vertical;
}
