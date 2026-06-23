import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-sample-2',
    styleUrls: ['./icon-sample-2.component.scss'],
    templateUrl: './icon-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconComponent]
})
export class IconSample2Component { }
