import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxToggleModule,
	IgxComboModule,
	IgxOverlayService
 } from "igniteui-angular";
import { OverlayStylingComponent } from "./overlay-styling/overlay-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		OverlayStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxToggleModule,
		IgxComboModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
