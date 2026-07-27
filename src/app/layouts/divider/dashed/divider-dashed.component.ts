import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxDividerComponent } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-dashed',
    styleUrls: ['./divider-dashed.component.scss'],
    templateUrl: './divider-dashed.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxDividerComponent]
})
export class DividerDashedComponent {

    constructor() {
    }

}
