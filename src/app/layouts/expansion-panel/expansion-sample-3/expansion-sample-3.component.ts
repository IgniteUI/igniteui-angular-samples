import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelIconDirective, IgxExpansionPanelBodyComponent, IgxButtonDirective } from 'igniteui-angular';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-3',
    styleUrls: ['./expansion-sample-3.component.scss'],
    templateUrl: './expansion-sample-3.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelIconDirective, IgxExpansionPanelBodyComponent, IgxButtonDirective]
})

export class ExpansionPanelSample3Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
    public imgSource = 'https://i.ibb.co/6ZdY7cn/Untitled-design-3.png';
    public readMore = 'https://en.wikipedia.org/wiki/Golden_Retriever';
}
