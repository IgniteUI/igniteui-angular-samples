import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-dashed',
    styleUrls: ['./divider-dashed.component.scss'],
    templateUrl: './divider-dashed.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxDividerDirective]
})
export class DividerDashedComponent {

    constructor() {
    }

}
