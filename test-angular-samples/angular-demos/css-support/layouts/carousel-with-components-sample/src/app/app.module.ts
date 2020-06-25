import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCarouselModule,
	IgxListModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { CarouselWithComponentsSampleComponent } from "./carousel-with-components-sample/carousel-with-components-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CarouselWithComponentsSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCarouselModule,
		IgxListModule,
		IgxInputGroupModule,
		IgxIconModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
