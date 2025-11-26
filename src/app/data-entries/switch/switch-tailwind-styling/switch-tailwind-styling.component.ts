import { Component } from '@angular/core';

import { IgxSwitchComponent } from 'igniteui-angular';

@Component({
    selector: 'app-switch-tailwind-styling',
    styleUrls: ['./switch-tailwind-styling.component.scss'],
    templateUrl: './switch-tailwind-styling.component.html',
    imports: [IgxSwitchComponent]
})
export class SwitchTailwindStylingComponent {
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];
}
