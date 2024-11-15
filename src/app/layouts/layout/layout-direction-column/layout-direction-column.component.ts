import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-direction-column',
    styleUrls: ['./layout-direction-column.component.scss'],
    templateUrl: './layout-direction-column.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, NgIf, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutDirectionColumnComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'column';
}
