import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-igx-list-demo",
  templateUrl: "./list-sample-1.component.html",
  styleUrls: ["./list-sample-1.component.css"]
})
export class ListSample1Component implements OnInit {
  @ViewChild("itemInput") public newItem: ElementRef;

  public emptyListMsg = "Please add something";
  public listItems = [
    {
      name: "Contacts",
      heading: true
    },
    {
      name: "Angelina Jolie"
    }
  ];
  public counter = 0;

  public itemOptions = [
    {
      name: "Delete",
      actions: "onItemDelete"
    }
  ];

  constructor() {}

  public ngOnInit() {}

  public addItem() {}
}
