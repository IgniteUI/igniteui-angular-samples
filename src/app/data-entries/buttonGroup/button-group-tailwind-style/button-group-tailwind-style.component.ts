import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-button-group-tailwind-style',
    styleUrls: ['./button-group-tailwind-style.component.scss'],
    templateUrl: './button-group-tailwind-style.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupTailwindStyleComponent {
}
