import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxDividerComponent } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-default',
    styleUrls: ['./divider-default.component.scss'],
    templateUrl: './divider-default.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxDividerComponent]
})
export class DividerDefaultComponent {

    constructor() {
    }

}
