import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-layout',
    styleUrls: ['./button-group-layout.component.scss'],
    templateUrl: './button-group-layout.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupLayoutComponent {
    public rippleColor = 'grey';
}
