import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBannerModule,
	IgxNavbarModule,
	IgxCardModule,
	IgxIconModule,
	IgxToastModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { BannerAdvancedSampleComponent } from "./banner-advanced-sample/banner-advanced-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BannerAdvancedSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBannerModule,
		IgxCardModule,
		IgxIconModule,
		IgxNavbarModule,
		IgxToastModule,
		IgxButtonModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
