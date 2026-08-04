import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-sample',
    styleUrls: ['./layout-sample.component.scss'],
    templateUrl: './layout-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutSampleComponent { }
