import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-interaction-states',
    styleUrls: ['./button-group-interaction-states.component.scss'],
    templateUrl: './button-group-interaction-states.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupInteractionStatesComponent {
    public rippleColor = 'gray';

    public rows: { label: string; selected: boolean }[] = [
        { label: 'Selected / Off', selected: false },
        { label: 'Selected / On', selected: true }
    ];

    public states = ['idle', 'hover', 'focused'];

    public getLabel(state: string) {
        return state.charAt(0).toUpperCase() + state.slice(1);
    }
}
