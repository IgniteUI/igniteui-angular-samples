import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-buttons-sample-2',
    styleUrls: ['./buttons-sample-2.component.scss'],
    templateUrl: './buttons-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective]
})
export class ButtonsSample2Component { }
