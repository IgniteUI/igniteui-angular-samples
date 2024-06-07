import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxButtonModule, IgxFocusModule, IgxIconButtonDirective, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule
} from 'igniteui-angular';
import { IgxExtrasModule } from 'igniteui-angular-extras';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocsLayoutComponent } from './index/docs-layout.component';
import { IndexComponent } from './index/index.component';
import { SEOService } from './seo.service';
@NgModule({ bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent
    ], imports: [AppRoutingModule,
        IgxRippleModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxInputGroupModule,
        BrowserModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        FormsModule,
        HammerModule,
        IgxExtrasModule,
        IgxFocusModule,
        IgxToggleModule,
        IgxIconButtonDirective], providers: [
        SEOService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
