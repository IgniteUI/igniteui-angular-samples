import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-styling',
    styleUrls: ['./button-group-styling.component.scss'],
    templateUrl: './button-group-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStylingComponent {
    public alignment = ButtonGroupAlignment.vertical;
}
