import { Component, ElementRef, inject } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-states',
    styleUrls: ['./tabs-states.component.scss'],
    templateUrl: './tabs-states.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsStatesComponent {
    constructor() {
        // The tabs are display-only, so the keys are stopped before they reach the tab headers.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement
            .addEventListener('keydown', (event) => event.stopPropagation(), { capture: true });
    }
}
