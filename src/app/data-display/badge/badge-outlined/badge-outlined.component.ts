import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IGX_STEPPER_DIRECTIVES } from 'igniteui-angular/stepper';

@Component({
  selector: 'app-badge-outlined',
  styleUrls: ['./badge-outlined.component.scss'],
  templateUrl: './badge-outlined.component.html',
  imports: [IgxAvatarComponent, IgxBadgeComponent, IGX_STEPPER_DIRECTIVES]
})

export class BadgeOutlinedComponent {
  public steps = [
    { index: 1, label: 'Orders', completed: true, active: false, flagged: false },
    { index: 2, label: 'Payment', completed: false, active: true, flagged: true },
    { index: 3, label: 'Shipping', completed: false, active: false, flagged: false }
  ];
}
