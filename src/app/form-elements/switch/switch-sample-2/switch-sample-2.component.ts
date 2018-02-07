import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-sample-2',
  templateUrl: './switch-sample-2.component.html',
  styleUrls: ['./switch-sample-2.component.css']
})
export class SwitchSample2Component implements OnInit {
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
