import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-badge",
  styleUrls: ["./badge.component.css"],
  templateUrl: "./badge.component.html"
})
export class BadgeComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
