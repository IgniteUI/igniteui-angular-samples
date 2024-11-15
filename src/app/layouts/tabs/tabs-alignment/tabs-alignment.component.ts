import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-alignment',
    templateUrl: './tabs-alignment.component.html',
    standalone: false
})
export class TabsAlignmentComponent {
    public tabAlignment = 'start';
    public tabAlignments = [
        { label: 'start', selected: this.tabAlignment === 'start', togglable: true },
        { label: 'center', selected: this.tabAlignment === 'center', togglable: true },
        { label: 'end', selected: this.tabAlignment === 'end', togglable: true },
        { label: 'justify', selected: this.tabAlignment === 'justify', togglable: true }
    ];

    changeAlignment(event) {
        this.tabAlignment = this.tabAlignments[event.index].label;
    }
}
