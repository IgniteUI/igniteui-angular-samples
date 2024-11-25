import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'igniteui-dockmanager/loader';


import { environment } from './environments/environment';
import { SEOService } from './app/seo.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { IgxRippleModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxIconModule, IgxLayoutModule, IgxInputGroupModule, IgxButtonModule, IgxFocusModule, IgxToggleModule, IgxIconButtonDirective } from 'igniteui-angular';
import { BrowserModule, HammerModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IgxExtrasModule } from 'igniteui-angular-extras';
import { AppComponent } from './app/app.component';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, IgxRippleModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxIconModule, IgxLayoutModule, IgxInputGroupModule, BrowserModule, IgxButtonModule, FormsModule, HammerModule, IgxExtrasModule, IgxFocusModule, IgxToggleModule, IgxIconButtonDirective),
        SEOService,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));

defineCustomElements(window);
