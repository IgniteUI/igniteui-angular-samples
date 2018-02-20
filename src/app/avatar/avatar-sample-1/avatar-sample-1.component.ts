import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-avatar-sample-1",
  styleUrls: ["./avatar-sample-1.component.css"],
  templateUrl: "./avatar-sample-1.component.html"
})
export class AvatarSample1Component implements OnInit {

  public bgColor = "#0375be";
  public color = "black";
  public isCircular = true;

  constructor() { }

  public ngOnInit() {
  }

}
