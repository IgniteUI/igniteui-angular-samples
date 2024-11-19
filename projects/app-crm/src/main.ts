import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { SEOService } from '../../app-lob/src/app/seo.service';
import { IgxAutocompleteModule, IgxRippleModule, IgxGridModule, IgxIconModule, IgxLayoutModule, IgxAvatarModule, IgxInputGroupModule, IgxButtonModule, IgxProgressBarModule, IgxIconButtonDirective } from 'igniteui-angular';
import { BrowserModule, HammerModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../../src/app/directives/prevent-scroll.directive';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(IgxAutocompleteModule, IgxRippleModule, IgxGridModule, IgxIconModule, IgxLayoutModule, IgxAvatarModule, IgxInputGroupModule, BrowserModule, AppRoutingModule, IgxButtonModule, IgxProgressBarModule, FormsModule, IgxPreventDocumentScrollDirective, HammerModule, IgxIconButtonDirective),
        SEOService,
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
