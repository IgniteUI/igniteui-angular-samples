import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-alignment',
    styleUrls: ['./button-group-alignment.component.scss'],
    templateUrl: './button-group-alignment.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupAlignmentComponent {
    public rippleColor = 'gray';
    public cities = ['Sofia', 'London', 'New York'];

    public alignments: { label: string; value: ButtonGroupAlignment }[] = [
        { label: 'Horizontal', value: ButtonGroupAlignment.horizontal },
        { label: 'Vertical', value: ButtonGroupAlignment.vertical }
    ];
}
