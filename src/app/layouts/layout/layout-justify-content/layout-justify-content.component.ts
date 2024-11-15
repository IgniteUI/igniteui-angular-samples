import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-justify-content',
    styleUrls: ['./layout-justify-content.component.scss'],
    templateUrl: './layout-justify-content.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, NgIf, IgxLayoutDirective]
})

export class LayoutJustifyContentComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public justifyContent = 'start';
}
