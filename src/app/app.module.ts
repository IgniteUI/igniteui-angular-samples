import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxButtonModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule
} from "igniteui-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
import { MapBindingDataComponent } from './map-binding-data/map-binding-data.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent,
        MapBindingDataComponent
    ],
    imports: [
        AppRoutingModule,
        IgxRippleModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxInputGroupModule,
        BrowserModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        FormsModule
    ]
})
export class AppModule { }
