import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxAutocompleteModule, IgxLayoutModule
} from 'igniteui-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { GridsCrmModule } from './grid-crm/grid-crm.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        IgxAutocompleteModule,
        IgxLayoutModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HammerModule,
        GridsCrmModule
    ],
    providers: []
})
export class AppModule { }

