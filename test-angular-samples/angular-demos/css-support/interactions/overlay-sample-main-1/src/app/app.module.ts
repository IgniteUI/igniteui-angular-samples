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
import { OverlaySampleMain1Component } from "./overlay-main-1/overlay-main-sample-1.component";
import { MyDynamicCardComponent } from "./overlay-dynamic-card/overlay-dynamic-card.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		OverlaySampleMain1Component,
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
