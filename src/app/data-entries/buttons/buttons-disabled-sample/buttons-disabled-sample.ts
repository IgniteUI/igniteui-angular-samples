import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-buttons-disabled-sample',
    styleUrls: ['./buttons-disabled-sample.scss'],
    templateUrl: './buttons-disabled-sample.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective]
})
export class ButtonsDisabledComponent { }
