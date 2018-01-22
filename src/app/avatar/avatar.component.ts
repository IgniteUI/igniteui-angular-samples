import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-avatar",
  styleUrls: ["./avatar.component.css"],
  templateUrl: "./avatar.component.html"
})
export class AvatarComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
