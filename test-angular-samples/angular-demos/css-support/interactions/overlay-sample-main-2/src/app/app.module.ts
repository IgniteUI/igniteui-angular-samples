import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxOverlayService,
	IgxSwitchModule,
	IgxCardModule,
	IgxButtonDirective,
	IgxDividerModule,
	IgxButtonModule
 } from "igniteui-angular";
import { OverlaySampleMain2Component } from "./interactions/overlay/overlay-main-2/overlay-main-sample-2.component";
import { CardSample1Component } from "./layouts/card/card-sample-1/card-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		OverlaySampleMain2Component,
		CardSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxCardModule,
		IgxDividerModule,
		IgxButtonModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [CardSample1Component],
  schemas: []
})
export class AppModule {}
