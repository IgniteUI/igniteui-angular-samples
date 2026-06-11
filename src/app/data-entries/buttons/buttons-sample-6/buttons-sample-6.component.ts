import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-buttons-sample-6',
    styleUrls: ['./buttons-sample-6.component.scss'],
    templateUrl: './buttons-sample-6.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonsSample6Component { }
