import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxOverlayService,
	IgxSwitchModule,
	IgxCardModule
 } from "igniteui-angular";
import { OverlayScrollSample1Component } from "./overlay-scroll-1/overlay-scroll-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		OverlayScrollSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxSwitchModule,
		IgxCardModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
