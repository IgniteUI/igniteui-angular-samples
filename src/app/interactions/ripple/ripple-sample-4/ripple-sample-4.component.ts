import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-ripple-sample-4',
    styleUrls: ['./ripple-sample-4.component.scss'],
    templateUrl: './ripple-sample-4.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class RippleSample4Component { }
