import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

@Component({
    selector: 'app-accordion-programmatic-expansion',
    styleUrls: ['./accordion-programmatic-expansion.component.scss'],
    templateUrl: './accordion-programmatic-expansion.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxRippleDirective, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionProgrammaticExpansionComponent {
}
