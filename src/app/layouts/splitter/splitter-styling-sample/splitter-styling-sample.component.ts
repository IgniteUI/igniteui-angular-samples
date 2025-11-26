import { Component } from '@angular/core';
import { SplitterType, IgxSplitterComponent, IgxSplitterPaneComponent } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-styling-sample',
    styleUrls: ['splitter-styling-sample.component.scss'],
    templateUrl: 'splitter-styling-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
