import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxDividerModule,
	IgxRippleModule,
	IgxChipsModule,
	IgxSliderModule,
	IgxListModule,
	IgxExpansionPanelModule
 } from "igniteui-angular";
import { CardSample4Component } from "./card-sample-4/card-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CardSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxButtonModule,
		IgxIconModule,
		IgxCardModule,
		IgxDividerModule,
		IgxRippleModule,
		IgxChipsModule,
		IgxListModule,
		IgxExpansionPanelModule,
		IgxSliderModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
