import { Component } from '@angular/core';
import { IgxSwitchComponent, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-style',
    styleUrls: ['./accordion-style.component.scss'],
    templateUrl: './accordion-style.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionStyleComponent {
    public singleBranchExpand = false;
}
