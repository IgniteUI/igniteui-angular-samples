import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import { CarouselComponent } from "./carousel/carousel.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCarouselModule,
		IgxSliderModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
