import { Component, ViewEncapsulation } from '@angular/core';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-wrap',
    styleUrls: ['./layout-wrap.component.scss'],
    templateUrl: './layout-wrap.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutWrapComponent {
}
