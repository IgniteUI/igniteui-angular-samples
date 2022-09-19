import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-igx-list-demo',
  styleUrls: ['./list-sample-1.component.scss'],
  templateUrl: './list-sample-1.component.html'
})
export class ListSample1Component {
  @ViewChild('itemInput') public newItem: ElementRef;

  public emptyListMsg = 'Please add something';
  public listItems = [
    {
      heading: true,
      name: 'Contacts'
    },
    {
      name: 'Angelina Jolie'
    }
  ];
  public counter = 0;

  public itemOptions = [
    {
      actions: 'onItemDelete',
      name: 'Delete'
    }
  ];

  constructor() {}

  public addItem() {}
}
