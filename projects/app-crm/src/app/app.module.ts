import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxAutocompleteModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxLayoutModule,
    IgxRippleModule, IgxGridModule, IgxAvatarModule
} from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../../../app-lob/src/app/directives/prevent-scroll.directive';
import { AppComponent } from './app.component';
import { GridCRMComponent } from './grid-crm/grid-crm.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        GridCRMComponent
    ],
    imports: [
        IgxAutocompleteModule,
        IgxRippleModule,
        IgxGridModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxAvatarModule,
        IgxInputGroupModule,
        BrowserModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        HammerModule
    ]
})
export class AppModule { }

