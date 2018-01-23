import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-layout",
  styleUrls: ["./layout.component.css"],
  templateUrl: "./layout.component.html"
})
export class LayoutComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
