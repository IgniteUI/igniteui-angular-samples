import { enableProdMode, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, Routes, withPreloading } from '@angular/router';
import { BrowserModule, HammerModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { environment } from './environments/environment';
import { SEOService } from '../../app-lob/src/app/seo.service';
import {
    IgxAutocompleteModule,
    IgxRippleModule,
    IgxGridModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxAvatarModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxProgressBarModule,
    IgxIconButtonDirective
} from 'igniteui-angular';

import { IgxPreventDocumentScrollDirective } from '../../../src/app/directives/prevent-scroll.directive';
import { AppComponent } from './app/app.component';
import { GridCRMComponent } from './app/grid-crm/grid-crm.component';

if (environment.production) {
  enableProdMode();
}

const gridCrmRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: GridCRMComponent
    },
    {
        path: 'grid-crm', component: GridCRMComponent
    }
];

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(IgxAutocompleteModule, IgxRippleModule, IgxGridModule, IgxIconModule, IgxLayoutModule, IgxAvatarModule, IgxInputGroupModule, BrowserModule, IgxButtonModule, IgxProgressBarModule, FormsModule, IgxPreventDocumentScrollDirective, HammerModule, IgxIconButtonDirective),
        provideRouter(gridCrmRoutes, withPreloading(PreloadAllModules)),
        SEOService,
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
