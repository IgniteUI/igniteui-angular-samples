import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-2',
    styleUrls: ['../toggle-samples.scss'],
    templateUrl: './toggle-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective]
})
export class ToggleSample2Component { }
