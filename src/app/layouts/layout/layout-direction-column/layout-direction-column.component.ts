import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-direction-column',
    styleUrls: ['./layout-direction-column.component.scss'],
    templateUrl: './layout-direction-column.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutDirectionColumnComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'column';
}
