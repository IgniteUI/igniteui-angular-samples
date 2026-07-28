import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-overview',
    styleUrls: ['./button-group-overview.component.scss'],
    templateUrl: './button-group-overview.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupOverviewComponent {
    public rippleColor = 'grey';
}
