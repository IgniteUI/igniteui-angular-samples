import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-interaction-states',
    styleUrls: ['./button-interaction-states.component.scss'],
    templateUrl: './button-interaction-states.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonInteractionStatesComponent {
    public states = [
        { label: 'Idle', value: 'idle' },
        { label: 'Hover', value: 'state-hover' },
        { label: 'Focused', value: 'state-focused' },
        { label: 'Focused & Hover', value: 'state-focused-hover' }
    ];
}
