import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-dot-sample',
    styleUrls: ['./badge-dot-sample.component.scss'],
    templateUrl: './badge-dot-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeDotSampleComponent { }
