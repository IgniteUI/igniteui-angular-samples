import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-direction-row',
    styleUrls: ['./layout-direction-row.component.scss'],
    templateUrl: './layout-direction-row.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutDirectionRowComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'row';
}
