import { Component } from '@angular/core';
import { IgxSwitchComponent, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-sample-1',
    styleUrls: ['./accordion-sample-1.component.scss'],
    templateUrl: './accordion-sample-1.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionSample1Component {
    public singleBranchExpand = false;
}
