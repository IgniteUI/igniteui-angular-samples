import { Component } from '@angular/core';

@Component({
    selector: 'app-switch-styling',
    styleUrls: ['./switch-styling.component.scss'],
    templateUrl: './switch-styling.component.html',
    standalone: false
})
export class SwitchStylingComponent {
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];
}
