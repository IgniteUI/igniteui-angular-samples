import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-2',
    styleUrls: ['./ripple-sample-2.component.scss'],
    templateUrl: './ripple-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxRippleDirective, IgxButtonDirective]
})
export class RippleSample2Component { }
