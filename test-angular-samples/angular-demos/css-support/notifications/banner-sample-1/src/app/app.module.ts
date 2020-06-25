import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBannerModule,
	IgxNavbarModule,
	IgxCardModule,
	IgxIconModule
 } from "igniteui-angular";
import { BannerSample1Component } from "./banner-sample-1/banner-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BannerSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBannerModule,
		IgxCardModule,
		IgxIconModule,
		IgxNavbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
