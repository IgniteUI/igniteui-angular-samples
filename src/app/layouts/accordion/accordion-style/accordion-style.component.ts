import { Component } from '@angular/core';
import { IgxAccordionComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-accordion-style',
    styleUrls: ['./accordion-style.component.scss'],
    templateUrl: './accordion-style.component.html',
    imports: [IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionStyleComponent {
    public singleBranchExpand = false;
}
