import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
  selector: 'app-badge-outlined',
  styleUrls: ['./badge-outlined.component.scss'],
  templateUrl: './badge-outlined.component.html',
  imports: [IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent]
})

export class BadgeOutlinedComponent {
  public steps = [
    { index: 1, label: 'Orders', current: false, pending: false },
    { index: 2, label: 'Payment', current: true, pending: false },
    { index: 3, label: 'Shipping', current: false, pending: true }
  ];
}
