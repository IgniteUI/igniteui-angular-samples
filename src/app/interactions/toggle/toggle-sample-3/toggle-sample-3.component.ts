import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-3',
    styleUrls: ['../toggle-samples.scss'],
    templateUrl: './toggle-sample-3.component.html',
    imports: [IgxToggleActionDirective, IgxButtonDirective, IgxToggleDirective]
})
export class ToggleSample3Component { }
