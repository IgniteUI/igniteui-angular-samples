import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

@Component({
    selector: 'app-accordion-tailwind-styling',
    styleUrls: ['./accordion-tailwind-styling.component.scss'],
    templateUrl: './accordion-tailwind-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionTailwindStylingComponent {}
