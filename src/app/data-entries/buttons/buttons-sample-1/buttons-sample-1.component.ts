
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-buttons-sample-1',
    styleUrls: ['./buttons-sample-1.component.scss'],
    templateUrl: './buttons-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class ButtonsSample1Component { }
