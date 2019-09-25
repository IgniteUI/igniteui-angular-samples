import { Component, OnInit } from "@angular/core";
import { Member } from "../model/member.model";

@Component({
  selector: "app-badge-styling-sample",
  styleUrls: ["./badge-styling-sample.component.scss"],
  templateUrl: "./badge-styling-sample.component.html"
})
export class BadgeStylingSampleComponent implements OnInit {
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
