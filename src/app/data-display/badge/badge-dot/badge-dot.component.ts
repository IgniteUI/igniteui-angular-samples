import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-dot',
    styleUrls: ['./badge-dot.component.scss'],
    templateUrl: './badge-dot.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeDotComponent { }
