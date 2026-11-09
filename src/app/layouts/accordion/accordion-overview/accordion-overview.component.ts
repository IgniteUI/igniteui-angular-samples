import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-overview',
    styleUrls: ['./accordion-overview.component.scss'],
    templateUrl: './accordion-overview.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionOverviewComponent {
    public singleBranchExpand = false;
}
