import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-sample-1',
    styleUrls: ['./button-group-sample-1.component.scss'],
    templateUrl: './button-group-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})

export class ButtonGroupSample1Component {
    public rippleColor = 'grey';
}
