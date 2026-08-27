import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-states',
    styleUrls: ['./button-group-states.component.scss'],
    templateUrl: './button-group-states.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStatesComponent {
    public rippleColor = 'gray';

    public rows: { label: string; selected: boolean }[] = [
        { label: 'Selected / Off', selected: false },
        { label: 'Selected / On', selected: true }
    ];
}
