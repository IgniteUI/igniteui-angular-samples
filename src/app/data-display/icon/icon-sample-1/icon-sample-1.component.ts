import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-sample-1',
    styleUrls: ['./icon-sample-1.component.scss'],
    templateUrl: './icon-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconComponent]
})
export class IconSample1Component { }
