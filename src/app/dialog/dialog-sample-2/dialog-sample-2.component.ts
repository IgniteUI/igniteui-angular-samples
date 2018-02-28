import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-dialog-sample-2",
  styleUrls: ["./dialog-sample-2.component.scss"],
  templateUrl: "./dialog-sample-2.component.html"
})
export class DialogSample2Component implements OnInit {

  constructor() { }

  public onDialogOKSelected(event) {
    event.dialog.close();
  }
  public ngOnInit() {
  }

}
