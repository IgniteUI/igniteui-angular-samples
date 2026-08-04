import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
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
