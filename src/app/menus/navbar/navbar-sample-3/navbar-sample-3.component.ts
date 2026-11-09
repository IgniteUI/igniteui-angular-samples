import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';

@Component({
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    selector: 'app-navbar',
    styleUrls: ['./navbar-sample-3.component.scss'],
    templateUrl: './navbar-sample-3.component.html',
    imports: [IgxNavbarComponent]
})
export class NavbarSample3Component {
  private _location = inject(Location);


  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }
}
