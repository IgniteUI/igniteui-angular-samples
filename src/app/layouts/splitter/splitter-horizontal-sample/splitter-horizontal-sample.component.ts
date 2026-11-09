import { Component } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, SplitterType } from 'igniteui-angular/splitter';

@Component({
    selector: 'app-splitter-horizontal-sample',
    styleUrls: ['splitter-horizontal-sample.component.scss'],
    templateUrl: 'splitter-horizontal-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterHorizontalSampleComponent {
    public type = SplitterType.Horizontal;
}
