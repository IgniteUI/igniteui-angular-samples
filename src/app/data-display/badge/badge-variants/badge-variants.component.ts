import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-variants',
    styleUrls: ['./badge-variants.component.scss'],
    templateUrl: './badge-variants.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeVariantsComponent { }
