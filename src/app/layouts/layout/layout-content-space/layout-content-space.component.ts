import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-content-space',
    styleUrls: ['./layout-content-space.component.scss'],
    templateUrl: './layout-content-space.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective]
})

export class LayoutContentSpaceComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'space-between';
}
