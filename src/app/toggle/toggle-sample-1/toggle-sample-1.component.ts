import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxToggleDirective } from "igniteui-angular/main";

@Component({
  selector: "app-toggle-sample-1",
  styleUrls: ["./toggle-sample-1.component.css"],
  templateUrl: "./toggle-sample-1.component.html"
})
export class ToggleSample1Component implements OnInit {

  @ViewChild("toggleRef") public toggle: IgxToggleDirective;

  constructor() { }

  public ngOnInit() {}

  public toggleContent() {
    if (this.toggle.collapsed) {
      this.toggle.open(true);
    } else {
      this.toggle.close(true);
    }
  }
}
