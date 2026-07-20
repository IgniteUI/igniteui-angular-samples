import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
    selector: 'app-badge-overview',
    templateUrl: './badge-overview.component.html',
    styleUrls: ['./badge-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeOverviewComponent { }
