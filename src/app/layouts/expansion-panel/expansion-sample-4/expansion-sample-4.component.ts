import { Component, QueryList, ViewChildren } from '@angular/core';
import { IExpansionPanelEventArgs, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-4',
    styleUrls: ['./expansion-sample-4.component.scss'],
    templateUrl: './expansion-sample-4.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class ExpansionPanelSample4Component {

    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;
    public collapsed(index: number) {
         if (!this.accordion) {
            return true;
         }
         return this.accordion.toArray()[index] && this.accordion.toArray()[index].collapsed;
     }

    public onInteraction(event: IExpansionPanelEventArgs) {
        const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.id !==  event.owner.id) {
                expandedPanel.collapse();
            }
        });
    }
}
