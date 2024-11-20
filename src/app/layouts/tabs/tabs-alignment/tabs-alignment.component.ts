import { Component } from '@angular/core';
import { IgxButtonGroupComponent, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tabs-alignment',
    templateUrl: './tabs-alignment.component.html',
    imports: [IgxButtonGroupComponent, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
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
