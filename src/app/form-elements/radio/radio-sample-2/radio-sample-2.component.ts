import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-sample-2',
  templateUrl: './radio-sample-2.component.html',
  styleUrls: ['./radio-sample-2.component.css']
})
export class RadioSample2Component implements OnInit {

title = "Select Background";

public colors = ['Yellow', 'Red', "Green", "Transparent"];

public selectedColor: string = this.colors[3];


  constructor() { }

  ngOnInit() {
  }

}
