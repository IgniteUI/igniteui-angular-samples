import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSwitchComponent } from 'igniteui-angular';

@Component({
    selector: 'app-switch-sample-2',
    styleUrls: ['./switch-sample-2.component.scss'],
    templateUrl: './switch-sample-2.component.html',
    imports: [NgFor, IgxSwitchComponent]
})
export class SwitchSample2Component {
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];
}
