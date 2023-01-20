import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxAutocompleteModule, 
    IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule
} from 'igniteui-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { GridsCrmModule } from './grid-crm/grid-crm.module';
import { HomeComponent } from './home/home.component';
import { DocsLayoutComponent } from './index/docs-layout.component';
import { IndexComponent } from './index/index.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent
    ],
    imports: [
        IgxButtonModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
        IgxRippleModule,
        IgxAutocompleteModule,
        IgxLayoutModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        HammerModule,
        GridsCrmModule
    ],
    providers: []
})
export class AppModule { }

