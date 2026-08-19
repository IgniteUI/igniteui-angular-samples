import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-layout',
    styleUrls: ['./button-group-layout.component.scss'],
    templateUrl: './button-group-layout.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupLayoutComponent {
    public rippleColor = 'gray';

    public layouts = [
        { value: 'left', label: 'Left', icon: 'format_align_left' },
        { value: 'center', label: 'Center', icon: 'format_align_center' },
        { value: 'right', label: 'Right', icon: 'format_align_right' }
    ];
}
