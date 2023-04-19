import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxAutocompleteModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxLayoutModule,
    IgxRippleModule, IgxGridModule, IgxAvatarModule
} from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../../../../src/app/directives/prevent-scroll.directive';
import { AppComponent } from './app.component';
import { GridCRMComponent } from './grid-crm/grid-crm.component';
import { AppRoutingModule } from './app-routing.module';
import { SEOService } from '../../../app-lob/src/app/seo.service';

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
        AppRoutingModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        HammerModule
    ],
    providers: [SEOService]
})
export class AppModule { }

