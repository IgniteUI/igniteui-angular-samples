import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-content-space',
    styleUrls: ['./layout-content-space.component.scss'],
    templateUrl: './layout-content-space.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, NgIf, IgxLayoutDirective]
})

export class LayoutContentSpaceComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'space-between';
}
