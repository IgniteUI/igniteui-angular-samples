import { Component } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, SplitterType } from 'igniteui-angular/splitter';

@Component({
    selector: 'app-splitter-styling-sample',
    styleUrls: ['splitter-styling-sample.component.scss'],
    templateUrl: 'splitter-styling-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
