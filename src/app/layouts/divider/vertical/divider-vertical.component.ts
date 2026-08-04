import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-vertical',
    styleUrls: ['./divider-vertical.component.scss'],
    templateUrl: './divider-vertical.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxDividerDirective]
})
export class DividerVerticalComponent {

    constructor() {
    }

}
