import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxActionStripModule,
	IgxRippleModule,
	IgxButtonModule,
	IgxIconModule
 } from "igniteui-angular";
import { ActionStripStylingComponent } from "./action-strip-paragraph-styling/action-strip-paragraph-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ActionStripStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxActionStripModule,
		IgxRippleModule,
		IgxButtonModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
