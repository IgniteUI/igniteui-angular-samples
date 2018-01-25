import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-sample-3",
  styleUrls: ["./card-sample-3.component.css"],
  templateUrl: "./card-sample-3.component.html"
})
export class CardSample3Component implements OnInit {

  public icons = ["add", "star"];

  constructor() { }

  public ngOnInit() {
  }

}
