import { Component, ViewChild } from '@angular/core';
import { IgxSplitterComponent } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-collapsible-sample',
    styleUrls: ['splitter-collapsible-sample.component.scss'],
    templateUrl: 'splitter-collapsible-sample.component.html'
})
export class SplitterCollapsibleSampleComponent {
    @ViewChild('splitter') public splitterComponent: IgxSplitterComponent;

    public toggleCollapsible() {
        this.splitterComponent.collapsible = !this.splitterComponent.collapsible;
    }
}
