import { Component, OnInit } from "@angular/core";
import { Member } from "../model/member.model";

@Component({
  selector: "app-badge-sample-2",
  styleUrls: ["./badge-sample-2.component.css"],
  templateUrl: "./badge-sample-2.component.html"
})
export class BadgeSample2Component implements OnInit {
  public members: Member[] = [
    new Member("Terrance Orta", "online"),
    new Member("Donna Price", "online"),
    new Member("Lisa Landers", "away"),
    new Member("Dorothy H. Spencer", "offline")
  ];
  constructor() { }

  public ngOnInit() {
  }
}
