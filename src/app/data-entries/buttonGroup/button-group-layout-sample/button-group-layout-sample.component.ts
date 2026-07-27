import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-layout-sample',
    styleUrls: ['./button-group-layout-sample.component.scss'],
    templateUrl: './button-group-layout-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupLayoutSampleComponent {
    public rippleColor = 'grey';
}
