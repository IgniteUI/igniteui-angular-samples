import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
  selector: 'app-switch-styling',
  styleUrls: ['./switch-styling.component.scss'],
  templateUrl: './switch-styling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IgxSwitchComponent]
})
export class SwitchStylingComponent {
  public settings = [
    { name: 'WiFi', state: false },
    { name: 'Bluetooth', state: true },
    { name: 'Device visibility', state: false }
  ];
}
