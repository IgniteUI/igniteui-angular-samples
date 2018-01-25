import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sample-3',
  templateUrl: './card-sample-3.component.html',
  styleUrls: ['./card-sample-3.component.css']
})
export class CardSample3Component implements OnInit {

  public icons = ['add', 'star'];

  constructor() { }

  ngOnInit() {
  }

}
