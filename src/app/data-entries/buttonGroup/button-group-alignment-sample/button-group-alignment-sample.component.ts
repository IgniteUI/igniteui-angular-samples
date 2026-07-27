import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-alignment-sample',
    styleUrls: ['./button-group-alignment-sample.component.scss'],
    templateUrl: './button-group-alignment-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupAlignmentSampleComponent {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = 'grey';
}
