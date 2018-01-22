import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public title = "Samples";
  public paths = [
    "calendar",
    "card",
    "carousel",
    "datepicker",
    "dialog",
    "grid",
    "list",
    "snackbar",
    "avatar",
    "badge",
    "form-elements",
    "buttons"
  ];
}
