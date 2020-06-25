import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCarouselModule,
	IgxListModule
 } from "igniteui-angular";
import { CarouselNoNavigationSampleComponent } from "./carousel-no-navigation-sample/carousel-no-navigation-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CarouselNoNavigationSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCarouselModule,
		IgxListModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
