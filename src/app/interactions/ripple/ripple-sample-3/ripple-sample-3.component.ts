import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-3',
    styleUrls: ['./ripple-sample-3.component.scss'],
    templateUrl: './ripple-sample-3.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class RippleSample3Component { }
