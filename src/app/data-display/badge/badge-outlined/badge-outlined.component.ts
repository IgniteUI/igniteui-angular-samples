import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';

@Component({
  selector: 'app-badge-outlined',
  styleUrls: ['./badge-outlined.component.scss'],
  templateUrl: './badge-outlined.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IgxAvatarComponent, IgxBadgeComponent]
})

export class BadgeOutlinedComponent { }
