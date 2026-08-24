import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-size',
    styleUrls: ['./button-group-size.component.scss'],
    templateUrl: './button-group-size.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupSizeComponent {
    public rippleColor = 'gray';
    public cities = ['Sofia', 'London', 'New York'];
    public sizes = ['small', 'medium', 'large'];

    public getLabel(size: string) {
        return size.charAt(0).toUpperCase() + size.slice(1);
    }

    public getSizeStyle(size: string) {
        return `var(--ig-size-${size})`;
    }
}
