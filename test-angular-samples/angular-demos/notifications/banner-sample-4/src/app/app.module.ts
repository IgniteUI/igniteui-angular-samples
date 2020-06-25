import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBannerModule,
	IgxToastModule,
	IgxAvatarModule,
	IgxButtonModule,
	IgxInputGroupModule,
	IgxNavbarModule,
	IgxRippleModule,
	IgxIconModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { BannerSample4Component } from "./banner-sample-4/banner-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BannerSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBannerModule,
		IgxAvatarModule,
		IgxRippleModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxButtonModule,
		IgxNavbarModule,
		IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
