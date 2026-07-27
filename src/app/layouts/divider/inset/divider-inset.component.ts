import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxDividerComponent } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-inset',
    styleUrls: ['./divider-inset.component.scss'],
    templateUrl: './divider-inset.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxDividerComponent]
})
export class DividerInsetComponent {

    constructor() {
    }

}
