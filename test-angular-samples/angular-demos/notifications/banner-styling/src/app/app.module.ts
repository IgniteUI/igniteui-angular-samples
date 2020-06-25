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
	IgxIconModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { BannerStylingComponent } from "./banner-styling/banner-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BannerStylingComponent
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
		IgxIconModule,
		IgxButtonModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
