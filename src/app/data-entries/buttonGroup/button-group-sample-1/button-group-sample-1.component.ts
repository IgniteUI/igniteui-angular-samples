import { Component } from '@angular/core';
import { IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-button-group-sample-1',
    styleUrls: ['./button-group-sample-1.component.scss'],
    templateUrl: './button-group-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})

export class ButtonGroupSample1Component {
    public rippleColor = 'grey';
}
