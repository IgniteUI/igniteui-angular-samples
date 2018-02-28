import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-dialog-sample-3",
  styleUrls: ["./dialog-sample-3.component.scss"],
  templateUrl: "./dialog-sample-3.component.html"
})
export class DialogSample3Component implements OnInit {

  constructor() { }

  public signIn(event) {
    event.dialog.close();
  }
  public ngOnInit() {
  }

}
