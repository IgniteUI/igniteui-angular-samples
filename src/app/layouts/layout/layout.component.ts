import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-layout",
  styleUrls: ["./layout.component.scss"],
  templateUrl: "./layout.component.html"
})
export class LayoutComponent {
  constructor() { }
}
