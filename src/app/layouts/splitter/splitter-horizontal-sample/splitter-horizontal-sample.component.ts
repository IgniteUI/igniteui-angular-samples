import { Component } from '@angular/core';
import { SplitterType, IgxSplitterComponent, IgxSplitterPaneComponent } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-horizontal-sample',
    styleUrls: ['splitter-horizontal-sample.component.scss'],
    templateUrl: 'splitter-horizontal-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterHorizontalSampleComponent {
    public type = SplitterType.Horizontal;
}
