import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-dialog",
  styleUrls: ["./dialog.component.css"],
  templateUrl: "./dialog.component.html"
})
export class DialogComponent implements OnInit {

  constructor() { }

  public onDialogOKSelected(event) {
    event.dialog.close();
  }

  public signIn(event) {
    event.dialog.close();
  }

  public ngOnInit() {
  }

}
