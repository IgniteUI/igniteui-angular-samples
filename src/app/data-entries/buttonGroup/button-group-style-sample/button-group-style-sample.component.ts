import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-style-sample',
    styleUrls: ['./button-group-style-sample.component.scss'],
    templateUrl: './button-group-style-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStyleSampleComponent {
    public alignment = ButtonGroupAlignment.vertical;
}
