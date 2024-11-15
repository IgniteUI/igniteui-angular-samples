import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent } from 'igniteui-angular';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-1',
    styleUrls: ['./expansion-sample-1.component.scss'],
    templateUrl: './expansion-sample-1.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class ExpansionPanelSample1Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
}
