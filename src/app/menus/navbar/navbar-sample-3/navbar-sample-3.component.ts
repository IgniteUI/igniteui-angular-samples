import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { IgxNavbarComponent } from 'igniteui-angular';

@Component({
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    selector: 'app-navbar',
    styleUrls: ['./navbar-sample-3.component.scss'],
    templateUrl: './navbar-sample-3.component.html',
    imports: [IgxNavbarComponent]
})
export class NavbarSample3Component {

  constructor(private _location: Location) { }

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }
}
