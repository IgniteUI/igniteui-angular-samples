import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-avatar-sample-2",
  styleUrls: ["./avatar-sample-2.component.scss"],
  templateUrl: "./avatar-sample-2.component.html"
})
export class AvatarSample2Component implements OnInit {

  public imgSource = "assets/images/men/1.jpg";

  constructor() { }

  public ngOnInit() {
  }

}
