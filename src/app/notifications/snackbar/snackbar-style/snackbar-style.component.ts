import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-snackbar-style",
  styleUrls: ["./snackbar-style.component.scss"],
  templateUrl: "./snackbar-style.component.html"
})
export class SnackbarStyleComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  public close(element) {
    element.hide();
  }
}
