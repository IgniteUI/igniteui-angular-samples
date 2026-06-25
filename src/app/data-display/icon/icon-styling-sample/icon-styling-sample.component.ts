import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-styling-sample',
    styleUrls: ['./icon-styling-sample.component.scss'],
    templateUrl: './icon-styling-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconComponent]
})
export class IconStylingSampleComponent { }
