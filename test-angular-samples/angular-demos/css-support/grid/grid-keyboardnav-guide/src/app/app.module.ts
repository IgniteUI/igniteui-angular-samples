import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridKeyboardnavGuide } from "./grid/grid-keyboardnav-guide-sample/grid-keyboardnav-sample.component";
import { 
	IgxGridModule,
	IgxListModule,
	IgxOverlayService
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridKeyboardnavGuide
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxGridModule,
		IgxListModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
