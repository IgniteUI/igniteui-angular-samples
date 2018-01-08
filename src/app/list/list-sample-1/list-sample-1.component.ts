import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-igx-list-demo',
  templateUrl: './list-sample-1.component.html',
  styleUrls: ['./list-sample-1.component.css']
})
export class ListSample1Component implements OnInit {
  @ViewChild('itemInput') newItem: ElementRef;

  emptyListMsg = 'Please add something';
  listItems = [
    {
      name: 'Contacts',
      heading: true
    },
    {
      name: 'Angelina Jolie'
    }
  ];
  counter = 0;

  itemOptions = [
    {
      name: 'Delete',
      actions: 'onItemDelete'
    }
  ];

  constructor() {}

  ngOnInit() {}

  addItem() {}
}
