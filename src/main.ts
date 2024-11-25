import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';

import { defineCustomElements } from 'igniteui-dockmanager/loader';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { IgxAutocompleteModule, IgxRippleModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxIconModule, IgxLayoutModule, IgxInputGroupModule, IgxTreeModule, IgxButtonModule, IgxButtonGroupModule, IgxSliderModule, IgxDateRangePickerModule, IgxDropDownModule } from 'igniteui-angular';
import { BrowserModule, HammerModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app/app.component';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, IgxAutocompleteModule, IgxRippleModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxIconModule, IgxLayoutModule, IgxInputGroupModule, IgxTreeModule, BrowserModule, IgxButtonModule, IgxButtonGroupModule, FormsModule, HammerModule, NgbModule, IgxSliderModule, IgxDateRangePickerModule, IgxDropDownModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch((err) => console.log(err));

defineCustomElements(window);
