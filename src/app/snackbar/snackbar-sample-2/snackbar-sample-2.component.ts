import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-snackbar-sample-2",
  styleUrls: ["./snackbar-sample-2.component.scss"],
  templateUrl: "./snackbar-sample-2.component.html"
})
export class SnackbarSample2Component implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  public close(element) {
    element.hide();
  }
}
