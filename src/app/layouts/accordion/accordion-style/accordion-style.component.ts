import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-style',
    styleUrls: ['./accordion-style.component.scss'],
    templateUrl: './accordion-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionStyleComponent {
    public singleBranchExpand = false;
}
