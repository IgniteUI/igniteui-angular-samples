import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  selector: "app-navbar",
  styleUrls: ["./navbar-sample-3.component.scss"],
  templateUrl: "./navbar-sample-3.component.html"
})
export class NavbarSample3Component {

  constructor(private _location: Location) { }

  public ngOnInit() {  }

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }
}
