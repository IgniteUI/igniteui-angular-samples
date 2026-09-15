import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

@Component({
    selector: 'app-accordion-styling',
    styleUrls: ['./accordion-styling.component.scss'],
    templateUrl: './accordion-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionStylingComponent {}
