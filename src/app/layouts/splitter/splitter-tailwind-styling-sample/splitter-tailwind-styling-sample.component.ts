import { Component } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, SplitterType } from 'igniteui-angular/splitter';

@Component({
    selector: 'app-splitter-tailwind-styling-sample',
    styleUrls: ['splitter-tailwind-styling-sample.component.scss'],
    templateUrl: 'splitter-tailwind-styling-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterTailwindStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
