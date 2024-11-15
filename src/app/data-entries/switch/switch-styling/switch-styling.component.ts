import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxSwitchComponent } from 'igniteui-angular';

@Component({
    selector: 'app-switch-styling',
    styleUrls: ['./switch-styling.component.scss'],
    templateUrl: './switch-styling.component.html',
    imports: [NgFor, IgxSwitchComponent]
})
export class SwitchStylingComponent {
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];
}
