import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-tailwind-styling',
    styleUrls: ['./button-group-tailwind-styling.component.scss'],
    templateUrl: './button-group-tailwind-styling.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupTailwindStylingComponent {
    public rippleColor = 'gray';
    public views = ['Day', 'Week', 'Month'];
}
