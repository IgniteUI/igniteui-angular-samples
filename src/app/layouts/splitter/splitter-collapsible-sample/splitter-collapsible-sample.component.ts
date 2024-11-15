import { Component, ViewChild } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, IgxButtonDirective } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-collapsible-sample',
    styleUrls: ['splitter-collapsible-sample.component.scss'],
    templateUrl: 'splitter-collapsible-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent, IgxButtonDirective]
})
export class SplitterCollapsibleSampleComponent {
    @ViewChild('splitter') public splitterComponent: IgxSplitterComponent;

    public toggleCollapsible() {
        this.splitterComponent.nonCollapsible = !this.splitterComponent.nonCollapsible;
    }
}
