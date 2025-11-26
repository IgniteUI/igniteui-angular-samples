import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-button-group-sample-2',
    styleUrls: ['./button-group-sample-2.component.scss'],
    templateUrl: './button-group-sample-2.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupSample2Component {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = 'grey';
}
