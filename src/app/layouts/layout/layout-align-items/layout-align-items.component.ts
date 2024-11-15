import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-align-items',
    styleUrls: ['./layout-align-items.component.scss'],
    templateUrl: './layout-align-items.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, NgIf, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutAlignItemsComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public alignItems = 'flex-start';
}
