import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxToggleDirective } from "igniteui-angular";

@Component({
  selector: "app-toggle-sample-1",
  styleUrls: ["./toggle-sample-1.component.scss"],
  templateUrl: "./toggle-sample-1.component.html"
})
export class ToggleSample1Component implements OnInit {

  @ViewChild("toggleRef") public toggle: IgxToggleDirective;

  constructor() { }

  public ngOnInit() {}

  public toggleContent() {
    if (this.toggle.collapsed) {
      this.toggle.open();
    } else {
      this.toggle.close();
    }
  }
}
