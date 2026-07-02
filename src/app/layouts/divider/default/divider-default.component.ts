import { Component } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-default',
    styleUrls: ['./divider-default.component.scss'],
    templateUrl: './divider-default.component.html',
    imports: [IgxDividerDirective]
})
export class DividerDefaultComponent {

    constructor() {
    }

}
