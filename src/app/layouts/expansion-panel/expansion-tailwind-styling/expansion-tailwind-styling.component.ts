import {Component} from '@angular/core';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-tailwind-styling',
    styleUrls: ['./expansion-tailwind-styling.component.scss'],
    templateUrl: './expansion-tailwind-styling.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxButtonDirective]
})

export class ExpansionPanelTailwindStylingComponent {
    public imgSource = 'https://i.ibb.co/6ZdY7cn/Untitled-design-3.png';
    public readMore = 'https://en.wikipedia.org/wiki/Golden_Retriever';
}
