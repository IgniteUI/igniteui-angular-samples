import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxSliderModule
 } from "igniteui-angular";
import { SliderSecondaryTicksMirrorComponent } from "./slider-secondary-ticks-mirror/slider-secondary-ticks-mirror.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SliderSecondaryTicksMirrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxSliderModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
