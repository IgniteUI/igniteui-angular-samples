import { Component } from '@angular/core';
import { SplitterType, IgxSplitterComponent, IgxSplitterPaneComponent } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-tailwind-styling-sample',
    styleUrls: ['splitter-tailwind-styling-sample.component.scss'],
    templateUrl: 'splitter-tailwind-styling-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterTailwindStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
