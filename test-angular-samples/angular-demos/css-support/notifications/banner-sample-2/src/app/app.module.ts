import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBannerModule,
	IgxNavbarModule,
	IgxCardModule,
	IgxToastModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxIconModule
 } from "igniteui-angular";
import { BannerSample2Component } from "./banner-sample-2/banner-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BannerSample2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBannerModule,
		IgxCardModule,
		IgxNavbarModule,
		IgxToastModule,
		IgxButtonModule,
		IgxRippleModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
