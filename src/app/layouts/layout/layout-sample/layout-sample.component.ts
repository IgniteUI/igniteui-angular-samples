import { Component, ViewEncapsulation } from '@angular/core';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-sample',
    styleUrls: ['./layout-sample.component.scss'],
    templateUrl: './layout-sample.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutSampleComponent { }
