import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxOverlayService,
	IgxCardModule
 } from "igniteui-angular";
import { OverlayPositionSample2Component } from "./overlay-positioning-2/overlay-position-sample-2.component";
import { MyDynamicCardComponent } from "./overlay-dynamic-card/overlay-dynamic-card.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		OverlayPositionSample2Component,
		MyDynamicCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxCardModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [MyDynamicCardComponent],
  schemas: []
})
export class AppModule {}
