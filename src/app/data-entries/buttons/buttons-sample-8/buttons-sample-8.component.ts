import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-buttons-sample-8',
    styleUrls: ['./buttons-sample-8.component.scss'],
    templateUrl: './buttons-sample-8.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective]
})
export class ButtonsSample8Component { }
