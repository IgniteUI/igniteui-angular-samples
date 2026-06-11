import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent } from 'igniteui-angular/splitter';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-splitter-collapsible-sample',
    styleUrls: ['splitter-collapsible-sample.component.scss'],
    templateUrl: 'splitter-collapsible-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent, IgxButtonDirective]
})
export class SplitterCollapsibleSampleComponent {
    @ViewChild('splitter') public splitterComponent: IgxSplitterComponent;

    public toggleCollapsible() {
        this.splitterComponent.nonCollapsible = !this.splitterComponent.nonCollapsible;
    }
}
