import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxFlexDirective } from 'igniteui-angular';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-sample',
    styleUrls: ['./layout-sample.component.scss'],
    templateUrl: './layout-sample.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutSampleComponent { }
