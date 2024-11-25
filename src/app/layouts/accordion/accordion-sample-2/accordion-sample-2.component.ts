import { Component } from '@angular/core';
import { IgxSwitchComponent, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-sample-2',
    styleUrls: ['./accordion-sample-2.component.scss'],
    templateUrl: './accordion-sample-2.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionSample2Component {
    public singleBranchExpand = false;
}
