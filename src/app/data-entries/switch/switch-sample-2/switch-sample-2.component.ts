import { Component } from '@angular/core';

@Component({
    selector: 'app-switch-sample-2',
    styleUrls: ['./switch-sample-2.component.scss'],
    templateUrl: './switch-sample-2.component.html',
    standalone: false
})
export class SwitchSample2Component {
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];
}
