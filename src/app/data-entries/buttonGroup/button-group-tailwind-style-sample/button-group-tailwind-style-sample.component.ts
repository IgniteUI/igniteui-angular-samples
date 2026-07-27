import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-tailwind-style-sample',
    styleUrls: ['./button-group-tailwind-style-sample.component.scss'],
    templateUrl: './button-group-tailwind-style-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupTailwindStyleSampleComponent {
}
