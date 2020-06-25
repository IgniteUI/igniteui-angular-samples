import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCarouselModule,
	IgxIconModule,
	IgxSelectModule,
	IgxButtonModule,
	IgxCardModule
 } from "igniteui-angular";
import { CarouselAnimationsSampleComponent } from "./carousel-animations-sample/carousel-animations-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CarouselAnimationsSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCarouselModule,
		IgxIconModule,
		IgxSelectModule,
		IgxButtonModule,
		IgxCardModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
