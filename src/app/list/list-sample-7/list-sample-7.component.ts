import { Component, OnInit, ViewChild } from "@angular/core";

import { IgxToastComponent } from "igniteui-angular";

@Component({
  selector: "app-contact-list2",
  styleUrls: ["./list-sample-7.component.scss"],
  templateUrl: "./list-sample-7.component.html"
})
export class ListSample7Component implements OnInit {

  public contacts = [
    {
      isFavorite: false,
      name: "Terrance Orta",
      phone: "770-504-2217",
      photo: "assets/images/men/27.jpg"
    },
    {
      isFavorite: true,
      name: "Richard Mahoney",
      phone: "423-676-2869",
      photo: "assets/images/men/1.jpg"
    },
    {
      isFavorite: false,
      name: "Donna Price",
      phone: "859-496-2817",
      photo: "assets/images/women/50.jpg"
    },
    {
      isFavorite: false,
      name: "Lisa Landers",
      phone: "901-747-3428",
      photo: "assets/images/women/3.jpg"
    },
    {
      isFavorite: true,
      name: "Dorothy H. Spencer",
      phone: "573-394-9254",
      photo: "assets/images/women/67.jpg"
    }
  ];

  @ViewChild("toast")
  public toast: IgxToastComponent;

  @ViewChild('switchKeepItem')
  public switchKeepItem: any;

  constructor() { }

  public ngOnInit() { }

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  public leftPanPerformed(args) {
    args.keepItem = this.switchKeepItem.checked;
    this.toast.message = "Composing message for "  + this.contacts[args.item.index - 1].name;
    this.toast.show();
  }

  public rightPanPerformed(args) {
    args.keepItem = this.switchKeepItem.checked;
    this.toast.message = "Calling " + this.contacts[args.item.index - 1].name;
    this.toast.show();
  }

}
