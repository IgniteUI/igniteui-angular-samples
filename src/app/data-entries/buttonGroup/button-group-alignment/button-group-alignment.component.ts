import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-alignment',
    styleUrls: ['./button-group-alignment.component.scss'],
    templateUrl: './button-group-alignment.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupAlignmentComponent {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = 'grey';
}
