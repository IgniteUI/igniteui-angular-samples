import { Component } from '@angular/core';
import { SplitterType } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-styling-sample',
    styleUrls: ['splitter-styling-sample.component.scss'],
    templateUrl: 'splitter-styling-sample.component.html',
    standalone: false
})
export class SplitterStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
