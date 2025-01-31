import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-direction-row',
    styleUrls: ['./layout-direction-row.component.scss'],
    templateUrl: './layout-direction-row.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, NgIf, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutDirectionRowComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'row';
}
