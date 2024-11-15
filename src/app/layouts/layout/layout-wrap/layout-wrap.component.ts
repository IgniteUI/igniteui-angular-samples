import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxFlexDirective } from 'igniteui-angular';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-wrap',
    styleUrls: ['./layout-wrap.component.scss'],
    templateUrl: './layout-wrap.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutWrapComponent {
}
