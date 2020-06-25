import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBannerModule,
	IgxCardModule,
	IgxToastModule,
	IgxNavbarModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxIconModule
 } from "igniteui-angular";
import { BannerSample3Component } from "./banner-sample-3/banner-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BannerSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBannerModule,
		IgxCardModule,
		IgxToastModule,
		IgxNavbarModule,
		IgxButtonModule,
		IgxRippleModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
