import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-accordion-nested-scenario',
    styleUrls: ['./accordion-nested-scenario.component.scss'],
    templateUrl: './accordion-nested-scenario.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, IgxSwitchComponent, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionNestedScenarioComponent {
    public singleBranchExpand = false;
}
