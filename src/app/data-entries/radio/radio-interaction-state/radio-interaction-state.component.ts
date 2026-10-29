import { Component, ElementRef, afterNextRender, inject } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-interaction-state',
    templateUrl: './radio-interaction-state.component.html',
    styleUrls: ['./radio-interaction-state.component.scss'],
    imports: [IgxRadioComponent]
})
export class RadioInteractionStateComponent {
    constructor() {
        const element: HTMLElement = inject(ElementRef).nativeElement;

        // A keyup is what turns on a radio's keyboard focus ring, so dispatching one
        // shows the focused state without moving focus to the radio.
        afterNextRender(() => {
            element.querySelectorAll('.focused, .focused-hover').forEach((radio) => {
                radio.dispatchEvent(new KeyboardEvent('keyup'));
            });
        });
    }
}
